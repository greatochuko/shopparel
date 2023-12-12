import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema({
  userId: { type: mongoose.SchemaTypes.ObjectId, required: true },
  name: { type: String, required: true },
  imgUrl: { type: String, required: true },
  color: { type: String, required: true },
  size: { type: String, required: true },
  price: { type: Number, required: true },
  shipping: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

export const CartItem = mongoose.model("cart Item", cartItemSchema);
