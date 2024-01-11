import { Router } from "express";
import { createStore, getStore } from "../controllers/storeControllers.js";
import { authenticateUser } from "../middlewares/authMiddleware.js";

const storeRouter = Router();

storeRouter.post("/", authenticateUser, createStore);
storeRouter.get("/:storeId", authenticateUser, getStore);

export default storeRouter;
