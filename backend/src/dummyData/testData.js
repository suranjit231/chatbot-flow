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






const testFlowData = {
  "id": "1733111181798",
  "name": "Register user Flow",
  "description": "user data collection form",
  "nodes": [
      {
          "id": "1733111183570",
          "data": {
              "type": "start",
              "label": "start conversion"
          },
          "position": {
              "x": 151.5495356586148,
              "y": 77.10387269341192
          },
          "measured": {
              "width": 150,
              "height": 38
          },
          "selected": false,
          "dragging": false
      },
      {
          "id": "1733111204489",
          "data": {
              "type": "reply-message",
              "label": "Welcome reply message.",
              "message": "Welcome to bringJal solution! I will help you to register!",
              "delay": 1,
              "replyType": "text",
              "includeEmoji": false
          },
          "position": {
              "x": 232.52372444527185,
              "y": 145.261757462821
          },
          "measured": {
              "width": 150,
              "height": 54
          },
          "selected": false,
          "dragging": false
      },
      {
          "id": "1733111267899",
          "data": {
              "type": "question",
              "label": "ask user quqestion to enter his name",
              "question": "What is your name?",
              "responseType": "text",
              "choices": []
          },
          "position": {
              "x": 358.7520312014826,
              "y": 221.71786544307062
          },
          "measured": {
              "width": 150,
              "height": 54
          },
          "selected": false,
          "dragging": false
      },
      {
          "id": "1733111368673",
          "data": {
              "type": "input",
              "label": "user typing his name",
              "variableName": "{{user_name}}",
              "responseType": "text",
              "userAnswer": "name",
              "choices": null
          },
          "position": {
              "x": 362.1457605234244,
              "y": 287.84876675810494
          },
          "measured": {
              "width": 150,
              "height": 38
          },
          "selected": false,
          "dragging": false
      },
      {
          "id": "1733111443307",
          "data": {
              "type": "question",
              "label": "ask user email",
              "question": "Please enter your email!",
              "responseType": "text",
              "choices": []
          },
          "position": {
              "x": 361.9317047161303,
              "y": 334.20535278489064
          },
          "measured": {
              "width": 150,
              "height": 38
          },
          "selected": false,
          "dragging": false
      },
      {
          "id": "1733111502157",
          "data": {
              "type": "input",
              "label": "user types his email",
              "variableName": "{{user_email}}",
              "responseType": "text",
              "userAnswer": "email",
              "choices": null
          },
          "position": {
              "x": 360.80064880055136,
              "y": 388.12717388648366
          },
          "measured": {
              "width": 150,
              "height": 38
          },
          "selected": false,
          "dragging": false
      },
      {
          "id": "1733111555701",
          "data": {
              "type": "question",
              "label": "Ask user phone number",
              "question": "Please enter your phone number",
              "responseType": "text",
              "choices": []
          },
          "position": {
              "x": 361.2267679352643,
              "y": 438.1869053050475
          },
          "measured": {
              "width": 150,
              "height": 38
          },
          "selected": false,
          "dragging": false
      },
      {
          "id": "1733111606863",
          "data": {
              "type": "input",
              "label": "User types his phone number",
              "variableName": "{{user_phone}}",
              "responseType": "text",
              "userAnswer": "mobile",
              "choices": null
          },
          "position": {
              "x": 358.81014282698095,
              "y": 488.8786024451433
          },
          "measured": {
              "width": 150,
              "height": 54
          },
          "selected": false,
          "dragging": false
      },
      {
          "id": "1733111675147",
          "data": {
              "type": "condition",
              "name": "",
              "conditionGroupList": [
                  {
                      "conditionName": "",
                      "conditionsChoosed": {
                          "or_condition": true,
                          "and_condition": false
                      },
                      "goto": {
                          "id": "1733112155788",
                          "data": {
                              "type": "reply-message",
                              "label": "Reply Message"
                          },
                          "position": {
                              "x": 51.40795949644961,
                              "y": 329.7440063333406
                          }
                      },
                      "conditions": [
                          {
                              "variableName": "name",
                              "validation": {
                                  "is": true,
                                  "is_not": false,
                                  "contains": false,
                                  "not_contains": false,
                                  "starts_with": false,
                                  "ends_with": false,
                                  "match_pattern": false,
                                  "has_any_value": false,
                                  "is_empty": false
                              },
                              "value": "",
                              "conditionTitle": "name is "
                          },
                          {
                              "variableName": "email",
                              "validation": {
                                  "is": false,
                                  "is_not": false,
                                  "contains": false,
                                  "not_contains": false,
                                  "starts_with": false,
                                  "ends_with": false,
                                  "match_pattern": true,
                                  "has_any_value": false,
                                  "is_empty": false
                              },
                              "value": "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",
                              "conditionTitle": "email match_pattern ^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$"
                          },
                          {
                              "variableName": "phone",
                              "validation": {
                                  "is": false,
                                  "is_not": false,
                                  "contains": false,
                                  "not_contains": false,
                                  "starts_with": false,
                                  "ends_with": false,
                                  "match_pattern": true,
                                  "has_any_value": false,
                                  "is_empty": false
                              },
                              "value": "^\\\\+?[\\\\d\\\\s-]{10,}$",
                              "conditionTitle": "phone match_pattern ^\\\\+?[\\\\d\\\\s-]{10,}$"
                          }
                      ]
                  }
              ],
              "otherWise": null
          },
          "position": {
              "x": 82.46144611919391,
              "y": 548.3671503062316
          },
          "measured": {
              "width": 150,
              "height": 22
          },
          "selected": false,
          "dragging": false
      },
      {
          "id": "1733112155788",
          "data": {
              "type": "reply-message",
              "label": "reply messages if user data pass validation",
              "message": "I have collect this information! name:{{user_name}}, email{{user_email}}, phone number is {{user_mobile}}.",
              "delay": 1,
              "replyType": "text",
              "includeEmoji": false
          },
          "position": {
              "x": 359.4079594964496,
              "y": 575.7440063333406
          },
          "measured": {
              "width": 150,
              "height": 54
          },
          "selected": false,
          "dragging": false
      },
      {
          "id": "1733112355820",
          "data": {
              "type": "question",
              "label": "take user condiration.",
              "question": "Please Confirm is this information correct. reple yes or no ?",
              "responseType": "yes-no",
              "choices": []
          },
          "position": {
              "x": 354.7833258587058,
              "y": 645.5007227758277
          },
          "measured": {
              "width": 150,
              "height": 38
          },
          "selected": false,
          "dragging": false
      },
      {
          "id": "1733112484110",
          "data": {
              "type": "input",
              "label": "user enter his condiramtion",
              "variableName": "{{user_confirmation}}",
              "responseType": "text",
              "userAnswer": "yes",
              "choices": null
          },
          "position": {
              "x": 352.6007895621293,
              "y": 696.0931086538106
          },
          "measured": {
              "width": 150,
              "height": 54
          },
          "selected": false,
          "dragging": false
      },
      {
          "id": "1733112601691",
          "data": {
              "type": "condition",
              "name": "",
              "conditionGroupList": [
                  {
                      "conditionName": "",
                      "conditionsChoosed": {
                          "or_condition": true,
                          "and_condition": false
                      },
                      "goto": {
                          "id": "1733112930610",
                          "data": {
                              "type": "api-call",
                              "label": "API Call"
                          },
                          "position": {
                              "x": 3.6899234339810683,
                              "y": 88.91501564567017
                          }
                      },
                      "conditions": [
                          {
                              "variableName": "company_name",
                              "validation": {
                                  "is": true,
                                  "is_not": false,
                                  "contains": false,
                                  "not_contains": false,
                                  "starts_with": false,
                                  "ends_with": false,
                                  "match_pattern": false,
                                  "has_any_value": false,
                                  "is_empty": false
                              },
                              "value": "",
                              "conditionTitle": "company_name is "
                          }
                      ]
                  }
              ],
              "otherWise": {
                  "id": "1733112951609",
                  "data": {
                      "type": "api-call",
                      "label": "API Call"
                  },
                  "position": {
                      "x": 357.20686282111404,
                      "y": 110.39178871863697
                  }
              }
          },
          "position": {
              "x": 102.26321140569536,
              "y": 744.6650155590612
          },
          "measured": {
              "width": 150,
              "height": 22
          },
          "selected": false,
          "dragging": false
      },
      {
          "id": "1733112930610",
          "data": {
              "type": "api-call",
              "label": "API Call",
              "name": "",
              "description": "",
              "reqUrl": "https://65xh1slifj.execute-api.ap-south-1.amazonaws.com/dev/api/watercan/project/omnibot/fetch/user/with/mobile",
              "methods": "POST",
              "matchedPathVariableList": [],
              "responseStatus": [
                  {
                      "statusCode": "200",
                      "gotoNode": {
                          "type": "end",
                          "label": "End",
                          "icon": null
                      }
                  }
              ],
              "urlParams": [
                  {
                      "key": "",
                      "value": "",
                      "testValue": ""
                  }
              ],
              "headers": [],
              "authorization": {
                  "authType": "",
                  "credential": {}
              },
              "body": {
                  "type": "application/json",
                  "bodyData": [
                      {
                          "key": "mobile",
                          "value": "user_phone"
                      }
                  ]
              },
              "testBodyData": [
                  {
                      "type": "raw",
                      "key": "mobile",
                      "value": "8970829921"
                  }
              ]
          },
          "position": {
              "x": 345.18992343398105,
              "y": 778.9150156456702
          },
          "measured": {
              "width": 150,
              "height": 38
          },
          "selected": false,
          "dragging": false
      },
      {
          "id": "1733112951609",
          "data": {
              "type": "api-call",
              "label": "API Call"
          },
          "position": {
              "x": 357.20686282111404,
              "y": 110.39178871863697
          },
          "measured": {
              "width": 150,
              "height": 40
          },
          "selected": true
      },
      {
          "id": "1733115048449",
          "data": {
              "type": "end",
              "label": "End",
              "icon": null
          },
          "position": {
              "x": 307.1448040490204,
              "y": 349.65116343415843
          },
          "measured": {
              "width": 150,
              "height": 38
          }
      }
  ],
  "edges": [
      {
          "source": "1733111183570",
          "target": "1733111204489",
          "id": "xy-edge__1733111183570-1733111204489"
      },
      {
          "source": "1733111204489",
          "target": "1733111267899",
          "id": "xy-edge__1733111204489-1733111267899"
      },
      {
          "source": "1733111267899",
          "target": "1733111368673",
          "id": "xy-edge__1733111267899-1733111368673"
      },
      {
          "source": "1733111368673",
          "target": "1733111443307",
          "id": "xy-edge__1733111368673-1733111443307"
      },
      {
          "source": "1733111443307",
          "target": "1733111502157",
          "id": "xy-edge__1733111443307-1733111502157"
      },
      {
          "source": "1733111502157",
          "target": "1733111555701",
          "id": "xy-edge__1733111502157-1733111555701"
      },
      {
          "source": "1733111555701",
          "target": "1733111606863",
          "id": "xy-edge__1733111555701-1733111606863"
      },
      {
          "source": "1733111606863",
          "target": "1733111675147",
          "id": "xy-edge__1733111606863-1733111675147"
      },
      {
          "id": "e1733111675147-1733112155788",
          "source": "1733111675147",
          "target": "1733112155788"
      },
      {
          "source": "1733112155788",
          "target": "1733112355820",
          "id": "xy-edge__1733112155788-1733112355820"
      },
      {
          "source": "1733112355820",
          "target": "1733112484110",
          "id": "xy-edge__1733112355820-1733112484110"
      },
      {
          "source": "1733112484110",
          "target": "1733112601691",
          "id": "xy-edge__1733112484110-1733112601691"
      },
      {
          "id": "e1733112601691-1733112930610",
          "source": "1733112601691",
          "target": "1733112930610"
      },
      {
          "id": "e1733112601691-1733112951609",
          "source": "1733112601691",
          "target": "1733112951609"
      },
      {
          "id": "e1733112930610-1733115048449",
          "source": "1733112930610",
          "target": "1733115048449"
      }
  ]
}













