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

  console.log(`userValue: ${userValue} - condition: ${condition}`)

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
    try {
      const { userId, message } = data;
      const sessionId = userId || socket.id;

      // Initialize user session if it doesn't exist
      if (!userSessions[sessionId]) {
        userSessions[sessionId] = { currentNodeId: "1733111183570", variables: {} };
        console.log(`Session initialized for user ${sessionId}`);
      }

      const session = userSessions[sessionId];
      const currentNode = structuredFlowData.nodes.find((node) => node.id === session.currentNodeId);
      
      if (!currentNode) {
        socket.emit("receive_message", "Sorry, I encountered an issue finding the current node.");
        return;
      }

      console.log("Current Node:", currentNode.data.type, currentNode.id);
      console.log("Current Variables:", session.variables);

      let response;
      let nextNodeId = null;

      switch (currentNode.data.type) {
        case "start":
          response = "Hi there! How can I assist you?";
          break;

        case "reply-message":
          if (!currentNode.data.message) {
            response = "Error: Message not defined";
            break;
          }
          response = currentNode.data.message.replace(/{{(\w+)}}/g, (_, key) => {
            const value = session.variables[key];
            return value !== undefined ? value : "";
          });
          break;

        case "question":
          response = currentNode.data.question.replace(/{{(\w+)}}/g, (_, key) => {
            const value = session.variables[key];
            return value !== undefined ? value : "";
          });
          break;

        case "input":
          const variableName = currentNode.data.variableName.slice(2, -2);
          session.variables[variableName] = message;
          console.log(`Input received - ${variableName}: ${message}`);
          
          response = `Got it! Your answer for ${variableName} has been recorded.`;
          if (currentNode.data.responseType === "choices" && currentNode.data.choices?.length) {
            response = `Please choose one of the following: ${currentNode.data.choices.join(", ")}`;
          }
          break;

        case "condition":
          console.log("Executing condition node");
          const conditionGroups = currentNode.data.conditionGroupList || [];
          let conditionMatched = false;

          for (const group of conditionGroups) {
            let conditionsMet = true;
            console.log("Checking condition group:", group);

            for (const condition of group.conditions) {
              const userValue = session.variables[condition.variableName?.slice(2, -2)];
              console.log(`Checking condition - Variable: ${condition.variableName}, Value: ${userValue}, Expected: ${condition.value}`);
              
              const conditionMet = validateCondition(userValue, condition);
              console.log("Condition met:", conditionMet);

              if (!conditionMet) {
                conditionsMet = false;
                break;
              }
            }

            if (conditionsMet) {
              nextNodeId = group.goto;
              response = `Conditions matched in group: ${group.condGroupName}. Moving to next step.`;
              conditionMatched = true;
              break;
            }
          }

          if (!conditionMatched) {
            if (currentNode.data.otherWise) {
              nextNodeId = currentNode.data.otherWise;
              response = `No conditions matched. Using fallback path.`;
            } else {
              response = `No conditions matched and no fallback defined.`;
            }
          }
          break;

        case "api-call":
          console.log("Executing API call node");
          try {
            const { reqUrl, methods, headers = [], body } = currentNode.data;
            
            // Prepare headers
            const requestHeaders = {};
            headers.forEach((header) => {
              const processedValue = header.value.replace(/{{(\w+)}}/g, (_, key) => {
                const value = session.variables[key];
                return value !== undefined ? value : "";
              });
              requestHeaders[header.key] = processedValue;
            });

            // Prepare body
            let requestBody = null;
            if (body) {
              if (body.type === "application/json") {
                const bodyStr = JSON.stringify(body.bodyData).replace(/{{(\w+)}}/g, (_, key) => {
                  const value = session.variables[key];
                  return value !== undefined ? value : "";
                });
                requestBody = JSON.parse(bodyStr);
              } else if (body.type === "url-encoded-data") {
                requestBody = {};
                body.bodyData.forEach((field) => {
                  if (field.key && field.value) {
                    const processedValue = field.value.replace(/{{(\w+)}}/g, (_, key) => {
                      const value = session.variables[key];
                      return value !== undefined ? value : "";
                    });
                    requestBody[field.key] = processedValue;
                  }
                });
              }
            }

            console.log("API Request:", {
              url: reqUrl,
              method: methods,
              headers: requestHeaders,
              body: requestBody
            });

            const apiResponse = await axios({
              url: reqUrl,
              method: methods,
              headers: requestHeaders,
              data: requestBody
            });

            console.log("API Response:", apiResponse.data);
            session.variables.apiResponse = apiResponse.data;
            response = `API call successful!`;
          } catch (error) {
            console.error("API call error:", error);
            response = `API call failed: ${error.message}`;
          }
          break;

        default:
          response = "Unsupported node type: " + currentNode.data.type;
      }

      // Send response to client
      socket.emit("receive_message", response);

      // Determine next node
      if (nextNodeId) {
        session.currentNodeId = nextNodeId;
      } else {
        const edge = structuredFlowData.edges.find((e) => e.source === session.currentNodeId);
        if (edge) {
          session.currentNodeId = edge.target;
          console.log("Moving to next node:", edge.target);
        } else {
          console.log("No next node found. Flow completed.");
          setTimeout(() => {
            delete userSessions[sessionId];
            console.log(`Session ${sessionId} cleared after completion`);
          }, 300000);
        }
      }
    } catch (error) {
      console.error("Error processing message:", error);
      socket.emit("receive_message", "An error occurred while processing your message.");
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
server.listen(3500, () => {
  console.log("Server is listening on port 3500");
});
