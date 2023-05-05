import { Controller } from "../../../../shared/protocols/controller";
import { RegisterController } from "../../controllers/register.controller";

export const makeRegister = (): Controller => {
  //   const accountRepository = new AccountRepository();
  //   const userRepository = new UserRepository();
  //   const createUserUseCase = new CreateUserUseCase(userRepository);
  //   const bcryptAdapter = new BcryptAdapter(salt);
  //   const createAccountUseCase = new CreateAccountUseCase(
  //     accountRepository,
  //     bcryptAdapter,
  //   );
  //   const validation = makeCreateAccountValidation();
  const registerController = new RegisterController();

  return registerController;
};
