"use client";

import "./room-preview.css";

export default function RoomPreview({ color = "#7c3aed" }) {
  return (
    <section className="roomPreview">
      <h2 className="roomTitle">תצוגת חדר לפי צבע קיר</h2>

      <div className="roomWall" style={{ "--wallColor": color }}>
        <img src="/assets/room/room.png" className="roomFurniture" alt="Room" />
      </div>
    </section>
  );
}
