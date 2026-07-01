import React, { useEffect, useState } from "react";
import "./HomeComponent.css";
import RoomList from "../components/RoomList";
import CreateRoomModal from "../components/CreateRoomModal";

import banner from "../assets/banner_long.png";

import nemo from "../assets/profile/nemo.png";
import semo from "../assets/profile/semo.png";
import star from "../assets/profile/star.png";
import dong from "../assets/profile/dong.png";

const roomIcons = {
  star: star,
  nemo: nemo,
  semo: semo,
  dong: dong,
};

import { FaRandom } from "react-icons/fa";

function HomeComponent() {
  const [nickname, setNickname] = useState("");
  const [secretCode, setSecretCode] = useState("");
  const [isCreateRoomModalOpen, setIsCreateRoomModalOpen] = useState(false);

  // 지금은 서버가 없으니까 임시 공개 방 데이터
  const [publicRooms, setPublicRooms] = useState([]);

  // 닉네임 입력
  const handleNicknameChange = (event) => {
    setNickname(event.target.value);
  };

  // 비밀방 코드 입력
  const handleSecretCodeChange = (event) => {
    setSecretCode(event.target.value);
  };

  // 닉네임 검사
  const checkNickname = () => {
    if (nickname.trim() === "") {
      alert("닉네임을 먼저 입력해주세요.");
      return false;
    }

    return true;
  };

  // 공개 방 입장
  const joinPublicRoom = (room) => {
    if (!checkNickname()) return;

    if (room.players >= room.maxPlayers) {
      alert("이미 가득 찬 방입니다.");
      return;
    }

    alert(`${room.title}에 입장합니다.\n닉네임: ${nickname}`);

    // 나중에 대기방 화면 이동
    // 예: onJoinRoom(room.id, nickname);
  };

  // 비밀방 입장
  const joinSecretRoom = () => {
    if (!checkNickname()) return;

    if (secretCode.trim() === "") {
      alert("비밀방 암호를 입력해주세요.");
      return;
    }

    alert(`비밀방에 입장합니다.\n암호: ${secretCode}\n닉네임: ${nickname}`);

    // 나중에 비밀방 검증 또는 대기방 이동
    // 예: onJoinSecretRoom(secretCode, nickname);
  };

  // 새 방 만들기
  const createRoom = () => {
    if (!checkNickname()) return;

    setIsCreateRoomModalOpen(true);
  };

  const handleCreateRoomSubmit = (roomSetting) => {
    createRoomToPHP(roomSetting);
  };

  // 랜덤 방 참여
  const joinRandom = () => {
    if (!checkNickname()) return;

    const availableRooms = publicRooms.filter((room) => {
      return room.players < room.maxPlayers;
    });

    if (availableRooms.length === 0) {
      alert("입장 가능한 공개 방이 없습니다.");
      return;
    }

    const randomIndex = Math.floor(Math.random() * availableRooms.length);
    const selectedRoom = availableRooms[randomIndex];

    alert(`${selectedRoom.title}에 랜덤 입장합니다.\n닉네임: ${nickname}`);

    // 나중에 대기방 화면 이동
    // 예: onJoinRoom(selectedRoom.id, nickname);
  };

  const createRoomToPHP = async (roomSetting) => {
    try {
      const response = await fetch(
        "https://testham.dothome.co.kr/last-chameleon/backend/api/rooms.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            action: "createRoom",
            nickname: nickname,

            title: roomSetting.title,
            type: roomSetting.type,
            password: roomSetting.password,
            iconName: "star",
            maxPlayers: roomSetting.maxPlayers,
            mapType: roomSetting.mapType,
          }),
        }
      );

      const text = await response.text();

      console.log("응답 상태:", response.status);
      console.log("PHP 원본 응답:", text);

      let result;

      try {
        result = JSON.parse(text);
      } catch (error) {
        console.error("JSON 변환 실패:", error);
        alert("PHP 응답이 JSON 형식이 아닙니다. 콘솔을 확인해주세요.");
        return;
      }

      console.log("PHP JSON 응답:", result);

      if (!result.success) {
        alert(result.message);
        return;
      }

      alert(result.message);

      setIsCreateRoomModalOpen(false);

      console.log("생성된 방:", result.room);

      getPublicRoomsFromPHP();

      // 다음 단계에서 게임방 이동 처리
      // navigate("/game", {
      //   state: {
      //     nickname: nickname,
      //     room: result.room,
      //   },
      // });
    } catch (error) {
      console.error("방 생성 통신 오류:", error);
      alert("서버 통신 중 오류가 발생했습니다. 콘솔을 확인해주세요.");
    }
  };
  
  const getPublicRoomsFromPHP = async () => {
    try {
      const response = await fetch(
        "https://testham.dothome.co.kr/last-chameleon/backend/api/rooms.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            action: "getPublicRooms",
          }),
        }
      );

      const result = await response.json();

      console.log("공개방 목록 응답:", result);

      if (!result.success) {
        alert(result.message);
        return;
      }

      const convertedRooms = result.rooms.map((room) => {
        return {
          id: Number(room.id),
          title: room.title,
          roomCode: room.room_code,
          players: Number(room.current_players),
          maxPlayers: Number(room.max_players),
          status: room.status === "waiting" ? "대기중" : room.status,
          iconName: room.icon_name,
          icon: roomIcons[room.icon_name] || star,
          mapType: room.map_type,
          type: room.room_type,
        };
      });

      setPublicRooms(convertedRooms);
    } catch (error) {
      console.error("공개방 목록 불러오기 오류:", error);
      alert("공개방 목록을 불러오지 못했습니다.");
    }
  };

  useEffect(() => {
    getPublicRoomsFromPHP();
  }, []);

  return (
    <div className="home-page">
      {/* 상단 메인 배너 */}
      <section className="home-hero">
        <img
          className="home-hero-image"
          src={banner}
          alt="막차 카멜레온 메인 배너"
        />

        <div className="home-hero-fallback">
          <h1>막차 카멜레온!</h1>
          <p>
            도형으로 위장하고, 술레의 감시를 피해
            <br />
            5층 건물 속에서 살아남으세요!
          </p>
        </div>
      </section>

      {/* 배너 아래 전체 콘텐츠 */}
      <main className="home-content">
        <div className="home-content-top">
          {/* 1줄: 닉네임 + 주요 버튼 */}
          <div className="top-control-row">
            {/* 닉네임 입력 */}
            <section className="nickname-box">
              <label htmlFor="nickname">닉네임</label>

              <div className="nickname-input-wrap">
                <input
                  id="nickname"
                  type="text"
                  placeholder="👤 닉네임을 입력하세요"
                  value={nickname}
                  onChange={handleNicknameChange}
                  maxLength={10}
                />

                <span className="nickname-count">{nickname.length} / 10</span>
              </div>
            </section>

            {/* 새 방 만들기 / 랜덤 입장 */}
            <section className="room-actions">
              <button
                className="create-room-button"
                type="button"
                onClick={createRoom}
              >
                🏠 새 방 만들기
              </button>

              <button
                className="random-room-button"
                type="button"
                onClick={joinRandom}
              >
                <FaRandom /> <p>랜덤 입장</p>
              </button>
            </section>
          </div>
        </div>

        {/* 2줄: 비밀방 + 공개방 목록 */}
        <div className="room-section-row">
          {/* 비밀방 입장 */}
          <section className="secret-room-section">
            <h2>🔒 비밀방 입장</h2>

            <div className="secret-room-input">
              <input
                type="text"
                placeholder="🗝️ 비밀방 암호 입력"
                value={secretCode}
                onChange={handleSecretCodeChange}
              />

              <button type="button" onClick={joinSecretRoom}>
                입장하기 →
              </button>
            </div>
          </section>

          {/* 공개방 목록 */}
          <section className="public-room-section">
            <h2>🌐 공개 방 목록</h2>

            <div className="room-list">
              <RoomList
                publicRooms={publicRooms}
                onJoinRoom={joinPublicRoom}
              />
            </div>
          </section>
        </div>
      </main>

    {isCreateRoomModalOpen && (
      <CreateRoomModal
        nickname={nickname}
        onClose={() => setIsCreateRoomModalOpen(false)}
        onCreateRoom={handleCreateRoomSubmit}
      />
    )}
    </div>
  );
}

export default HomeComponent;