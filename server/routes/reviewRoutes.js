import { Router } from "express";
import {
  createReview,
  getReviews,
  editReview,
} from "../controllers/reviewControllers.js";
import { authenticateUser } from "../middlewares/authMiddleware.js";

const reviewRouter = Router();

reviewRouter.get("/reviews/:productId", getReviews);
reviewRouter.post("/reviews", authenticateUser, createReview);
reviewRouter.patch("/review/:reviewId", authenticateUser, editReview);

export default reviewRouter;
