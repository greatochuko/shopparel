import { Router } from "express";
import {
  createStore,
  getStore,
  getStoreProducts,
} from "../controllers/storeControllers.js";
import { authenticateUser } from "../middlewares/authMiddleware.js";

const storeRouter = Router();

storeRouter.post("/", authenticateUser, createStore);
storeRouter.get("/:storeId", authenticateUser, getStore);
storeRouter.get("/:storeId/products", authenticateUser, getStoreProducts);

export default storeRouter;