import { Router } from "express";
import { getUser, updateName } from "../controllers/userControllers.js";

const userRouter = Router();

userRouter.get("/", getUser);
userRouter.post("/name", updateName);

export default userRouter;
