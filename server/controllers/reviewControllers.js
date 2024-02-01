import { Product } from "../models/Product.js";
import { Review } from "../models/Review.js";

export async function getReviews(req, res) {
  try {
    const { productId } = req.params;
    const reviews = await Review.find({
      productId,
    });
    res.json(reviews);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function createReview(req, res) {
  try {
    const { productId, rating, review } = req.body;
    const newReview = await Review.create({
      user: req.userId,
      productId,
      rating,
      review,
    });
    await Product.findByIdAndUpdate(productId, {
      $push: { reviews: newReview._id },
    });
    res.json(newReview);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function editReview(req, res) {
  try {
    const { reviewId } = req.params;
    const { rating, review, reviewUserId } = req.body;
    if (req.userId.toString() !== reviewUserId)
      return res.status(401).json({ error: "User is unauthorized" });

    const updatedReview = await Review.findByIdAndUpdate(
      reviewId,
      {
        rating,
        review,
      },
      { new: true }
    );
    res.json(updatedReview);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
