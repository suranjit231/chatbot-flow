import React, { useState } from "react";
import styles from "./apiCallCss/ResponseVariableDropDown.module.css";
import options from "../../utility/ResponseVariableList";

const ResponseVariableDropDown = ({ onAdd, position,  search, getSelectOptions ,setSelectedOptions }) => {
 
  const [showAdd, setShowAdd] = useState(false);
  const [newVariable, setNewVariable] = useState("");
  const [variableType, setVariableType] = useState("Text");

  const filteredOptions = options.filter((opt) =>
    opt.key.toLowerCase().includes(search.toLowerCase())
  );

  const handleAdd = () => {
    if (newVariable.trim()) {
      onAdd(newVariable, variableType);
      setNewVariable("");
      setVariableType("Text");
      setShowAdd(false);
    }
  };

  function handleClickSelectOption(option){
    console.log("select options in menu: ", option);
    //setSelectedOptions(option);
    getSelectOptions(option);

  }

  return (
    <div className={styles.dropdownMenu} style={position}>
      <ul className={styles.optionsList}>
        {filteredOptions.map((option, index) => (
          <li onClick={()=>handleClickSelectOption(option)} key={index} className={styles.option}>
            {option.key}
          </li>
        ))}
      </ul>


      <div className={styles.addVariableContainer}>
         
          <select
            value={variableType}
            onChange={(e) => setVariableType(e.target.value)}
            className={styles.typeSelect}
          >
            <option value="Text">Text</option>
            <option value="Number">Number</option>
            <option value="Boolean">Boolean</option>
            <option value="Date">Date</option>
            <option value="DateTime">Date-Time</option>
            <option value="JSON">JSON</option>
          </select>

         
          <p  className={styles.newVariableInput}>{search}</p>
       

        </div>



    </div>
  );
};

export default ResponseVariableDropDown;
