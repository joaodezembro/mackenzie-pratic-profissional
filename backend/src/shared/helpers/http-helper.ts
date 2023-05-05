/* eslint-disable @typescript-eslint/no-explicit-any */
import Bugsnag from "@bugsnag/js";
import { env } from "process";
import { HttpResponse } from "../protocols/http";
import { UnauthorizedError } from "../errors/unauthorized-error";
import { TooManyRequestsError } from "../errors/too-many-requests-error";
import { ServerError } from "../errors/server-error";

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error,
});

export const forbidden = (error: Error): HttpResponse => ({
  statusCode: 403,
  body: error,
});

export const unauthorized = (): HttpResponse => ({
  statusCode: 401,
  body: new UnauthorizedError(),
});

export const tooManyRequests = (): HttpResponse => ({
  statusCode: 429,
  body: new TooManyRequestsError(),
});

export const serverError = (error: Error): HttpResponse => {
  Bugsnag.notify(error);
  console.log(error);

  if (env.NODE_ENV === "development") {
    console.error("\n\n⚠️ ⚠️", error.stack, error.message);
  }

  return {
    statusCode: 500,
    body: new ServerError(error.stack),
  };
};

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data,
});

export const noContent = (): HttpResponse => ({
  statusCode: 204,
  body: null,
});
