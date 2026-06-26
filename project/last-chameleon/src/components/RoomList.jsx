import React, { Component } from "react";
import './RoomList.css'

class RoomList extends Component {
  render() {
    const { publicRooms, onJoinRoom } = this.props;

    return (
      <div className="room-list-container">
        {publicRooms.map((room) => (
          <div className="room-card" key={room.id} style={{marginBottom: 5}}>
            <div className="room-icon">
              <img src={room.icon} alt="방 아이콘" />
            </div>

            <h3>{room.title}</h3>

            <p className="room-players">
              인원 {room.players} / {room.maxPlayers}
            </p>

            <span
              className={
                room.status === "대기중"
                  ? "room-status waiting"
                  : "room-status full"
              }
            >
              {room.status}
            </span>

            <button
              type="button"
              onClick={() => onJoinRoom(room)}
              disabled={room.players >= room.maxPlayers}
            >
              입장
            </button>
          </div>
        ))}
      </div>
    );
  }
}

export default RoomList;