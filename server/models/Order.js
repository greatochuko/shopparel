import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    deliveryDate: { type: Date, required: true },
    status: { type: String, default: "active" },
    status: { type: String, required: true },
    products: {
      type: [mongoose.SchemaTypes.ObjectId],
      required: true,
      ref: "cart item",
    },
  },
  { timestamps: true }
);

export const Order = mongoose.model("order", orderSchema);
