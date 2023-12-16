import mongoose from "mongoose";

const shippingInformationSchema = new mongoose.Schema({
  userId: { type: mongoose.SchemaTypes.ObjectId, required: true, ref: "user" },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  country: { type: String, required: true },
  company: { type: String },
  streetAddress: { type: String, required: true },
  apartment: { type: String },
  city: { type: String, required: true },
  state: { type: String, required: true },
  postalCode: { type: String, required: true },
  phone: { type: String, required: true },
});

export const ShippingInformation = mongoose.model(
  "shippingInformation",
  shippingInformationSchema
);
