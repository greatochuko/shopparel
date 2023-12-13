import { Router } from "express";
import {
  signup,
  login,
  loginWithGoogle,
  logout,
} from "../controllers/authControllers.js";

const authRouter = Router();

authRouter.post("/signup", signup);
authRouter.post("/login", login);
authRouter.post("/login/google", loginWithGoogle);
authRouter.post("/logout", logout);

export default authRouter;
