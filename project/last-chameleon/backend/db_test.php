<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

header("Content-Type: application/json; charset=UTF-8");

require_once "./db.php";

echo json_encode([
    "success" => true,
    "message" => "DB 연결 성공"
], JSON_UNESCAPED_UNICODE);
?>