import React, { useEffect, useState } from 'react';
import styles from "./FunctionPathExplorer.module.css"

const FunctionJsonPathExplore = ({getResponsePath, FunctionExecuteResponse}) => {
  const [selectedPath, setSelectedPath] = useState('');
  const [expandedPaths, setExpandedPaths] = useState(new Set());
  const [pathFormat, setPathFormat] = useState('dot'); // 'dot', 'bracket', 'jsonPath'

 


const sampleJson = {...FunctionExecuteResponse};



useEffect(()=>{
    getResponsePath(formatPath(selectedPath));

},[selectedPath]);




useEffect(() => {
    // Automatically expand all paths on load
    const allPaths = new Set();
    const generatePaths = (obj, currentPath = '') => {
      if (typeof obj === 'object' && obj !== null) {
        Object.entries(obj).forEach(([key, value]) => {
          const newPath = currentPath ? `${currentPath}.${key}` : key;
          allPaths.add(newPath);
          generatePaths(value, newPath);
        });
      }
    };
    generatePaths(sampleJson);
    setExpandedPaths(allPaths); // Set all paths to expanded
  }, []);






  

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
    <div style={{ display: 'flex', height: 'auto', minWidth:"300px" }}>
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

export default FunctionJsonPathExplore;











