import { Router } from "express";
import {
  createProduct,
  getAllProduct,
  populate,
  searchProducts,
} from "../controllers/productControllers.js";

const productRouter = Router();

productRouter.get("/products", getAllProduct);
productRouter.get("/products/search", searchProducts);
productRouter.post("/products", createProduct);
productRouter.post("/products/populate", populate);

export default productRouter;
