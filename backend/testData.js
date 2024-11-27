const flowData = {
    "id": "1732334336014",
    "name": "Register user Flow",
    "description": "user data collection form",
    "nodes": [
        {
            "id": "1732334337243",
            "data": {
                "type": "start",
                "label": "Starting conversation by user"
            },
            "position": {
                "x": -120.65093072352732,
                "y": 133.28609924117882
            },
            "measured": {
                "width": 150,
                "height": 54
            },
            "selected": false,
            "dragging": false
        },
        {
            "id": "1732334541076",
            "data": {
                "type": "reply-message",
                "label": "greet user",
                "message": "Welcome to bringJal solutio, I will help you to register.",
                "delay": 1,
                "replyType": "text",
                "includeEmoji": false
            },
            "position": {
                "x": -3.52163159731748,
                "y": 208.34902290844704
            },
            "measured": {
                "width": 150,
                "height": 38
            },
            "selected": false,
            "dragging": false
        },
        {
            "id": "1732334646987",
            "data": {
                "type": "question",
                "label": "Ask User Name",
                "question": "What is your name",
                "responseType": "text",
                "choices": []
            },
            "position": {
                "x": 202.25632025060912,
                "y": 295.9898977577719
            },
            "measured": {
                "width": 150,
                "height": 38
            },
            "selected": false,
            "dragging": false
        },
        {
            "id": "1732334705773",
            "data": {
                "type": "input",
                "label": "user type his name",
                "variableName": "name",
                "responseType": "text",
                "userAnswer": "name",
                "choices": null
            },
            "position": {
                "x": 204.25126986840908,
                "y": 382.49941803414606
            },
            "measured": {
                "width": 150,
                "height": 38
            },
            "selected": false,
            "dragging": false
        },
        {
            "id": "1732334762297",
            "data": {
                "type": "function",
                "label": "validate name",
                "variableName": "name",
                "validationType": "name",
                "pattern": {}
            },
            "position": {
                "x": 202.06199337040178,
                "y": 475.8576541524461
            },
            "measured": {
                "width": 150,
                "height": 38
            },
            "selected": false,
            "dragging": false
        },
        {
            "id": "1732334816229",
            "data": {
                "type": "condition",
                "label": "Condition",
                "variableName": "isValidate",
                "condition": "isValidate === \"true\"",
                "trueFlow": "next",
                "falseFlow": "repeat - ask user name"
            },
            "position": {
                "x": -156.6755819869898,
                "y": 413.73885426367815
            },
            "measured": {
                "width": 150,
                "height": 38
            },
            "selected": false,
            "dragging": false
        },
        {
            "id": "1732335042345",
            "data": {
                "type": "question",
                "label": "Ask user email",
                "question": "What is your email",
                "responseType": "text",
                "choices": []
            },
            "position": {
                "x": 210.28860539490663,
                "y": 596.7235007121994
            },
            "measured": {
                "width": 150,
                "height": 38
            },
            "selected": false,
            "dragging": false
        },
        {
            "id": "1732335161221",
            "data": {
                "type": "input",
                "label": "user type his emai",
                "variableName": "email",
                "responseType": "text",
                "userAnswer": "email",
                "choices": null
            },
            "position": {
                "x": 221.13020564558803,
                "y": 709.641891203028
            },
            "measured": {
                "width": 150,
                "height": 38
            },
            "selected": false,
            "dragging": false
        },
        {
            "id": "1732335231415",
            "data": {
                "type": "function",
                "label": "Validate email",
                "variableName": "email",
                "validationType": "email",
                "pattern": {}
            },
            "position": {
                "x": 222.00307611783597,
                "y": 823.3322372080612
            },
            "measured": {
                "width": 150,
                "height": 38
            },
            "selected": false,
            "dragging": false
        },
        {
            "id": "1732335275582",
            "data": {
                "type": "condition",
                "label": "Condition",
                "variableName": "isValidate",
                "condition": "isValidate === \"true\"",
                "trueFlow": "next",
                "falseFlow": "repeate ask email"
            },
            "position": {
                "x": -156.11224724938359,
                "y": 726.1807701842955
            },
            "measured": {
                "width": 150,
                "height": 38
            },
            "selected": false,
            "dragging": false
        },
        {
            "id": "1732335490564",
            "data": {
                "type": "reply-message",
                "label": "Confirm user data correcteness",
                "message": "We Collect Your information. Please confirm this is correct. name:{{name}}, email:{{email}}.                Reply answer true, false, yes, no",
                "delay": 1,
                "replyType": "text",
                "includeEmoji": false
            },
            "position": {
                "x": 218.89651090169332,
                "y": 940.5680998410157
            },
            "measured": {
                "width": 150,
                "height": 54
            },
            "selected": false,
            "dragging": false
        },
        {
            "id": "1732335855768",
            "data": {
                "type": "input",
                "label": "user answer confirmed",
                "variableName": "userConfirm",
                "responseType": "yes-no",
                "userAnswer": null,
                "choices": null
            },
            "position": {
                "x": 212.7372199394033,
                "y": 1069.4141301482155
            },
            "measured": {
                "width": 150,
                "height": 38
            },
            "selected": true,
            "dragging": false
        }
    ],
    "edges": [
        {
            "source": "1732334337243",
            "target": "1732334541076",
            "id": "xy-edge__1732334337243-1732334541076"
        },
        {
            "source": "1732334541076",
            "target": "1732334646987",
            "id": "xy-edge__1732334541076-1732334646987"
        },
        {
            "source": "1732334646987",
            "target": "1732334705773",
            "id": "xy-edge__1732334646987-1732334705773"
        },
        {
            "source": "1732334705773",
            "target": "1732334762297",
            "id": "xy-edge__1732334705773-1732334762297"
        },
        {
            "source": "1732334762297",
            "target": "1732334816229",
            "id": "xy-edge__1732334762297-1732334816229"
        },
        {
            "source": "1732334816229",
            "target": "1732334646987",
            "id": "xy-edge__1732334816229-1732334646987"
        },
        {
            "source": "1732334816229",
            "target": "1732335042345",
            "id": "xy-edge__1732334816229-1732335042345"
        },
        {
            "source": "1732335042345",
            "target": "1732335161221",
            "id": "xy-edge__1732335042345-1732335161221"
        },
        {
            "source": "1732335161221",
            "target": "1732335231415",
            "id": "xy-edge__1732335161221-1732335231415"
        },
        {
            "source": "1732335231415",
            "target": "1732335275582",
            "id": "xy-edge__1732335231415-1732335275582"
        },
        {
            "source": "1732335275582",
            "target": "1732335042345",
            "id": "xy-edge__1732335275582-1732335042345"
        },
        {
            "source": "1732335275582",
            "target": "1732335490564",
            "id": "xy-edge__1732335275582-1732335490564"
        }
    ]
}







