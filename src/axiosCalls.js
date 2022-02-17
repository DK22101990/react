import axios from "axios";

const baseUrl = "http://172.18.6.117/api/v1/";

export default axios.create({
    baseURL: baseUrl
})