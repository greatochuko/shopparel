import { Router } from "express";
import {
  cancelOrder,
  createOrder,
  getOrder,
  getOrders,
} from "../controllers/orderControllers.js";

const orderRouter = Router();

orderRouter.get("/orders", getOrders);
orderRouter.post("/orders", createOrder);
orderRouter.get("/order/:orderId", getOrder);
orderRouter.patch("/order/:orderId", cancelOrder);

export default orderRouter;
