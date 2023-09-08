import  axios from "axios"

export const api = axios.create ({
    baseURL: "https://blog-fake-api.onrender.com"
}, 8 * 1000)