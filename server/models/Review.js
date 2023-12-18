import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    user: { type: mongoose.SchemaTypes.ObjectId, required: true, ref: "user" },
    productId: {
      type: mongoose.SchemaTypes.ObjectId,
      required: true,
      ref: "product",
    },
    rating: { type: Number, required: true },
    review: { type: String, required: true },
  },
  { timestamps: true }
);

export const Review = mongoose.model("review", reviewSchema);
