import React, { useState } from "react";
import styles from "../nodeCss/NodeStyles.module.css";
import { useFlowContext } from "../../context/FlowContext"

export default function QuestionNode() {
  const [questionText, setQuestionText] = useState("");
  const [responseType, setResponseType] = useState("text");
  const [choices, setChoices] = useState([""]); // Default one choice
  const [error, setError] = useState("");
  const [label, setLabel] = useState("");

  const { updateNodes } = useFlowContext();

  // Handler to add a new choice dynamically
  const addChoice = () => {
    if (choices.length < 5) {
      setChoices([...choices, ""]);
    } else {
      setError("Maximum of 5 choices allowed.");
    }
  };

  // Handler to update a specific choice
  const updateChoice = (index, value) => {
    const updatedChoices = [...choices];
    updatedChoices[index] = value;
    setChoices(updatedChoices);
    setError(""); // Clear any previous error
  };

  // Handler to remove a choice
  const removeChoice = (index) => {
    const updatedChoices = choices.filter((_, i) => i !== index);
    setChoices(updatedChoices);
    setError(""); // Clear any previous error
  };

  // Handler for form submission
  const handleSubmit = () => {
    const nodeData = {
      question:questionText,
      responseType,
      label: label || "Question",
      choices: responseType === "multiple-choice" ? choices.filter((c) => c.trim()) : [],
    };
    console.log("Question Node Data:", nodeData);

    updateNodes(nodeData);
    clearQuestion();

  };


  //======= clear input ==========//
  function clearQuestion(){
    setChoices([""])
    setError("");
    setQuestionText("");
    setResponseType("Text");
  }

  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>Set A Question</h3>
      <input
          type="text"
          placeholder="Enter custom label (optional)"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          className={styles.input}
        />

      {/* Question Text */}
      <input
        type="text"
        placeholder="Enter your question (e.g., What is your favorite color?)"
        value={questionText}
        onChange={(e) => setQuestionText(e.target.value)}
        className={styles.input}
      />

      {/* Response Type Dropdown */}
      <div className={styles.field}>
        <label className={styles.label}>Response Type:</label>
        <select
          value={responseType}
          onChange={(e) => setResponseType(e.target.value)}
          className={styles.select}
        >
          <option value="text">Text</option>
          <option value="multiple-choice">Multiple Choice</option>
          <option value="yes-no">Yes/No</option>
          <option value="number">Number Input</option>
          <option value="date-time">Date/Time</option>
        </select>
      </div>

      {/* Predefined Choices for Multiple Choice */}
      {responseType === "multiple-choice" && (
        <div className={styles.choicesContainer}>
          <label className={styles.label}>Predefined Choices:</label>
          {choices.map((choice, index) => (
            <div key={index} className={styles.choiceField}>
              <input
                type="text"
                placeholder={`Choice ${index + 1}`}
                value={choice}
                onChange={(e) => updateChoice(index, e.target.value)}
                className={styles.choiceInput}
              />
              <button
                type="button"
                className={styles.removeButton}
                onClick={() => removeChoice(index)}
              >
                Remove
              </button>
            </div>
          ))}
          {error && <p className={styles.error}>{error}</p>}
          <button type="button" className={styles.addButton} onClick={addChoice}>
            Add Choice
          </button>
        </div>
      )}

      {/* Submit Button */}
      <button onClick={handleSubmit} className={styles.submitButton}>
        Save Question Node
      </button>
    </div>
  );
}
