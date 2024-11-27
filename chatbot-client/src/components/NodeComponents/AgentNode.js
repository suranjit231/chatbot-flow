import React from "react";
import styles from "../nodeCss/NodeStyles.module.css";

export default function AgentNode({ setAgentLink }) {
  return (
    <div className={styles.container}>
      <h3>Agent Node</h3>
      <input
        type="text"
        placeholder="Enter agent chat link"
        onChange={(e) => setAgentLink(e.target.value)}
        className={styles.input}
      />
    </div>
  );
}
