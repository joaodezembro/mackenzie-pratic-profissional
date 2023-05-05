import { IUserModel } from "../../../contexts/user/domain/models/user.model";

export {};

declare global {
  namespace Express {
    interface IRequest {
      user?: IUserModel;
    }
  }
}
