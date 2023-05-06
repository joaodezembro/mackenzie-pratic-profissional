import { WrongBodyRequest } from "../../../shared/errors/server/already-exists";
import { Controller } from "../../../shared/protocols/controller";
import { HttpRequest, HttpResponse } from "../../../shared/protocols/http";
import {
  badRequest,
  ok,
  serverError,
} from "../../../shared/helpers/http-helper";
import { IUserModel } from "../domain/models/user.model";
import { LoginUseCase } from "../usecases/login.usecase";

export class LoginController implements Controller {
  constructor(private readonly loginUseCase: LoginUseCase) {}

  async handle(request: HttpRequest): Promise<HttpResponse> {
    try {
      const user: Pick<IUserModel, "password" | "email"> = request.body;

      // Validação
      if (!user.password || !user.email) {
        return badRequest(new WrongBodyRequest());
      }

      // Efetuar login
      const loginResponse = await this.loginUseCase.execute(user);
      if (loginResponse.isFailure) {
        return badRequest(loginResponse.error);
      }

      return ok(loginResponse.getValue());
    } catch (error) {
      return serverError(error);
    }
  }
}
