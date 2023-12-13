import express from "express";
import mongoose from "mongoose";
import mongodbStore from "connect-mongodb-session";
import session from "express-session";
import dotenv from "dotenv";
import cors from "cors";
import authRouter from "./routes/authRoutes.js";
import userRouter from "./routes/userRoutes.js";
import cartRouter from "./routes/cartRoutes.js";
import productRouter from "./routes/productRoutes.js";
import orderRouter from "./routes/orderRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const uri = "mongodb://127.0.0.1:27017/shopparelDB";
const MongoDBStore = mongodbStore(session);

// Initialise store
const store = new MongoDBStore({ uri, collection: "session" });

// Catch store errors
store.on("error", function (error) {
  console.log(error);
});

// Initialise store
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
    store,
    resave: true,
    saveUninitialized: true,
  })
);

// MIDDLEWARES
app.use(cors({ origin: ["http://localhost:5173"], credentials: true }));
app.use(express.json());

// ROUTES
app.use("/api", authRouter);
app.use("/api", productRouter);
app.use("/api", orderRouter);
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);

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
