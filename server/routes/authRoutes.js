import { Router } from "express";
import {
  signup,
  login,
  loginWithGoogle,
} from "../controllers/authControllers.js";

const authRouter = Router();

authRouter.post("/signup", signup);
authRouter.post("/login", login);
authRouter.post("/login/google", loginWithGoogle);

export default authRouter;
