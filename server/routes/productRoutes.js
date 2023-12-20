import { Router } from "express";
import {
  createProduct,
  getAllProduct,
  getProduct,
  getSimilarProducts,
  searchProducts,
  getBrandProducts,
} from "../controllers/productControllers.js";

const productRouter = Router();

productRouter.get("/products", getAllProduct);
productRouter.get("/products/brand/:brand", getBrandProducts);
productRouter.get("/product/:productId", getProduct);
productRouter.get("/products/search", searchProducts);
productRouter.post("/products", createProduct);
productRouter.get("/products/similar", getSimilarProducts);

export default productRouter;
