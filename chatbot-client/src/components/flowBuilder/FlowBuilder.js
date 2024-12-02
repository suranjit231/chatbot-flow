import { ReactFlowProvider } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { useEffect, useState, useCallback } from 'react';
import { useFlowContext } from '../../context/FlowContext';
import FlowCanvas from './FlowCanvas';
import UpdateNodePropertyForm from '../updateNode/UpdateNodePropertyForm';


function FlowBuilder() {
  const {
    nodes,
    edges,
    selectedNode,
    onNodesChange,
    onEdgesChange,
    onConnect,
    handleNodeClick,
    handlePannelClicked,
   
    
  } = useFlowContext();

 // console.log("nodes in flowbuilder: ", nodes)

 

  return (
    <ReactFlowProvider>
      <div className="flow-builder">

        <FlowCanvas
          nodes={nodes}
          edges={edges}
          selectedNode={selectedNode}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          handleNodeClick={handleNodeClick}
          handlePannelClicked={handlePannelClicked}
         
        />


        { selectedNode &&  <UpdateNodePropertyForm />}

       


      </div>
    </ReactFlowProvider>
  );
}

export default FlowBuilder;
