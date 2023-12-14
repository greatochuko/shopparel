import { Router } from "express";
import { getWishlistItems } from "../controllers/wishlistControllers.js";

const wishlistRouter = Router();

wishlistRouter.get("/", getWishlistItems);

export default wishlistRouter;
