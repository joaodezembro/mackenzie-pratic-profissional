import { AppDataSource } from "../../../../main/config/database/data-source";
import { IUserModel } from "../../domain/models/user.model";
import { UserEntity } from "../entities/user.entity";

export class UserRepository {
  constructor(
    private userCollection = AppDataSource.getRepository(UserEntity),
  ) {}

  async create(data: Omit<IUserModel, "id">): Promise<IUserModel> {
    const insertedUser = this.userCollection.create({
      ...data,
      cpf: data.cpf.replace(/\D/g, ""),
      cnpj: data.cnpj.replace(/\D/g, ""),
    });
    return await this.userCollection.save(insertedUser);
  }

  async delete(id: string): Promise<void> {
    await this.userCollection.delete(id);
  }

  async findById(id: string): Promise<IUserModel> {
    return await this.userCollection.findOne({
      where: {
        id,
      },
    });
  }

  async findByEmail(email: string): Promise<IUserModel> {
    return await this.userCollection.findOne({
      where: {
        email,
      },
    });
  }

  async updateUser(user: IUserModel): Promise<void> {
    await this.userCollection.save(user);
  }
}
