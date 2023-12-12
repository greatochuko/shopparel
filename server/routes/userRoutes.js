import { Router } from "express";
import { getUser } from "../controllers/userControllers.js";

const userRouter = Router();

userRouter.get("/", getUser);

export default userRouter;
