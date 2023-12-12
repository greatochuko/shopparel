import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  imgUrl: { type: String, required: true },
  brand: { type: String, required: true },
  price: { type: Number, required: true },
  images: { type: [String], required: true },
  gender: { type: String, required: true },
  rating: { type: Number, default: 5 },
  reviews: {
    type: [mongoose.SchemaTypes.ObjectId],
    ref: "review",
    default: [],
  },
  sizes: { type: [String], required: true },
  categories: { type: [String], required: true },
  colors: { type: [String], required: true },
});

export const Product = mongoose.model("product", productSchema);
