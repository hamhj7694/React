import React, { useState } from "react";
import "./CreateRoomModal.css";

function CreateRoomModal({ nickname, onClose, onCreateRoom }) {
  const [roomTitle, setRoomTitle] = useState(`${nickname}님의 방`);
  const [roomType, setRoomType] = useState("public");
  const [password, setPassword] = useState("");
  const [maxPlayers, setMaxPlayers] = useState(2);
  const [mapType, setMapType] = useState("building");

  const handleSubmit = () => {
    if (roomTitle.trim() === "") {
      alert("방 제목을 입력해주세요.");
      return;
    }

    if (roomType === "private" && password.trim() === "") {
      alert("비밀방은 비밀번호를 입력해야 합니다.");
      return;
    }

    const newRoomData = {
      title: roomTitle,
      type: roomType,
      password: roomType === "private" ? password : "",
      maxPlayers: Number(maxPlayers),
      mapType: mapType,
    };

    onCreateRoom(newRoomData);
  };

  return (
    <div className="modal-backdrop">
      <div className="create-room-modal">
        <div className="modal-header">
          <div>
            <h2>방 만들기</h2>
            <p>게임 방 설정을 선택해주세요.</p>
          </div>

          <button className="modal-close-button" type="button" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="modal-body">
          <div className="form-row">
            <label>방 제목</label>
            <input
              type="text"
              value={roomTitle}
              onChange={(e) => setRoomTitle(e.target.value)}
              placeholder="방 제목 입력"
              maxLength={20}
            />
            <span className="input-count">{roomTitle.length} / 20</span>
          </div>

          <div className="form-row">
            <label>방 종류</label>

            <div className="radio-group">
              <label className="radio-card">
                <input
                  type="radio"
                  name="roomType"
                  value="public"
                  checked={roomType === "public"}
                  onChange={(e) => setRoomType(e.target.value)}
                />
                <span>
                  <strong>공개방</strong>
                  <small>목록에 보이는 방</small>
                </span>
              </label>

              <label className="radio-card">
                <input
                  type="radio"
                  name="roomType"
                  value="private"
                  checked={roomType === "private"}
                  onChange={(e) => setRoomType(e.target.value)}
                />
                <span>
                  <strong>비밀방</strong>
                  <small>암호로 입장하는 방</small>
                </span>
              </label>
            </div>
          </div>

          {roomType === "private" && (
            <div className="form-row">
              <label>비밀번호</label>
              <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="비밀방 암호 입력"
                maxLength={12}
              />
              <span className="input-count">{password.length} / 12</span>
            </div>
          )}

          <div className="form-row">
            <label>최대 인원</label>

            <select
              value={maxPlayers}
              onChange={(e) => setMaxPlayers(e.target.value)}
            >
              <option value="2">2명</option>
              <option value="3">3명</option>
              <option value="4">4명</option>
              <option value="5">5명</option>
              <option value="6">6명</option>
              <option value="7">7명</option>
              <option value="8">8명</option>
            </select>
          </div>

          <div className="form-row">
            <label>맵 선택</label>

            <div className="map-select-list">
              <button
                type="button"
                className={mapType === "building" ? "map-card active" : "map-card"}
                onClick={() => setMapType("building")}
              >
                <strong>멜롱이 유치원</strong>
                <small>기본 실내 맵</small>
              </button>

              <button
                type="button"
                className={mapType === "street" ? "map-card active" : "map-card"}
                onClick={() => setMapType("street")}
              >
                <strong>멜롱 파크</strong>
                <small>복잡한 야외 놀이공원 맵</small>
              </button>

              <button
                type="button"
                className={mapType === "market" ? "map-card active" : "map-card"}
                onClick={() => setMapType("market")}
              >
                <strong>재봉재봉 소품샵</strong>
                <small>숨을 곳이 많은 소품샵</small>
              </button>
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button className="cancel-button" type="button" onClick={onClose}>
            취소
          </button>

          <button className="submit-button" type="button" onClick={handleSubmit}>
            방 만들기
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateRoomModal;