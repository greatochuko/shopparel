import { Router } from "express";
import { getShippingInformations } from "../controllers/ShippingInformationControllers.js";

const shippingInfoRouter = Router();

shippingInfoRouter.get("/", getShippingInformations);

export default shippingInfoRouter;
