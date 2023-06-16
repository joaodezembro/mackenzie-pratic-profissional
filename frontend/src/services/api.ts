import axios from "axios";
import { EnvironmentConfig } from "@/configs/enviroment-config";

export const api = axios.create({
  baseURL: EnvironmentConfig.apiBaseUrl
})

api.interceptors.request.use(async (config) => {
  config.headers = {
    ...config.headers,
    "x-access-token": localStorage.getItem("sessionToken") ?? ""
  }
  return config;
})