import { IUserModel } from "../../user/domain/models/user.model";
import { Result } from "../../../shared/helpers/result";
import { UserRepository } from "../../user/external/repositories/user.repository";

export class ListCollaboratorsFromCompanyUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(companyId: string): Promise<Result<IUserModel[]>> {
    const users = await this.userRepository.findAllCollaboratorsByCompanyId(
      companyId,
    );

    return Result.ok(users);
  }
}
