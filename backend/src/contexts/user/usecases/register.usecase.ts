import { UserAlreadyExists } from "../../../shared/errors/user/already-exists";
import { Hasher } from "../../../shared/protocols/criptography";
import { Result } from "../../../shared/helpers/result";
import { IUserModel } from "../domain/models/user.model";
import { UserRepository } from "../external/repositories/user.repository";
import { UserTypeEnum } from "../external/entities/user.entity";

export class RegisterUseCase {
  constructor(private userRepository: UserRepository, private hasher: Hasher) {}

  async execute(
    user: Omit<IUserModel, "id" | "createdAt" | "updatedAt">,
  ): Promise<Result<IUserModel>> {
    const emailAlreadyExists = await this.userRepository.findByEmail(
      user.email,
    );
    if (emailAlreadyExists) {
      return Result.fail(new UserAlreadyExists());
    }

    const encryptedPassword = await this.hasher.hash(user.password);

    const created = await this.userRepository.create({
      ...user,
      ...{
        password: encryptedPassword,
        collaborators: user.type === UserTypeEnum.COMPANY ? [] : undefined,
      },
    });

    return Result.ok(created);
  }
}
