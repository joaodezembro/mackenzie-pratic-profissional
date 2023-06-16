import { CompanyAlreadyExists } from "../../../shared/errors/company/already-exists";
import { Result } from "../../../shared/helpers/result";
import { ICompanyModel } from "../domain/models/company.model";
import { CompanyRepository } from "../external/repositories/company.repository";

export class NewCompanyUseCase {
  constructor(private companyRepository: CompanyRepository) {}

  async execute(
    company: Omit<
      ICompanyModel,
      "id" | "createdAt" | "updatedAt" | "collaborators"
    >,
  ): Promise<Result<ICompanyModel>> {
    const emailAlreadyExists = await this.companyRepository.findByCnpj(
      company.cnpj,
    );
    if (emailAlreadyExists) {
      return Result.fail(new CompanyAlreadyExists());
    }

    const created = await this.companyRepository.create({
      ...company,
      ...{ collaborators: [] },
    });

    return Result.ok(created);
  }
}
