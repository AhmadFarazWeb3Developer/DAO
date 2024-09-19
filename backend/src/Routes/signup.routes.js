import { Router } from "express";
import { signupUser } from "../Controllers/signupUser.controller.js";
import { signupValidation } from "../Middleware/singupUser.middleware.js";

const signupRouter = Router();
signupRouter.post("/signup", signupValidation, signupUser);

export { signupRouter };
