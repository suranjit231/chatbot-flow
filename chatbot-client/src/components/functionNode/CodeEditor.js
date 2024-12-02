// import React, { useState } from "react";
// import styles from "./CodeEditor.module.css";

// const CodeEditor = (  ) => {
//   const [functionName, setFunctionName] = useState("myFunction");
//   const [parameters, setParameters] = useState(["param1", "param2"]);
//   const [functionBody, setFunctionBody] = useState("// Write your function code here...");
//   const [error, setError] = useState(null);

//   const handleRunCode = () => {
//     try {
//       const paramStr = parameters.join(", ");
//       const func = new Function(paramStr, functionBody);
//       func(); // Execute function with dummy parameters
//       setError(null); // Clear error if successful
//     } catch (err) {
//       setError(err.message); // Catch and display errors
//     }
//   };

//   const handleFunctionNameChange = (e) => setFunctionName(e.target.value);

//   const handleParameterChange = (index, value) => {
//     const updatedParams = [...parameters];
//     updatedParams[index] = value;
//     setParameters(updatedParams);
//   };

//   const addParameter = () => setParameters([...parameters, `param${parameters.length + 1}`]);

//   const removeParameter = (index) =>
//     setParameters(parameters.filter((_, i) => i !== index));

//   const getLineNumbers = (code) => {
//     const lines = code.split("\n");
//     return lines.map((_, index) => index + 1).join("\n");
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.header}>
//         <h2>Function Builder</h2>
//       </div>

     

//       <div className={styles.editor}>
//        {`function ${functionName.toString()}( ${parameters.map((p)=> p.toString())}){

//         ${

//             <div className={styles.codeEditorWrapper}>
//             <pre className={styles.lineNumbers}>
//               {getLineNumbers(functionBody)}
//             </pre>
//             <textarea
//               className={styles.codeEditor}
//               value={functionBody}
//               onChange={(e) => setFunctionBody(e.target.value)}
//             />
//           </div>

//         }
       
//        }`}
       

        
//       </div>

//       <button className={styles.runButton} onClick={handleRunCode}>
//         Run Function
//       </button>

//       {error && <div className={styles.error}>Error: {error}</div>}
//     </div>
//   );
// };

// export default CodeEditor;


























// import React, { useState } from "react";
// import styles from "./CodeEditor.module.css";

// const CodeEditor = () => {
//   const [functionName, setFunctionName] = useState("HelloWorld");
//   const [parameters, setParameters] = useState(["removedUser", "param2"]);
//   const [functionBody, setFunctionBody] = useState("// Write your function code here...");
//   const [error, setError] = useState(null);

//   const handleRunCode = () => {
//     try {
//       const paramStr = parameters.join(", ");
//       const func = new Function(paramStr, functionBody);
//       func(); // Execute function with dummy parameters
//       setError(null); // Clear error if successful
//     } catch (err) {
//       setError(err.message); // Catch and display errors
//     }
//   };

//   let name = "aman";
//   let age = 25

 

//   const handleFunctionNameChange = (e) => setFunctionName(e.target.value);

//   const handleParameterChange = (index, value) => {
//     const updatedParams = [...parameters];
//     updatedParams[index] = value;
//     setParameters(updatedParams);
//   };

//   const addParameter = () => setParameters([...parameters, `param${parameters.length + 1}`]);

//   const removeParameter = (index) =>
//     setParameters(parameters.filter((_, i) => i !== index));

//   const getLineNumbers = (code) => {
//     const lines = code.split("\n");
//     return lines.map((_, index) => index + 1).join("\n");
//   };

//   return (
//     <>


// <div className={styles.container}>
     
//      <div className={styles.codeEditorWrapper}>
//          <pre className={styles.lineNumbers}>
//              {getLineNumbers(functionBody)}
//          </pre>
//          <pre>
//              {`function ${functionName}(${parameters.join(", ")}) {\n`}
//              <textarea
//              className={styles.codeEditor}
//              value={functionBody}
             
