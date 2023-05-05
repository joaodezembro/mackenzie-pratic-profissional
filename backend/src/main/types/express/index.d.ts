import { IAccountModel } from "@contexts/userAccess/domain/models/account-model.struct";

export {};

declare global {
  namespace Express {
    interface IRequest {
      account?: IAccountModel;
    }
  }
}
