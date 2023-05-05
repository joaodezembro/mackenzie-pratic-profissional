import { ICompanyModel } from "../../company/domain/models/company.model";
import { Result } from "../../../shared/helpers/result";
import { IUserModel } from "../domain/models/user.model";
import { UserRepository } from "../external/repositories/user.repository";

export class AssociateCompanyUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute({
    user,
    company,
  }: {
    user: Pick<IUserModel, "id">;
    company: ICompanyModel;
  }): Promise<Result<IUserModel>> {
    const userfromDb = await this.userRepository.findById(user.id);
    await this.userRepository.updateUser({
      ...userfromDb,
      ...{
        id: user.id,
        company,
      },
    });

    return Result.ok();
  }
}
