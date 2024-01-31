import { Router } from "express";
import {
  cancelOrder,
  createOrder,
  getOrder,
  getOrders,
  fulfilOrder,
} from "../controllers/orderControllers.js";
import { authenticateUser } from "../middlewares/authMiddleware.js";

const orderRouter = Router();

orderRouter.get("/orders", getOrders);
orderRouter.post("/orders", authenticateUser, createOrder);
orderRouter.get("/order/:orderId", getOrder);
orderRouter.patch("/order/:orderId", cancelOrder);
orderRouter.patch("/order/:orderId/fulfil/:productId", fulfilOrder);

export default orderRouter;
