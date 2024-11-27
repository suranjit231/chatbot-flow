import styles from "../../styles/ConditionalNode.module.css";
import { FaCheckSquare } from "react-icons/fa";
import variableData from "../../utility/VariableList";
import operatorOptions from "../../utility/operatorMapData"; // Your operator data
import React, { useEffect, useState } from "react";
import { useFlowContext } from "../../context/FlowContext";


 export default function ConditionalMiniModal({
  handleInsertSmallConditon,
   toggleSmallConditionalModal,  
   conditionToDeleteOrUpdate, 
   handleDeleteSmallCondition,
   handleUpdateSmallCondition
  }){



    const [variableList, setVariableList] = useState([]);
    const [selectedVariable, setSelectedVariable] = useState(variableData[0]);
    const [operatorList, setOperatorList] = useState(operatorOptions[selectedVariable?.variableType]);
    const [ selectedOperator, setSelectedOperator ] = useState(operatorList[0])
    const [caseSensative, setCaseSensative ] = useState(false);
    const [ conditionValue, setConditonValue ] = useState("");
    const { updateNodes, nodes, selectedNode } = useFlowContext();
  


    useEffect(() => {
        setVariableList([...variableData]);
      }, []);
    
      useEffect(() => {
        setOperatorList(operatorOptions[selectedVariable?.variableType]);
      }, [selectedVariable]);

      console.log(" conditionToDeleteOrUpdate: ",  conditionToDeleteOrUpdate)


      // ----- set per selected variable , operator, value ---------//
     // Set pre-selected variable, operator, and value
          useEffect(() => {
            if (conditionToDeleteOrUpdate) {
              // Find the matching variable
              const selectedVariableObj = variableList.find(
                (v) => v.selectedVariable === conditionToDeleteOrUpdate?.variableName
              );
              
              if (selectedVariableObj) {
                setSelectedVariable(selectedVariableObj);

                // Update operator list for the selected variable type
                const updatedOperatorList = operatorOptions[selectedVariableObj?.variableType];
                setOperatorList(updatedOperatorList);

                // Find and set the selected operator
                const selectedOperatorObj = updatedOperatorList.find((oper) => 
                  conditionToDeleteOrUpdate?.validation[oper.operator]
                );

                setSelectedOperator(selectedOperatorObj || updatedOperatorList[0]);

                // Set the condition value
                setConditonValue(conditionToDeleteOrUpdate?.value || "");
              }
            }
          }, [conditionToDeleteOrUpdate, variableList]);


    //====== function handle selectd operator ============//
    function handleSelectOperator(value){
        const operatorObject = operatorList.find((oper)=>oper?.operator === value);
       // console.log("operator clicked; ", operatorObject);
        setSelectedOperator(operatorObject);
    
      }

     

      //====== function handle Clicked variavle Options ============//

      function handleClickVariableOption(selectedVariable) {
        const selectedObject = variableList.find(
          (variable) => variable.selectedVariable === selectedVariable
        );
        setSelectedVariable(selectedObject);
      }

      //======= functions save individual variable options ==========//
      function handleSaveSmallConditon(){

        if(!selectedVariable?.selectedVariable || !selectedOperator.operator){
            return;
        }


        const validation = {};

        operatorList.forEach((operator) => {
          validation[operator.operator] = operator.operator === selectedOperator.operator;
        });
    
        const individualCondition = {
          variableName: selectedVariable?.selectedVariable,
          validation:{
            ...validation,
              
          },
          value:conditionValue,
          conditionTitle: `${selectedVariable?.selectedVariable} ${selectedOperator.operator} ${conditionValue}`

    
        }

        console.log("newIndividualCondition: ", individualCondition)

        if(conditionToDeleteOrUpdate){
            handleUpdateSmallCondition(individualCondition);

          return;

        }

        handleInsertSmallConditon(individualCondition);
      }

     // console.log("selected operator: ", selectedOperator)






    return(
        <>
        <div className={styles.ConditionalModalContainer}>
            <div className={styles.miniConditionalModal}>
                <div className={styles.modalContent}>
                    <label htmlFor="selectedVariable" className={styles.miniConditionalModalLabel}>
                        If:
                    </label>
                    <select
                        id="selectedVariable"
                        className={styles.dropdown}
                        onChange={(e) => handleClickVariableOption(e.target.value)}
                    >
                        {variableList && variableList.length > 0 ? (
                        variableList.map((variable, index) => (
                            <option key={index} value={variable.selectedVariable}>
                            {variable.selectedVariable}
                            </option>
                        ))
                        ) : (
                        <option value="" disabled>No options available</option>
                        )}
                    </select>
                    </div>

                    {/* Operator selection dropdown */}
                    <div className={styles.modalContent}>
                    <label htmlFor="selectedOperator" className={styles.miniConditionalModalLabel}>
                        Operator:
                    </label>
                    <select id="selectedOperator"

                    onChange={(e)=> handleSelectOperator(e.target.value)}
                    
                    className={styles.dropdown}>

                        {operatorList && operatorList.length > 0 ? (
                        operatorList.map((oper, index) => (
                            <option key={index} value={oper.operator}>
                            {oper.name}
                            </option>
                        ))
                        ) : (
                        <option value="" disabled>No options available</option>
                        )}
                    </select>
                    </div>

                    {/* Value input field for the selected operator */}

                    { !selectedOperator?.operator !== "is_empty" && (
                           <div className={styles.valueDiv}>
                           <label htmlFor="variableValue">Value</label>
                           <input type="text" value={conditionValue} onChange={(e)=>setConditonValue(e.target.value)}
                               placeholder="Enter value" />
                           </div>

                    )}

                { selectedOperator?.operator !== "is_empty" && (
                        <div className={styles.caseSensativeContainer}>

                        { caseSensative?(
                            <FaCheckSquare onClick={()=>setCaseSensative(false)} className={styles.activeCheched} />
                        ):(
                            <div onClick={()=>setCaseSensative(true)} className={styles.unSelectDiv}></div>
    
                        )
                        } <span>Case Sensitive?</span>
                        
    
                     </div>

                )}
                 
                <div className={styles.operatorButtonContainer}>

                      <button onClick={()=>handleDeleteSmallCondition()}>Delete</button>

                        <button onClick={()=>toggleSmallConditionalModal()}
                         className={styles.cancleButton}>Cancle</button>
                        <button onClick={()=>handleSaveSmallConditon()}>Save</button>

                </div>

        </div>
        
 </div>       
  </> )}
 
 























