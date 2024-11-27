import React, { useState } from "react";
import styles from "../nodeCss/NodeStyles.module.css";
import { useFlowContext } from "../../context/FlowContext";

export default function ReplyMessageNode() {
  const { updateNodes } = useFlowContext();
  const [message, setMessage] = useState("");
  const [delay, setDelay] = useState(1);
  const [replyType, setReplyType] = useState("text");
  const [includeEmoji, setIncludeEmoji] = useState(false);
  const [label, setLabel] = useState("");

  function handleSubmit() {
    const replyNodeData = {
      label: label || "Reply Message Node", // Use default label if none is provided
      message,
      delay,
      replyType,
      includeEmoji,
    };
    console.log("Reply Node Data:", replyNodeData);
    updateNodes(replyNodeData);
  }

  return (
    <div className={styles.replyContainer}>
      <h3 className={styles.heading}>Reply Message Node</h3>

      {/* Label */}
      <div className={styles.field}>
        <label className={styles.label}>Node Label:</label>
        <input
          type="text"
          placeholder="Enter custom label (optional)"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          className={styles.input}
        />
      </div>

      {/* Reply Message */}
      <textarea
        className={styles.textarea}
        placeholder="Enter reply message (e.g., Hello {{userName}}, how can I help you today?)"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

      {/* Typing Delay */}
      <div className={styles.field}>
        <label className={styles.label}>Typing Delay (seconds):</label>
        <input
          type="number"
          min="1"
          max="10"
          value={delay}
          onChange={(e) => setDelay(e.target.value)}
          className={styles.input}
        />
      </div>

      {/* Reply Type */}
      <div className={styles.field}>
        <label className={styles.label}>Reply Type:</label>
        <select
          value={replyType}
          onChange={(e) => setReplyType(e.target.value)}
          className={styles.select}
        >
          <option value="text">Text Reply</option>
          <option value="rich-media">Rich Media</option>
          <option value="cards">Cards</option>
        </select>
      </div>

      {/* Emoji Support */}
      <div className={styles.checkboxField}>
        <input
          type="checkbox"
          id="emojiSupport"
          checked={includeEmoji}
          onChange={(e) => setIncludeEmoji(e.target.checked)}
        />
        <label htmlFor="emojiSupport" className={styles.checkboxLabel}>
          Enable Emoji Support
        </label>
      </div>

      {/* Submit Button */}
      <button onClick={handleSubmit} className={styles.submitButton}>
        Save Reply Message
      </button>
    </div>
  );
}
