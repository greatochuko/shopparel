import { Review } from "../models/Review.js";

export async function getReviews(req, res) {
  try {
    const { productId } = req.params;
    const reviews = await Review.find({
      productId,
    });
    res.json(reviews);
  } catch (error) {
    res.status(403).json({ error: error.message });
  }
}

export async function createReview(req, res) {
  try {
    const { userId } = req.session;
    const { productId, rating, review } = req.body;
    const newReview = await Review.create({
      user: userId,
      productId,
      rating,
      review,
    });
    res.json(newReview);
  } catch (error) {
    res.status(403).json({ error: error.message });
  }
}
