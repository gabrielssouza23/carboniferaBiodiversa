import axios from "axios";

const api = axios.create({
  baseURL: "https://carboapi.onrender.com",

  // baseURL: "http://localhost:3333",
});

export default api;
