
import React, { useEffect, useState } from "react";
import styles from "./apiCallCss/ApiCallStyles.module.css";
import { IoMenu } from "react-icons/io5";
import { useFlowContext } from "../../context/FlowContext";
import { FaExternalLinkAlt } from "react-icons/fa";
import ResponseRouteModal from "./ResposeReouteModal";

import PostMenModel from "./PostmenModel";

export default function ApiCallNode() {
  const { flow, setFlow, setEdges, setNodes } = useFlowContext();
  const [selectedNodeId, setSelectedNodeId] = useState(null);
  const [isShowAddResponseRouteModal, setShowAddResponseRouteModal] = useState(false);
  const [ isApiCallUrlPostmenModel, setApiCallPostmenUrlModel ] = useState(false);

  // Get selected node from flow using selectedNodeId
  const selectedNode = flow.nodes.find((node) => node.id === selectedNodeId);

  useEffect(() => {
    // Set initial selected node if none is selected
    if (!selectedNodeId && flow.nodes.length > 0) {
      const initialNode = flow.nodes.find((node) => node.data.type === "api-call");
      if (initialNode) {
        setSelectedNodeId(initialNode.id);
      }
    }
  }, [flow.nodes, selectedNodeId]);

  // Handle updating node data in the flow
  const updateNodeData = (nodeId, updatedData) => {
    setFlow((prevFlow) => ({
      ...prevFlow,
      nodes: prevFlow.nodes.map((node) =>
        node.id === nodeId ? { ...node, data: { ...node.data, ...updatedData } } : node
      ),
    }));
  };

  // Handle adding a new response route
  const saveNewResponseStatus = (responseObject) => {
    if (!responseObject || responseObject?.statusCode === "" || responseObject?.gotoNode === null) {
      return;
    }

    if (!selectedNodeId) {
      alert("Please select a starting node first.");
      return;
    }

    // Create a new node
    const newNode = {
      id: Date.now().toString(),
      data: {
        ...responseObject.gotoNode,
      },
      position: {
        x: Math.random() * 400,
        y: Math.random() * 400,
      },
    };

    // Create an edge to the new node
    const newEdge = {
      id: `e${selectedNodeId}-${newNode.id}`,
      source: selectedNodeId,
      target: newNode.id,
    };

    setNodes((prevNodes) => [...prevNodes, newNode]);

   setEdges((prevEdges) => [...prevEdges, newEdge]);



    // Update the flow with the new node and edge
    setFlow((prevFlow) => ({
      ...prevFlow,
      nodes: [...prevFlow.nodes, newNode],
      edges: [...prevFlow.edges, newEdge],
    }));

    // Update the responseStatus of the selected node
    const updatedResponseStatus = [...(selectedNode.data.responseStatus || []), responseObject];
    updateNodeData(selectedNodeId, { responseStatus: updatedResponseStatus });

    setShowAddResponseRouteModal(false);
  };

  // Handle name change for the selected node
  const handleChangeNodeName = (text) => {
    if (selectedNodeId) {
      updateNodeData(selectedNodeId, { name: text });
    }
  };

  //======= function handle click api call url ============//
  function handleClickApiCallUrlPostmenModel(){
    setApiCallPostmenUrlModel((prev)=>!prev);

  }


  console.log("flow in api call: ", flow)

  return (
    <>
      <div className={styles.ApiCallMainContainer}>
        <div className={styles.apiCallNodeTitleDiv}>
          <div className={styles.titleIcon}>&#9735;</div>

          <input
            type="text"
            placeholder="Custom tag..."
            value={selectedNode?.data.name || ""}
            onChange={(e) => handleChangeNodeName(e.target.value)}
          />

          <div className={styles.toggleMenuIcon}>
            <IoMenu />
          </div>
        </div>

        <div className={styles.apiResponseWithMappedVariableDisplayBox}>
          <p>Response taken from API and mapped to variables as shown below:</p>

          {selectedNode?.data.matchedPathVariableList &&
            selectedNode?.data.matchedPathVariableList.length > 0 &&
            selectedNode?.data.matchedPathVariableList.map((singleMapped, index) => (
              <p key={index}>
                {`${singleMapped?.pathVariable} : ${singleMapped?.mappedVariable}`}
              </p>
            ))}
        </div>

        <div className={styles.apiReqResponseBox}>
          <div className={styles.boxTitle}>
            <FaExternalLinkAlt className={styles.linkIcon} />
            <p>External Request</p>
          </div>

          <div onClick={()=> handleClickApiCallUrlPostmenModel()} className={styles.apiRequestUrl}>
            <p>{selectedNode?.data.reqUrl || "URL API Call"}</p>
          </div>

          <div className={styles.responseStatusCodeButtonDiv}>
            {selectedNode?.data.responseStatus?.length > 0 &&
              selectedNode.data.responseStatus.map((resStatus, ind) => (
                <button key={ind}>{resStatus?.statusCode}</button>
              ))}
          </div>

          <div onClick={() => setShowAddResponseRouteModal(true)} className={styles.addResponseRoutesButton}>
            + Add Route
          </div>
        </div>
      </div>

      {/* Render response route modal for adding response */}
      {isShowAddResponseRouteModal && (
        <ResponseRouteModal
          isShowAddResponseRouteModal={isShowAddResponseRouteModal}
          setShowAddResponseRouteModal={setShowAddResponseRouteModal}
          apiCallNodeData={selectedNode?.data}
          saveNewResponseStatus={saveNewResponseStatus}
        />
      )}

      { isApiCallUrlPostmenModel && (
        <PostMenModel handleClickApiCallUrlPostmenModel={handleClickApiCallUrlPostmenModel} />
      )}


    </>
  );
}








// // ============ data dtructure for api calls =======================//
// const dataStructureForRequestResponse = {
//     id: "unique-node-id", 
//     name: "Get User Data", 
//     description: "This node fetches user data from the API.",
//     reqUrl:"url to sends ",
//     methods:"POST",
//     matchedPathVariableList:[
//         {
//             pathVariable:"$.package_quantity",
//             mappedVariable:"subscribed_qty",
//             fallbackValue:"0"
//         }
//     ],

//     responseStatus:[
//         {
//             statusCode:200,
//             gotoNode:"A node where to go if status 200"
//         },

//         {
//             statusCode:204,
//             gotoNode:"A node where to go if status 204"
//         }
//     ],

//     urlParams:[
//         {
//             key:"Key name",
//             value:"value",
//             testValue:"test value"
//         }
//     ],

//     Headers:[
//         {
//             key:"Content -type",
//             value:"application/json",
//             testValue:""
//         }
//     ],

//     body:{
//         type:"json",
//         bodyData:[
//           {
//             key:"mobile",
//             mappedVariable:"$phoneNumber",
//             testValue:"7636955122"
//           },

//           {
//             key:"name",
//             mappedVariable:"$userName",
//             testValue:"rahul phukan"
//           }
//         ]

//     },

    

// }

















