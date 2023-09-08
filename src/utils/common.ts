import axios from "axios";


const url = "http://127.0.0.1:5500/"
export const api = axios.create({
    baseURL:url,
    headers:{
        "Content-Type":"application/json",
        Accept:"application/json"
    }
});