// Mock chatbot flow
const chatbotFlow = {
    id: "1733054249816",
    nodes: [
      {
        id: "1733054251466",
        data: {
          type: "start",
          label: "Starter conversation by saying hi or hello",
        },
      },
      {
        id: "1733054320797",
        data: {
          type: "reply-message",
          label: "Greeting user",
          message: "👋 Welcome! I'll help you register.",
          delay: 1,
        },
      },
      {
        id: "1733054422945",
        data: {
          type: "question",
          label: "Asking user name",
          question: "What is your name?",
        },
      },
      {
        id: "1733054531698",
        data: {
          type: "input",
          label: "User will type his name",
          variableName: "{{user_name}}",
        },
      },
      {
        id: "1733055638206",
        data: {
          type: "question",
          label: "Asking user email",
          question: "Nice to meet you, {{user_name}}! 😊 Please enter your email id.",
        },
      },
      {
        id: "1733055849503",
        data: {
          type: "input",
          label: "User will type his email",
          variableName: "{{email}}",
        },
      },
      {
        id: "1733055934376",
        data: {
          type: "reply-message",
          label: "End",
          message: "Thank you for registering! We'll contact you soon at {{email}}. 🎉",
        },
      },
    ],
    edges: [
      { source: "1733054251466", target: "1733054320797" },
      { source: "1733054320797", target: "1733054422945" },
      { source: "1733054422945", target: "1733054531698" },
      { source: "1733054531698", target: "1733055638206" },
      { source: "1733055638206", target: "1733055849503" },
      { source: "1733055849503", target: "1733055934376" },
    ],
  };




