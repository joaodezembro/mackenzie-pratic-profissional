import { JwtAdapter } from "../../../main/adapters/jwt-adapter";
import { AccessDeniedError } from "../../../shared/errors/authentication/access-denied-error";
import { forbidden, serverError } from "../../../shared/helpers/http-helper";
import { HttpRequest, HttpResponse } from "../../../shared/protocols/http";
import { IMiddleware } from "../../../shared/protocols/middleware";
import { UserRepository } from "../external/repositories/user.repository";

export class AuthMiddleware implements IMiddleware {
  constructor(
    private decrypter: JwtAdapter,
    private userRepository: UserRepository,
  ) {}

  async handle(request: HttpRequest): Promise<HttpResponse> {
    try {
      const accessToken = request.headers["x-access-token"];

      if (!accessToken) {
        return forbidden(new AccessDeniedError());
      }

      let token;

      try {
        token = await this.decrypter.decrypt(accessToken);
      } catch (error) {
        return forbidden(new AccessDeniedError());
      }

      const accountId = typeof token === "string" ? token : token?.id;
      if (!accountId) {
        return forbidden(new AccessDeniedError());
      }
      const account = await this.userRepository.findById(accountId);

      if (!account) {
        return forbidden(new AccessDeniedError());
      }

      request.body.user = account;
    } catch (error) {
      return serverError(error);
    }
  }
}
