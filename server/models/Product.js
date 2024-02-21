import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String },
    description: { type: String },
    store: {
      type: mongoose.SchemaTypes.ObjectId,
      required: true,
      ref: "store",
    },
    price: { type: Number },
    shipping: { type: Number },
    discount: { type: Number },
    images: { type: [String], default: [] },
    gender: { type: String },
    rating: { type: Number, default: 5 },
    reviews: {
      type: [mongoose.SchemaTypes.ObjectId],
      ref: "review",
      default: [],
    },
    sizes: { type: [String], required: true },
    categories: { type: [String], required: true },
    colors: { type: [String], required: true },
    isPublished: { type: Boolean, default: false },
    quantity: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export const Product = mongoose.model("product", productSchema);
