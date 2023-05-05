import { Controller } from "../../../shared/protocols/controller";
import { HttpRequest, HttpResponse } from "../../../shared/protocols/http";
import { noContent, serverError } from "../../../shared/helpers/http-helper";

export class RegisterController implements Controller {
  constructor() {}

  async handle(request: HttpRequest): Promise<HttpResponse> {
    try {
      return noContent();
    } catch (error) {
      return serverError(error);
    }
  }
}
