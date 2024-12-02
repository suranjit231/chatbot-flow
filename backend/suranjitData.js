// const flowData = {
//     "id": "1733054249816",
//     "name": "Register user Flow",
//     "description": "user data collection form",
//     "nodes": [
//         {
//             "id": "1733054251466",
//             "data": {
//                 "type": "start",
//                 "label": "Stater conversion by using by saying hi or hello"
//             },
//             "position": {
//                 "x": -107.84479277804932,
//                 "y": 10.665872386001524
//             },
//             "measured": {
//                 "width": 150,
//                 "height": 70
//             },
//             "selected": false,
//             "dragging": false
//         },
//         {
//             "id": "1733054320797",
//             "data": {
//                 "type": "reply-message",
//                 "label": "Greeting user ",
//                 "message": "👋 Welcome! I'll help you register.",
//                 "delay": 1,
//                 "replyType": "text",
//                 "includeEmoji": false
//             },
//             "position": {
//                 "x": 380.2972891550282,
//                 "y": 38.54103580149673
//             },
//             "measured": {
//                 "width": 150,
//                 "height": 38
//             },
//             "selected": false,
//             "dragging": false
//         },
//         {
//             "id": "1733054422945",
//             "data": {
//                 "type": "question",
//                 "label": "Asking user name",
//                 "question": "What is your name?\",",
//                 "responseType": "text",
//                 "choices": []
//             },
//             "position": {
//                 "x": 382.4456125099409,
//                 "y": 97.84410524169824
//             },
//             "measured": {
//                 "width": 150,
//                 "height": 38
//             },
//             "selected": false,
//             "dragging": false
//         },
//         {
//             "id": "1733054531698",
//             "data": {
//                 "type": "input",
//                 "label": "user will typing his name",
//                 "variableName": "{{user_name}}",
//                 "responseType": "text",
//                 "userAnswer": "name",
//                 "choices": null
//             },
//             "position": {
//                 "x": 381.8971544869188,
//                 "y": 156.47903825699728
//             },
//             "measured": {
//                 "width": 150,
//                 "height": 54
//             },
//             "selected": false,
//             "dragging": false
//         },
//         {
//             "id": "1733055638206",
//             "data": {
//                 "type": "question",
//                 "label": "ask user email",
//                 "question": "Nice to meet you, {{user_name}}! 😊 Please enter your email id.",
//                 "responseType": "text",
//                 "choices": []
//             },
//             "position": {
//                 "x": 383.730592697857,
//                 "y": 231.95023802071623
//             },
//             "measured": {
//                 "width": 150,
//                 "height": 38
//             },
//             "selected": false,
//             "dragging": false
//         },
//         {
//             "id": "1733055849503",
//             "data": {
//                 "type": "input",
//                 "label": "User will type his email",
//                 "variableName": "{{email}}",
//                 "responseType": "text",
//                 "userAnswer": "email",
//                 "choices": null
//             },
//             "position": {
//                 "x": 382.1543020186284,
//                 "y": 297.84537052305046
//             },
//             "measured": {
//                 "width": 150,
//                 "height": 38
//             },
//             "selected": false,
//             "dragging": false
//         },
//         {
//             "id": "1733055934376",
//             "data": {
//                 "type": "reply-message",
//                 "label": "end",
//                 "message": "Thank you for registering! We'll contact you soon at {{email}}. 🎉",
//                 "delay": 1,
//                 "replyType": "text",
//                 "includeEmoji": false
//             },
//             "position": {
//                 "x": 380.04515994617924,
//                 "y": 363.46933593337275
//             },
//             "measured": {
//                 "width": 150,
//                 "height": 38
//             },
//             "selected": true,
//             "dragging": false
//         }
//     ],
//     "edges": [
//         {
//             "source": "1733054251466",
//             "target": "1733054320797",
//             "id": "xy-edge__1733054251466-1733054320797"
//         },
//         {
//             "source": "1733054320797",
//             "target": "1733054422945",
//             "id": "xy-edge__1733054320797-1733054422945"
//         },
//         {
//             "source": "1733054422945",
//             "target": "1733054531698",
//             "id": "xy-edge__1733054422945-1733054531698"
//         },
//         {
//             "source": "1733054531698",
//             "target": "1733055638206",
//             "id": "xy-edge__1733054531698-1733055638206"
//         },
//         {
//             "source": "1733055638206",
//             "target": "1733055849503",
//             "id": "xy-edge__1733055638206-1733055849503"
//         },
//         {
//             "source": "1733055849503",
//             "target": "1733055934376",
//             "id": "xy-edge__1733055849503-1733055934376"
//         }
//     ]

