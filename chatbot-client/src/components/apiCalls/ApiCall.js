import axios from "axios";

export default async function CallApiWithAxios(apiInfo) {
  try {
    
    //------ request url -------//
    let url = apiInfo.reqUrl;

    //------ If there are path variables, replace them dynamically (from matchedPathVariableList) ------//
    if (apiInfo.matchedPathVariableList.length > 0) {
      apiInfo.matchedPathVariableList.forEach((param) => {
        // Assuming each param has { key: "param_name", value: "value" }
        url = url.replace(`{${param.key}}`, param.value);
      });
    }

    // Append query params to the URL if any
    if (apiInfo.urlParams.length > 0) {
      const queryParams = apiInfo.urlParams.map((param) => `${param.key}=${param.value}`).join("&");
      url += `?${queryParams}`;
    }

    // Prepare headers if any
    const headers = apiInfo.headers.reduce((acc, header) => {
      acc[header.key] = header.value;
      return acc;
    }, {});

    // Prepare the body for POST/PUT requests
    let body = null;
    if (apiInfo.body.type === "raw") {
      // Assuming the body is raw JSON data
      body = apiInfo.testBodyData.reduce((acc, field) => {
        acc[field.key] = field.value;
        return acc;
      }, {});
    }

    // Send the API request using axios
    const response = await axios({
      method: apiInfo.methods, 
      url: url,
      headers: headers,
      data: body, 
    });

   console.log("response.data for api call: ", response.data);
    return response.data;
  } catch (error) {
    // Handle errors (e.g., network issues, response errors)
    console.error("API Call Error:", error);
    throw error; 
  }
}
