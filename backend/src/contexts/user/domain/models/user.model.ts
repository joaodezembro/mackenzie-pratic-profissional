import { CompanyEntity } from "../../../company/external/entities/company.entity";
import { UserTypeEnum } from "../../external/entities/user.entity";

export interface IUserModel {
  id: string;
  name: string;
  email: string;
  password: string;
  cpf: string;
  company?: CompanyEntity;
  contractor?: CompanyEntity;
  collaborators?: IUserModel[];
  type: UserTypeEnum;
  birthDate: Date;
  createdAt: Date;
  updatedAt: Date;
}
