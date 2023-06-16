import { makeAuthMiddleware } from "../../contexts/user/external/factories/middlewares/authentication-middleware.factory";
import { HttpRequest, HttpResponse } from "../../shared/protocols/http";
import { Environment } from "../config/environment";

export const auth = async (request: HttpRequest): Promise<HttpResponse> => {
  const authMiddleware = makeAuthMiddleware(Environment.secrets.jwt);
  return authMiddleware.handle(request);
};
