import { useState } from "react";
import { IoCodeSlash } from "react-icons/io5";
import styles from "./apiCallCss/UrlParamsComponents.module.css";
import VariableDropDownMenu from "./VariableDropDownMenu";

export default function UrlParamsComponents({ isOpenVariableList, setIsOpenVariableList }) {
    const [params, setParams] = useState([{ key: "", value: "", testValue: "" }]);
    const [selectedDropdownIndex, setSelectedDropdownIndex] = useState(null);

    // Handler to update a parameter and add a new row dynamically when typing in "value"
    const updateParam = (index, field, value) => {
        const updatedParams = [...params];
        updatedParams[index][field] = value;
        setParams(updatedParams);

        // If typing in the "value" field of the last row and it's non-empty, add a new row
        if (
            field === "value" &&
            index === params.length - 1 &&
            updatedParams[index].key.trim() &&
            updatedParams[index].value.trim()
        ) {
            setParams((prev) => [...prev, { key: "", value: "", testValue: "" }]);
        }

        setSelectedDropdownIndex(null);
    };

    // Handler to remove a parameter
    const removeParam = (index) => {
        setParams((prev) => prev.filter((_, i) => i !== index));
    };

    // Handle opening the variable dropdown for a specific row
    const handleClickOpenVariableMenu = (index) => {
        if (selectedDropdownIndex === index) {
            // Close the dropdown if already open for the same index
            setSelectedDropdownIndex(null);
            setIsOpenVariableList(false);
        } else {
            // Open the dropdown for the clicked index
            setSelectedDropdownIndex(index);
            setIsOpenVariableList(true);
        }
    };

    // Handler to insert the selected variable into the current parameter row
    const getVariableInUrl = (selectedVariable) => {
        if (selectedDropdownIndex === null || selectedDropdownIndex < 0 || selectedDropdownIndex >= params.length) {
            console.error(`Cannot insert variable. Invalid index: ${selectedDropdownIndex}`);
            return;
        }

        console.log("Inserting variable for index:", selectedDropdownIndex);
        console.log("Selected variable:", selectedVariable);
        updateParam(selectedDropdownIndex, "value", selectedVariable.value);
        setSelectedDropdownIndex(null);
        setIsOpenVariableList(false);
    };

    return (
        <div className={styles.urlParamsComponentContainer}>
            {/* Render all parameter inputs */}
            {params.map((param, index) => (
                <div key={index} className={styles.paramListBox}>
                    {/* Key input */}
                    <div className={styles.paramsKeyInputBox}>
                        <input
                            type="text"
                            className={styles.paramInput}
                            placeholder="Key"
                            value={param.key}
                            onChange={(e) => updateParam(index, "key", e.target.value)}
                        />
                    </div>

                    {/* Value input */}
                    <div className={styles.paramsValueInputBox}>
                        <input
                            type="text"
                            className={styles.paramInput}
                            placeholder="Value"
                            value={param.value}
                            onChange={(e) => updateParam(index, "value", e.target.value)}
                        />
                        <IoCodeSlash
                            onClick={() => handleClickOpenVariableMenu(index)}
                            className={styles.htmlCodeIconParam}
                        />
                        {selectedDropdownIndex === index && isOpenVariableList && (
                            <VariableDropDownMenu
                                isOpenVariableList={isOpenVariableList}
                                setIsOpenVariableList={setIsOpenVariableList}
                                getVariableInUrl={getVariableInUrl}
                            />
                        )}
                    </div>

                    {/* Test Value input */}
                    <div className={styles.paramsTestValueInputBox}>
                        <input
                            type="text"
                            className={styles.paramInput}
                            placeholder="Test Value"
                            value={param.testValue}
                            onChange={(e) => updateParam(index, "testValue", e.target.value)}
                        />
                    </div>

                    {/* Remove parameter button */}
                    {params.length > 1 && (
                        <button
                            type="button"
                            className={styles.removeParamButton}
                            onClick={() => removeParam(index)}
                        >
                            Remove
                        </button>
                    )}
                </div>
            ))}
        </div>
    );
}
