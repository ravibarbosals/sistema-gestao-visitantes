import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080", // ajuste se seu back estiver em outra porta
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;