import axios from "axios";
import { EnvironmentConfig } from "@/configs/enviroment-config";

export const api = axios.create({
  baseURL: EnvironmentConfig.apiBaseUrl
})