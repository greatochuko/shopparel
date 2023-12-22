import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRouter from "./routes/authRoutes.js";
import userRouter from "./routes/userRoutes.js";
import cartRouter from "./routes/cartRoutes.js";
import productRouter from "./routes/productRoutes.js";
import orderRouter from "./routes/orderRoutes.js";
import wishlistRouter from "./routes/wishlistRoutes.js";
import shippingInfoRouter from "./routes/ShippingInformationRoutes.js";
import reviewRouter from "./routes/reviewRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const uri = "mongodb://127.0.0.1:27017/shopparelDB";

// MIDDLEWARES
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:4173"],
    credentials: true,
  })
);
app.use(express.json());

// ROUTES
app.use("/api", authRouter);
app.use("/api", productRouter);
app.use("/api", orderRouter);
app.use("/api", reviewRouter);
app.use("/api/user", userRouter);
app.use("/api/wishlist", wishlistRouter);
app.use("/api/cart", cartRouter);
app.use("/api/shipping", shippingInfoRouter);

async function startServer() {
  try {
    await mongoose.connect(uri);
    app.listen(PORT, () => {
      console.log(`Server running at port ${PORT}`);
    });
  } catch (error) {
    console.log(error.message);
  }
}

await startServer();
