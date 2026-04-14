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
    try {
        const res = await API.get("/users/me");
        return res.data;
    }
    catch (err) {
        console.error(err);
        return null;
    }
}

export const registerUser = async (data) => {
    try {
        const res = await API.post("/auth/register", data);
        return res.data;
    }
    catch (err) {
        console.error(err);
        throw err;
    }
}

export const loginUser = async (data) => {
    try {
        const res = await API.post("/auth/login", data);
        return res.data;
    }
    catch (err) {
        console.log(error);
        throw err;
    }
}

export default API;