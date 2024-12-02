// import express from "express";
// import { Server } from "socket.io";
// import { createServer } from "http";
// import cors from "cors";

// const app = express();
// app.use(cors());

// const server = createServer(app);

// const io = new Server(server, {
//   cors: {
//     origin: "http://localhost:3000", // Allow requests from this origin
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     credentials: true,
//   },
// });

// io.on("connection", (socket) => {
//   console.log(`User connected with ID: ${socket.id}`);

//   // Listen for the 'send_message' event from the client
//   socket.on("send_message", (data) => {
//     console.log("Message received from client:", data);

//     // Emit a chatbot response back to the same client
//     const chatbotResponse = `You said: "${data}". Here's a reply from the chatbot!`;
//     socket.emit("receive_message", chatbotResponse);
//   });

//   // Handle user disconnection
//   socket.on("disconnect", () => {
//     console.log(`User disconnected with ID: ${socket.id}`);
//   });
// });

// // Listen for default HTTP requests
// app.get("/", (req, res) => {
//   res.send("Chat server is running!");
// });

// // Start the server
// server.listen(3200, () => {
//   console.log("Server is listening on port 3200");
// });
































// import express from "express";
// import { Server } from "socket.io";
// import { createServer } from "http";
// import cors from "cors";

// import structuredFlowData from "./src/dummyData/FlowDataParsingTechniques";

// const app = express();
// app.use(cors());

// const server = createServer(app);

// const io = new Server(server, {
//   cors: {
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     credentials: true,
//   },
// });



// function validateCondition(userValue, condition) {
//   switch (condition.validation) {
//     case "equals":
//       return userValue === condition.value;
//     case "greaterThan":
//       return userValue > condition.value;
//     case "lessThan":
//       return userValue < condition.value;
//     default:
//       return false;
//   }
// }


// // User sessions to store current flow state
// const userSessions = {};

// io.on("connection", (socket) => {
//   console.log(`User connected with ID: ${socket.id}`);

//   socket.on("send_message", (data) => {
//     const { userId, message } = data;

//     // Initialize user session if not exists
//     if (!userSessions[userId]) {
//       userSessions[userId] = { currentNodeId: "1733054251466", variables: {} };
//     }

//     const session = userSessions[userId];
//     const currentNode = chatbotFlow.nodes.find((node) => node.id === session.currentNodeId);

//     if (!currentNode) {
//       socket.emit("receive_message", "Sorry, I encountered an issue.");
//       return;
//     }

//     let response;

//     switch (currentNode.data.type) {
//       case "start":
//         response = "Hi there! How can I assist you?";
//         break;

//       case "reply-message":
//         response = currentNode.data.message;
//         break;

//       case "question":
//         response = currentNode.data.question.replace(/{{(\w+)}}/g, (_, key) => session.variables[key] || "");
//         break;

//       case "condition":
//           // Handle conditional node logic
//         const conditionGroups = currentNode.data.conditionGroupList;
//         let conditionResponse = "I couldn't match any conditions."; 
    
//           // Process each condition group
//         for (const group of conditionGroups) {
//         let conditionsMet = true;
    
//             // Check if all conditions in this group are met
//         for (const condition of group.conditions) {
//         const userValue = session.variables[condition.variableName.slice(2, -2)]; // Remove {{}} from variable name
//         const conditionMet = validateCondition(userValue, condition); // Validate the condition
    
//             if (!conditionMet) {
//               conditionsMet = false;
//               break; // Exit the loop if any condition fails
//               }
//             }
    
//             // If all conditions in the group are met, handle the `goto` logic
//             if (conditionsMet) {
//               currentNode = group.goto; // Move to the next node based on condition
//               response = `Conditions matched! Moving to the next step.`;
//               break; // Exit loop after processing the first matched condition
//             }
//           }
    
//           // If no conditions matched, handle `otherwise` logic
//           if (!response.includes("Moving to the next step")) {
//             currentNode = currentNode.data.otherWise; // Fallback to `otherwise` node
//             response = `Conditions didn't match. Moving to the fallback step.`;
//           }
//           break;
    

//       case "input":
//         // Save user input to variables
//         session.variables[currentNode.data.variableName.slice(2, -2)] = message;
//         response = "Got it!";
//         break;

//       default:
//         response = "Sorry, I don't understand that.";
//     }

//     socket.emit("receive_message", response);

//     // Move to the next node
//     const edge = chatbotFlow.edges.find((e) => e.source === session.currentNodeId);
//     if (edge) {
//       session.currentNodeId = edge.target;
//     } else {
//       delete userSessions[userId]; // End session if no further nodes
//     }
//   });

