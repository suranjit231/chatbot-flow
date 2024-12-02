// import { useState } from "react";

// import styles from "./apiCallCss/ResponseComponent.module.css";
// import { RiDeleteBin6Line } from "react-icons/ri";

// import ApiCallVariableList from "../../utility/ApiCallVariableList";
// import ResponseVariableDropDown from "./ResponseVariableMenu";
// import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";


// export default function ResponseComponent(){
  

//       const [search, setSearch] = useState("");
//       const [ selectedOptions, setSelectedOptions ] = useState(null);
//       const [ isShowResponseVariableList, setShowResponseVariableList ] = useState(false);
//       const [isFocused, setIsFocused] = useState(false);
//       const [ matchedPathVariableList, setMatchedPathVariableList ] = useState([]);
//       const [ jsonPath, setJsonPath ] = useState("");

//       const handleClearSelection = () => {
//         console.log("handle clear selection Called: ")
//         setSelectedOptions(null);
//         setSearch("");
//         setIsFocused(false); // Reset focus state
//       };

    


//       function getSelectOptions(option){
//         console.log("selectedOptions in parents: ", option);
//         setSelectedOptions(option);
//         setShowResponseVariableList(false);
//       }


//       //========= function handle clicked addPathVariable list =========//
//       function addPathMatchedVariableList(){
//         if(jsonPath === "" || selectedOptions===null){
//             return;

//         }

//         setMatchedPathVariableList((prev)=>([...prev, {jsonPath:jsonPath, value:selectedOptions}]));

//         setJsonPath("");
//         setSelectedOptions(null);

//       }



//       console.log("selected options: ", selectedOptions);
//       console.log(" matchedPathVariableList list: ", matchedPathVariableList)


//       function handleClickDeleteMapVariable(idx){
//         setMatchedPathVariableList((prev)=>[...prev, prev.map((item, i)=> i === idx ? item.value=null : item)])
//       }
    
    

//     return(
//         <div className={styles.responseComponentContainer} >
//             <div className={styles.statusCodeTitle}>
//                 <p className={styles.statusCodePara}>Response Headers (Response code: 0) </p>
//             </div>

//             <div className={styles.bodyAndResponsePathContainer}>
//                 <div className={styles.responseBodyBox}>

//                 </div>

//                 <div className={styles.jsonPathAndMapDropDownBoxContainer}>
//                     <div className={styles.jsonPathBox}>
//                         <p>JSON Path </p>
//                         <div className={styles.jsonInputBoxWrapper}>
//                             <input type="text" value={jsonPath} onChange={(e)=> setJsonPath(e.target.value)}
//                              placeholder="JSON path" />

//                             <button>check</button>
//                         </div>
//                     </div>

//                     <div className={styles.mappingBoxContainer}>
//                         <p>Map response to custom field</p>
//                         <div className={styles.mappingDropDownBoxAndInputContainer}>

//                             <div className={styles.inputWrapper}>

//                             { isShowResponseVariableList && (
//                                 <ResponseVariableDropDown
                            
//                                 position={{ bottom: "40px", left: "0" }}
//                                 search={search}
//                                 getSelectOptions={getSelectOptions}
//                                 setSelectedOptions={setSelectedOptions}
    
//                                 />

//                             )}

                           
//                                 <input
//                                 type="text"
//                                 placeholder={selectedOptions ? selectedOptions?.key : "Search or add variable..."}
//                                 className={styles.searchInput}
//                                 value={search || (isFocused ? "" : selectedOptions?.key || "")}
//                                 onChange={(e) => setSearch(e.target.value)}
//                                 onFocus={() => setIsFocused(true)}
//                                 onBlur={() => setIsFocused(false)}
//                                 />

//                                 {selectedOptions && (
//                                 <span
                                
//                                     className={styles.clearButton}
//                                     onClick={handleClearSelection}
//                                 >
//                                     ✕
//                                 </span>
//                                 )}


//                                 {!selectedOptions && (
//                                     <>
//                                      { isShowResponseVariableList ? (
//                                      <IoIosArrowUp onClick={()=>setShowResponseVariableList((prev)=>!prev)}
//                                       className={styles.arrow}/>

//                                      ):(

//                                     <IoIosArrowDown onClick={()=>setShowResponseVariableList((prev)=>!prev)}
//                                      className={styles.arrow} />

//                                 )}
                                    
//                                     </>

//                                 )}


                               

//                             </div>

