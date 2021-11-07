import axios from "axios";
const token = localStorage.getItem("authToken") || "";
console.log("====token", token)

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:3001/",
});


export const axiosPrivateInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:3001/",
  headers: { token: token },
});
