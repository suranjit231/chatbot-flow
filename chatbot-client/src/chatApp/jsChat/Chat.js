import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import styles from "../csChat/Chat.module.css";

// Establish socket connection
const socket = io.connect("http://localhost:3500");

const Chat = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  // Handle socket connection and listening for messages
  useEffect(() => {
    console.log("Socket connected");

    // Listen for incoming messages from the server
    const handleReceiveMessage = (data) => {
      setMessages((prev) => [...prev, { msg: data, messageType: "received" }]);
    };

    socket.on("receive_message", handleReceiveMessage);

    // Cleanup the socket listener on component unmount
    return () => {
      console.log("Cleaning up socket listener");
      socket.off("receive_message", handleReceiveMessage); // Remove the listener
    };
  }, []); // Runs only once when the component is mounted

  const handleClickSendMessageButton = () => {
    if (message.trim() === "") return; // Prevent sending empty messages

    // Emit the message to the server
    socket.emit("send_message", {message:message, userId:"sns123"});

    // Append the sent message to the local state
    setMessages((prev) => [...prev, { msg: message, messageType: "send" }]);

    setMessage(""); // Clear the input field
  };

  return (
    <div className={styles.chatContainer}>
      {/* Display messages */}
      <div className={styles.messages}>
        {messages.map((m, idx) => (
          <div
            key={idx}
            className={
              m?.messageType === "send" ? styles.sendBox : styles.receivedBox
            }
          >
            <p>{m.msg}</p>
          </div>
        ))}
      </div>

      {/* Input area */}
      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={handleClickSendMessageButton}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
