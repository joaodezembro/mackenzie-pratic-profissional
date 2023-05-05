import { WrongBodyRequest } from "../../../shared/errors/server/already-exists";
import { Controller } from "../../../shared/protocols/controller";
import { HttpRequest, HttpResponse } from "../../../shared/protocols/http";
import {
  badRequest,
  noContent,
  serverError,
} from "../../../shared/helpers/http-helper";
import { RegisterUseCase } from "../usecases/register.usecase";
import { IUserModel } from "../domain/models/user.model";

export class RegisterController implements Controller {
  constructor(private readonly registerUseCase: RegisterUseCase) {}

  async handle(request: HttpRequest): Promise<HttpResponse> {
    try {
      const user: Omit<IUserModel, "id, createdAt, updatedAt, birthDate"> & {
        birthDate: string;
      } = request.body;

      // Validação
      if (
        !user.password ||
        !user.name ||
        !user.email ||
        !user.cpf ||
        !user.cnpj ||
        !user.birthDate
      ) {
        return badRequest(new WrongBodyRequest());
      }

      // Criar usuario
      const userResponse = await this.registerUseCase.execute(user);
      if (userResponse.isFailure) {
        return badRequest(userResponse.error);
      }

      return noContent();
    } catch (error) {
      return serverError(error);
    }
  }
}
