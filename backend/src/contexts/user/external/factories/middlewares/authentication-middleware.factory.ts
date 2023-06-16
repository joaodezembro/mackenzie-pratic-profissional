import { AuthMiddleware } from "../../../middlewares/authentication.middleware";
import { JwtAdapter } from "../../../../../main/adapters/jwt-adapter";
import { IMiddleware } from "../../../../../shared/protocols/middleware";
import { UserRepository } from "../../repositories/user.repository";

export const makeAuthMiddleware = (secret: string): IMiddleware => {
  const userRepository = new UserRepository();
  const jwtAdapter = new JwtAdapter(secret);

  return new AuthMiddleware(jwtAdapter, userRepository);
};
