import { Router } from "express";
import { adaptRoute } from "../../../../main/adapters/express-adapter";
import { makeRegister } from "../factories/register.factory";

export default (router: Router) => {
  router.post("/authentication/register", adaptRoute(makeRegister()));
};
