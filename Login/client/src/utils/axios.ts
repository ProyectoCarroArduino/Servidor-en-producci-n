import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URI,  // Ajusta la URL según tu configuración
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    }
});

export const axiosPrivateInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URI,  // Ajusta la URL según tu configuración
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    }
});