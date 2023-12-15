import { Router } from "express";
import {
  changePassword,
  getUser,
  updateName,
} from "../controllers/userControllers.js";

const userRouter = Router();

userRouter.get("/", getUser);
userRouter.patch("/name", updateName);
userRouter.put("/password", changePassword);

export default userRouter;
