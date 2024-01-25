import mongoose from "mongoose";

const storeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    logo: { type: String, required: true },
  },
  { timestamps: true }
);

export const Store = mongoose.model("store", storeSchema);
