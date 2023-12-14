import { Router } from "express";
import {
  getWishlistItems,
  addProductToWishlist,
} from "../controllers/wishlistControllers.js";

const wishlistRouter = Router();

wishlistRouter.get("/", getWishlistItems);
wishlistRouter.post("/", addProductToWishlist);

export default wishlistRouter;
