import { api } from "./api";

export enum UserTypeEnum {
  COMPANY = "company",
  COLLABORATOR = "collaborator",
}

export type CompanyModel = {
  id: string,
  cnpj: string,
  createdAt: Date,
  updatedAt: Date
}

export type UserModel = {
  id: string,
  name: string,
  email: string,
  cpf: string,
  type: UserTypeEnum,
  birthDate: Date,
  company?: CompanyModel,
  createdAt: Date,
  updatedAt: Date
}

export class AccountService {
  static async signIn(email: string, password: string): Promise<{token: string, user: UserModel}> {
    try {
      const { data } = await api.post("/authentication/login", { email, password })

      return {
        ...data,
        ...{
          birthDate: new Date(data.birthDate),
          createdAt: new Date(data.createdAt),
          updatedAt: new Date(data.updatedAt),
          company: {
            createdAt: new Date(data?.company?.createdAt),
            updatedAt: new Date(data?.company?.updatedAt),
          }
        }
      };
    } catch (error: any) {
      throw error.response.data.type;
    }
  }

  static async signUp(password: string, email: string, name: string, cpf: string, cnpj: string, birthDate: string): Promise<void> {
    try {
      const { data } = await api.post("/authentication/register", { email, password, name, cpf, cnpj, birthDate })

      return data;
    } catch (error: any) {
      throw error.response.data.type;
    }
  }
}