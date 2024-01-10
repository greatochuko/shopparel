import mongoose from "mongoose";

const storeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    banner: { type: String, required: true },
  },
  { timestamps: true }
);

export const Store = mongoose.model("store", storeSchema);
