import React, { useState } from "react";
import styles from "../nodeCss/NodeStyles.module.css";
import { useFlowContext } from "../../context/FlowContext";

export default function InputNode() {
  const [userAnswer, setUserAnswer] = useState(""); 
  const [label, setLabel] = useState(""); 
  const [variableName, setVariableName] = useState(""); 
  const [responseType, setResponseType] = useState("text"); 
  const [choices, setChoices] = useState([""]); 

  const { updateNodes } = useFlowContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the node data for submission
    const nodeData = {
      label: label || "Expected reply", 
      variableName, 
      responseType, 
      userAnswer: responseType === "text" ? userAnswer : null, 
      choices: responseType === "multiple-choice" ? choices : null,
    };

    console.log("Input Node Data:", nodeData);
    updateNodes(nodeData); // Update nodes with the new data
  };

  const handleChoiceChange = (index, value) => {
    const updatedChoices = [...choices];
    updatedChoices[index] = value;
    setChoices(updatedChoices);
  };

  const addChoice = () => {
    setChoices([...choices, ""]);
  };

  const removeChoice = (index) => {
    setChoices(choices.filter((_, i) => i !== index));
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h3 className={styles.heading}>Input Node</h3>

        {/* Label Input */}
        <div className={styles.field}>
          <label className={styles.label}>Node Label:</label>
          <input
            type="text"
            placeholder="Optional custom label"
            value={label}
            onChange={(e) => setLabel(e.target.value)}
            className={styles.input}
          />
        </div>

        {/* Variable Name Input */}
        <div className={styles.field}>
          <label className={styles.label}>Variable Name:</label>
          <input
            type="text"
            placeholder="e.g., {{userEmail}}"
            value={variableName}
            onChange={(e) => setVariableName(e.target.value)}
            className={styles.input}
          />
        </div>

        {/* Response Type Selection */}
        <div className={styles.field}>
          <label className={styles.label}>Response Type:</label>
          <select
            value={responseType}
            onChange={(e) => setResponseType(e.target.value)}
            className={styles.select}
          >
            <option value="text">Text Answer</option>
            <option value="yes-no">Yes/No Response</option>
            <option value="multiple-choice">Multiple Choice</option>
          </select>
        </div>

        {/* Conditional Input Based on Response Type */}
        {responseType === "text" && (
          <div className={styles.field}>
            <label className={styles.label}>Expected Text Answer:</label>
            <input
              type="text"
              placeholder="Enter expected text answer"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              className={styles.input}
            />
          </div>
        )}

        {responseType === "yes-no" && (
          <p className={styles.infoText}>User will respond with Yes or No.</p>
        )}

        {responseType === "multiple-choice" && (
          <div className={styles.field}>
            <label className={styles.label}>Define Choices:</label>
            {choices.map((choice, index) => (
              <div key={index} className={styles.choiceField}>
                <input
                  type="text"
                  placeholder={`Choice ${index + 1}`}
                  value={choice}
                  onChange={(e) => handleChoiceChange(index, e.target.value)}
                  className={styles.choiceInput}
                />
                <button
                  type="button"
                  onClick={() => removeChoice(index)}
                  className={styles.removeButton}
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addChoice}
              className={styles.addButton}
            >
              Add Choice
            </button>
          </div>
        )}

        {/* Submit Button */}
        <button type="submit" className={styles.submitButton}>
          Save Input Node
        </button>
      </form>
    </div>
  );
}
