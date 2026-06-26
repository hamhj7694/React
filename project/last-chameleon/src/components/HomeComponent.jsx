import React, { Component } from "react";
import "./HomeComponent.css";
import RoomList from '../components/RoomList'

import banner from '../assets/banner_long.png'

import dong from '../assets/profile/dong.png'
import nemo from '../assets/profile/nemo.png'
import semo from '../assets/profile/semo.png'
import star from '../assets/profile/star.png'

class HomeComponent extends Component {
  state = {
    nickname: "",
    secretCode: "",

    // 지금은 서버가 없으니까 임시 공개 방 데이터
    publicRooms: [
      {
        id: 1,
        title: "초보 환영 방",
        players: 1,
        maxPlayers: 2,
        status: "대기중",
        icon: {star},
      },
      {
        id: 2,
        title: "빠른 한 판",
        players: 1,
        maxPlayers: 2,
        status: "대기중",
        icon: {nemo},
      },
      {
        id: 3,
        title: "연습용 방",
        players: 2,
        maxPlayers: 2,
        status: "가득참",
        icon: {semo},
      },
    ],
  };

  // 닉네임 입력
  handleNicknameChange = (event) => {
    this.setState({
      nickname: event.target.value,
    });
  };

  // 비밀방 코드 입력
  handleSecretCodeChange = (event) => {
    this.setState({
      secretCode: event.target.value,
    });
  };

  // 닉네임 검사
  checkNickname = () => {
    const { nickname } = this.state;

    if (nickname.trim() === "") {
      alert("닉네임을 먼저 입력해주세요.");
      return false;
    }

    return true;
  };

  // 공개 방 입장
  joinPublicRoom = (room) => {
    if (!this.checkNickname()) return;

    if (room.players >= room.maxPlayers) {
      alert("이미 가득 찬 방입니다.");
      return;
    }

    alert(`${room.title}에 입장합니다.\n닉네임: ${this.state.nickname}`);

    // 나중에 대기방 화면 이동
    // 예: this.props.onJoinRoom(room.id, this.state.nickname);
  };

  // 비밀방 입장
  joinSecretRoom = () => {
    const { secretCode, nickname } = this.state;

    if (!this.checkNickname()) return;

    if (secretCode.trim() === "") {
      alert("비밀방 암호를 입력해주세요.");
      return;
    }

    alert(`비밀방에 입장합니다.\n암호: ${secretCode}\n닉네임: ${nickname}`);

    // 나중에 비밀방 검증 또는 대기방 이동
    // 예: this.props.onJoinSecretRoom(secretCode, nickname);
  };

  // 새 방 만들기
  createRoom = () => {
    if (!this.checkNickname()) return;

    alert(`${this.state.nickname}님이 새 방을 만듭니다.`);

    // 나중에 방 만들기 화면 이동
    // 예: this.props.onCreateRoom(this.state.nickname);
  };

  // 랜덤 방 참여
  joinRandom = () => {
    if (!this.checkNickname()) return;

    const { publicRooms, nickname } = this.state;

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
    // 예: this.props.onJoinRoom(selectedRoom.id, nickname);
  };

  render() {
    const { nickname, secretCode, publicRooms } = this.state;

    return (
      <div className="home-page">
        {/* 상단 메인 배너 */}
        <section className="home-hero">
          {/*
            나중에 배너 이미지가 생기면 src에 넣기
            예: src="/images/home-hero.png"
          */}
          <img
            className="home-hero-image"
            src={banner}
            alt="막차 카멜레온 메인 배너"
          />

          {/* 이미지가 없을 때 임시로 보이는 텍스트 */}
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
                    onChange={this.handleNicknameChange}
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
                  onClick={this.createRoom}
                >
                  🏠 새 방 만들기
                </button>

                <button
                  className="random-room-button"
                  type="button"
                  onClick={this.joinRandom}
                >
                  🔀 랜덤 입장
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
                  onChange={this.handleSecretCodeChange}
                />

                <button type="button" onClick={this.joinSecretRoom}>
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
                  onJoinRoom={this.joinPublicRoom}
                />
              </div>
            </section>
          </div>
        </main>
      </div>
    );
  }
}

export default HomeComponent;