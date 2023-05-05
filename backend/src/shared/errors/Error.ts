import { IError } from "../protocols/error";

export class Error implements IError {
  readonly type: string;

  constructor(readonly message: string) {
    this.type = this.constructor.name;
  }

  equals(error: IError): boolean {
    return error.type === this.type;
  }

  static equals(errorOne: IError, errorTwo: IError): boolean {
    return errorOne.type === errorTwo.type;
  }
}
