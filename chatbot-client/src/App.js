import NodeContainerSidebar from "./components/nodeSidebar/Nodesidebar";
import { FlowContaxtProvider } from "./context/FlowContext";
import FlowBuilder from "./components/flowBuilder/FlowBuilder";


function App() {
  return (
    <div className="App">

      <FlowContaxtProvider>

            <NodeContainerSidebar />
            <FlowBuilder />
           

      </FlowContaxtProvider>
    </div>
  );
}

export default App;
