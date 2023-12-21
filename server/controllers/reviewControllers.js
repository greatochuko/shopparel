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
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) throw new Error("User is not Authenticated");

    let userId;
    try {
      userId = jwt.verify(token, process.env.JWT_SECRET)?.userId;
    } catch (error) {
      throw new Error(error.message);
    }
    if (!userId)
      return res.status(401).json({ error: "User is unauthenticated" });
    const { productId, rating, review } = req.body;
    const newReview = await Review.create({
      user: userId,
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
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) throw new Error("User is not Authenticated");

    let userId;
    try {
      userId = jwt.verify(token, process.env.JWT_SECRET)?.userId;
    } catch (error) {
      throw new Error(error.message);
    }
    if (!userId)
      return res.status(401).json({ error: "User is unauthenticated" });
    const { reviewId } = req.params;
    const { rating, review, reviewUserId } = req.body;
    if (userId.toString() !== reviewUserId)
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
