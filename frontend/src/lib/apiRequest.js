import axios from "axios";

const apiRequest = axios.create({
  baseURL: process.env.BE_URL
});

export default apiRequest;