import { Router } from "express";
import {
  addProduct,
  removeProduct,
  getCartItems,
  increaseProductQuantity,
  decreaseProductQuantity,
  clearCart,
  syncCart,
} from "../controllers/cartControllers.js";

const cartRouter = Router();
cartRouter.get("/", getCartItems);
cartRouter.post("/", addProduct);
cartRouter.post("/sync", syncCart);
cartRouter.post("/inc/:cartItemId", increaseProductQuantity);
cartRouter.post("/dec/:cartItemId", decreaseProductQuantity);
cartRouter.delete("/:cartItemId", removeProduct);
cartRouter.delete("/", clearCart);

export default cartRouter;