// }























































const flowData = {
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

//======== if node type is api call then senitized the empty last fields ==========//
function sanitizeBodyData(bodyType, bodyData) {
    if (bodyType === 'multipart-form-data' || bodyType === 'url-encoded-data') {
        // Get the last item in bodyData
        const lastItem = bodyData[bodyData.length - 1];

        if (lastItem) {
            // Check if any field is missing or empty
            const isAnyFieldMissing = ['key', 'value', 'testValue'].some(
                (field) => !lastItem[field]
            );

            // If any field is missing, remove the last item
            if (isAnyFieldMissing) {
                bodyData.pop();
            }
        }
    }

    return bodyData;
}


function parsedFlowData(flow) {
    const parsedFlow = flow; // Assuming the flow is already an object (not a string)
    let structuredFlow = {
        id: parsedFlow.id,
        description: parsedFlow.description,
        name: parsedFlow.name,
        nodes: [],
        edges: []
    };

    // Function to structure each node based on its type
    function structureNode(node) {
        if (!node) {
            console.error("Skipped null or undefined node:", node);
            return null;
        }

        let structuredNode = {
            id: node.id,
            data: {
                type: node.data?.type,
                label: node.data?.label || '', // Defaulting label in case it's missing
            }
        };

        // Handling different node types dynamically
        switch (node.data?.type) {
            case 'start':
                structuredNode.data = {
                    ...structuredNode.data,
                    message: "Start node details" // Add additional fields if needed
                };
                break;

            case 'reply-message':
                structuredNode.data = {
                    ...structuredNode.data,
                    message: node.data.message,
                    replyType: node.data.replyType || 'text',
                    includeEmoji: node.data.includeEmoji
                };
                break;

            case 'question':
                structuredNode.data = {
                    ...structuredNode.data,
                    question: node.data.question,
                    responseType: node.data.responseType || 'text',
                    choices: node.data.choices || []
                };
                break;

            case 'input':
                structuredNode.data = {
                    ...structuredNode.data,
                    variableName: node.data.variableName || '',
                    responseType: node.data.responseType || 'text',
                    userAnswer: node.data.userAnswer || '',
                    choices: node.data.choices || []
                };
                break;

            case "condition":
                structuredNode.data = {
                    type: node.data.type,
                    conditionGroupList: node.data.conditionGroupList.map((group) => ({
                        conditionName: group.conditionName,
                        conditionsChoosed: group.conditionsChoosed,
                        goto: structureNode(group.goto), // Recursively handle the goto node
                        conditions: group.conditions.map((condition) => ({
                            variableName: condition.variableName,
                            validation: condition.validation,
                            value: condition.value,
                            conditionTitle: condition.conditionTitle,
                        })),
                    })),
                    otherWise: structureNode(node.data.otherWise), // Recursively handle the otherWise node
                };
                break;

            case 'api-call':
                structuredNode.data = {
                    ...structuredNode.data,
                    name: node.data.name,
                    description: node.data.description,
                    reqUrl: node.data.reqUrl,
                    methods: node.data.methods,
                    matchedPathVariableList: node.data.matchedPathVariableList || [],
                    responseStatus: node.data.responseStatus?.map(status => ({
                        statusCode: status.statusCode,
                        gotoNode: status.gotoNode ? structureNode(status.gotoNode) : null,
                    })),
                    urlParams: node.data.urlParams || [],
                    headers: node.data.headers || [],
                    authorization: node.data.authorization || {},
                    body: {
                        type: node.data.body?.type || '',
                        bodyData: sanitizeBodyData(node.data.body?.type, node.data.body?.bodyData || [])
                    },
                    testBodyData: node.data.testBodyData || []
                };
                break;

            default:
                console.warn(`Unknown node type: ${node.data?.type}`);
        }

        return structuredNode;
    }

    // Filter out null/undefined nodes and process only valid ones
    parsedFlow.nodes
        .filter((node) => node !== null && node !== undefined) // Remove null/undefined nodes
        .forEach((node) => {
            const structuredNode = structureNode(node);
            if (structuredNode) {
                structuredFlow.nodes.push(structuredNode);
            }
        });

    // Add edges to structuredFlow (no change needed here, assuming edges data is fine)
    structuredFlow.edges = parsedFlow.edges;

    // Returning the structured flow object
    return structuredFlow;
}

const structuredFlowData = parsedFlowData(flowData);
console.log(structuredFlowData);

export default structuredFlowData;
