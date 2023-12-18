import { Router } from "express";
import { createReview, getReviews } from "../controllers/reviewControllers.js";

const reviewRouter = Router();

reviewRouter.get("/reviews/:productId", getReviews);
reviewRouter.post("/reviews", createReview);

export default reviewRouter;
