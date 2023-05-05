import { NewCompanyUseCase } from "../../../company/usecases/newCompany.usecase";
import { CompanyRepository } from "../../../company/external/repositories/company.repository";
import { BcryptAdapter } from "../../../../main/adapters/bcrypter-adapter";
import { Controller } from "../../../../shared/protocols/controller";
import { RegisterController } from "../../controllers/register.controller";
import { RegisterUseCase } from "../../usecases/register.usecase";
import { UserRepository } from "../repositories/user.repository";
import { salt } from "../../../../main/constants/salt";
import { AssociateCompanyUseCase } from "../../usecases/associateCompany.usecase";

export const makeRegister = (): Controller => {
  const userRepository = new UserRepository();
  const bcryptAdapter = new BcryptAdapter(salt);
  const registerUseCase = new RegisterUseCase(userRepository, bcryptAdapter);

  const companyRepository = new CompanyRepository();
  const newCompanyUseCase = new NewCompanyUseCase(companyRepository);

  const associateCompanyUseCase = new AssociateCompanyUseCase(userRepository);

  const registerController = new RegisterController(
    registerUseCase,
    newCompanyUseCase,
    associateCompanyUseCase,
  );

  return registerController;
};