//                             <button onClick={()=>addPathMatchedVariableList()} >Add</button>
//                         </div>


//                     </div>


//                 </div>

//             </div>

//             <div className={styles.responseMappingListContainer}>

//                 { matchedPathVariableList &&
//                 matchedPathVariableList?.length>0 ? matchedPathVariableList?.map((mapList, idx)=>(

                    
//                     <div className={styles.responseMappingList} key={idx}>

//                         <div className={`${styles.jsonPathInputBox} ${styles.commonBox}`}>
//                             <input value={mapList?.jsonPath} 
//                             type="text" placeholder="JSON path" className={styles.mappingInput}></input>
//                         </div>

//                         <div className={`${styles.MappingInputBox} ${styles.commonBox}`}>
//                             <input
//                                 type="text"
//                                 placeholder={isFocused && mapList?.value ? mapList?.value?.key : "Value"}
//                                 className={styles.searchInput}
//                                 value={mapList?.value?.key || ""}
//                                 onChange={(e) => setSearch(e.target.value)}
//                                 onFocus={() => setIsFocused(true)}
//                                 onBlur={() => setIsFocused(false)}
//                             />

//                             <span
//                                 className={styles.crossIcon}
//                                 onClick={()=>handleClickDeleteMapVariable(idx)}
//                             >
//                                 ✕
//                             </span>


//                             {!mapList?.value && (
//                                     <>
//                                      { isShowResponseVariableList ? (
//                                      <IoIosArrowUp onClick={()=>setShowResponseVariableList((prev)=>!prev)}
//                                       className={styles.arrow}/>

//                                      ):(

//                                     <IoIosArrowDown onClick={()=>setShowResponseVariableList((prev)=>!prev)}
//                                      className={styles.arrow} />

//                                 )}
                                    
//                                     </>

//                                 )}


//                         </div>

//                         <div className={`${styles.fallbackInputBox} ${styles.commonBox}`}>
//                             <input type="text" placeholder="Fallback value" className={styles.mappingInput}></input>
//                         </div>

//                     <RiDeleteBin6Line className={styles.deleteIcon} />
//                     </div>
//                 )):(null

//                     // <div className={styles.responseMappingList}>
//                     //     <div className={`${styles.jsonPathInputBox} ${styles.commonBox}`}>
//                     //         <input type="text" placeholder="JSON path" className={styles.mappingInput}></input>
//                     //     </div>

//                     //     <div className={`${styles.MappingInputBox} ${styles.commonBox}`}>
//                     //         <input type="text" placeholder="Value" className={styles.mappingInput}></input>
//                     //     </div>

//                     //     <div className={`${styles.fallbackInputBox} ${styles.commonBox}`}>
//                     //         <input type="text" placeholder="Fallback value" className={styles.mappingInput}></input>
//                     //     </div>

//                     // </div>

//                 )}

//             </div>
           
//         </div>
//     )
// }
















































// import { useState } from "react";

// import styles from "./apiCallCss/ResponseComponent.module.css";
// import { RiDeleteBin6Line } from "react-icons/ri";

// import ResponseVariableDropDown from "./ResponseVariableMenu";
// import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

// export default function ResponseComponent() {
//   const [search, setSearch] = useState("");
//   const [selectedOptions, setSelectedOptions] = useState(null);
//   const [isShowResponseVariableList, setShowResponseVariableList] = useState(false);
//   const [isFocused, setIsFocused] = useState(false);
//   const [matchedPathVariableList, setMatchedPathVariableList] = useState([]);
//   const [jsonPath, setJsonPath] = useState("");

//   const [ isIndividualValueMenu, setIndividualValueMenu ] = useState(null)

//   const handleClearSelection = () => {
//     setSelectedOptions(null);
//     setSearch("");
//     setIsFocused(false); // Reset focus state
//   };

//   const getSelectOptions = (option) => {
//     setSelectedOptions(option);
//     setShowResponseVariableList(false);
//   };

//   const addPathMatchedVariableList = () => {
//     if (jsonPath === "" || !selectedOptions) {
//       return; // Prevent adding invalid entries
//     }

//     setMatchedPathVariableList((prev) => [
//       ...prev,
//       { jsonPath: jsonPath, value: selectedOptions },
//     ]);

//     setJsonPath("");
//     handleClearSelection();
//   };

