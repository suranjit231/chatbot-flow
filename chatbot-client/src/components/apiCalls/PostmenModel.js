import { useState } from "react";
import styles from "./apiCallCss/PostmenModel.module.css";
import { IoClose } from "react-icons/io5";

import UrlParamsComponents from "./UrlParamsComponents";
import HeadersComponent from "./HeadersComponent";
import BodyComponent from "./BodyComponent";
import ResponseComponent from "./ResponseComponent";
import AuthorizationComponent from "./AuthorizationComponent";


export default function PostMenModel({ handleClickApiCallUrlPostmenModel }) {
  const [requestUrl, setRequestUrl] = useState("");
  const [requestType, setRequestType] = useState("GET");
  const [ selectedRequestFields, setSelectedRequestFields ] = useState("url-params");
  const requestTypes = ["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD", "OPTIONS"];
  const [ isOpenVariableList, setIsOpenVariableList ] = useState(false);



  function hanndleChangeSelectedRequestFields(fields){
    setSelectedRequestFields(fields);
  }



  return (
    <div className={styles.postMenModelWrapper}>
      <div className={styles.postMenModelContainer}>
        <IoClose
          onClick={() => handleClickApiCallUrlPostmenModel()}
          className={styles.closedPostmenIcon}
        />

        <h3 className={styles.modalTitle}>External Request</h3>

        <div className={styles.headerContainer}>
          {/* Request Type Dropdown */}
          <div className={styles.requestTypeDropDownBox}>
            <select
              value={requestType}
              onChange={(e) => setRequestType(e.target.value)}
              className={styles.requestTypeDropdown}
            >
              {requestTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          {/* Request URL Input */}
          <div className={styles.requestUrlDiv}>
            <input
              type="text"
              value={requestUrl}
              placeholder="Enter Request URL..."
              onChange={(e) => setRequestUrl(e.target.value)}
              className={styles.requestUrlInput}
            />
          </div>

          {/* Test Button */}
          <div className={styles.testButtonDiv}>
            <button className={styles.testButton}>Test</button>
          </div>
        </div>


        {/* ============= request section constinser ================= */}
        <div className={styles.requestSectionsContainer}>
            <h3 onClick={()=>hanndleChangeSelectedRequestFields("url-params")} 
            className={`${styles.requestFields} ${selectedRequestFields === "url-params" ? styles.selectedField : ""}`}>
                URL Params
            </h3>

            <h3 onClick={()=>hanndleChangeSelectedRequestFields("headers")} 
             className={`${styles.requestFields} ${selectedRequestFields === "headers" ? styles.selectedField : ""}`}>
                Headers
            </h3>

            <h3 onClick={()=>hanndleChangeSelectedRequestFields("body")} 
             className={`${styles.requestFields} ${selectedRequestFields === "body" ? styles.selectedField : ""}`}>
                Body
            </h3>

            <h3 onClick={()=>hanndleChangeSelectedRequestFields("authorization")} 
             className={`${styles.requestFields} ${selectedRequestFields === "authorization" ? styles.selectedField : ""}`}>
            Authorization
            </h3>

            <h3 onClick={()=>hanndleChangeSelectedRequestFields("response")} 
             className={`${styles.requestFields} ${selectedRequestFields === "response" ? styles.selectedField : ""}`}>
                Response
            </h3>
        </div>

        {/*========= render selected request fields section ================== */}
        <div className={styles.selectedRequestFieldsWrapper}>
          {selectedRequestFields === "url-params" && <UrlParamsComponents

          isOpenVariableList={isOpenVariableList}
          setIsOpenVariableList={setIsOpenVariableList}

           />}

          {selectedRequestFields === "headers" && <HeadersComponent
            isOpenVariableList={isOpenVariableList}
            setIsOpenVariableList={setIsOpenVariableList}

           />}

          {selectedRequestFields === "body" && <BodyComponent

            isOpenVariableList={isOpenVariableList}
            setIsOpenVariableList={setIsOpenVariableList}
           />}


          {selectedRequestFields === "authorization" && <AuthorizationComponent

            isOpenVariableList={isOpenVariableList}
            setIsOpenVariableList={setIsOpenVariableList}
          
          />}
          {selectedRequestFields === "response" && <ResponseComponent
            isOpenVariableList={isOpenVariableList}
            setIsOpenVariableList={setIsOpenVariableList}
           />}

        </div>


        <div className={styles.requestModalFooterSection}>
            <div className={styles.leftSideFooterBtnDiv}>
                <button>Delete</button>
            </div>

            <div className={styles.rightSideFooterBtnDiv}>
                <button className={styles.cancelButton}>Cancel</button>
                <button>Save</button>
            </div>

        </div>

      </div>
    </div>
  );
}
