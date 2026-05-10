import axios from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL || "http://localhost:8000",
});

console.log("API URL:", process.env.REACT_APP_API_URL);
export default instance;