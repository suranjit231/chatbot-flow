import React, { useState } from "react";
import styles from "../nodeCss/NodeStyles.module.css";
import { useFlowContext } from "../../context/FlowContext";

export default function StartNode() {
  const [tagName, setTagName] = useState("");

  const { updateNodes } = useFlowContext();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form refresh
    console.log("Tag Name:", tagName);

    updateNodes({label:tagName});
   
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <h3>Start Node</h3>

      {/* Tag Name Input */}
      <input
        type="text"
        value={tagName}
        onChange={(e) => setTagName(e.target.value)}
        placeholder="Enter a tag name (e.g., Start)"
        className={styles.input}
      />

    
      {/* Submit Button */}
      <button type="submit" className={styles.button}>
        Submit
      </button>
    </form>
  );
}
