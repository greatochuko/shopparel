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
import { authenticateUser } from "../middlewares/authMiddleware.js";

const cartRouter = Router();
cartRouter.get("/", authenticateUser, getCartItems);
cartRouter.post("/", authenticateUser, addProduct);
cartRouter.post("/sync", authenticateUser, syncCart);
cartRouter.post("/inc/:cartItemId", authenticateUser, increaseProductQuantity);
cartRouter.post("/dec/:cartItemId", authenticateUser, decreaseProductQuantity);
cartRouter.delete("/:cartItemId", authenticateUser, removeProduct);
cartRouter.delete("/", authenticateUser, clearCart);

export default cartRouter;
