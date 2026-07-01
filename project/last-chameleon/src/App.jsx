import React, { Component } from "react";
import HomeComponent from "./components/HomeComponent";
import GameComponent from "./components/GameComponent";

class App extends Component {
  state = {
    currentPage: "home", // "home" or "game"

    player: {
      nickname: "",
    },

    currentRoom: null,
  };

  // 홈에서 방 입장할 때 실행
  handleEnterGame = (gameData) => {
    this.setState({
      currentPage: "game",
      player: {
        nickname: gameData.nickname,
      },
      currentRoom: gameData.room,
    });
  };

  // 게임에서 나가기 버튼 누를 때 실행
  handleLeaveGame = () => {
    this.setState({
      currentPage: "home",
      currentRoom: null,
    });
  };

  render() {
    const { currentPage, player, currentRoom } = this.state;

    return (
      <>
        {currentPage === "home" && (
          <HomeComponent onEnterGame={this.handleEnterGame} />
        )}

        {currentPage === "game" && (
          <GameComponent
            player={player}
            room={currentRoom}
            onLeaveGame={this.handleLeaveGame}
          />
        )}
      </>
    );
  }
}

export default App;