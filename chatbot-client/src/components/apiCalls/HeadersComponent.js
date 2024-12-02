import { useState, useEffect } from "react";
import { IoCodeSlash } from "react-icons/io5";
import styles from "./apiCallCss/HeadersComponent.module.css";
import VariableDropDownMenu from "./VariableDropDownMenu";
import { useFlowContext } from "../../context/FlowContext";


export default function HeadersComponent() {
    const [headers, setHeaders] = useState([{ key: "", value: "", testValue: "" }]);
    const [openDropdownIndex, setOpenDropdownIndex] = useState(null); 

    const { apiNode, setApiNode} = useFlowContext();


     // ===== Update global state (apiNode) when params change ===== //
   useEffect(() => {
    setApiNode((prevApiNode) => ({
        ...prevApiNode,
        headers: headers,
    }));
    }, [headers, setApiNode]);

    // ===== Retain params state when navigating ===== //
    useEffect(() => {
        if (apiNode.headers.length > 0) {
            setHeaders(apiNode.headers);
        }
    }, []);



    const updateHeader = (index, field, value) => {
        if (index === null || index < 0 || index >= headers.length) {
            console.error(`Invalid index ${index}. Cannot update header.`);
            return;
        }

        const updatedHeaders = [...headers];
        updatedHeaders[index][field] = value;
        setHeaders(updatedHeaders);

        if (field === "value" && index === headers.length - 1 && value.trim()) {
            setHeaders((prev) => [...prev, { key: "", value: "", testValue: "" }]);
        }
    };

    const handleClickOpenVariableMenu = (index) => {
        setOpenDropdownIndex((prev) => (prev === index ? null : index)); // Toggle dropdown for the clicked index
    };

    const removeHeader = (index) => {
        setHeaders((prev) => prev.filter((_, i) => i !== index));
    };

    const getVariableInHeader = (selectedVariable) => {
        if (openDropdownIndex === null || openDropdownIndex < 0 || openDropdownIndex >= headers.length) {
            console.error(`Cannot insert variable. Invalid index: ${openDropdownIndex}`);
            return;
        }

        updateHeader(openDropdownIndex, "value", selectedVariable.value);
        setOpenDropdownIndex(null); // Close the dropdown after selecting a variable
    };

    return (
        <div className={styles.headersComponentContainer}>
            {headers.map((header, index) => (
                <div key={index} className={styles.headersListBox}>
                    {/* Key input */}
                    <div className={styles.headersKeyInputBox}>
                        <input
                            type="text"
                            className={styles.headersInput}
                            placeholder="Key"
                            value={header.key}
                            onChange={(e) => updateHeader(index, "key", e.target.value)}
                        />
                    </div>

                    {/* Value input */}
                    <div className={styles.headersValueInputBox}>
                        <input
                            type="text"
                            className={styles.headersInput}
                            placeholder="Value"
                            value={header.value}
                            onChange={(e) => updateHeader(index, "value", e.target.value)}
                        />
                        <IoCodeSlash
                            onClick={() => handleClickOpenVariableMenu(index)} // Open variable menu for the clicked header
                            className={styles.htmlCodeIconParam}
                        />

                        {openDropdownIndex === index && (
                            <VariableDropDownMenu
                                isOpenVariableList={true}
                                setIsOpenVariableList={() => setOpenDropdownIndex(null)} // Close the dropdown
                                getVariableInUrl={getVariableInHeader}
                            />
                        )}
                    </div>

                    {/* Test Value input */}
                    <div className={styles.headersTestValueInputBox}>
                        <input
                            type="text"
                            className={styles.headersInput}
                            placeholder="Test Value"
                            value={header.testValue}
                            onChange={(e) => updateHeader(index, "testValue", e.target.value)}
                        />
                    </div>

                    {/* Remove button */}
                    {headers.length > 1 && (
                        <button
                            type="button"
                            className={styles.removeParamButton}
                            onClick={() => removeHeader(index)}
                        >
                            Remove
                        </button>
                    )}
                </div>
            ))}
        </div>
    );
}
