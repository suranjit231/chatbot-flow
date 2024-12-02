import { useState, useEffect } from "react";
import styles from "./apiCallCss/AuthorizationComponent.module.css";
import { IoCodeSlash } from "react-icons/io5";
import { useFlowContext } from "../../context/FlowContext";

import VariableDropDownMenu from "./VariableDropDownMenu";

export default function AuthorizationComponent() {
  const [authType, setAuthType] = useState("No Auth");
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    token: "",
    testTokenValue: "",
  });

  const [ testValueUserName, setTestValueUserName ] = useState("");
  const [ testValuePassword, setTestValuePassword ] = useState("");

  const authOptions = ["No Auth", "Basic Auth", "Digest Auth", "Bearer Token"];

  const [ selectedDropDownMenuFor, setSelectdDropDownMenu ] = useState(null);
  const { apiNode, setApiNode} = useFlowContext();

  


  useEffect(() => {
    setApiNode((prevState) => ({
      ...prevState,
      authorization: {
        authType,
        credential: credentials,
      },
    }));
  }, [authType, credentials, setApiNode]);




  const handleInputChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };


  //======= function handle click toggleDropDownMenu ============//
  function handleClickToggleDropDownMenu(inputType){
    setSelectdDropDownMenu((prev) => (prev === inputType ? null : inputType)); 

  }


  function getVariableInAuthorizartion(selectedVariable){
    console.log("Selected variable: ", selectedVariable);

  // Update the respective state based on the selected input field
  switch (selectedDropDownMenuFor) {
    case "username":
      setCredentials((prev) => ({ ...prev, username: selectedVariable }));
      break;

    case "password":
      setCredentials((prev) => ({ ...prev, password: selectedVariable }));
      break;

    case "auth-token":
      setCredentials((prev) => ({ ...prev, token: selectedVariable }));
      break;

    default:
      console.warn("Unexpected field for variable assignment:", selectedDropDownMenuFor);
  }

  // Close the dropdown after setting the value
  setSelectdDropDownMenu(null);
   

  }










   // Load initial values from `apiNode` on component mount
   useEffect(() => {
    if (apiNode.authorization) {
      setAuthType(apiNode.authorization.authType || "No Auth");
      setCredentials(apiNode.authorization.credential || {
        username: "",
        password: "",
        token: "",
        testTokenValue: "",
      });
    }
  }, []);

  return (
    <div className={styles.authorizationWrapper}>
      {/* Dropdown for Authorization Type */}
      <div className={styles.dropdownWrapper}>
        <label htmlFor="authType" className={styles.label}>
          Authorization Type:
        </label>
        <select
          id="authType"
          value={authType}
          onChange={(e) => setAuthType(e.target.value)}
          className={styles.authDropdown}
        >
          {authOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {/* Render input fields based on selected Authorization Type */}
      <div className={styles.inputFieldsWrapper}>
        {authType === "Basic Auth" || authType === "Digest Auth" ? (
          <>
            <div className={styles.inputField}>
                <label htmlFor="username" className={styles.label}>
                    Username:
                </label>


              <div className={styles.usernameInputWrapper}>
                <input
                      type="text"
                      id="username"
                      name="username"
                      value={credentials?.username?.key}
                      onChange={handleInputChange}
                      className={styles.input}
                      placeholder="Enter username"
                  />

                  {/* ---- show drop down list here for username input -------- */}

                   {selectedDropDownMenuFor === "username" && (
                            <VariableDropDownMenu
                                isOpenVariableList={true}
                                setIsOpenVariableList={() => setSelectdDropDownMenu(null)} // Close the dropdown
                                getVariableInUrl={getVariableInAuthorizartion}
                                position={{ top: "40px", right: "0px" }}
                            />
                        )}

                 

              </div>
               

                <input
                    type="text"
                    className={styles.testValueInput}
                    placeholder="Test Value for username"
                    value={testValueUserName}
                    onChange={(e)=>setTestValueUserName(e.target.value)}

                />

                < IoCodeSlash onClick={()=>handleClickToggleDropDownMenu("username")}
                 className={styles.htmlCodeIcon} />
            </div>
            <div className={styles.inputField}>
              <label htmlFor="password" className={styles.label}>
                Password:
              </label>

              <div className={styles.passwordInputWrapper}>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={credentials?.password?.key}
                    onChange={handleInputChange}
                    className={styles.input}
                    placeholder="Enter password"
                  />

    

                  {selectedDropDownMenuFor === "password" && (
                            <VariableDropDownMenu
                                isOpenVariableList={true}
                                setIsOpenVariableList={() => setSelectdDropDownMenu(null)} // Close the dropdown
                                getVariableInUrl={getVariableInAuthorizartion}
                                position={{ top: "40px", right: "0px" }}
                            />
                        )}

              </div>
            

                <input
                    type="text"
                    className={styles.testValueInput}
                    placeholder="Test Value for password"
                    value={testValuePassword}
                    onChange={(e)=>setTestValuePassword(e.target.value)}
                />

                < IoCodeSlash onClick={()=>handleClickToggleDropDownMenu("password")}
                 className={styles.htmlCodeIcon} />
            </div>
          </>
        ) : authType === "Bearer Token" ? (
          <>
            <div className={styles.inputField}>
              <label htmlFor="token" className={styles.label}>
                Token:
              </label>
              <input
                type="text"
                id="token"
                name="token"
                value={credentials?.token?.key}
                onChange={handleInputChange}
                className={styles.input}
                placeholder="Enter token"
              />

                < IoCodeSlash onClick={()=>handleClickToggleDropDownMenu("auth-token")}

                 className={styles.htmlCodeIcon} />


              { selectedDropDownMenuFor === "auth-token" && (
                    <VariableDropDownMenu
                      isOpenVariableList={true}
                      setIsOpenVariableList={() => setSelectdDropDownMenu(null)} 
                      getVariableInUrl={getVariableInAuthorizartion}
                      position={{ top: "40px", right: "0px" }}
                  />

              )}



            </div>
            <div className={styles.inputField}>
              <label htmlFor="testTokenValue" className={styles.label}>
                Test Token Value:
              </label>
              <input
                type="text"
                id="testTokenValue"
                name="testTokenValue"
                value={credentials.testTokenValue}
                onChange={handleInputChange}
                className={styles.input}
                placeholder="Enter test token value"
              />
            </div>
          </>
        ) : (
          <p className={styles.noAuthMessage}>No additional fields required for this option.</p>
        )}
      </div>
    </div>
  );
}
