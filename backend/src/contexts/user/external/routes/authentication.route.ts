import { Router } from "express";
import { adaptRoute } from "../../../../main/adapters/express-adapter";
import { makeRegister } from "../factories/register.factory";
import { makeLogin } from "../factories/login.factory";

export default (router: Router) => {
  router.post("/authentication/register", adaptRoute(makeRegister()));
  router.post("/authentication/login", adaptRoute(makeLogin()));
};
