import { useState } from "react";
import styles from "./apiCallCss/ResponseRouteModal.module.css";
import { IoClose } from "react-icons/io5";
import NextStepModalList from "../nextStepModal/NextStepModalList";
import { FaGoogleDrive } from "react-icons/fa";

import { useFlowContext } from "../../context/FlowContext";

export default function ResponseRouteModal({ setShowAddResponseRouteModal,
    apiCallNodeData,
    setApiCallNodeData,
    saveNewResponseStatus

}){


    const { deteteGotoNodeAndClearItsReferences } = useFlowContext();

    const [ responseCode, setResponseCode ] = useState("");
    const [ nodeTypeIsApiCall, setNodeTypeIsApi ] = useState(true);
    const [ isShowNextStepModal, setIsShowNextStepModal ] = useState(false);
    const [ selectedGotoNode, setSelectedGotoNode ] = useState(null);

    const [ OnlyGetNode, setGoNode ] = useState(true);


    // function handleClickSaveNewResponseStatus() ============//
    function handleClickSaveNewResponseStatus(){

     
        if( responseCode === "" || selectedGotoNode === null){
            return;
        }

       
        saveNewResponseStatus({ statusCode:responseCode, gotoNode:selectedGotoNode})

    }


    function getNodeAndSetSelected(gotoData){

      

        if(gotoData){
            gotoData.icon = null;
        }


        console.log("goto data in response route modal: ", gotoData);


        setSelectedGotoNode(gotoData);
        handleClickSelectNextStep();

    }


    //======== get selected next steps ============//
    function getSelectedNextStepNodeFromApi(gotoData){
        console.log("gotoData: ", gotoData);
        setSelectedGotoNode(gotoData);
        handleClickSelectNextStep();


    }


    //======== handle click select next steps =========//
    function handleClickSelectNextStep(){
        setIsShowNextStepModal((prev)=>!prev);

    }

    // ========== function handle click delete goto node ==========//
    function handleClickDeleteGotoNode(deleteableNode){
        //console.log("node to be deleteable: ", deleteableNode);
        deteteGotoNodeAndClearItsReferences(deleteableNode);
        setSelectedGotoNode(null);

    }



    return(
    <>
        <div className={styles.responseRouteModalWrapper}>
            <div className={styles.apiResponseModalContainer}>
                    <IoClose onClick={()=>setShowAddResponseRouteModal(false)}
                     className={styles.closedModalIcon} />

                     <h3>Add Route</h3>

                     <div className={styles.responseModalBox}>

                        <div className={styles.responseStatusCodeBox}>
                            <p>If response code starts with</p>
                            <input type="text"
                            value={responseCode}
                            onChange={(e)=>setResponseCode(e.target.value)}
                             placeholder="Enter resonse code" />

                        </div>

                        <div className={styles.responseStatusGotoBox}>
                            <p>Goto Step</p>


                            { selectedGotoNode ? (

                                <div className={styles.selectedGotoBox}>
                                    <div className={styles.gotoIcon}>
                                            <FaGoogleDrive />
                                    </div>

                                    <p>{selectedGotoNode?.data?.label || selectedGotoNode?.label} </p>

                                    <div className={styles.deleteGotoBtnBox}>

                                        <IoClose onClick={()=> handleClickDeleteGotoNode(selectedGotoNode)}
                                        className={styles.deleteGotoButton} />

                                    </div>
                                  
                                </div>
                                
                            ):(
                                <div onClick={()=> handleClickSelectNextStep()}
                                className={styles.gotoButton}>
                                   Select Next Step
                               </div>

                            )}

                           
                            
                        </div>


                     </div>


                    <div className={styles.responseStatusCodeButtonDiv}>
                        <button onClick={()=> setShowAddResponseRouteModal(false)}
                         className={styles.cancelAddResponseModalButton}>Cancel</button>

                        <button onClick={()=> handleClickSaveNewResponseStatus()}>Save</button>
                    </div>

            </div>
        </div>




{/* --------- render is NextStepModalList for  get goto steps -------------//*/}
{ isShowNextStepModal && (
    <NextStepModalList
    handleClickSelectNextStep={handleClickSelectNextStep} 
    nodeTypeIsApiCall={ nodeTypeIsApiCall }
    getSelectedNextStepNodeFromApi={ getSelectedNextStepNodeFromApi }
    OnlyGetNode = { OnlyGetNode }
    getNodeAndSetSelected = { getNodeAndSetSelected }

     />
)}


   </> )

}