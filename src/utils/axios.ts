import axios from "axios";

const token = JSON.parse(localStorage.getItem("token")) as any;
let headers = {} as any;

if (token) headers.Authorization = `Bearer ${token.access}`;

export const Request = axios.create({
  baseURL:
    process.env.REACT_APP_BASE_URL ||
    "https://kletchdev.keyleadhealth.com:9090/",
  headers,
});
