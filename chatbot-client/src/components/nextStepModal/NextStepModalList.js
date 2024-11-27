import { useFlowContext } from "../../context/FlowContext";
import styles from "./NextStepModalList.module.css";
import { IoClose } from "react-icons/io5";


export default function NextStepModalList({ toggleShowShowNextListModal,
     setNextStepTonConditionGroup,
      isActiveGroupIsOtherWise,
      handleSetOtherWiseFields,

      handleClickSelectNextStep,
      nodeTypeIsApiCall,
      getSelectedNextStepNodeFromApi,
      OnlyGetNode,
      getNodeAndSetSelected
     }){


    const { availableNodes, nodes, selectedNode, 
        setEdges, setNodes, setFlow, flow
     } = useFlowContext();


    function handleClickSetNextSteps(nodeData) {
        if (!selectedNode) {
            alert("Please select a starting node first.");
            return;
        }
    
        // Check if it's a new step or an existing step
        if (!nodeData){
            return;
        }

        //------ removed icon from nodeData -----------//
        console.log("nodeData in start: ", nodeData);


            // It's a new step, so create the node first
            const newNode = {
                id: Date.now().toString(),
                data: {
                    ...nodeData,
                    icon: undefined, // Optional, as needed
                },
                position: {
                    x: Math.random() * 400,
                    y: Math.random() * 400,
                },
            };
    
            setNodes((prevNodes) => [...prevNodes, newNode]);
            setFlow((prevFlow) => ({
                ...prevFlow,
                nodes: [...prevFlow.nodes, newNode],
            }));
    
            // Create an edge to the new node
            const newEdge = {
                id: `e${selectedNode.id}-${newNode.id}`,
                source: selectedNode.id,
                target: newNode.id,
            };
    
            setEdges((prevEdges) => [...prevEdges, newEdge]);
            setFlow((prevFlow) => ({
                ...prevFlow,
                edges: [...prevFlow.edges, newEdge],
            }));
    
            console.log("New node and edge created:", newNode, newEdge);


            if(nodeTypeIsApiCall){
                getSelectedNextStepNodeFromApi(newNode);
                return;
            }


            if(isActiveGroupIsOtherWise){
                handleSetOtherWiseFields(newNode);
                return;

            }else{
                setNextStepTonConditionGroup(newNode)
            }


           
        
    }


    // =========== handle clicked addExisting steps ==========//
    function handleClickSectectExistingSteps(existingNode){
    
            // It's an existing step, just connect it
            const newEdge = {
                id: `e${selectedNode.id}-${existingNode.id}`,
                source: selectedNode.id,
                target: existingNode.id,
            };
    
            setEdges((prevEdges) => [...prevEdges, newEdge]);
            setFlow((prevFlow) => ({
                ...prevFlow,
                edges: [...prevFlow.edges, newEdge],
            }));
    
            console.log("Edge created:", newEdge);

            //----- return node to api ---------//
            if(nodeTypeIsApiCall){
                getSelectedNextStepNodeFromApi(existingNode);
                return;
            }

            //------ return node to condition otherwise --------//
            if(isActiveGroupIsOtherWise){
                handleSetOtherWiseFields(existingNode);
                return;

            //----- return node to condition group -------------//
            }else{
                setNextStepTonConditionGroup(existingNode);
                return;
            }

    }



    //======== a function which trigger when click in any node list ============//
    function nodeClicked(node, selectedType){
        if(!node) return;

        if(OnlyGetNode){
            console.log(" getNode and select data: ................: ", node)
            getNodeAndSetSelected(node);
            return ;

        }

        if(selectedType === "new"){
            handleClickSetNextSteps(node);
            return;

        }

         if(selectedType === "exist"){
            handleClickSectectExistingSteps(node);
            return;

        }


    }





    // ======== function to closed next step modal ================//
    function closedModal(){
        if(nodeTypeIsApiCall){

            console.log("NodeType is api exexute .................: ", nodeTypeIsApiCall)

            handleClickSelectNextStep();
            return;


        }else{
            toggleShowShowNextListModal();
            return;

        }

    }

    

    return(
        <div className={styles.nextStepModalListContainer}>
            <IoClose onClick={()=> closedModal()} className={styles.closedModalIcon} />
        
            <div className={styles.nextStepModalListWrapper}>
          
            <h3>Select Next Steps</h3>

            {/* ======== new next steps ============= */}
            <div className={styles.nextStepListContainer}>
                <h4> New Steps</h4>
                <div className={styles.nodeListWrapper}>
                    { availableNodes && availableNodes?.length>0 && availableNodes.map((node, idx)=>(

                        <div onClick={()=>nodeClicked(node, "new")} key={idx} className={styles.nodeBox}>
                            <div className={styles.nodeIconBox}>
                                {node?.icon}
                            </div>

                            <p className={styles.nodeLabel}>{node?.label}</p>

                        </div>

                    ))}
                </div>
            </div>


            {/* ========== existing next stpes ==================== */}
            <div className={styles.nextStepListContainer}>
                <h4>Existing Steps</h4>
                <div className={styles.nodeListWrapper}>
                    { nodes && nodes?.length>0 && nodes.map((node, idx)=>(

                        <div onClick={()=>()=>nodeClicked(node, "exist")}
                         key={idx} className={styles.nodeBox}>
                            <div className={styles.nodeIconBox}>
                                {node?.icon}
                            </div>

                            <p className={styles.nodeLabel}>{node?.data?.label}</p>

                        </div>

                    ))}
                </div>

            </div>

</div>

        </div>

    )
    
}