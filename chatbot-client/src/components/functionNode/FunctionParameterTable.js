import React, { useState } from "react";
import styles from "./FunctionParameterTable.module.css";
import { AiOutlineDelete } from "react-icons/ai";
import { IoCodeSlash } from "react-icons/io5";
import VariableDropDownMenu from "../apiCalls/VariableDropDownMenu";

export default function FunctionParameterTable({parameters, setParameters}){

  const handleAddRow = () => {
    setParameters([
      ...parameters,
      { name: "", value: "", testValue: "" },
    ]);
  };

  const [openDropdownIndex, setOpenDropdownIndex] = useState(null); 

  const getVariableInFunctionParams = (selectedVariable) => {
    if (openDropdownIndex === null || openDropdownIndex < 0 || openDropdownIndex >= parameters?.length) {
        console.error(`Cannot insert variable. Invalid index: ${openDropdownIndex}`);
        return;
    }

   // updateHeader(openDropdownIndex, "value", selectedVariable.value);
   console.log("selected variable in function parameter: ", selectedVariable);
   setParameters((prev) =>
    prev.map((para, idx) => {
      if (idx === openDropdownIndex) {
        return { ...para, value: selectedVariable.value }; // Update only the specific parameter
      }
      return para; // Keep other parameters unchanged
    })
  );
  
    setOpenDropdownIndex(null); // Close the dropdown after selecting a variable
};


const handleClickOpenVariableMenu = (index) => {
  setOpenDropdownIndex((prev) => (prev === index ? null : index)); // Toggle dropdown for the clicked index
};










  const handleDeleteRow = (index) => {
    setParameters(parameters.filter((_, i) => i !== index));
  };

  const handleChange = (index, field, value) => {
    const updatedParameters = [...parameters];
    updatedParameters[index][field] = value;
    setParameters(updatedParameters);
  };

  return (
    <div className={styles.tableContainer}>
      <div className={styles.tableHeader}>
        <div>Parameter Name</div>
        <div>Parameter Value</div>
        <div>Test Value</div>
        <div></div>
      </div>
      {parameters?.map((param, index) => (
        <div key={index} className={styles.tableRow}>
          <input
            type="text"
            value={param.name}
            onChange={(e) => handleChange(index, "name", e.target.value)}
            placeholder="Enter parameter name"
            className={styles.inputField}
          />

          <div className={styles.functionValueInputDiv}> 
              <input
                type="text"
                value={param.value}
                onChange={(e) => handleChange(index, "value", e.target.value)}
                placeholder="Select custom field"
                className={styles.inputField}
              />
              
              <IoCodeSlash onClick={() => handleClickOpenVariableMenu(index)}
               className={styles.htmlCodeIcon}/>


              {openDropdownIndex === index && (
                            <VariableDropDownMenu
                                isOpenVariableList={true}
                                setIsOpenVariableList={() => setOpenDropdownIndex(null)} // Close the dropdown
                                getVariableInUrl={getVariableInFunctionParams}
                            />
               )}

          </div>


          <input
            type="text"
            value={param.testValue}
            onChange={(e) => handleChange(index, "testValue", e.target.value)}
            placeholder="Test Value"
            className={styles.inputField}
          />
          <button
            className={styles.deleteButton}
            onClick={() => handleDeleteRow(index)}
          >
            <AiOutlineDelete />
          </button>
        </div>
      ))}
      <button className={styles.addButton} onClick={handleAddRow}>
        + Add Parameter
      </button>
    </div>
  );
};


