<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    exit;
}

require_once "./db.php";

$rawData = file_get_contents("php://input");
$data = json_decode($rawData, true);

if (!is_array($data)) {
    $data = [];
}

$action = $data["action"] ?? "";

if ($action === "createRoom") {
    createRoom($pdo, $data);
    exit;
}

if ($action === "getPublicRooms") {
    getPublicRooms($pdo);
    exit;
}

echo json_encode([
    "success" => false,
    "message" => "잘못된 action입니다.",
    "method" => $_SERVER["REQUEST_METHOD"]
], JSON_UNESCAPED_UNICODE);
exit;

function createRoom($pdo, $data) {
    $nickname = trim($data["nickname"] ?? "");
    $title = trim($data["title"] ?? "");
    $roomType = $data["type"] ?? "public";
    $password = $data["password"] ?? "";
    $iconName = $data["iconName"] ?? "star";
    $mapType = $data["mapType"] ?? "building";
    $maxPlayers = intval($data["maxPlayers"] ?? 2);

    if ($nickname === "") {
        echo json_encode([
            "success" => false,
            "message" => "닉네임이 없습니다."
        ]);
        return;
    }

    if ($title === "") {
        echo json_encode([
            "success" => false,
            "message" => "방 제목이 없습니다."
        ]);
        return;
    }

    if ($maxPlayers < 2 || $maxPlayers > 8) {
        echo json_encode([
            "success" => false,
            "message" => "최대 인원은 2명 이상 8명 이하만 가능합니다."
        ]);
        return;
    }

    if ($roomType !== "public" && $roomType !== "private") {
        echo json_encode([
            "success" => false,
            "message" => "방 종류가 올바르지 않습니다."
        ]);
        return;
    }

    if ($roomType === "private" && trim($password) === "") {
        echo json_encode([
            "success" => false,
            "message" => "비밀방은 비밀번호가 필요합니다."
        ]);
        return;
    }

    // 방 코드 생성
    $roomCode = "ROOM" . rand(1000, 9999);

    // 비밀방이 아니면 비밀번호는 NULL
    $savePassword = null;

    if ($roomType === "private") {
        // 지금은 테스트라 평문 저장도 가능하지만, 원래는 password_hash 추천
        $savePassword = password_hash($password, PASSWORD_DEFAULT);
    }

    try {
        $pdo->beginTransaction();

        // 1. 방 생성
        $sql = "
            INSERT INTO last_chameleon_rooms
            (
                title,
                room_code,
                room_type,
                password,
                icon_name,
                map_type,
                max_players,
                current_players,
                status
            )
            VALUES
            (
                :title,
                :room_code,
                :room_type,
                :password,
                :icon_name,
                :map_type,
                :max_players,
                1,
                'waiting'
            )
        ";

        $stmt = $pdo->prepare($sql);
        $stmt->execute([
            ":title" => $title,
            ":room_code" => $roomCode,
            ":room_type" => $roomType,
            ":password" => $savePassword,
            ":icon_name" => $iconName,
            ":map_type" => $mapType,
            ":max_players" => $maxPlayers
        ]);

        $roomId = $pdo->lastInsertId();

        // 2. 방 만든 사람을 플레이어로 등록
        $playerSql = "
            INSERT INTO last_chameleon_room_players
            (
                room_id,
                nickname,
                player_role,
                game_role,
                is_ready
            )
            VALUES
            (
                :room_id,
                :nickname,
                'host',
                'none',
                0
            )
        ";

        $playerStmt = $pdo->prepare($playerSql);
        $playerStmt->execute([
            ":room_id" => $roomId,
            ":nickname" => $nickname
        ]);

        $pdo->commit();

        echo json_encode([
            "success" => true,
            "message" => "방이 생성되었습니다.",
            "room" => [
                "id" => $roomId,
                "title" => $title,
                "roomCode" => $roomCode,
                "type" => $roomType,
                "iconName" => $iconName,
                "mapType" => $mapType,
                "players" => 1,
                "maxPlayers" => $maxPlayers,
                "status" => "대기중"
            ]
        ]);

    } catch (PDOException $e) {
        $pdo->rollBack();

        echo json_encode([
            "success" => false,
            "message" => "방 생성 중 오류가 발생했습니다.",
            "error" => $e->getMessage()
        ]);
    }
}

function getPublicRooms($pdo) {
    try {
        $sql = "
            SELECT
                id,
                title,
                room_code,
                room_type,
                icon_name,
                map_type,
                max_players,
                current_players,
                status
            FROM last_chameleon_rooms
            WHERE room_type = 'public'
            AND status = 'waiting'
            ORDER BY id DESC
        ";

        $stmt = $pdo->prepare($sql);
        $stmt->execute();

        $rooms = $stmt->fetchAll(PDO::FETCH_ASSOC);

        echo json_encode([
            "success" => true,
            "rooms" => $rooms
        ], JSON_UNESCAPED_UNICODE);

    } catch (PDOException $e) {
        echo json_encode([
            "success" => false,
            "message" => "공개방 목록 조회 중 오류가 발생했습니다.",
            "error" => $e->getMessage()
        ], JSON_UNESCAPED_UNICODE);
    }
}

?>