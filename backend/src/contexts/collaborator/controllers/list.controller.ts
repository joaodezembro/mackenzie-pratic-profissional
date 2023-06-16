import { Controller } from "../../../shared/protocols/controller";
import { HttpRequest, HttpResponse } from "../../../shared/protocols/http";
import {
  badRequest,
  ok,
  serverError,
} from "../../../shared/helpers/http-helper";
import { ListCollaboratorsFromCompanyUseCase } from "../usecases/list.usecase";

export class ListController implements Controller {
  constructor(
    private readonly listCollaboratorsFromCompanyUseCase: ListCollaboratorsFromCompanyUseCase,
  ) {}

  async handle(request: HttpRequest): Promise<HttpResponse> {
    try {
      const companyId = request.body.user.company.id;
      const response = await this.listCollaboratorsFromCompanyUseCase.execute(
        companyId,
      );
      if (response.isFailure) {
        return badRequest(response.error);
      }

      return ok(response.getValue());
    } catch (error) {
      return serverError(error);
    }
  }
}
