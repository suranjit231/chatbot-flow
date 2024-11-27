import { createContext, useContext, useState, useCallback } from "react";
import { applyNodeChanges, applyEdgeChanges, addEdge } from '@xyflow/react';

// ------------- importing react-icons -----------------------------//
import { AiOutlinePlayCircle, AiOutlineStop } from "react-icons/ai";
import { FaQuestionCircle } from "react-icons/fa";
import { MdInput } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";
import { BsCodeSquare } from "react-icons/bs";
import { BiGitBranch } from "react-icons/bi";
import { RiServerLine } from "react-icons/ri";
import { GrProductHunt } from "react-icons/gr";
import { FaBuildingUser } from "react-icons/fa6";




const FlowContext = createContext();

//====== logic for using flow contaxt =====//
export function useFlowContext(){
    const value = useContext(FlowContext);
    return value;
}


//======= flow contaxt provider =============//
export function FlowContaxtProvider({children}){
    //====== create new flow ==================//
    const [flow , setFlow ] = useState(null);
    const [nodes, setNodes ] = useState([]);
    const [edges, setEdges ] = useState([]);
    const [selectedNode, setSelectedNode ] = useState(null);
    const [ selectedvariable, setSelectedvariable ] = useState("");


    const availableNodes = [
      { type: "start", label: "Start", icon: <AiOutlinePlayCircle /> },
      { type: "end", label: "End", icon: <AiOutlineStop /> },
      { type: "question", label: "Question", icon: <FaQuestionCircle /> },
      { type: "input", label: "Input", icon: <MdInput /> },
      { type: "reply-message", label: "Reply Message", icon: <FiMessageSquare /> },
      { type: "condition", label: "Condition", icon: <BsCodeSquare /> },
      { type: "split", label: "Split", icon: <BiGitBranch /> },
      { type: "api-call", label: "API Call", icon: <RiServerLine /> },
      { type:"function", label:"Validation", icon: <GrProductHunt />},
      { type:"agent", label:"Agent", icon:<FaBuildingUser />}
  ]


    //====== create a new flow ===============//
    function createFlow(flowData){
    
        //---- create a new flow objects ----//
        const newFlow = {
            id: Date.now().toString(), 
            name:flowData.name,
            description:flowData.description,
            nodes: [],
            edges: [],
          };
          setFlow(newFlow);
          console.log("newFlow: ", newFlow);

    }

   // console.log("flows: ", flow)


    //------ add new nodes -------------//
    function addNewNodes(nodeData){
        console.log("node clicked:  ", nodeData);
        if (!flow) {
            alert('Please create a flow first.');
            return;
          }

          const additionalInfo = nodeData.type === "api-call" ? {
            name: "",
            description: "",
            reqUrl: "",
            methods: "",
            matchedPathVariableList: [],
            responseStatus: [],
            urlParams: [],
            headers: [],
            body: { type: "", bodyData: [] },
        } : {};
      
          const newNode = {
            id: Date.now().toString(),
            data: {
              ...nodeData,
              ...additionalInfo,
              icon:undefined
            },
            position: {
              x: parseInt(nodeData.x) || Math.random() * 400,
              y: parseInt(nodeData.y) || Math.random() * 400,
            },
          };
      
          setNodes((nds) => [...nds, newNode]);
        
          // Update flow state with new node
          setFlow((prevFlow) => ({
            ...prevFlow,
            nodes: [...prevFlow.nodes, newNode],
          }));

    }


    //------- changes in ndes --------------//
    const onNodesChange = useCallback(
        (changes) => {
          setNodes((nds) => applyNodeChanges(changes, nds));
    
          // Update flow state when nodes change
          setFlow((prevFlow) => ({
            ...prevFlow,
            nodes: applyNodeChanges(changes, prevFlow.nodes),
          }));
        },
        []
      );
    

      //--------- changes in edge ------------//
      const onEdgesChange = useCallback(
        (changes) => {
          setEdges((eds) => applyEdgeChanges(changes, eds));
    
          // Update flow state when edges change
          setFlow((prevFlow) => ({
            ...prevFlow,
            edges: applyEdgeChanges(changes, prevFlow.edges),
          }));
        },
        []
      );


      //----------- edges connect ----------------//
    
      const onConnect = useCallback((params) => {

          setEdges((eds) => addEdge(params, eds));
    
          // Update flow state when an edge is added
          setFlow((prevFlow) => ({
            ...prevFlow,
            edges: addEdge(params, prevFlow.edges),
          }));
        },
        []
      );


      //======== handle selectedNode ===============//
      function handleNodeClick(_, node){
        setSelectedNode(node.id === selectedNode?.id ? null : node);
       
      }


      //======= handle deselect node ==============//
      function handlePannelClicked(){
        setSelectedNode(null);
      }


      function updateNodes(updateableVariable) {
        if (selectedNode) {
          setNodes((currentNodes) =>
            currentNodes.map((node) =>
              node.id === selectedNode.id
                ? {
                    ...node,
                    data: {
                      ...node.data,
                      ...updateableVariable, 
                      icon:undefined
                    },
                  }
                : node
            )
          );
    
          // Update flow state for the updated node
          setFlow((prevFlow) => ({
            ...prevFlow,
            nodes: prevFlow.nodes.map((node) =>
              node.id === selectedNode.id
                ? {
                    ...node,
                    data: {
                      ...node.data,
                      ...updateableVariable, // Merge the new variables into the node's data
                    },
                  }
                : node
            ),
          }));
    
          // Optionally update the selectedNode as well
          setSelectedNode((prev) => ({
            ...prev,
            data: {
              ...prev.data,
              ...updateableVariable,
            },
          }));
        } else {
          console.warn("No node is selected for update.");
        }


        setSelectedNode(null);
      }

      // ====== function to delete a goto node as soon
      //======= as delete the goto node removed all the edges attached
      //======= with this node or reffering to this node 
      function deteteGotoNodeAndClearItsReferences(deleteableNode){
        if (!deleteableNode || !deleteableNode.id) {
          console.warn("No valid node provided for deletion.");
          return;
        }
      
        const nodeId = deleteableNode.id;
      
        // Step 1: Remove the node from the `nodes` array
        setNodes((currentNodes) => {
          const updatedNodes = currentNodes.filter((node) => node.id !== nodeId);
          return updatedNodes;
        });
      
        // Step 2: Remove all edges connected to or referencing this node
        setEdges((currentEdges) => {
          const updatedEdges = currentEdges.filter(
            (edge) => edge.source !== nodeId && edge.target !== nodeId
          );
          return updatedEdges;
        });
      
        // Step 3: Update the `flow` state to reflect these changes
        setFlow((prevFlow) => ({
          ...prevFlow,
          nodes: prevFlow.nodes.filter((node) => node.id !== nodeId),
          edges: prevFlow.edges.filter(
            (edge) => edge.source !== nodeId && edge.target !== nodeId
          ),
        }));
      
        // Step 4: Reset the `selectedNode` state if it matches the deleted node
        setSelectedNode((prevSelectedNode) =>
          prevSelectedNode?.id === nodeId ? null : prevSelectedNode
        );
      
        console.log("Node and its references successfully deleted.");
       

      }



    return(
        <FlowContext.Provider
        value={{
             createFlow,
             addNewNodes,
              nodes,
              onConnect,
              onEdgesChange,
              onNodesChange,
              edges,
              handleNodeClick,
              selectedNode,
              handlePannelClicked,
              updateNodes,
              availableNodes,
              setEdges,
              setNodes,
              setFlow,
              flow,
              setSelectedNode,
              deteteGotoNodeAndClearItsReferences,
              selectedvariable, setSelectedvariable

             }}>






            {children}
        </FlowContext.Provider>
    )
}

