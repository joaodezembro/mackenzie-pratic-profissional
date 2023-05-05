import { IUserModel } from "../../../user/domain/models/user.model";

export interface ICompanyModel {
  id: string;
  user: IUserModel;
  cnpj: string;
  createdAt: Date;
  updatedAt: Date;
}
