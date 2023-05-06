export class UserDontExist extends Error {
  constructor() {
    super("User dont exist");
    this.name = "UserDontExist";
  }
}
