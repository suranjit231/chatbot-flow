import React from 'react';
import { ReactFlow, Background, Controls,  } from '@xyflow/react';
import styles from "./FlowBuilder.module.css";

function FlowCanvas({
  nodes,
  edges,
  onNodesChange,
  onEdgesChange,
  onConnect,
  handleNodeClick,
  selectedNode,
  handlePannelClicked

}) {




  return (
    <main className={styles.flowCanvas}>
      <ReactFlow
       nodes={nodes?.map((node) => ({
        ...node,
        style: node.id === selectedNode?.id ? { border: '2px solid blue' } : node.style,
      }))}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        onNodeClick={handleNodeClick}
        onPaneClick={handlePannelClicked}

      >
       
        <Background />
        <Controls />
      </ReactFlow>
    </main>
  );
}

export default FlowCanvas;
