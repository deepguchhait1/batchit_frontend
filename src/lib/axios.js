import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

if (!BASE_URL) {
  console.warn("VITE_BASE_URL is not set");
}

export const axiosInstance = axios.create({
  baseURL: BASE_URL || "http://localhost:5000/api",
  withCredentials: true,
});
