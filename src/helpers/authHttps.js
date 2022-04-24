import axios from "axios";
import { APP_PERSONAL_TOKEN } from "./commons"
import { authApiBaseUrl } from "./options/httpsOption";

const callApi = (endpoint, method = "GET", data = null, token) => {
    if(localStorage.getItem([APP_PERSONAL_TOKEN])) {
        token = JSON.parse(localStorage.getItem([APP_PERSONAL_TOKEN]));
    }
    return axios({
        url: `${authApiBaseUrl}${endpoint}`,
        method,
        data,
        headers: {
            "Content-Type": "application/json",
            Authorization: token,
        },
    });
}

export default callApi;