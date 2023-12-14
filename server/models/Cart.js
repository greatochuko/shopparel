import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  userId: { type: mongoose.SchemaTypes.ObjectId, required: true, ref: "user" },
  productId: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
    ref: "product",
  },
  name: { type: String, required: true },
  imgUrl: { type: String, required: true },
  color: { type: String, required: true },
  size: { type: String, required: true },
  price: { type: Number, required: true },
  shipping: { type: Number, required: true },
  quantity: { type: Number, required: true },
  ordered: { type: Boolean, default: false },
});

export const Cart = mongoose.model("cart", cartSchema);
