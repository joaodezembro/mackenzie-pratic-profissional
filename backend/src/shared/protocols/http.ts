import { IAccountModel } from "@contexts/userAccess/domain/models/account-model.struct";
import { FileResponse } from "./file";

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface HttpResponse {
  statusCode: number;
  body: any;
  file?: FileResponse;
}

export interface HttpRequest {
  params?: any;
  query?: any;
  body?: any;
  headers?: any;
  account?: IAccountModel;
  userId?: string;
  token?: string;
  file?: Express.Multer.File;
}

export interface HttpNextFunction {
  (error?: Error): void;
}
