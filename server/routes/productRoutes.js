import { Router } from "express";
import {
  getAllProducts,
  getProduct,
  getSimilarProducts,
  searchProducts,
  saveProductInfo,
  editProduct,
  deleteProduct,
} from "../controllers/productControllers.js";
import { authenticateUser } from "../middlewares/authMiddleware.js";

const productRouter = Router();

productRouter.get("/products", getAllProducts);
productRouter.get("/product/:productId", getProduct);
productRouter.get("/products/search", searchProducts);
productRouter.get("/products/similar", getSimilarProducts);
productRouter.post("/products/save-product-info", saveProductInfo);
productRouter.patch("/product", editProduct);
productRouter.delete("/product/:productId", authenticateUser, deleteProduct);

export default productRouter;
