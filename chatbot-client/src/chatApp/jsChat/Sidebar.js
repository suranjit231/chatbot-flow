import React from "react";
import styles from "../csChat/Sidebar.module.css";

const Sidebar = ({ rooms }) => {
  return (
    <div className={styles.sidebar}>
      <h3>Available Rooms</h3>
      {rooms.map((room, idx) => (
        <div key={idx} className={styles.room}>
          {room}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
