const flowData = {
    "id": "1733054249816",
    "name": "Register user Flow",
    "description": "user data collection form",
    "nodes": [
        {
            "id": "1733054251466",
            "data": {
                "type": "start",
                "label": "Stater conversion by using by saying hi or hello"
            },
            "position": {
                "x": -107.84479277804932,
                "y": 10.665872386001524
            },
            "measured": {
                "width": 150,
                "height": 70
            },
            "selected": false,
            "dragging": false
        },
        {
            "id": "1733054320797",
            "data": {
                "type": "reply-message",
                "label": "Greeting user ",
                "message": "👋 Welcome! I'll help you register.",
                "delay": 1,
                "replyType": "text",
                "includeEmoji": false
            },
            "position": {
                "x": 380.2972891550282,
                "y": 38.54103580149673
            },
            "measured": {
                "width": 150,
                "height": 38
            },
            "selected": false,
            "dragging": false
        },
        {
            "id": "1733054422945",
            "data": {
                "type": "question",
                "label": "Asking user name",
                "question": "What is your name?\",",
                "responseType": "text",
                "choices": []
            },
            "position": {
                "x": 382.4456125099409,
                "y": 97.84410524169824
            },
            "measured": {
                "width": 150,
                "height": 38
            },
            "selected": false,
            "dragging": false
        },
        {
            "id": "1733054531698",
            "data": {
                "type": "input",
                "label": "user will typing his name",
                "variableName": "{{user_name}}",
                "responseType": "text",
                "userAnswer": "name",
                "choices": null
            },
            "position": {
                "x": 381.8971544869188,
                "y": 156.47903825699728
            },
            "measured": {
                "width": 150,
                "height": 54
            },
            "selected": false,
            "dragging": false
        },
        {
            "id": "1733055638206",
            "data": {
                "type": "question",
                "label": "ask user email",
                "question": "Nice to meet you, {{user_name}}! 😊 Please enter your email id.",
                "responseType": "text",
                "choices": []
            },
            "position": {
                "x": 383.730592697857,
                "y": 231.95023802071623
            },
            "measured": {
                "width": 150,
                "height": 38
            },
            "selected": false,
            "dragging": false
        },
        {
            "id": "1733055849503",
            "data": {
                "type": "input",
                "label": "User will type his email",
                "variableName": "{{email}}",
                "responseType": "text",
                "userAnswer": "email",
                "choices": null
            },
            "position": {
                "x": 382.1543020186284,
                "y": 297.84537052305046
            },
            "measured": {
                "width": 150,
                "height": 38
            },
            "selected": false,
            "dragging": false
        },
        {
            "id": "1733055934376",
            "data": {
                "type": "reply-message",
                "label": "end",
                "message": "Thank you for registering! We'll contact you soon at {{email}}. 🎉",
                "delay": 1,
                "replyType": "text",
                "includeEmoji": false
            },
            "position": {
                "x": 380.04515994617924,
                "y": 363.46933593337275
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
            "source": "1733054251466",
            "target": "1733054320797",
            "id": "xy-edge__1733054251466-1733054320797"
        },
        {
            "source": "1733054320797",
            "target": "1733054422945",
            "id": "xy-edge__1733054320797-1733054422945"
        },
        {
            "source": "1733054422945",
            "target": "1733054531698",
            "id": "xy-edge__1733054422945-1733054531698"
        },
        {
            "source": "1733054531698",
            "target": "1733055638206",
            "id": "xy-edge__1733054531698-1733055638206"
        },
        {
            "source": "1733055638206",
            "target": "1733055849503",
            "id": "xy-edge__1733055638206-1733055849503"
        },
        {
            "source": "1733055849503",
            "target": "1733055934376",
            "id": "xy-edge__1733055849503-1733055934376"
        }
    ]

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
        let structuredNode = {
            id: node.id,
            data: {
                type: node.data.type,
                label: node.data.label || '',  // Defaulting label in case it's missing
            }
        };

        // Handling different node types dynamically
        switch (node.data.type) {
            case 'start':
                structuredNode.data = {
                    ...structuredNode.data,
                    message: "Start node details"  // Add additional fields if needed
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
                let conditionNode = {
                    id: node.id,
                    data: {
                    type: node.data.type,
                    conditionGroupList: node.data.conditionGroupList.map((group) => ({
                        conditionName: group.conditionName,
                        onditionsChoosed: group.conditionsChoosed,
                        goto: structureNode(group.goto), // Recursively handle the goto node
                        onditions: group.conditions.map((condition) => ({
                                    variableName: condition.variableName,
                                    validation: condition.validation,
                                    value: condition.value,
                                    conditionTitle: condition.conditionTitle,
                                })),
                         })),
                        otherWise: structureNode(node.data.otherWise), // Recursively handle the otherWise node
                        },
                    };
                    fresFilteredFlow.nodes.push(conditionNode);
                    break;   

            default:
                console.warn(`Unknown node type: ${node.data.type}`);
        }

        structuredFlow.nodes.push(structuredNode);
    }

    // Loop through all nodes and apply the structureNode function
    parsedFlow.nodes.forEach((node) => {
        structureNode(node);
    });

    // Add edges to structuredFlow (no change needed here, assuming edges data is fine)
    structuredFlow.edges = parsedFlow.edges;

    // Returning the structured flow object
    return structuredFlow;
}

const structuredFlowData = parsedFlowData(flowData);
console.log(structuredFlowData);


export default structuredFlowData;
