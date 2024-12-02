import { useEffect, useState } from "react";
import styles from "./FunctionSideBar.module.css";
import { TbBrandJavascript } from "react-icons/tb";
import FunctionBuilder from "./FunctionBuilder";
import { useFlowContext } from "../../context/FlowContext";

export default function FunctionSideBar(){
    const {selectedNode, setSelectedNode, nodes, setNodes, flow,  setFlow } = useFlowContext();
    const [ tagName, setTagName ] = useState("");
    const [ isShowFunctionBuilderModel, setShowFunctionBuilderModel ] = useState( false);
    const [ functionMapList, setFunctionMapList ] = useState([]);

    const [parameters, setParameters] = useState([
      { name: "", value: "", testValue: "" },
      
    ]);



   // Update the label in `selectedNode` and `nodes` when `tagName` changes
  useEffect(() => {
    if (!selectedNode) return;

    // Update the selectedNode's label
    setSelectedNode((prev) => {
      if (!prev) return prev;
      return { ...prev, data: { ...prev.data, label: tagName,
         parameters:[...parameters], functionMapList:[...functionMapList] } };
    });

    // Update the label in the nodes array
    setNodes((prevNodes) =>
      prevNodes.map((node) =>
        node.id === selectedNode.id
          ? { ...node, data: { ...node.data, label: tagName,
             parameters:[...parameters], functionMapList:[...functionMapList] } }
          : node
      )
    );

    // Update the flow state
    setFlow((prevFlow) => ({
      ...prevFlow,
      nodes: prevFlow.nodes.map((node) =>
        node.id === selectedNode.id
          ? { ...node, data: { ...node.data, label: tagName, 
            parameters:[...parameters], functionMapList:[...functionMapList] } }
          : node
      ),
    }));
  }, [tagName, parameters, functionMapList]);


 


    console.log("selected node in dunction bar: ", selectedNode);
    console.log(" nodes in dunction bar: ", nodes);
    console.log("flow in finctuin sidebar: ", flow)


    //====== dunction handle click toggle function model ===========//
    function toggleFunctionSideBar(){
        setShowFunctionBuilderModel((prev)=>!prev)

    }



    return(
        <div className={styles.functionSideBarContainer}>
            <div className={styles.functionNodeTagNameContainer}>
                <p>{selectedNode?.data?.label}</p>
                    <input type="text" value={tagName} 
                    onChange={(e)=>setTagName(e.target.value)} placeholder="Add tagname..."  />
            </div>

            <div className={styles.functionActionButtonDiv}>
                <p><TbBrandJavascript className={styles.javascriptIcon} /> JavaScript Function</p>

                <div onClick={()=>toggleFunctionSideBar()} className={styles.addFunctionSideBarButton}>
                    Add Function
                </div>
            </div>


            { isShowFunctionBuilderModel && 
            <FunctionBuilder

            toggleFunctionSideBar={toggleFunctionSideBar}
            parameters={parameters}
            setParameters={setParameters}
            functionMapList={functionMapList} 
            setFunctionMapList={setFunctionMapList}


             />}

        </div>
    )
}