import React from "react";
import styles from "../nodeCss/NodeStyles.module.css";

export default function EndNode() {
  return (
    <div className={styles.container}>
      <h3>End Node</h3>
      <p>This is the end of the chatbot flow.</p>
    </div>
  );
}
