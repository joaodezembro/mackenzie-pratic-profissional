import { AppDataSource } from "../../../../main/config/database/data-source";
import { ICompanyModel } from "../../domain/models/company.model";
import { CompanyEntity } from "../entities/company.entity";

export class CompanyRepository {
  constructor(
    private companyCollection = AppDataSource.getRepository(CompanyEntity),
  ) {}

  async create(
    data: Omit<ICompanyModel, "id" | "createdAt" | "updatedAt">,
  ): Promise<ICompanyModel> {
    const insertedCompany = this.companyCollection.create({
      ...data,
      cnpj: data.cnpj.replace(/\D/g, ""),
    });
    return await this.companyCollection.save(insertedCompany);
  }

  async delete(id: string): Promise<void> {
    await this.companyCollection.delete(id);
  }

  async findById(id: string): Promise<ICompanyModel> {
    return await this.companyCollection.findOne({
      where: {
        id,
      },
    });
  }

  async findByCnpj(cnpj: string): Promise<ICompanyModel> {
    return await this.companyCollection.findOne({
      where: {
        cnpj,
      },
    });
  }

  async updateCompany(company: ICompanyModel): Promise<void> {
    await this.companyCollection.save(company);
  }
}
