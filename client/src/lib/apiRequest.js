import axios from "axios";

const apiRequest = axios.create({
  baseURL:import.meta.env.VITE_BE_URL
});

export default apiRequest;