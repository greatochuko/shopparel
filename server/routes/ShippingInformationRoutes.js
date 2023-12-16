import { Router } from "express";
import {
  getShippingInformations,
  addShippingInformation,
} from "../controllers/ShippingInformationControllers.js";

const shippingInfoRouter = Router();

shippingInfoRouter.get("/", getShippingInformations);
shippingInfoRouter.post("/", addShippingInformation);

export default shippingInfoRouter;
