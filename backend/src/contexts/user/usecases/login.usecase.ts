import { UserDontExist } from "../../../shared/errors/user/dont-exist";
import {
  Encrypter,
  HashComparer,
} from "../../../shared/protocols/criptography";
import { Result } from "../../../shared/helpers/result";
import { IUserModel } from "../domain/models/user.model";
import { UserRepository } from "../external/repositories/user.repository";

export class LoginUseCase {
  constructor(
    private userRepository: UserRepository,
    private hasher: HashComparer,
    private encrypter: Encrypter,
  ) {}

  async execute(
    user: Pick<IUserModel, "password" | "email">,
  ): Promise<Result<{ token: string }>> {
    const userExists = await this.userRepository.findByEmail(user.email, [
      "company",
    ]);
    if (!userExists) {
      return Result.fail(new UserDontExist());
    }

    const isPasswordsEqual = await this.hasher.compare(
      user.password,
      userExists.password,
    );

    if (!isPasswordsEqual) {
      return Result.fail(new UserDontExist());
    }

    const MINUTE_IN_MILISECONDS = 60000;
    const TOKEN_EXPIRATION_TIME = 15 * MINUTE_IN_MILISECONDS;
    const [sessionToken] = await Promise.all([
      await this.encrypter.encrypt(userExists.id, `${TOKEN_EXPIRATION_TIME}ms`),
    ]);

    return Result.ok({
      token: sessionToken,
      user: {
        ...userExists,
        ...{
          collaborators: undefined,
          password: undefined,
        },
      },
    });
  }
}