//              onChange={(e) => setFunctionBody(e.target.value)}
//          />
//              <pre>{"}"}</pre>
//          </pre>
//      </div>
//    </div>
//    <button className={styles.runButton} onClick={handleRunCode}>
//      Run Function
//    </button>

//    {error && <div className={styles.error}>Error: {error}</div>}
 
    
    
    
//     </>
    
//   );
// };

// export default CodeEditor;






















// import React, { useState } from "react";
// import styles from "./CodeEditor.module.css";

// const CodeEditor = () => {
//   const [functionName, setFunctionName] = useState("HelloWorld");
//   const [parameters, setParameters] = useState([]); // No hardcoded parameters
//   const [parameterValues, setParameterValues] = useState({}); // To hold parameter values
//   const [functionBody, setFunctionBody] = useState("// Write your function code here...");
//   const [error, setError] = useState(null);

//   // Handle the execution of the function
//   const handleRunCode = () => {
//     try {
//       // Dynamically join parameters
//       const paramStr = parameters.join(", ");
      
//       // Create a function dynamically
//       const func = new Function(paramStr, functionBody);
      
//       // Execute the function with the actual values passed from parameterValues object
//       const values = parameters.map(param => parameterValues[param]);
//       func(...values); // Spread the values to match the parameter order

//       setError(null); // Clear any previous errors
//     } catch (err) {
//       setError(err.message); // Catch and display errors
//     }
//   };

//   // Add a new parameter
//   const addParameter = () => {
//     setParameters([...parameters, `param${parameters.length + 1}`]); // Add new param name
//     setParameterValues({...parameterValues, [`param${parameters.length + 1}`]: ""}); // Initialize its value
//   };

//   // Remove a parameter
//   const removeParameter = (index) => {
//     const newParams = parameters.filter((_, i) => i !== index);
//     setParameters(newParams);
//     const newValues = { ...parameterValues };
//     delete newValues[parameters[index]];
//     setParameterValues(newValues);
//   };

//   // Handle parameter value change
//   const handleParameterValueChange = (param, value) => {
//     setParameterValues({ ...parameterValues, [param]: value });
//   };

//   // To display line numbers for the code editor
//   const getLineNumbers = (code) => {
//     const lines = code.split("\n");
//     return lines.map((_, index) => index + 1).join("\n");
//   };

//   return (
//     <>
//       <div className={styles.container}>
//         <div className={styles.header}>
//           <h2>Function Builder</h2>
//         </div>

//         <div className={styles.editor}>
//           <label>Function Name:</label>
//           <input
//             type="text"
//             value={functionName}
//             onChange={(e) => setFunctionName(e.target.value)}
//             className={styles.input}
//           />

//           <label>Parameters:</label>
//           {parameters.map((param, index) => (
//             <div key={index} className={styles.parameter}>
//               <input
//                 type="text"
//                 value={param}
//                 disabled // Disable editing the parameter name, it's static
//                 className={styles.input}
//               />
//               <input
//                 type="text"
//                 placeholder={`Enter value for ${param}`}
//                 value={parameterValues[param]}
//                 onChange={(e) => handleParameterValueChange(param, e.target.value)}
//                 className={styles.input}
//               />
//               <button onClick={() => removeParameter(index)}>Remove</button>
//             </div>
//           ))}
//           <button onClick={addParameter}>Add Parameter</button>

//           {/* Dynamically generated function body with textarea */}
//           <div className={styles.codeEditorWrapper}>
//             <pre className={styles.lineNumbers}>
//               {getLineNumbers(functionBody)}
//             </pre>
//             <pre>
//               {`function ${functionName}(${parameters.join(", ")}) {\n`}
//               <textarea
//                 className={styles.codeEditor}
//                 value={functionBody}
//                 onChange={(e) => setFunctionBody(e.target.value)}
//               />
//               <pre>{"}"}</pre>
//             </pre>
//           </div>
//         </div>

