import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    googleClientId: { type: String },
    cart: {
      type: [mongoose.SchemaTypes.ObjectId],
      default: [],
      ref: "product",
    },
    wishList: {
      type: [mongoose.SchemaTypes.ObjectId],
      default: [],
      ref: "product",
    },
    orders: {
      type: [mongoose.SchemaTypes.ObjectId],
      default: [],
      ref: "product",
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("user", userSchema);
