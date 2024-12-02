import React from "react";
import { useFlowContext } from "../../context/FlowContext";
import StartNode from "../NodeComponents/StartNode";
import EndNode from "../NodeComponents/EndNode";
import QuestionNode from "../NodeComponents/QuestionNode";
import InputNode from "../NodeComponents/InputNode";
import ReplyMessageNode from "../NodeComponents/ReplyMessageNode";
import ConditionNode from "../NodeComponents/ConditionNode";
import SplitNode from "../NodeComponents/SplitNode";
import ApiCallNode from "../apiCalls/ApiCallMainNode";
import ValidationNode from "../NodeComponents/ValidationNode";
import AgentNode from "../NodeComponents/AgentNode";
import styles from "./UpdateNodeProperty.module.css";
import FunctionSideBar from "../functionNode/FunctionSideBar";

export default function UpdateNodePropertyForm() {
  const { selectedNode } = useFlowContext();

  const renderNodeForm = () => {

    //console.log("selectedNode.type: ", selectedNode)
    switch (selectedNode?.data.type) {
      case "start":
        return <StartNode />;
      case "end":
        return <EndNode />;
      case "question":
        return <QuestionNode />;
      case "input":
        return <InputNode />;
      case "reply-message":
        return <ReplyMessageNode />;
      case "condition":
        return <ConditionNode />;
      case "split":
        return <SplitNode />;
      case "api-call":
        return <ApiCallNode />;
      case "validation":
        return <ValidationNode />;
      case "agent":
        return <AgentNode />;

      case "function":
        return <FunctionSideBar />;
      default:
        return <div>Please select a node to configure.</div>;
    }
  };

  return <div className={styles.updateNodePropetyFormContainer}>{renderNodeForm()}</div>;
}
