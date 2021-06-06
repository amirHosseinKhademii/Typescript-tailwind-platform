import axios from "axios";

let baseURL;

if (process.env.NODE_ENV === "development")
  baseURL = "https://kletchdev.keyleadhealth.com:9090/";
else baseURL = "https://wa-syc-prod-kl-main.azurewebsites.net/";

export const Request = axios.create({
  baseURL: baseURL || "https://kletchdev.keyleadhealth.com:9090/",
});

//"https://wa-uae-dev-kl-main.azurewebsites.net/"
