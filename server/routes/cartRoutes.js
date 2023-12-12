import { Router } from "express";
import {
  addProduct,
  removeProduct,
  getCartItems,
} from "../controllers/cartControllers.js";

const cartRouter = Router();
cartRouter.get("/:userId", getCartItems);
cartRouter.post("/", addProduct);
cartRouter.delete("/cartId", removeProduct);

export default cartRouter;
