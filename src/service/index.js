import axios from "axios";

const DEV_URL = 'http://localhost:3000' 
const http = axios.create({
    baseURL:DEV_URL,
})

http.interceptors.request.use((config) => {
    const token = sessionStorage.getItem('token')
    config.headers['token'] = token
    return config
}, (error) => Promise.reject(error))

export default http