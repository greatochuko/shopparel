import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.SchemaTypes.ObjectId,
      required: true,
      ref: "user",
    },
    deliveryDate: { type: Date, required: true },
    status: { type: String, default: "active" },
    paymentMethod: { type: String, required: true },
    address: { type: String, required: true },
    products: {
      type: [mongoose.SchemaTypes.ObjectId],
      required: true,
      ref: "cart",
    },
    products: {
      type: [
        {
          productId: String,
          imgUrl: String,
          name: String,
          color: String,
          size: String,
          quantity: Number,
          price: Number,
          shipping: Number,
          storeId: String,
          status: { type: String, default: "active" },
        },
      ],
      required: true,
    },
  },
  { timestamps: true }
);

export const Order = mongoose.model("order", orderSchema);
