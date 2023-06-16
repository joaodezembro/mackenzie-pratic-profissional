import { Router } from "express";
import { auth } from "../../../../main/middlewares/auth";
import { adaptRoute } from "../../../../main/adapters/express-adapter";
import { makeRegister } from "../factories/register.factory";
import { makeList } from "../factories/list.factory";

export default (router: Router) => {
  router.post("/collaborators/register", adaptRoute(makeRegister(), [auth]));
  router.get("/collaborators", adaptRoute(makeList(), [auth]));
};