// import React, { useState } from "react";
// import styles from "../nodeCss/NodeStyles.module.css";
// import { useFlowContext } from "../../context/FlowContext";

// export default function ConditionNode() {
//   const { updateNodes } = useFlowContext();

//   const [variableName, setVariableName] = useState("");
//   const [conditionType, setConditionType] = useState("===");
//   const [conditionValue, setConditionValue] = useState("");
//   const [trueFlow, setTrueFlow] = useState("");
//   const [falseFlow, setFalseFlow] = useState("");

//   function handleSubmit(e) {
//     e.preventDefault();

//     // Construct the condition object
//     const conditionNodeData = {
//       variableName,
//       condition: `${variableName} ${conditionType} ${JSON.stringify(conditionValue)}`,
//       trueFlow,
//       falseFlow,
//     };

//     // Update the flow context with the new condition node
//     updateNodes(conditionNodeData);

//     // Clear fields after submission
//     setVariableName("");
//     setConditionType("===");
//     setConditionValue("");
//     setTrueFlow("");
//     setFalseFlow("");
//   }

//   return (
//     <div className={styles.container}>
//       <h3>Condition Node</h3>
//       <form onSubmit={handleSubmit}>
//         <div className={styles.field}>
//           <label>Variable Name</label>
//           <input
//             type="text"
//             placeholder="Enter variable name"
//             value={variableName}
//             onChange={(e) => setVariableName(e.target.value)}
//             className={styles.input}
//           />
//         </div>
//         <div className={styles.field}>
//           <label>Condition</label>
//           <select
//             value={conditionType}
//             onChange={(e) => setConditionType(e.target.value)}
//             className={styles.input}
//           >
//             <option value="===">Equals (===)</option>
//             <option value="!==">Not Equals (!==)</option>
//             <option value=">">Greater Than </option>
//             <option value="<">Less Than </option>
//             <option value=">=">Greater Than or Equal</option>
//             <option value="<=">Less Than or Equal</option>
//           </select>
//         </div>
//         <div className={styles.field}>
//           <label>Condition Value</label>
//           <input
//             type="text"
//             placeholder="Enter value to compare"
//             value={conditionValue}
//             onChange={(e) => setConditionValue(e.target.value)}
//             className={styles.input}
//           />
//         </div>
//         <div className={styles.field}>
//           <label>True Flow Node</label>
//           <input
//             type="text"
//             placeholder="Enter true flow node name"
//             value={trueFlow}
//             onChange={(e) => setTrueFlow(e.target.value)}
//             className={styles.input}
//           />
//         </div>
//         <div className={styles.field}>
//           <label>False Flow Node</label>
//           <input
//             type="text"
//             placeholder="Enter false flow node name"
//             value={falseFlow}
//             onChange={(e) => setFalseFlow(e.target.value)}
//             className={styles.input}
//           />
//         </div>
//         <button type="submit" className={styles.button}>
//           Save Condition
//         </button>
//       </form>
//     </div>
//   );
// }
