import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    googleClientId: { type: String },
  },
  { timestamps: true }
);

export const User = mongoose.model("user", userSchema);