// Get the next node based on the flow edges
function getNextNode(session) {
    const edge = structuredFlowData.edges.find((e) => e.source === session.currentNodeId);
    if (edge) {
      return structuredFlowData.nodes.find((node) => node.id === edge.target);
    }
    return null;
  }


  
// Function to handle moving to the next node (can be called within each case)
function goToNextNode(session) {
    const edge = structuredFlowData.edges.find((e) => e.source === session.currentNodeId);
    if (edge) {
      session.currentNodeId = edge.target;
    }
  }


  // Function to validate the condition
function validateCondition(userValue, condition) {
    switch (condition.validation) {
      case "equals":
        return userValue === condition.value;
      case "greaterThan":
        return userValue > condition.value;
      case "lessThan":
        return userValue < condition.value;
      default:
        return false;
    }
  }

























































  
io.on("connection", (socket) => {
    console.log(`User connected with ID: ${socket.id}`);
  
    // Assign session ID using socket.id if userId is not available
    socket.on("send_message", (data) => {
      const { userId, message } = data;
      
      // Use socket.id if userId is not provided
      const sessionId = userId || socket.id;
  
      // Initialize user session if it doesn't exist
      if (!userSessions[sessionId]) {
        userSessions[sessionId] = { currentNodeId: "1733054251466", variables: {} };
        console.log(`Session initialized for user ${sessionId}`);
      }
  
      const session = userSessions[sessionId];
      const currentNode = structuredFlowData.nodes.find((node) => node.id === session.currentNodeId);
    
      if (!currentNode) {
        socket.emit("receive_message", "Sorry, I encountered an issue.");
        return;
      }
  
      let response;
  
      // Log session variables for debugging
      console.log(`Session Variables for User ${sessionId}:`, session.variables);
    
      switch (currentNode.data.type) {
        case "start":
          response = "Hi there! How can I assist you?";
          break;
    
        case "reply-message":
          
          response = response = currentNode.data.message.replace(/{{(\w+)}}/g, (_, key) => session.variables[key] || "");
  
          console.log("reply message node is execute: ", response);
          break;
    
        case "question":
          response = currentNode.data.question.replace(/{{(\w+)}}/g, (_, key) => session.variables[key] || "");
          break;
    
        case "condition":
          const conditionGroups = currentNode.data.conditionGroupList;
          let conditionResponse = "I couldn't match any conditions.";
    
          for (const group of conditionGroups) {
            let conditionsMet = true;
    
            for (const condition of group.conditions) {
              const userValue = session.variables[condition.variableName.slice(2, -2)];
              const conditionMet = validateCondition(userValue, condition);
    
              if (!conditionMet) {
                conditionsMet = false;
                break;
              }
            }
    
            if (conditionsMet) {
              session.currentNodeId = group.goto;  // Set the next node
              response = `Conditions matched! Moving to the next step.`;
              break;
            }
          }
    
          if (!response.includes("Moving to the next step")) {
            session.currentNodeId = currentNode.data.otherWise;  // Fallback node
            response = `Conditions didn't match. Moving to the fallback step.`;
          }
          break;
    
        case "input":
          const variableName = currentNode.data.variableName.slice(2, -2);  // Remove {{}} from the variable name
          session.variables[variableName] = message;
  
          console.log("message: ", message)
          
          // Log the updated session variables
          console.log(`Updated Session Variables for User ${sessionId}:`, session.variables);
          
          response = `Got it! Your answer for ${variableName} has been recorded.`;
    
          if (currentNode.data.responseType === "choices" && currentNode.data.choices.length) {
            response = `Please choose one of the following: ${currentNode.data.choices.join(", ")}`;
          }
          break;
    
        case "email-registration":
          session.variables.email = message;
          response = `Thank you for registering! We'll contact you soon at ${session.variables.email}. 🎉`;
          break;
    
        default:
          response = "Sorry, I don't understand that.";
      }
    
      socket.emit("receive_message", response);
    
      // Move to the next node based on flow data
      const edge = structuredFlowData.edges.find((e) => e.source === session.currentNodeId);
      if (edge) {
        session.currentNodeId = edge.target;
      } else {
        // Wait for 5 minutes (300,000 milliseconds) before deleting the session
        setTimeout(() => {
          delete userSessions[sessionId];  // Remove session after the delay
          console.log(`Session for user ${sessionId} has been deleted after delay.`);
        }, 300000);
      }
    });
  
    socket.on("disconnect", () => {
      console.log(`User disconnected with ID: ${socket.id}`);
    });
  });
  