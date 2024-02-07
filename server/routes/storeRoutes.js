import { Router } from "express";
import {
  createStore,
  getStore,
  getStores,
  getStoreProducts,
  getStoreOrders,
  updateStore,
} from "../controllers/storeControllers.js";
import { authenticateUser } from "../middlewares/authMiddleware.js";

const storeRouter = Router();

storeRouter.get("/stores", getStores);
storeRouter.post("/store", authenticateUser, createStore);
storeRouter.get("/store/:storeId", authenticateUser, getStore);
storeRouter.patch("/store/:storeId", authenticateUser, updateStore);
storeRouter.get("/store/:storeId/products", authenticateUser, getStoreProducts);
storeRouter.get("/store/:storeId/orders", authenticateUser, getStoreOrders);

export default storeRouter;
