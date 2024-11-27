import React from "react";
import styles from "../nodeCss/NodeStyles.module.css";

export default function ApiCallNode({ setMethod, setUrl }) {
  return (
    <div className={styles.container}>
      <h3>API Call Node</h3>
      <select onChange={(e) => setMethod(e.target.value)} className={styles.select}>
        <option value="GET">GET</option>
        <option value="POST">POST</option>
        <option value="PUT">PUT</option>
        <option value="DELETE">DELETE</option>
      </select>
      <input
        type="text"
        placeholder="Enter API URL"
        onChange={(e) => setUrl(e.target.value)}
        className={styles.input}
      />
    </div>
  );
}
