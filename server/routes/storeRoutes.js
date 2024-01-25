import { Router } from "express";
import {
  createStore,
  getStore,
  getStores,
  getStoreProducts,
} from "../controllers/storeControllers.js";
import { authenticateUser } from "../middlewares/authMiddleware.js";

const storeRouter = Router();

storeRouter.get("/stores", getStores);
storeRouter.post("/store", authenticateUser, createStore);
storeRouter.get("/store/:storeId", authenticateUser, getStore);
storeRouter.get("/store/:storeId/products", authenticateUser, getStoreProducts);

export default storeRouter;
