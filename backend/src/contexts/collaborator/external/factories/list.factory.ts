import { Controller } from "../../../../shared/protocols/controller";
import { UserRepository } from "../../../user/external/repositories/user.repository";
import { ListController } from "../../controllers/list.controller";
import { ListCollaboratorsFromCompanyUseCase } from "../../usecases/list.usecase";

export const makeList = (): Controller => {
  const userRepository = new UserRepository();

  const associateCompanyUseCase = new ListCollaboratorsFromCompanyUseCase(
    userRepository,
  );

  const registerController = new ListController(associateCompanyUseCase);

  return registerController;
};
