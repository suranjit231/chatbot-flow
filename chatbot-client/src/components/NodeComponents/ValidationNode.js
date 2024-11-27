import React, { useState } from "react";
import { useFlowContext } from "../../context/FlowContext";
import styles from "../nodeCss/DynamicValidationNode.module.css"; // Import CSS Module

export default function DynamicValidationNode() {
  const { updateNodes } = useFlowContext();

  const [nodeLabel, setNodeLabel] = useState("");
  const [fields, setFields] = useState([
    { variableName: "", validationType: "text", regex: "", customRegex: "" },
  ]);
  const [validationMessage, setValidationMessage] = useState("");

  const predefinedRegexPatterns = {
    name: /^[a-zA-Z\s]+$/,
    email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
    contact: /^[0-9]{10}$/,
  };

  const handleNodeLabelChange = (value) => {
    setNodeLabel(value || "Validation Node");
  };

  const handleVariableNameChange = (index, value) => {
    const updatedFields = [...fields];
    updatedFields[index].variableName = value;
    setFields(updatedFields);
  };

  const handleValidationTypeChange = (index, value) => {
    const updatedFields = [...fields];
    updatedFields[index].validationType = value;

    // Auto-assign regex for predefined types
    if (predefinedRegexPatterns[value]) {
      updatedFields[index].regex = predefinedRegexPatterns[value];
      updatedFields[index].customRegex = ""; // Reset custom regex for predefined types
    } else {
      updatedFields[index].regex = ""; // Clear regex for custom type
    }

    setFields(updatedFields);
  };

  const handleCustomRegexChange = (index, value) => {
    const updatedFields = [...fields];
    updatedFields[index].customRegex = value;
    updatedFields[index].regex = value; // Use custom regex for validation
    setFields(updatedFields);
  };

  const addValidationField = () => {
    setFields([
      ...fields,
      { variableName: "", validationType: "text", regex: "", customRegex: "" },
    ]);
  };

  const removeValidationField = (index) => {
    const updatedFields = [...fields];
    updatedFields.splice(index, 1);
    setFields(updatedFields);
  };

  const validateAnswer = (answer, field) => {
    let isValid = true;
    let feedbackMessage = "";

    if (!new RegExp(field.regex).test(answer)) {
      isValid = false;
      feedbackMessage = `Invalid ${field.validationType}`;
    }

    setValidationMessage(feedbackMessage);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationData = fields.map((field) => ({
      label: nodeLabel || "Validate Data", 
      variableName: field.variableName,
      validationType: field.validationType,
      regex: field.regex,
    }));
    updateNodes({
      label:validationData[0].label,
      variableName:validationData[0].variableName,
      validationType:validationData[0].validationType,
      pattern:validationData[0].regex
    });
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Validation input</h3>

      <div className={styles.field}>
        <label>Node Label:</label>
        <input
          type="text"
          className={styles.input}
          placeholder="Enter custom label for this node"
          value={nodeLabel}
          onChange={(e) => setNodeLabel(e.target.value)}
        />
      </div>

      {fields.map((field, index) => (
        <div key={index} className={styles.validationField}>
          <div className={styles.field}>
            <label>Variable Name:</label>
            <input
              type="text"
              className={styles.input}
              placeholder="Enter variable name (e.g., email)"
              value={field.variableName}
              onChange={(e) => handleVariableNameChange(index, e.target.value)}
            />
          </div>

          <div className={styles.field}>
            <label>Validation Type:</label>
            <select
              className={styles.select}
              value={field.validationType}
              onChange={(e) => handleValidationTypeChange(index, e.target.value)}
            >
              <option value="text">Text</option>
              <option value="name">Name</option>
              <option value="email">Email</option>
              <option value="contact">Contact</option>
              <option value="custom">Custom</option>
            </select>
          </div>

          {field.validationType === "custom" && (
            <div className={styles.field}>
              <label>Custom Regex:</label>
              <input
                type="text"
                className={styles.input}
                placeholder="Enter custom regex pattern"
                value={field.customRegex}
                onChange={(e) => handleCustomRegexChange(index, e.target.value)}
              />
            </div>
          )}

          <button
            type="button"
            onClick={() => removeValidationField(index)}
            className={styles.removeButton}
          >
            Remove
          </button>
        </div>
      ))}

      <button type="button" onClick={addValidationField} className={styles.addButton}>
        Add Validation Field
      </button>

      <div className={styles.feedback}>{validationMessage}</div>

      <button onClick={handleSubmit} className={styles.submitButton}>
        Save Validation Rules
      </button>
    </div>
  );
}
