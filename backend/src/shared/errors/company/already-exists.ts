export class CompanyAlreadyExists extends Error {
  constructor() {
    super("Company already exists");
    this.name = "CompanyAlreadyExists";
  }
}
