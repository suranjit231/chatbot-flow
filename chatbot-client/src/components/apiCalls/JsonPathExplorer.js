import React, { useEffect, useState } from 'react';
import styles from "./apiCallCss/JsonPath.module.css"

const JsonPathExplorer = ({getSelectedPath, apiResponse}) => {
  const [selectedPath, setSelectedPath] = useState('');
  const [expandedPaths, setExpandedPaths] = useState(new Set());
  const [pathFormat, setPathFormat] = useState('dot'); // 'dot', 'bracket', 'jsonPath'

  // Sample JSON - replace with your own
//   const sampleJson = {
//     "success": true,
//     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InNlYXJjaF9hZGRyZXNzIjp7ImNvb3JkaW5hdGVzIjpbNzcuNjQ2OTQ5MywxMi45OTA0MzhdLCJwcmltYXJ5X2FkZHJlc3MiOiJTcmkgU2FiYXJpIEthcnRoaWsgR2VuZXJhbCBzdG9yZXMoIGNvbnRhY3QgdG8gbG9vc2Ugd2VpZ2h0IHVwdG8gNWtnIGEgbW9udGgpLCAyMjQsIDh0aCBDcm9zcyBSZCwgTmV3IEJhaXl5YXBwYW5haGFsbGkgRXh0ZW5zaW9uLCBLcmlzaG5hbXVydGkgTmFnYXIsIE9sZCBCYWl5eWFwcGFuYWhhbGxpLCBNYXJ1dGhpIFNldmFuYWdhciwgQmVuZ2FsdXJ1LCBLYXJuYXRha2EgNTYwMDM4LCBJbmRpYSJ9LCJzdGF0dXMiOnsidmVyaWZpZWQiOnRydWUsInN1YnNjcmliZWQiOnRydWUsImFjdGl2YXRlZCI6dHJ1ZSwiaW5zdGFsbGF0aW9uX2NvbXBsZXRlZCI6dHJ1ZSwiYWRkcmVzc192ZXJpZmllZCI6ZmFsc2UsImluc3RhbGxhdGlvbl9wZW5kaW5nIjpmYWxzZSwiZGV2aWNlX2FjdGl2YXRpb25fdGltZSI6IjIwMjEtMTEtMjhUMTM6MTc6MTEuNzQyWiIsInJlc2lkZW50aWFsX3VzZXIiOnRydWV9LCJyZWZlcnJhbCI6eyJyZWZlcnJhbF9jb2RlX3VzZWRfb25fc2lnbnVwIjpmYWxzZSwiY29kZSI6IlNoYTBxb21jYyJ9LCJwYWNrYWdlX3N1YnNjcmlwdGlvbiI6eyJpZCI6IjVlMmVjYmE4NzRkNWMwMmMwNDkzODQyYiIsInF1YW50aXR5IjoyLCJzdGFydGVkX2F0IjoxNjM4MDk0MTMxNjMyfSwidHJpYWwiOnsiYWN0aXZlIjpmYWxzZX0sIl9pZCI6IjYxYTMxNjYxMmFlYTA2MGViNDM5Zjk2OSIsIm9yZGVyX3BsYWNlZCI6ZmFsc2UsInNob3BzX25lYXJieSI6W10sInNjYW5uZWRfaXRlbXMiOltdLCJuYW1lIjoiU2hhcm1pbGEgSXNzYWMiLCJtb2JpbGUiOiI4OTcwODI5OTIxIiwiZW1haWwiOiI4OTcwODI5OTIxc2hhcm1pbGFAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmEkMTAkSEFteVl4ZWpKdmNEYkRlWTQvOU9PTzQwTW1wc295T05MYlFrNW1vd24zL0Z1RXR1TVc5aTYiLCJfX3YiOjAsImJyaW5namFsd2FsbGV0IjoiNjFhMzE2N2EyYWVhMDYwZWI0MzlmOTZiIiwiYWRkcmVzcyI6IjYxYTM1NTE5MmFlYTA2MGViNDM5Zjk3YyIsImxvY2F0aW9uRGF0YSI6IjYxYTM1NTE5MmFlYTA2MGViNDM5Zjk3ZCIsImRlcG9zaXQiOiI2MWEzNTUzMzJhZWEwNjBlYjQzOWY5ODEifSwiaWF0IjoxNzMyODAxNTk1LCJleHAiOjE3MzI4ODc5OTV9.QHPWA8A-0DNXuke2wCn3OMfy54hyhBsDWnU2XfrM0jw",
//     "message": "Sending User Data Successfully",
//     "subscribed_qty": 2,
//     "user_subscribed": true,
//     "userFound": true,
//     "user_verified": true,
//     "wallet_id": "61a3167a2aea060eb439f96b",
//     "user_id": "61a316612aea060eb439f969"
// }


const sampleJson = {...apiResponse};

console.log("This is the opriginal response is mapping: ", sampleJson)

useEffect(()=>{
    getSelectedPath(formatPath(selectedPath));

},[selectedPath])
  

  function formatPath (path) {
    if (!path) return '';
    switch (pathFormat) {
      case 'jsonPath':
        return '$.' + path;
      default:
        return path;
    }
  };

  const toggleExpand = (path) => {
    const newExpanded = new Set(expandedPaths);
    if (newExpanded.has(path)) {
      newExpanded.delete(path);
    } else {
      newExpanded.add(path);
    }
    setExpandedPaths(newExpanded);
  };

  const renderValue = (value, path, depth = 0) => {
    const handleClick = (e) => {
      e.stopPropagation();
      setSelectedPath(path);
    };

    if (Array.isArray(value)) {
      const isExpanded = expandedPaths.has(path);
      return (
        <div style={{ marginLeft: '5px' }}>
          <span
            style={{ cursor: 'pointer', padding: '2px 8px', borderRadius: '5px' }}
            onClick={(e) => {
              e.stopPropagation();
              toggleExpand(path);
            }}
          >
            {isExpanded ? '▼' : '▶'} Array[{value.length}]
          </span>
          {isExpanded && (
            <div style={{ marginLeft: '5px' }}>
              {value.map((item, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <span style={{ color: '#6B7280' }}>{index}: </span>
                  {renderValue(item, `${path}[${index}]`, depth + 1)}
                </div>
              ))}
            </div>
          )}
        </div>
      );
    } else if (typeof value === 'object' && value !== null) {
      const isExpanded = expandedPaths.has(path);
      return (
        <div style={{ marginLeft: '5px' }}>
          <span
            style={{ cursor: 'pointer', padding: '2px 8px', borderRadius: '5px' }}
            onClick={(e) => {
              e.stopPropagation();
              toggleExpand(path);
            }}
          >
            {isExpanded ? '▼' : '▶'} Object
          </span>
          {isExpanded && (
            <div style={{ marginLeft: '5px' }}>
              {Object.entries(value).map(([key, val]) => (
                <div key={key} style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <span style={{ color: '#6B7280' }}>{key}: </span>
                  {renderValue(val, path ? `${path}.${key}` : key, depth + 1)}
                </div>
              ))}
            </div>
          )}
        </div>
      );
    }

    return (
      <span
        style={{
          cursor: 'pointer',
          padding: '2px 8px',
          borderRadius: '5px',
          backgroundColor: '#F3F4F6',
        }}
        onClick={handleClick}
      >
        {typeof value === 'string' ? `"${value}"` : String(value)}
      </span>
    );
  };

  const handleRadioChange = (e) => {
    setPathFormat(e.target.value);
  };

  return (
    <div style={{ display: 'flex', height: '300px' }}>
        <div className={styles.radioButtonContainer}>
            <input
              type="radio"
              id="jsonPath"
              name="pathFormat"
              value="jsonPath"
              checked={pathFormat === 'jsonPath'}
              onChange={handleRadioChange}
            />

           
        {Object.entries(sampleJson).map(([key, value], idx) => (
              <input
              key={idx}
              type="radio"
              id="jsonPath"
              name="pathFormat"
              value="jsonPath"
              checked={selectedPath === key}
              onChange={()=>setSelectedPath(key)}
            />
                
        ))}


            {/* <label htmlFor="jsonPath">JSONPath ($.address.street)</label> */}
        </div>


      <div style={{ width: '66%', flexGrow:"1", padding: '16px', overflow: 'auto', borderRight: '1px solid #E5E7EB' }}>
        <div style={{ fontFamily: 'monospace', fontSize: '14px' }}>
          {renderValue(sampleJson, '')}
        </div>
      </div>
     
    </div>
  );
};

export default JsonPathExplorer;











