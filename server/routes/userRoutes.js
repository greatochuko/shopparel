import { Router } from "express";
import {
  changePassword,
  getUser,
  updateName,
  updateProfilePicture,
} from "../controllers/userControllers.js";
import { authenticateUser } from "../middlewares/authMiddleware.js";

const userRouter = Router();

userRouter.get("/", authenticateUser, getUser);
userRouter.patch("/name", authenticateUser, updateName);
userRouter.patch("/profile-picture", authenticateUser, updateProfilePicture);
userRouter.patch("/password", authenticateUser, changePassword);

export default userRouter;
