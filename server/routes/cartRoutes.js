import { Router } from "express";
import {
  addProduct,
  removeProduct,
  getCartItems,
  increaseProductQuantity,
  decreaseProductQuantity,
} from "../controllers/cartControllers.js";

const cartRouter = Router();
cartRouter.get("/:userId", getCartItems);
cartRouter.post("/", addProduct);
cartRouter.post("/inc/:cartItemId", increaseProductQuantity);
cartRouter.post("/dec/:cartItemId", decreaseProductQuantity);
cartRouter.delete("/:cartItemId", removeProduct);

export default cartRouter;
