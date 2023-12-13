import { Router } from "express";
import { getOrders } from "../controllers/orderControllers.js";

const orderRouter = Router();

orderRouter.get("/orders", getOrders);

export default orderRouter;
