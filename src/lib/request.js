import axios from "axios";

const requestAPI = axios.create({
    baseURL: "http://localhost:8000/api",
    withCredentials: true
})

export default requestAPI;
