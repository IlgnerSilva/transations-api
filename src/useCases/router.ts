import { Router } from "express";
import { CreateUserController } from "./createUser/CreateUserController";
import { AuthenticateUserController } from "./authenticateUser/AuthenticateUserController";
import { middlewareAuthentication } from "../middleware/middlewareAuthentication";
import { GetAccountController } from "./getAccount/GetAccountController";

const router = Router();

const createUserController = new CreateUserController();
router.post("/auth/register/user", createUserController.handle);

const authenticateUserController = new AuthenticateUserController();
router.post("/account/user/login", authenticateUserController.handle)

const getAccountController = new GetAccountController();
router.get("/auth/account/myaccount", middlewareAuthentication, getAccountController.handle)

export { router }