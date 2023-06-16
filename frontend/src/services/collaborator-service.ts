import { UserModel } from "./account-service";
import { api } from "./api";

export class CollaboratorService {
  static async list(): Promise<UserModel[]> {
    try {
      const { data } = await api.get("/collaborators")

      return data?.map((collaborator: any) => ({
        ...collaborator,
        ...{
          birthDate: new Date(data.birthDate),
          createdAt: new Date(data.createdAt),
          updatedAt: new Date(data.updatedAt),
          company: {
            createdAt: new Date(data?.company?.createdAt),
            updatedAt: new Date(data?.company?.updatedAt),
          }
        }
      }));
    } catch (error: any) {
      throw error.response.data.type;
    }
  }

  static async register(password: string, email: string, name: string, cpf: string, cnpj: string, birthDate: string): Promise<void> {
    try {
      const { data } = await api.post("/collaborators/register", { email, password, name, cpf, cnpj, birthDate })

      return data;
    } catch (error: any) {
      throw error.response.data.type;
    }
  }
}