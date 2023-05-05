import { EnvironmentConfig } from "../configs/enviroment-config";

export default {
  baseUrl: EnvironmentConfig.apiBaseUrl,
  defaultTimeout: 100000,
  maxRetry: 1,
};
