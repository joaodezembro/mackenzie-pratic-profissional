import { Environment } from "../../../../main/config/environment";
import { JwtAdapter } from "../../../../main/adapters/jwt-adapter";
import { BcryptAdapter } from "../../../../main/adapters/bcrypter-adapter";
import { Controller } from "../../../../shared/protocols/controller";
import { UserRepository } from "../repositories/user.repository";
import { salt } from "../../../../main/constants/salt";
import { LoginController } from "../../controllers/login.controller";
import { LoginUseCase } from "../../usecases/login.usecase";

export const makeLogin = (): Controller => {
  const userRepository = new UserRepository();
  const haser = new BcryptAdapter(salt);
  const encrypter = new JwtAdapter(Environment.secrets.jwt);

  const loginUseCase = new LoginUseCase(userRepository, haser, encrypter);

  const registerController = new LoginController(loginUseCase);

  return registerController;
};
