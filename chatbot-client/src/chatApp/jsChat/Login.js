import React, { useState } from "react";
import styles from "../csChat/Login.module.css";

const Login = ({ setUsername, setRoom }) => {
  const [name, setName] = useState("");
  const [roomName, setRoomName] = useState("");

  const handleJoin = () => {
    setUsername(name);
    setRoom(roomName);
  };

  return (
    <div className={styles.container}>
      <h2>Welcome to Chat App</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter room name"
        value={roomName}
        onChange={(e) => setRoomName(e.target.value)}
      />
      <button onClick={handleJoin}>Join Chat</button>
    </div>
  );
};

export default Login;
