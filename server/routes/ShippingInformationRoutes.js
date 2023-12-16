import { Router } from "express";
import {
  getShippingInformations,
  addShippingInformation,
  deleteShippingInformation,
} from "../controllers/ShippingInformationControllers.js";

const shippingInfoRouter = Router();

shippingInfoRouter.get("/", getShippingInformations);
shippingInfoRouter.post("/", addShippingInformation);
shippingInfoRouter.delete("/:shippingInfoId", deleteShippingInformation);

export default shippingInfoRouter;
