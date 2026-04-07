import axios from "axios";

const API = axios.create({
    baseURL: "https://localhost:7129/api",
});

API.interceptors.request.use((req) => {
    const token = localStorage.getItem("token");
    if (token) {
        req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
});

export const getUser = async () => {
    try{
        const res = await API.get("/users/me");
        return res.data;
    }
    catch (err){
        console.error(err);
        return null;
    }
}

export default API;