//   const handleClickDeleteMapVariable = (idx) => {
//     setMatchedPathVariableList((prev) =>
//       prev.filter((_, i) => i !== idx) // Remove item by index
//     );
//   };


//   function handleClickDeleteOnlyVariable(idx){
//     setMatchedPathVariableList((prev)=>[prev?.map((item, i)=>{
//         if(idx === i){
//             item.value = null
//         }

//         return item;
//     })])

//   }

//   const updateMappedValue = (idx, newValue) => {
//     setMatchedPathVariableList((prev) =>
//       prev.map((item, i) => (i === idx ? { ...item, value: newValue } : item))
//     );
//   };

//   return (
//     <div className={styles.responseComponentContainer}>
//       <div className={styles.statusCodeTitle}>
//         <p className={styles.statusCodePara}>Response Headers (Response code: 0)</p>
//       </div>

//       <div className={styles.bodyAndResponsePathContainer}>
//         <div className={styles.responseBodyBox}></div>

//         <div className={styles.jsonPathAndMapDropDownBoxContainer}>
//           <div className={styles.jsonPathBox}>
//             <p>JSON Path</p>
//             <div className={styles.jsonInputBoxWrapper}>
//               <input
//                 type="text"
//                 value={jsonPath}
//                 onChange={(e) => setJsonPath(e.target.value)}
//                 placeholder="JSON path"
//               />
//               <button>Check</button>
//             </div>
//           </div>

//           <div className={styles.mappingBoxContainer}>
//             <p>Map response to custom field</p>
//             <div className={styles.mappingDropDownBoxAndInputContainer}>
//               <div className={styles.inputWrapper}>
//                 {isShowResponseVariableList && (
//                   <ResponseVariableDropDown
//                     position={{ bottom: "40px", left: "0" }}
//                     search={search}
//                     getSelectOptions={getSelectOptions}
//                     setSelectedOptions={setSelectedOptions}
//                   />
//                 )}

//                 <input
//                   type="text"
//                   placeholder={selectedOptions ? selectedOptions?.key : "Search or add variable..."}
//                   className={styles.searchInput}
//                   value={search || (isFocused ? "" : selectedOptions?.key || "")}
//                   onChange={(e) => setSearch(e.target.value)}
//                   onFocus={() => setIsFocused(true)}
//                   onBlur={() => setIsFocused(false)}
//                 />

//                 {selectedOptions && (
//                   <span className={styles.clearButton} onClick={handleClearSelection}>
//                     ✕
//                   </span>
//                 )}

//                 {!selectedOptions && (
//                   <>
//                     {isShowResponseVariableList ? (
//                       <IoIosArrowUp
//                         onClick={() => setShowResponseVariableList((prev) => !prev)}
//                         className={styles.arrow}
//                       />
//                     ) : (
//                       <IoIosArrowDown
//                         onClick={() => setShowResponseVariableList((prev) => !prev)}
//                         className={styles.arrow}
//                       />
//                     )}
//                   </>
//                 )}
//               </div>

//               <button onClick={addPathMatchedVariableList}>Add</button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className={styles.responseMappingListContainer}>
//         {matchedPathVariableList.map((mapList, idx) => (

             
//           <div className={styles.responseMappingList} key={idx}>

//              {/* ======== individual mapping list ========== */}
//             <div className={`${styles.jsonPathInputBox} ${styles.commonBox}`}>
//               <input
//                 type="text"
//                 value={mapList?.jsonPath}
//                 placeholder="JSON path"
//                 className={styles.mappingInput}
//                 readOnly
//               />
//             </div>

          

//             <div className={`${styles.MappingInputBox} ${styles.commonBox}`}>
//               <input
//                 type="text"
//                 placeholder="Value"
//                 className={styles.searchInput}
//                 value={mapList?.value?.key || ""}
//                 onChange={(e) =>
//                   updateMappedValue(idx, { ...mapList.value, key: e.target.value })
//                 }
//               />

//               { mapList?.value ? (
//                 <span className={styles.crossIcon} onClick={() => handleClickDeleteOnlyVariable(idx)}>
//                     ✕
//                 </span>
//               ):(

//                 <>
//                 {isIndividualValueMenu ? (
//                   <IoIosArrowUp
//                     onClick={() => setIndividualValueMenu((prev)=>!prev)}
//                     className={styles.arrow}
//                   />
//                 ) : (
//                   <IoIosArrowDown
//                     onClick={() => setIndividualValueMenu((prev)=>!prev)}
//                     className={styles.arrow}
//                   />
//                 )}
//               </>

