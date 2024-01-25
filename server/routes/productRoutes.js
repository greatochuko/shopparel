import { Router } from "express";
import {
  getAllProducts,
  getProduct,
  getSimilarProducts,
  searchProducts,
  saveProductInfo,
  getBrandProducts,
  editProduct,
} from "../controllers/productControllers.js";

const productRouter = Router();

productRouter.get("/products", getAllProducts);
productRouter.get("/products/brand/:brand", getBrandProducts);
productRouter.get("/product/:productId", getProduct);
productRouter.get("/products/search", searchProducts);
productRouter.post("/products/save-product-info", saveProductInfo);
productRouter.patch("/product", editProduct);
productRouter.get("/products/similar", getSimilarProducts);

export default productRouter;
