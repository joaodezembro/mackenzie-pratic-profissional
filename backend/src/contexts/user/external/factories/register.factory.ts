import { BcryptAdapter } from "../../../../main/adapters/bcrypter-adapter";
import { Controller } from "../../../../shared/protocols/controller";
import { RegisterController } from "../../controllers/register.controller";
import { RegisterUseCase } from "../../usecases/register.usecase";
import { UserRepository } from "../repositories/user.repository";
import { salt } from "../../../../main/constants/salt";

export const makeRegister = (): Controller => {
  const bcryptAdapter = new BcryptAdapter(salt);
  const userRepository = new UserRepository();
  const registerUseCase = new RegisterUseCase(userRepository, bcryptAdapter);

  const registerController = new RegisterController(registerUseCase);

  return registerController;
};