//               )}


//                 {isIndividualValueMenu && (
//                   <ResponseVariableDropDown
//                     position={{ bottom: "40px", left: "0" }}
//                     search={search}
//                     getSelectOptions={getSelectOptions}
//                     setSelectedOptions={setSelectedOptions}
//                   />
//                 )}
            
//             </div>

//             <div className={`${styles.fallbackInputBox} ${styles.commonBox}`}>
//               <input type="text" placeholder="Fallback value" className={styles.mappingInput} />
//             </div>

//             <RiDeleteBin6Line
//               className={styles.deleteIcon}
//               onClick={() => handleClickDeleteMapVariable(idx)}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }







































// import { useState } from "react";
// import styles from "./apiCallCss/ResponseComponent.module.css";
// import { RiDeleteBin6Line } from "react-icons/ri";

// import ResponseVariableDropDown from "./ResponseVariableMenu";
// import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

// export default function ResponseComponent() {
//   const [search, setSearch] = useState("");
//   const [selectedOptions, setSelectedOptions] = useState(null);
//   const [isShowResponseVariableList, setShowResponseVariableList] = useState(false);
//   const [isFocused, setIsFocused] = useState(false);
//   const [matchedPathVariableList, setMatchedPathVariableList] = useState([]);
//   const [jsonPath, setJsonPath] = useState("");
//   const [individualValueMenus, setIndividualValueMenus] = useState([]); // Track dropdown visibility per item

//   const handleClearSelection = () => {
//     setSelectedOptions(null);
//     setSearch("");
//     setIsFocused(false); // Reset focus state
//   };

//   const getSelectOptions = (option) => {
//     setSelectedOptions(option);
//     setShowResponseVariableList(false);
//   };

//   const addPathMatchedVariableList = () => {
//     if (jsonPath === "" || !selectedOptions) {
//       return; // Prevent adding invalid entries
//     }

//     setMatchedPathVariableList((prev) => [
//       ...prev,
//       { jsonPath: jsonPath, value: selectedOptions },
//     ]);
//     setIndividualValueMenus((prev) => [...prev, false]); // Initialize dropdown state for new item
//     setJsonPath("");
//     handleClearSelection();
//   };

//   const handleClickDeleteMapVariable = (idx) => {
//     setMatchedPathVariableList((prev) =>
//       prev.filter((_, i) => i !== idx) // Remove item by index
//     );
//     setIndividualValueMenus((prev) =>
//       prev.filter((_, i) => i !== idx) // Remove dropdown state for the deleted item
//     );
//   };

//   const handleClickDeleteOnlyVariable = (idx) => {
//     setMatchedPathVariableList((prev) =>
//       prev.map((item, i) => {
//         if (idx === i) {
//           item.value = null;
//         }
//         return item;
//       })
//     );
//   };

//   const toggleDropdown = (idx) => {
//     setIndividualValueMenus((prev) =>
//       prev.map((isOpen, i) => (i === idx ? !isOpen : isOpen)) // Toggle the dropdown for the specific index
//     );
//   };

//   const updateMappedValue = (idx, newValue) => {
//     setMatchedPathVariableList((prev) =>
//       prev.map((item, i) => (i === idx ? { ...item, value: newValue } : item))
//     );
//   };

//   return (
//     <div className={styles.responseComponentContainer}>
//       {/* Form inputs for JSON path and mapping */}
//       <div className={styles.bodyAndResponsePathContainer}>
//         <div className={styles.jsonPathAndMapDropDownBoxContainer}>
//           <div className={styles.jsonPathBox}>
//             <p>JSON Path</p>
//             <div className={styles.jsonInputBoxWrapper}>
//               <input
//                 type="text"
//                 value={jsonPath}
//                 onChange={(e) => setJsonPath(e.target.value)}
//                 placeholder="JSON path"
//               />
//               <button>Check</button>
//             </div>
//           </div>

//           <div className={styles.mappingBoxContainer}>
//             <p>Map response to custom field</p>
//             <div className={styles.mappingDropDownBoxAndInputContainer}>
//               <div className={styles.inputWrapper}>
//                 {isShowResponseVariableList && (
//                   <ResponseVariableDropDown
//                     position={{ bottom: "40px", left: "0" }}
//                     search={search}
//                     getSelectOptions={getSelectOptions}
//                     setSelectedOptions={setSelectedOptions}
//                   />
//                 )}

