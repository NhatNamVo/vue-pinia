import callApi from "@/helpers/authHttps";
import { apiKey } from "@/helpers/options/httpsOption";
import axios from "axios";

const authApi = {
    login: (data) => {
        return callApi(`accounts:signInWithPassword?key=${apiKey}?email=${data.email}?password=${data.password}`, "POST");
    },
    getPosts: () => {
        return axios({
            url: 'https://vonhatnam-6e183-default-rtdb.asia-southeast1.firebasedatabase.app/users.json',
            method: "GET",
        })
    }
}

export default authApi;