import React, { useEffect, useState } from "react";
import { useFlowContext } from "../../context/FlowContext";
import styles from "../../styles/ConditionalNode.module.css";
import ConditionalMiniModal from "./ConditionalModel";
import { MdOutlineLogout } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { BiMessageDetail } from "react-icons/bi";

import NextStepModalList from "../nextStepModal/NextStepModalList";

export default function ConditionNode() {
  const { updateNodes, nodes, selectedNode, availableNodes, setSelectedNode } = useFlowContext();
  const [label, setLabel] = useState("");
  const [selectedCondition, setSelectedCondition] = useState("All Conditions (AND)");
  const [ conditionGroupList, setConditionGroupList ] = useState([]);
  const [ isShowSmallConditionModel, setIsShowSmallConditionalModal ] = useState(false);

  const [ isShowNextStepNodeList, setShowNextStepNodeList ] = useState(false);
  const [ selectedConditionalGroup, setSelectedConditionGroup ] = useState(null);

  const [isSetOtherWiseConditionalGroup, setOtherWiseConditionalGroup] = useState(null);
  const [ isActiveGroupIsOtherWise, setIsActiveGroupOtherWise ] = useState(false);

  const [ selectedSmallCondition, setSelectedSmallCondition]  = useState(null);
  const [ conditionToDeleteOrUpdate, setConditionToDeleteOrUpdate ] = useState(null);

  const [conditionalGroupListWithOtherWist, setConditionGroupListWithOtherWise ] = useState({
    conditionGroupList:[],
    otherWise:null
  });

 
  // ====== a conditional group ===========//
  const [ conditionalGroup, setConditionGroup ] = useState({
    conditionName:"",
        conditionsChoosed:{
          or_condition: true,
          and_condition: false

      },
    goto:"",
    conditions:[]

  })


  useEffect(() => {
    setConditionGroupListWithOtherWise((prev) => ({
      ...prev,
      conditionGroupList: [...conditionGroupList],
      otherWise: isSetOtherWiseConditionalGroup || null, 
    }));
  }, [conditionGroupList, isSetOtherWiseConditionalGroup, conditionalGroup]);


  // ====== Update conditional group whenever state changes ====== //
  useEffect(() => {
    setConditionGroup((prev) => ({
      ...prev,
      conditionsChoosed: {
        or_condition: selectedCondition === "Any Condition (OR)",
        and_condition: selectedCondition === "All Conditions (AND)",
      },
    }));
  }, [selectedCondition, conditionalGroup.conditions]);
 

  //====== function set all condtions or any condition =============//
  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedCondition(value === "and" ? "All Conditions (AND)" : "Any Condition (OR)");
  };

  //======= toggle small conditional modal form =============//
  function toggleSmallConditionalModal(condGroupIndex){
      setSelectedConditionGroup(condGroupIndex)
      setIsShowSmallConditionalModal((prev)=>!prev)
  }

  //========= function updateNextSteps in condition group ===========//
  function setNextStepTonConditionGroup(selectedStepNode){

    setConditionGroupList((prev) =>
      prev.map((group, idx) =>
        idx === selectedConditionalGroup ? { ...group, goto: { ...selectedStepNode } } : group
      )
    );

    setShowNextStepNodeList();
    setSelectedConditionGroup(null);

  }




  // ========= handle set variable =============//
 


  // ========= handle select operator ===========//



  // ======== handle save small condion ==========//
  function handleInsertSmallConditon(individualCondition){

    setConditionGroupList((prev) =>
      prev.map((group, idx) =>
        idx === selectedConditionalGroup
          ? { ...group, conditions: [...group.conditions, individualCondition] }
          : group
      )
    );

    setSelectedConditionGroup(null);
    toggleSmallConditionalModal();

  }

   // Update an existing small condition
   function handleUpdateSmallCondition(updatedCondition) {
    setConditionGroupList((prev) =>
      prev.map((group, idx) =>
        idx === selectedConditionalGroup
          ? {
              ...group,
              conditions: group.conditions.map((condition, idx) =>
                idx === selectedSmallCondition ? updatedCondition : condition
              ),
            }
          : group
      )
    );
    setSelectedSmallCondition(null);
    setIsShowSmallConditionalModal(false);

    setConditionToDeleteOrUpdate(null);

  }

  
  function handleDeleteSmallCondition() {
    if (selectedConditionalGroup === null || !conditionToDeleteOrUpdate) return;

    console.log("handleDelete trigger : ", selectedConditionalGroup, conditionToDeleteOrUpdate)
  
    setConditionGroupList((prev) =>
      prev.map((group, idx) =>
        idx === selectedConditionalGroup
          ? {
              ...group,
              conditions: group.conditions.filter(
                (condition, condIndex) => condIndex !== selectedSmallCondition
              ),
            }
          : group
      )
    );
  
    setSelectedSmallCondition(null);
    setIsShowSmallConditionalModal(false);
    setConditionToDeleteOrUpdate(null);
  }
  

  function handleClickSmallCondition(smallIdx, idx, conditionData){

    console.log(`smallIdx: ${smallIdx}  , idx: ${idx}`)

    setSelectedConditionGroup(idx);
    setSelectedSmallCondition(smallIdx);
   setConditionToDeleteOrUpdate(conditionData)
    setIsShowSmallConditionalModal(true);
  }

 

  //======== function handle click condition group ==========//
  function handleClickAddConditionGroup(){
    const defaultConditionGroup = {
      conditionName: "",
      conditionsChoosed: {
        or_condition: true, 
        and_condition: false,
      },
      goto: "",
      conditions: [], 
    };
  
    setConditionGroupList((prev) => [...prev, defaultConditionGroup]);

  }

  // ========= function setShow next step list modal ===============//
  function toggleShowShowNextListModal(idx){
    setSelectedConditionGroup(idx)
    setShowNextStepNodeList((prev)=> !prev);

  }

  // ========= function handleClickSetOtherWise() ===========//
  function handleClickSetOtherWise(){
   
    setIsActiveGroupOtherWise(true);
    setShowNextStepNodeList(true);

  }


  function handleSetOtherWiseFields(gotoNode){
    setOtherWiseConditionalGroup({...gotoNode});
    setIsActiveGroupOtherWise(false);
    setShowNextStepNodeList(false);

  }


  console.log("conditionalGroupListWithOtherWist: ", conditionalGroupListWithOtherWist);


  function deleteOtherWise(){
    setConditionGroupListWithOtherWise((prev)=> ({...prev, otherWise:null}));

  }


  function deleteGoto(condGroupIndex){

    if (condGroupIndex === null) return;

    console.log("delete goto clicked: ", condGroupIndex);

        // setConditionGroupListWithOtherWise((prev) =>(
        //   {
        //     ...prev,
        //     conditionGroupList:[prev.conditionGroupList.map((group, idx) =>
        //       idx === condGroupIndex
        //         ? { ...group, goto: null } // Remove the goto step
        //         : group
        //     )]
        //   }
        // )
          
        // );

        setConditionGroupList((prev) =>
          prev.map((group, idx) =>
            idx === condGroupIndex
              ? { ...group, goto: null } // Remove the goto step
              : group
          )
        );
   
  }



  return (

    <>
    <div className={styles.conditioalContainer}>
      <div className={styles.conitionIdBox}>#Condition{selectedNode?.id}</div>
      <div className={styles.labelInputDiv}>
        <input
          type="text"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          placeholder="Add your custom tag"
        />
      </div>


 { conditionGroupList && conditionGroupList?.length>0 && conditionGroupList?.map((conditionalGroup, idx)=>(

<div key={idx} className={styles.conditionGroupContainer}>

      {/* And/Or selection dropdown */}
      <div className={styles.AndOrDivDropDownContainer}>
        <label htmlFor="conditionSelect" className={styles.label}>
        if match
        </label>
        <select id="conditionSelect" onChange={handleChange} className={styles.select}>
          <option value="and">All Conditions (AND)</option>
          <option value="or">Any Condition (OR)</option>
        </select>
      </div>

      {/* ========= small conditiona list patter ========== */}
      <div className={styles.smallConditionalListContainer}>
        { conditionalGroup &&
        conditionalGroup?.conditions?.length>0 &&
        conditionalGroup?.conditions.map((condition, smallIdx)=>(
          <p onClick={()=> handleClickSmallCondition(smallIdx, idx, condition)}

           className={styles.smallConditionalTitleDox}>
              {condition? condition?.conditionTitle : "User Name match pattern ^\\+?[\\d\\s-]{10,}$"}
          </p>

        ))}

      </div>

    <div onClick={()=>toggleSmallConditionalModal(idx)} className={styles.addConditionToGroupButton}>
      + Add Condition
    </div>


      <div className={styles.trueFlowContainerBox}>
          <p>Goto step</p>


        { conditionalGroup?.goto ? (

           <div className={styles.gotoFlowBox}>
                <div className={styles.gotoFlowButton}>
                    <MdOutlineLogout className={styles.gotoFlowIcon}/>
                </div>

                <p onClick={()=>setSelectedNode(conditionalGroup?.goto)}
                 className={styles.subFlowText}>{conditionalGroup?.goto?.data?.label}</p>

                <div onClick={()=>deleteGoto(idx)}
                 className={styles.deleteSubflowIcon}>
                    <IoMdClose />
                </div>
          </div>

        ):(

          <div onClick={()=>toggleShowShowNextListModal(idx)} className={styles.selectNextStepButton}>
              Select Next Step

          </div>
        )}
         
      </div>


</div>

))}
  

      {/* ========= adding new condition group button =============== */}

      <div onClick={()=>handleClickAddConditionGroup()}
       className={styles.addNewConditionGroupButton}>
        + Add Condition Group

      </div>


      <div className={styles.otherWiseContainer}>
          <p>Otherwise</p>

          { conditionalGroupListWithOtherWist?.otherWise ? (
              <div className={styles.gotoFlowBox}>
              <div className={styles.gotoFlowButton}>
                  <BiMessageDetail className={styles.gotoFlowIcon} />
              </div>
  
              <p onClick={()=>setSelectedNode(conditionalGroupListWithOtherWist?.otherWise)} className={styles.subFlowText}>
                { conditionalGroupListWithOtherWist?.otherWise.data?.label}</p>
  
              <div onClick={()=> deleteOtherWise()} className={styles.deleteSubflowIcon}>
                  <IoMdClose />
              </div>
  
            </div>

          ):(

            <div onClick={()=>handleClickSetOtherWise()} className={styles.selectNextStepButton}>
                Select Next Step
            </div>
          )}
        
      </div>

    </div>

    {/* ===== show only when selected add small condition ======= */}
    { isShowSmallConditionModel && (
      <ConditionalMiniModal
       handleInsertSmallConditon={handleInsertSmallConditon}
       setIsShowSmallConditionalModal={setIsShowSmallConditionalModal}
       toggleSmallConditionalModal = {toggleSmallConditionalModal}
       conditionToDeleteOrUpdate={ conditionToDeleteOrUpdate}
       handleDeleteSmallCondition = {handleDeleteSmallCondition}
       handleUpdateSmallCondition = { handleUpdateSmallCondition}

        />

    )}


    {
       isShowNextStepNodeList && (
        <NextStepModalList 
        toggleShowShowNextListModal={toggleShowShowNextListModal}
        setNextStepTonConditionGroup={setNextStepTonConditionGroup} 
        isActiveGroupIsOtherWise={isActiveGroupIsOtherWise}
        handleSetOtherWiseFields={handleSetOtherWiseFields}

        />

       )

    }


    
 </> );
}

















































