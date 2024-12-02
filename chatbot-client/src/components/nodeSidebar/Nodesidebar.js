import styles from "./Nodesidebar.module.css";

import { AiOutlinePlayCircle, AiOutlineStop } from "react-icons/ai";
import { FaQuestionCircle } from "react-icons/fa";
import { MdInput } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";
import { BsCodeSquare } from "react-icons/bs";
import { BiGitBranch } from "react-icons/bi";
import { RiServerLine } from "react-icons/ri";
import { useState } from "react";
import { GrProductHunt } from "react-icons/gr";

import { useFlowContext } from "../../context/FlowContext";
import { FaBuildingUser } from "react-icons/fa6";
import { TbMathFunction } from "react-icons/tb";




export default function NodeContainerSidebar(){
    const [ name, setFlowName ] = useState("");
    const [ description, setFlowDescription ] = useState("");

   const { flow, createFlow, addNewNodes } = useFlowContext();


    const availableNodes = [
        { type: "start", label: "Start", icon: <AiOutlinePlayCircle /> },
        { type: "end", label: "End", icon: <AiOutlineStop /> },
        { type: "question", label: "Question", icon: <FaQuestionCircle /> },
        { type: "input", label: "Input", icon: <MdInput /> },
        { type: "reply-message", label: "Reply Message", icon: <FiMessageSquare /> },
        { type: "condition", label: "Condition", icon: <BsCodeSquare /> },
        { type: "split", label: "Split", icon: <BiGitBranch /> },
        { type: "api-call", label: "API Call", icon: <RiServerLine /> },
        { type:"validation", label:"Validation", icon: <GrProductHunt />},
        { type:"agent", label:"Agent", icon:<FaBuildingUser />},
        { type:"function", label:"fn()", icon:<TbMathFunction />}
    ]


    //---- handle submit creating new flow ------//
    function handleSubmitNewFlowForm(e){
        e.preventDefault();

        if(!name || !description){
            return;
        }

        createFlow({ name, description});

        clearInput();

    }


    //====== clear flow form input ==========//
    function clearInput(){
        setFlowName("");
        setFlowDescription("");
    }


    return(

        //======= it will contains all the nodes ==========//
        <div className={styles.NodeContainerSidebar}>

            {/* =========== conatiner for show flow-fom only  ================== */}

        { !flow && (
             <div className={styles.createFlowFormContainer}>
             <form onSubmit={handleSubmitNewFlowForm}>
                 <h2>Create Boat Flow</h2>
                 <div className={styles.flowFormControl}>
                     <input 
                         onChange={(e) => setFlowName(e.target.value)} 
                         value={name}
                         type="text" 
                         name="flowName" 
                         placeholder="Flow name..." 
                     />
                 </div>

                 <div className={styles.flowFormControl}>
                     <input 
                         onChange={(e) => setFlowDescription(e.target.value)} 
                         value={description}
                         type="text" 
                         name="flowDescription" 
                         placeholder="Flow description..." 
                     />
                 </div>
                 
                 <button className={styles.createFlowButton}>Create Flow</button>

             </form>

         </div>

        )}

           
            {/* ====== show the flow when flow is persents==== */}
            {
                flow && <h2>{flow.name}</h2>
            }


            {availableNodes.map((node, idx) => (
                <div onClick={()=>addNewNodes(node)} key={idx} className={styles.nodeItem}>
                    <span className={styles.nodeIcon}>{node.icon}</span>
                    <span className={styles.nodeLabel}>{node.label}</span>
                </div>
            ))}

        </div>
    )
}