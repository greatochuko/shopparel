import { Router } from "express";
import {
  createReview,
  getReviews,
  editReview,
} from "../controllers/reviewControllers.js";

const reviewRouter = Router();

reviewRouter.get("/reviews/:productId", getReviews);
reviewRouter.post("/reviews", createReview);
reviewRouter.patch("/review/:reviewId", editReview);

export default reviewRouter;
