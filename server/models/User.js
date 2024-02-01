import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    imgUrl: { type: String, default: "/placeholder-user-image.png" },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    googleClientId: { type: String },
    cart: { type: [mongoose.SchemaTypes.ObjectId], default: [], ref: "cart" },
    wishlist: {
      type: [mongoose.SchemaTypes.ObjectId],
      default: [],
      ref: "wishlist",
    },
    store: { type: mongoose.SchemaTypes.ObjectId },
  },
  { timestamps: true }
);

export const User = mongoose.model("user", userSchema);
