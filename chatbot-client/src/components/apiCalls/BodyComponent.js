import { useState } from "react";
import styles from "./apiCallCss/BodyComponent.module.css";
import VariableDropDownMenu from "./VariableDropDownMenu";
import { IoCodeSlash } from "react-icons/io5";
import JSONTree from 'react-json-tree';

export default function BodyComponent() {
  const [bodyType, setBodyType] = useState("none");
  const [fields, setFields] = useState([{ key: "", value: "", testValue: "" }]);
  const [rawBody, setRawBody] = useState(""); // State for raw body content
  const [selectedDropDownField, setSelectedDropDownField] = useState(null);

  const data = { name: "John", age: 30 };

  const handleFieldChange = (index, fieldName, value) => {
    const updatedFields = [...fields];

    // Convert value to string if it is an object
    updatedFields[index][fieldName] =
      typeof value === "object" ? JSON.stringify(value) : value;

    setFields(updatedFields);

    // Automatically add a new row when the last row's key or value has content
    if (
      index === fields.length - 1 &&
      (fieldName === "key" || fieldName === "value") &&
      value.trim() !== ""
    ) {
      setFields([...updatedFields, { key: "", value: "", testValue: "" }]);
    }
  };

  const removeField = (index) => {
    const updatedFields = fields.filter((_, i) => i !== index);
    setFields(updatedFields);
  };

  const getVariableInField = (selectedVariable, index) => {
    const updatedFields = [...fields];
    updatedFields[index].value = selectedVariable;
    setFields(updatedFields);
    setSelectedDropDownField(null);
  };

  const insertVariableInRawBody = (variable) => {
    try {
      const textarea = document.getElementById("rawBodyTextarea");
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;

      // Convert variable to string if it's an object
      const variableString =
        typeof variable === "object" ? JSON.stringify(variable) : variable;

      // Insert variable at the cursor position
      const updatedRawBody =
        rawBody.substring(0, start) +
        `"${variableString}"` +
        rawBody.substring(end);

      setRawBody(updatedRawBody);

      // Parse the JSON and sync with fields (if valid JSON)
      const parsedBody = JSON.parse(updatedRawBody);
      const updatedFields = Object.entries(parsedBody).map(([key, value]) => ({
        key,
        value: typeof value === "object" ? JSON.stringify(value) : value, // Ensure values are strings
        testValue: "",
      }));

      console.log("updated fields: ", updatedFields)


      setFields(updatedFields);
    } catch (error) {
      console.error("Invalid JSON format:", error);
    }
  };

  console.log("Raw body: ", rawBody);
  console.log("fields: ", fields)

  const renderBodyFields = () => {
    switch (bodyType) {
      case "multipart/form-data":
      case "x-www-form-urlencoded":
        return (
          <div className={styles.fieldsContainer}>
            {fields.map((field, index) => (
              <div key={index} className={styles.fieldRow}>
                {/* Key Input */}
                <input
                  type="text"
                  placeholder="Key"
                  className={styles.inputField}
                  value={field.key}
                  onChange={(e) =>
                    handleFieldChange(index, "key", e.target.value)
                  }
                />

                {/* Value Input with Variable Dropdown */}
                <div className={styles.formDataVariableInputWrapper}>
                  <input
                    type="text"
                    placeholder="Value"
                    className={styles.inputField}
                    value={field.value}
                    onChange={(e) =>
                      handleFieldChange(index, "value", e.target.value)
                    }
                  />
                  <IoCodeSlash
                    onClick={() =>
                      setSelectedDropDownField(
                        selectedDropDownField === index ? null : index
                      )
                    }
                    className={styles.formDataHtmlCodeIcon}
                  />
                  {selectedDropDownField === index && (
                    <VariableDropDownMenu
                      isOpenVariableList={true}
                      setIsOpenVariableList={() =>
                        setSelectedDropDownField(null)
                      }
                      getVariableInUrl={(variable) =>
                        getVariableInField(variable, index)
                      }
                      position={{ top: "40px", right: "0px" }}
                    />
                  )}
                </div>

                {/* Test Value Input */}
                <input
                  type="text"
                  placeholder="Test Value"
                  className={styles.inputField}
                  value={field.testValue}
                  onChange={(e) =>
                    handleFieldChange(index, "testValue", e.target.value)
                  }
                />

                {/* Remove Field Button */}
                {fields.length > 1 && index < fields.length - 1 && (
                  <button
                    className={styles.removeFieldButton}
                    onClick={() => removeField(index)}
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
          </div>
        );
      case "raw":
        return (
          <div className={styles.rawContainer}>
            <textarea
              id="rawBodyTextarea"
              placeholder="Enter raw JSON body data here"
              className={styles.rawTextarea}
              value={rawBody}
              onChange={(e) => setRawBody(e.target.value)}
            ></textarea>

            <div
              onClick={() =>
                setSelectedDropDownField(
                  selectedDropDownField === "raw" ? null : "raw"
                )
              }
              className={styles.textAreaVariableIconBox}
            >
              <IoCodeSlash className={styles.textAreaVariableIcon} />
            </div>

            {selectedDropDownField === "raw" && (
              <VariableDropDownMenu
                isOpenVariableList={true}
                setIsOpenVariableList={() => setSelectedDropDownField(null)}
                getVariableInUrl={insertVariableInRawBody}
                position={{ top: "0px", right: "70px" }}
              />
            )}
          </div>
        );
      default:
        return (
          <p className={styles.noBodyMessage}>
            No body data is required for this request type.
          </p>
        );
    }
  };

  return (
    <div className={styles.bodyComponentContainer}>
      <div className={styles.bodyComponentHeaderSection}>
        <div className={styles.bodyTypeTitleBox}>
          <input
            type="radio"
            checked={bodyType === "none"}
            onClick={() => setBodyType("none")}
            className={styles.radioInput}
          />
          <p onClick={() => setBodyType("none")}>None</p>
        </div>

        <div className={styles.bodyTypeTitleBox}>
          <input
            type="radio"
            checked={bodyType === "multipart/form-data"}
            onClick={() => setBodyType("multipart/form-data")}
            className={styles.radioInput}
          />
          <p onClick={() => setBodyType("multipart/form-data")}>
            Multipart/Form-Data
          </p>
        </div>

        <div className={styles.bodyTypeTitleBox}>
          <input
            type="radio"
            checked={bodyType === "x-www-form-urlencoded"}
            onClick={() => setBodyType("x-www-form-urlencoded")}
            className={styles.radioInput}
          />
          <p onClick={() => setBodyType("x-www-form-urlencoded")}>
            x-www-form-urlencoded
          </p>
        </div>

        <div className={styles.bodyTypeTitleBox}>
          <input
            type="radio"
            checked={bodyType === "raw"}
            onClick={() => setBodyType("raw")}
            className={styles.radioInput}
          />
          <p onClick={() => setBodyType("raw")}>Raw</p>
          {bodyType === "raw" && (
            <select
              className={styles.rawDropdown}
              onChange={(e) => console.log(e.target.value)}
            >
              <option value="json">JSON</option>
              <option value="text">Text</option>
              <option value="javascript">JavaScript</option>
              <option value="html">HTML</option>
              <option value="xml">XML</option>
            </select>
          )}
        </div>
      </div>
      <div className={styles.bodyFieldsSection}>{renderBodyFields()}</div>
    </div>
  );
}
