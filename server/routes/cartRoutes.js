import { Router } from "express";
import {
  addProduct,
  removeProduct,
  getCartItems,
  increaseProductQuantity,
  decreaseProductQuantity,
  clearCart,
} from "../controllers/cartControllers.js";

const cartRouter = Router();
cartRouter.get("/:userId", getCartItems);
cartRouter.post("/", addProduct);
cartRouter.post("/inc/:cartItemId", increaseProductQuantity);
cartRouter.post("/dec/:cartItemId", decreaseProductQuantity);
cartRouter.delete("/:cartItemId", removeProduct);
cartRouter.delete("/", clearCart);

export default cartRouter;
