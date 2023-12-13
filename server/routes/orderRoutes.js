import { Router } from "express";
import {
  createOrder,
  getOrder,
  getOrders,
} from "../controllers/orderControllers.js";

const orderRouter = Router();

orderRouter.get("/orders", getOrders);
orderRouter.get("/order/:orderId", getOrder);
orderRouter.post("/orders", createOrder);

export default orderRouter;
