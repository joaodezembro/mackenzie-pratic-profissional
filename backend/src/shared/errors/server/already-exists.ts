export class WrongBodyRequest extends Error {
  constructor() {
    super("Missing or wrong parameters in body requisition");
    this.name = "WrongBodyRequest";
  }
}
