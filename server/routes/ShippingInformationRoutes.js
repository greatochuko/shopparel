import { Router } from "express";
import {
  getShippingInformations,
  addShippingInformation,
  deleteShippingInformation,
  editShippingInformation,
} from "../controllers/ShippingInformationControllers.js";

const shippingInfoRouter = Router();

shippingInfoRouter.get("/", getShippingInformations);
shippingInfoRouter.post("/", addShippingInformation);
shippingInfoRouter.patch("/:shippingInfoId", editShippingInformation);
shippingInfoRouter.delete("/:shippingInfoId", deleteShippingInformation);

export default shippingInfoRouter;
