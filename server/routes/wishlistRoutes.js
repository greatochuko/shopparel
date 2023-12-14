import { Router } from "express";
import {
  getWishlistItems,
  addProductToWishlist,
  removeProductFromWishlist,
} from "../controllers/wishlistControllers.js";

const wishlistRouter = Router();

wishlistRouter.get("/", getWishlistItems);
wishlistRouter.post("/", addProductToWishlist);
wishlistRouter.delete("/:wishlistId", removeProductFromWishlist);

export default wishlistRouter;
