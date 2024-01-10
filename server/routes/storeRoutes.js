import { Router } from "express";
import { createStore } from "../controllers/storeControllers.js";
import { authenticateUser } from "../middlewares/authMiddleware.js";

const storeRouter = Router();

storeRouter.post("/", authenticateUser, createStore);

export default storeRouter;
