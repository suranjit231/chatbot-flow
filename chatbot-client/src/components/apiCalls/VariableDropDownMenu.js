import React, { useEffect, useState } from "react";
import styles from "./apiCallCss/VariableDropDown.module.css";
import ApiCallVariableList from "../../utility/ApiCallVariableList";
import { useFlowContext } from "../../context/FlowContext";

export default function VariableDropDownMenu({isOpenVariableList, 
    setIsOpenVariableList, getVariableInUrl, position = { top: "23px", left: "0" }, }) {



  const [searchTerm, setSearchTerm] = useState(""); 



  const [ variables, setVariableList ] = useState([]);


  useEffect(()=>{
    if(ApiCallVariableList && ApiCallVariableList?.length>0){
        setVariableList(ApiCallVariableList);
    }

  },[])

  

 

  // Filter variables based on the search term
  const filteredVariables = variables.filter((variable) =>
    variable.key.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (variable) => {

    getVariableInUrl(variable);
    setIsOpenVariableList(false); 
  };


  const dropdownStyle = {
    position: "absolute",
    ...position, 
  };

  return (
    <div className={styles.dropdownContainer} style={dropdownStyle}>
    
      {isOpenVariableList && (
        <div className={styles.dropdownMenu}>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <ul className={styles.dropdownList}>
            {filteredVariables.length > 0 ? (
              filteredVariables.map((variable, index) => (
                <li
                  key={index}
                  className={styles.dropdownItem}
                  onClick={() => handleSelect(variable)}
                >
                  <span className={styles.variableKey}>{variable.key}</span>
                  <span className={styles.variableValue}>{variable.value}</span>
                </li>
              ))
            ) : (
              <li className={styles.noResults}>No results found</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};


