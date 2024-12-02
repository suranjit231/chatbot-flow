
import styles from "./FunctionResponse.module.css";
import FunctionJsonPathExplore from "./FunctionJsonPathExplore";
import ResponseVariableDropDown from "../apiCalls/ResponseVariableMenu";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaTrash, FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function FunctionResponse(props){

    const { functionMapList, setFunctionMapList, testResponse } = props;


    const [ jsonPath, setJsonPath] = useState("");
    const [ isShowResponseVariableList, setShowResponseVariableList] = useState(false);
    const [ selectedOptions, setSelectedOptions ] = useState(null);

    const [ searchTermState, setSearchTermState ] = useState(null);


    function getResponsePath(selectedPath){
        console.log("hello get response path called: ", selectedPath)
        setJsonPath(selectedPath);
    }

    //========= Add a new path-variable mapping ================//
  function addFunctionPathMatchedVariableList(){
    if (jsonPath === "" || !selectedOptions) {
      return; // Prevent adding invalid entries
    }

    setFunctionMapList((prev) => [
      ...prev,
      { jsonPath: jsonPath, value: selectedOptions, fallBack:"" },
    ]);

    setJsonPath("");
    setSelectedOptions(null);
    setShowResponseVariableList(false);
  };


  function handleClickDeleteOnlyVariable(index){
    console.log("handleClickDeleteOnlyVariable is called: ", index)
    setFunctionMapList((prev)=>[...prev.map((item, i)=>{
      if(i===index){
        item.value = null
      }

      return item;
    })])
  }


function handleClickDeleteMapVariable(idx){
    setFunctionMapList((prev) =>
        prev.filter((_, i) => i !== idx)
      );

}

function handleChangesOnFallbackInput(idx, fallback){
    setFunctionMapList((prev) =>
        prev.map((item, i) => (i === idx ? { ...item, fallback:fallback } : item))
      );
}


function toggleDropdown(index) {
    setFunctionMapList((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, showDropdown: !item.showDropdown } : item
      )
    );
  }



function handleSeperateSearchTerm(idx, value){
    setSearchTermState((prev)=> ({id:idx, term:value}))


}

function clearSearchTermState(idx){
    setSearchTermState(null)
}


    return(
        <div className={styles.functionResponseContainer}>

            <div className={styles.functionResponseWrapper}>


            {/* <FunctionJsonPathExplore 
            getResponsePath={getResponsePath}

             FunctionExecuteResponse={{status:"Success", name:"Suranjit",
              email:"namasudrasuranjit164@gmail.com", mobile:"7636955111"}}/> */}


        <FunctionJsonPathExplore 
            getResponsePath={getResponsePath}

            FunctionExecuteResponse={testResponse}/>



            <div className={styles.jsonPathAndMapDropDownBoxContainer}>
                    <div className={styles.jsonPathBox}>
                        <p>JSON Path</p>
                        <div className={styles.jsonInputBoxWrapper}>
                        <input
                            type="text"
                            value={jsonPath}
                            onChange={(e) => setJsonPath(e.target.value)}
                            placeholder="JSON path"
                        />
                        <button>Check</button>
                        </div>
                    </div>

                    <div className={styles.mappingBoxContainer}>
                        <p>Map response to custom field</p>
                        <div className={styles.mappingDropDownBoxAndInputContainer}>
                        <div className={styles.inputWrapper}>

                        {isShowResponseVariableList && (
                            <ResponseVariableDropDown
                                position={{ bottom: "40px", left: "0" }}
                                search={selectedOptions?.key || ""}
                                getSelectOptions={(option) => {
                                setSelectedOptions(option);
                                setShowResponseVariableList(false);
                                }}
                            />
                        )}
                           

                            <input
                            type="text"
                            className={styles.searchInput}


                            placeholder={
                                selectedOptions ? selectedOptions?.key : "Search or add variable..."
                              }
                              value={selectedOptions?.key || ""}
                              onChange={(e) => setSelectedOptions({ key: e.target.value })}
                            />

                            {selectedOptions ? (
                            <span className={styles.clearButton} onClick={() => setSelectedOptions(null)}>
                                ✕
                            </span>
                            ) : (
                            <>
                                {isShowResponseVariableList ? (
                                <IoIosArrowUp
                                     onClick={() => setShowResponseVariableList((prev) => !prev)}
                                    className={styles.arrow}
                                />
                                ) : (
                                <IoIosArrowDown
                                     onClick={() => setShowResponseVariableList((prev) => !prev)}
                                    className={styles.arrow}
                                />
                                )}
                            </>
                            )}
                        </div>
                        <button onClick={()=>addFunctionPathMatchedVariableList()}>Add</button>
                        </div>
                    </div>
                </div>

         </div>


         {/* =========== mappling list will be render here ================== */}

           {/* Mapped list display */}

           { functionMapList && functionMapList?.length> 0 && (<>
           
           
           
         
      <div className={styles.responseMappingListContainer}>

        {functionMapList?.map((mapList, idx) => (
          <div className={styles.responseMappingList} key={idx}>
            <div className={`${styles.jsonPathInputBox} ${styles.commonBox}`}>
              <input
                type="text"
                placeholder="JSON path"
                className={styles.mappingInput}
                value={mapList?.jsonPath}
              
              />
            </div>

            <div className={`${styles.MappingInputBox} ${styles.commonBox}`}>
              <input
                type="text"
                placeholder="Value"
                className={styles.searchInput}
                value={mapList?.value?.key || ""}
                onChange={(e) =>
                    setFunctionMapList((prev) =>
                    prev.map((item, i) =>
                        i === idx
                        ? { ...item, value: { ...item.value, key: e.target.value } }
                        : item
                    )
                    )
                }
                
                
              />
              { console.log(mapList?.value?.key)}

              {mapList?.value ? (
                <span
                  className={styles.crossIcon}
                  onClick={() => handleClickDeleteOnlyVariable(idx)}
                >
                  ✕
                </span>
              ) : (
                <>
                  {functionMapList[idx]?.showDropdown ? (
                    <IoIosArrowUp
                    onClick={() => toggleDropdown(idx)}
                      className={styles.arrow}
                    />
                  ) : (
                    <IoIosArrowDown
                    onClick={() => toggleDropdown(idx)}
                      className={styles.arrow}
                    />
                  )}
                </>
              )}

            
                {mapList.showDropdown && (
                  <ResponseVariableDropDown
                    position={{ bottom: "40px", left: "0" }}
                    search={mapList?.value?.key || ""}
                    getSelectOptions={(option) =>
                      setFunctionMapList((prev) =>
                        prev.map((item, i) =>
                          i === idx
                            ? { ...item, value: option, showDropdown: false }
                            : item
                        )
                      )
                    }
                  />
                )}
            </div>

            <div className={`${styles.fallbackInputBox} ${styles.commonBox}`}>
              <input
                type="text"
                placeholder="Fallback value"
                className={styles.mappingInput}
                value={mapList?.fallBack}
                onChange={(e)=>handleChangesOnFallbackInput(idx, e.target.value)}
              />
            </div>

            <RiDeleteBin6Line
              className={styles.deleteIcon}
              onClick={() => handleClickDeleteMapVariable(idx)}
            />
          </div>
        ))}
      </div>

</>)}

    </div>


    )
}