import { Router } from "express";
import { loginValiditaion } from "../Middleware/loginValidation.middleware.js";
import { loginUser } from "../Controllers/loginUser.controller.js";

const loginRouter = Router();
loginRouter.post("/login", loginValiditaion, loginUser);

export { loginRouter };
