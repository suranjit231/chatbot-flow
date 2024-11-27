import React from "react";
import styles from "../nodeCss/NodeStyles.module.css";

export default function SplitNode({ onBranchChange }) {
  return (
    <div className={styles.container}>
      <h3>Split Node</h3>
      <textarea
        placeholder="Define branches (e.g., Branch 1: {{var1}}, Branch 2: {{var2}})"
        onChange={(e) => onBranchChange(e.target.value)}
        className={styles.textarea}
      ></textarea>
    </div>
  );
}