//   socket.on("disconnect", () => {
//     console.log(`User disconnected with ID: ${socket.id}`);
//   });
// });

// // Default HTTP route
// app.get("/", (req, res) => {
//   res.send("Chat server is running!");
// });

// // Start server
// server.listen(3200, () => {
//   console.log("Server is listening on port 3200");
// });
































































import express from "express";
import { Server } from "socket.io";
import { createServer } from "http";
import cors from "cors";
import bodyParser from "body-parser";
import axios from "axios";

// Example flow data, you should replace it with your actual flow data
import structuredFlowData from "./suranjitData.js";


const app = express();
app.use(cors());


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  },
});


// Function to validate the condition
function validateCondition(userValue, condition) {
  const { validation, value } = condition;

  if (validation.is) {
    return userValue === value;
  }

  if (validation.is_not) {
    return userValue !== value;
  }

  if (validation.contains) {
    return userValue.includes(value);
  }

  if (validation.not_contains) {
    return !userValue.includes(value);
  }

  if (validation.starts_with) {
    return userValue.startsWith(value);
  }

  if (validation.ends_with) {
    return userValue.endsWith(value);
  }

  if (validation.match_pattern) {
    const regex = new RegExp(value);
    return regex.test(userValue);
  }

  if (validation.has_any_value) {
    return userValue.trim() !== ""; // Ensures the value is not empty
  }

  if (validation.is_empty) {
    return userValue.trim() === ""; // Checks for an empty value
  }

  return false; // Default case if no validation matches


}







const userSessions = {};

  
io.on("connection", (socket) => {
  console.log(`User connected with ID: ${socket.id}`);

  // Assign session ID using socket.id if userId is not available
  socket.on("send_message", async (data) => {
    const { userId, message } = data;
    
    // Use socket.id if userId is not provided
    const sessionId = userId || socket.id;

    // Initialize user session if it doesn't exist
    if (!userSessions[sessionId]) {
      userSessions[sessionId] = { currentNodeId: "1733111183570", variables: {} };
      console.log(`Session initialized for user ${sessionId}`);
    }

    const session = userSessions[sessionId];
    const currentNode = structuredFlowData.nodes.find((node) => node.id === session.currentNodeId);
    console.log(currentNode)
  
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
  
      
          session.currentNodeId = currentNode.data.otherWise;  // Fallback node
          response = `Conditions didn't match. Moving to the fallback step.`;
        
        break;
      
      //======= if case is api-call call an api to give response back correctly.
      case "api-call":
        try {
          const { reqUrl, methods, headers, body } = currentNode.data;

          // Prepare headers
          const requestHeaders = {};
          headers.forEach((header) => {
            requestHeaders[header.key] = header.value.replace(/{{(\w+)}}/g, (_, key) => session.variables[key] || "");
          });

          // Prepare body
          let requestBody;
          if (body.type === "application/json") {
            requestBody = JSON.parse(
              JSON.stringify(body.bodyData).replace(/{{(\w+)}}/g, (_, key) => session.variables[key] || "")
            );
          } else if (body.type === "url-encoded-data") {
            requestBody = body.bodyData.reduce((acc, field) => {
              if (field.key && field.value) {
                acc[field.key] = field.value.replace(/{{(\w+)}}/g, (_, key) => session.variables[key] || "");
              }
              return acc;
            }, {});
          } else if (body.type === "multipart-form-data") {
            const formData = new FormData();
            body.bodyData.forEach((field) => {
              if (field.key && field.value) {
                formData.append(field.key, field.value.replace(/{{(\w+)}}/g, (_, key) => session.variables[key] || ""));
              }
            });
            requestBody = formData;
            Object.assign(requestHeaders, formData.getHeaders());
          }

          // Make the API call using axios
          const apiResponse = await axios({
            url: reqUrl.replace(/{{(\w+)}}/g, (_, key) => session.variables[key] || ""),
            method: methods,
            headers: requestHeaders,
            data: requestBody,
          });

          // Handle API response
          response = `API call successful! Response: ${JSON.stringify(apiResponse.data)}`;

          // Optionally store response in session variables
          session.variables.apiResponse = apiResponse.data;

        } catch (error) {
          console.error("Error in API call:", error.message || error);
          response = `Sorry, there was an error calling the API: ${error.response?.data || error.message || "Unknown error"}`;
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



// Default HTTP route
app.get("/", (req, res) => {
  res.send("Chat server is running!");
});

// Start server
server.listen(3200, () => {
  console.log("Server is listening on port 3200");
});






























