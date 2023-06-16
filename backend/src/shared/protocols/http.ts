import { FileResponse } from "./file";
import { IUserModel } from "../../contexts/user/domain/models/user.model";

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface HttpResponse {
  statusCode: number;
  body: any;
  file?: FileResponse;
}

export interface HttpRequest {
  params?: any;
  query?: any;
  body?: any & { user?: IUserModel };
  headers?: any;
  userId?: string;
  token?: string;
  file?: Express.Multer.File;
}

export interface HttpNextFunction {
  (error?: Error): void;
}
