import mongoose from "mongoose";

const wishlistSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.SchemaTypes.ObjectId,
      required: true,
      ref: "product",
    },
    storeId: {
      type: mongoose.SchemaTypes.ObjectId,
      required: true,
      ref: "store",
    },
    userId: { type: mongoose.SchemaTypes.ObjectId, required: true },
    name: { type: String, required: true },
    imgUrl: { type: String, required: true },
    colors: { type: [String], required: true },
    sizes: { type: [String], required: true },
    price: { type: Number, required: true },
    shipping: { type: Number, required: true },
  },
  { timestamps: true }
);

export const Wishlist = mongoose.model("wishlist", wishlistSchema);