//                 <input
//                   type="text"
//                   placeholder={selectedOptions ? selectedOptions?.key : "Search or add variable..."}
//                   className={styles.searchInput}
//                   value={search || (isFocused ? "" : selectedOptions?.key || "")}
//                   onChange={(e) => setSearch(e.target.value)}
//                   onFocus={() => setIsFocused(true)}
//                   onBlur={() => setIsFocused(false)}
//                 />

//                 {selectedOptions && (
//                   <span className={styles.clearButton} onClick={handleClearSelection}>
//                     ✕
//                   </span>
//                 )}

//                 {!selectedOptions && (
//                   <>
//                     {isShowResponseVariableList ? (
//                       <IoIosArrowUp
//                         onClick={() => setShowResponseVariableList((prev) => !prev)}
//                         className={styles.arrow}
//                       />
//                     ) : (
//                       <IoIosArrowDown
//                         onClick={() => setShowResponseVariableList((prev) => !prev)}
//                         className={styles.arrow}
//                       />
//                     )}
//                   </>
//                 )}
//               </div>

//               <button onClick={addPathMatchedVariableList}>Add</button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mapped list display */}
//       <div className={styles.responseMappingListContainer}>
//         {matchedPathVariableList.map((mapList, idx) => (
//           <div className={styles.responseMappingList} key={idx}>
//             <div className={`${styles.jsonPathInputBox} ${styles.commonBox}`}>
//               <input
//                 type="text"
//                 value={mapList?.jsonPath}
//                 placeholder="JSON path"
//                 className={styles.mappingInput}
//                 readOnly
//               />
//             </div>

//             <div className={`${styles.MappingInputBox} ${styles.commonBox}`}>
//               <input
//                 type="text"
//                 placeholder="Value"
//                 className={styles.searchInput}
//                 value={mapList?.value?.key || ""}
//                 onChange={(e) =>
//                   updateMappedValue(idx, { ...mapList.value, key: e.target.value })
//                 }
//               />

//               {mapList?.value ? (
//                 <span
//                   className={styles.crossIcon}
//                   onClick={() => handleClickDeleteOnlyVariable(idx)}
//                 >
//                   ✕
//                 </span>
//               ) : (
//                 <>
//                   {individualValueMenus[idx] ? (
//                     <IoIosArrowUp
//                       onClick={() => toggleDropdown(idx)}
//                       className={styles.arrow}
//                     />
//                   ) : (
//                     <IoIosArrowDown
//                       onClick={() => toggleDropdown(idx)}
//                       className={styles.arrow}
//                     />
//                   )}
//                 </>
//               )}

//               {individualValueMenus[idx] && (
//                 <ResponseVariableDropDown
//                   position={{ bottom: "40px", left: "0" }}
//                   search={search}
//                   getSelectOptions={getSelectOptions}
//                   setSelectedOptions={(option) => {
//                     updateMappedValue(idx, option);
//                     toggleDropdown(idx); // Close dropdown after selection
//                   }}
//                 />
//               )}
//             </div>

//             <div className={`${styles.fallbackInputBox} ${styles.commonBox}`}>
//               <input type="text" placeholder="Fallback value" className={styles.mappingInput} />
//             </div>

//             <RiDeleteBin6Line
//               className={styles.deleteIcon}
//               onClick={() => handleClickDeleteMapVariable(idx)}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }















































import { useEffect, useState } from "react";
import styles from "./apiCallCss/ResponseComponent.module.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import ResponseVariableDropDown from "./ResponseVariableMenu";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import JsonPathExplorer from "./JsonPathExplorer";

