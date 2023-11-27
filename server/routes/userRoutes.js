import { Router } from "express";
import { getUser } from "../controllers/userControllers.js";

const userRouter = Router();

userRouter.get("/user", getUser);

export default userRouter;
