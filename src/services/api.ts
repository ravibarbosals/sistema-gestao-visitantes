import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // garante que cookies/sessões sejam enviados se o back usar autenticação
});

export default api;
