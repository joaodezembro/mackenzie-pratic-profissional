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
import { RegisterUseCase } from "../../user/usecases/register.usecase";
import { IUserModel } from "../../user/domain/models/user.model";
import { UserTypeEnum } from "../../user/external/entities/user.entity";
import { AssociateCompanyUseCase } from "../../user/usecases/associateCompany.usecase";

export class CollaboratorRegisterController implements Controller {
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
          type: UserTypeEnum.COLLABORATOR,
        },
      });
      if (userResponse.isFailure) {
        return badRequest(userResponse.error);
      }

      // Recuperar empresa do contratante
      const contractorCompany = request.body.user.company as ICompanyModel;

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
        contractor: contractorCompany,
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
