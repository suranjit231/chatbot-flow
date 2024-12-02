// import NodeContainerSidebar from "./components/nodeSidebar/Nodesidebar";
// import { FlowContaxtProvider } from "./context/FlowContext";
// import FlowBuilder from "./components/flowBuilder/FlowBuilder";


// function App() {
//   return (
//     <div className="App">

//       <FlowContaxtProvider>

//             <NodeContainerSidebar />
//             <FlowBuilder />
           

//       </FlowContaxtProvider>
//     </div>
//   );
// }

// export default App;






















//====== chat app ui related code and the above is flow creation logic ==========//

import React, { useEffect, useState } from "react";
import Chat from "./chatApp/jsChat/Chat";

function App(){


    return (
    <div className="App">
          <Chat/>
    </div>
  );
}

export default App;

