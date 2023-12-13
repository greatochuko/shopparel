import { Router } from "express";
import { createOrder, getOrders } from "../controllers/orderControllers.js";

const orderRouter = Router();

orderRouter.get("/orders", getOrders);
orderRouter.post("/orders", createOrder);

export default orderRouter;