export default function ResponseComponent({ apiResponse, setApiResponse}) {
  const [jsonPath, setJsonPath] = useState("");
  const [isShowResponseVariableList, setShowResponseVariableList] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState(null);

  const [matchedPathVariableList, setMatchedPathVariableList] = useState([]);
  const [individualStates, setIndividualStates] = useState([]); 
  const [ fallbackInputText, setFallbackInputtext ] = useState("");
  const [ currentFallbackInput, setCurrentFallbackInput ] = useState(null);

  


  

  // Add a new path-variable mapping
  const addPathMatchedVariableList = () => {
    if (jsonPath === "" || !selectedOptions) {
      return; // Prevent adding invalid entries
    }

    setMatchedPathVariableList((prev) => [
      ...prev,
      { jsonPath: jsonPath, value: selectedOptions },
    ]);

    // Initialize dropdown, search, and menu visibility for the new item
    setIndividualStates((prev) => [
      ...prev,
      { search: "", showDropdown: false },
    ]);

    setJsonPath("");
    setSelectedOptions(null);
    setShowResponseVariableList(false);
  };

  // Delete a mapped variable
  const handleClickDeleteMapVariable = (idx) => {
    setMatchedPathVariableList((prev) =>
      prev.filter((_, i) => i !== idx)
    );

    setIndividualStates((prev) =>
      prev.filter((_, i) => i !== idx)
    );
  };


  function handleChangesOnFallbackInput(idx, fallbackValue){
    setMatchedPathVariableList((prev) =>
      prev.map((item, i) => (i === idx ? { ...item, fallback: fallbackValue } : item))
    );
   
  }

  // Clear individual variable
  // const handleClickDeleteOnlyVariable = (idx) => {
  //   setMatchedPathVariableList((prev) =>
  //     prev.map((item, i) => (i === idx ? { ...item, value: null } : item))
  //   );
  // };


  function handleClickDeleteOnlyVariable(index){
    console.log("handleClickDeleteOnlyVariable is called: ", index)
    setMatchedPathVariableList((prev)=>[...prev.map((item, i)=>{
      if(i===index){
        item.value = null
      }

      return item;
    })])
  }

  console.log("matchedPathVariableList: ", matchedPathVariableList)

  // Update mapped value for individual items
  const updateMappedValue = (idx, newValue) => {
    setMatchedPathVariableList((prev) =>
      prev.map((item, i) => (i === idx ? { ...item, value: newValue } : item))
    );

    // Update the corresponding search state
    setIndividualStates((prev) =>
      prev.map((state, i) => (i === idx ? { ...state, search: newValue.key } : state))
    );
  };

  // Toggle individual dropdown visibility
  const toggleDropdown = (idx) => {
    setIndividualStates((prev) =>
      prev.map((state, i) => (i === idx ? { ...state, showDropdown: !state.showDropdown } : state))
    );
  };


  function getSelectedPath(selectedPath){
    setJsonPath(selectedPath);
  }





  return (
    <div className={styles.responseComponentContainer}>
      {/* Form inputs for JSON path and mapping */}
      <div className={styles.bodyAndResponsePathContainer}>


        <div className={styles.bodyAndResponseContainer}>
          <JsonPathExplorer apiResponse={apiResponse} getSelectedPath={getSelectedPath} />

        </div>




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
                  placeholder={
                    selectedOptions ? selectedOptions?.key : "Search or add variable..."
                  }
                  className={styles.searchInput}
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
              <button onClick={addPathMatchedVariableList}>Add</button>
            </div>
          </div>
        </div>
        
      </div>







      {/* Mapped list display */}
      <div className={styles.responseMappingListContainer}>
        {matchedPathVariableList.map((mapList, idx) => (
          <div className={styles.responseMappingList} key={idx}>
            <div className={`${styles.jsonPathInputBox} ${styles.commonBox}`}>
              <input
                type="text"
                value={mapList?.jsonPath}
                placeholder="JSON path"
                className={styles.mappingInput}
                readOnly
              />
            </div>

            <div className={`${styles.MappingInputBox} ${styles.commonBox}`}>
              <input
                type="text"
                placeholder="Value"
                className={styles.searchInput}
                value={mapList?.value?.key || ""}
                onChange={(e) =>
                  updateMappedValue(idx, { ...mapList.value, key: e.target.value })
                }
              />

              {mapList?.value ? (
                <span
                  className={styles.crossIcon}
                  onClick={() => handleClickDeleteOnlyVariable(idx)}
                >
                  ✕
                </span>
              ) : (
                <>
                  {individualStates[idx]?.showDropdown ? (
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

              {individualStates[idx]?.showDropdown && (
                <ResponseVariableDropDown
                  position={{ bottom: "40px", left: "0" }}
                  search={individualStates[idx]?.search || ""}
                  getSelectOptions={(option) => {
                    updateMappedValue(idx, option);
                    toggleDropdown(idx); // Close dropdown after selection
                  }}
                />
              )}
            </div>

            <div className={`${styles.fallbackInputBox} ${styles.commonBox}`}>
              <input
                type="text"
                placeholder="Fallback value"
                className={styles.mappingInput}
                value={mapList?.fallback}
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






      
    </div>
  );
}
