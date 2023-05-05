import { NewCompanyUseCase } from "../../company/usecases/newCompany.usecase";
import { ICompanyModel } from "../../company/domain/models/company.model";
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
import { UserTypeEnum } from "../external/entities/user.entity";
import { AssociateCompanyUseCase } from "../usecases/associateCompany.usecase";

export class RegisterController implements Controller {
  constructor(
    private readonly registerUseCase: RegisterUseCase,
    private readonly newCompanyUseCase: NewCompanyUseCase,
    private readonly associateCompanyUseCase: AssociateCompanyUseCase,
  ) {}

  async handle(request: HttpRequest): Promise<HttpResponse> {
    try {
      const user: Pick<IUserModel, "password" | "name" | "email" | "cpf"> & {
        birthDate: string;
      } & Pick<ICompanyModel, "cnpj"> = request.body;

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
      const userResponse = await this.registerUseCase.execute({
        ...user,
        ...{
          birthDate: new Date(user.birthDate),
          type: UserTypeEnum.COMPANY,
        },
      });
      if (userResponse.isFailure) {
        return badRequest(userResponse.error);
      }

      // Criar empresa
      const companyResponse = await this.newCompanyUseCase.execute({
        user: userResponse.getValue(),
        cnpj: user.cnpj,
      });
      if (companyResponse.isFailure) {
        return badRequest(companyResponse.error);
      }

      // Associar empresa criada ao usuario
      const associationResponse = await this.associateCompanyUseCase.execute({
        user: userResponse.getValue(),
        company: companyResponse.getValue(),
      });
      if (associationResponse.isFailure) {
        return badRequest(associationResponse.error);
      }

      return noContent();
    } catch (error) {
      return serverError(error);
    }
  }
}