//         <button className={styles.runButton} onClick={handleRunCode}>
//           Run Function
//         </button>

//         {error && <div className={styles.error}>Error: {error}</div>}
//       </div>
//     </>
//   );
// };

// export default CodeEditor;
























// {parameters, setParameters} 

import React, { useState } from "react";
import styles from "./CodeEditor.module.css";

const CodeEditor = ({parameters, getTestResponse}) => {
  const [functionName, setFunctionName] = useState("HelloWorld");
  //const [parameters, setParameters] = useState([]); 
  const [functionBody, setFunctionBody] = useState("// Write your function code here...");
  const [error, setError] = useState(null);

  // Handle the execution of the function
  const handleRunCode = (runType) => {
    try {
      // Dynamically generate the function with the parameters
      const paramStr = parameters.map(param => param.name).join(", "); 

      // Create the function dynamically
      const func = new Function(paramStr, functionBody);

      // Pass the parameter values to the function
      let values ;

      if(runType === "exec"){
       values = parameters.map(param => param.value);

      }

      if( runType === "test"){
        values = parameters.map(param => param.testValue);
      }

      //const values = parameters.map(param => param.value);

      // Execute the function with the actual values
     let result = func(...values);

     console.log("result: ", result)

     getTestResponse(result);

      setError(null); // Clear previous errors
    } catch (err) {
      setError(err.message); // Catch and display errors
    }
  };

  // // Add a new parameter (with name and value)
  // const addParameter = () => {
  //   setParameters([
  //     ...parameters,
  //     { name: "", value: "" }, 
  //   ]);
  // };

  // console.log("parameter: ", parameters)

  // // Remove a parameter
  // const removeParameter = (index) => {
  //   const newParams = parameters.filter((_, i) => i !== index);
  //   setParameters(newParams);
  // };

  // // Handle changes in parameter name and value
  // const handleParameterChange = (index, field, value) => {
  //   const newParams = [...parameters];
  //   newParams[index][field] = value; 
  //   setParameters(newParams);
  // };

  // To display line numbers for the code editor
  const getLineNumbers = (code) => {
    const lines = code.split("\n");
    return lines.map((_, index) => index + 1).join("\n");
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Function Builder</h2>
        </div>

        <div className={styles.editor}>
          <label>Function Name:</label>
          <input
            type="text"
            value={functionName}
            onChange={(e) => setFunctionName(e.target.value)}
            className={styles.input}
          />

          {/* <label>Parameters:</label>
          {parameters.map((param, index) => (
            <div key={index} className={styles.parameter}>
          
              <input
                type="text"
                value={param.name}
                placeholder="Parameter Name"
                onChange={(e) => handleParameterChange(index, "name", e.target.value)}
                className={styles.input}
              />
            

              <input
                type="text"
                placeholder={`Enter value for ${param.name}`}
                value={param.value}
                onChange={(e) => handleParameterChange(index, "value", e.target.value)}
                className={styles.input}
              />
              <button onClick={() => removeParameter(index)}>Remove</button>
            </div>
          ))}
          <button onClick={addParameter}>Add Parameter</button> */}

          {/* Dynamically generated function body with textarea */}
          <div className={styles.codeEditorWrapper}>
            <pre className={styles.lineNumbers}>
              {getLineNumbers(functionBody)}
            </pre>
            <pre>
              {`function ${functionName}(${parameters.map(p => p.name).join(", ")}) {\n`}
              <textarea
                className={styles.codeEditor}
                value={functionBody}
                onChange={(e) => setFunctionBody(e.target.value)}
              />
              <pre>{"}"}</pre>
            </pre>
          </div>
        </div>

        <button className={styles.runButton} onClick={()=>handleRunCode("exec")}>
          Run Function
        </button>

        <button onClick={()=>handleRunCode("test")}>
          Test
        </button>

        {error && <div className={styles.error}>Error: {error}</div>}
      </div>
    </>
  );
};

export default CodeEditor;
