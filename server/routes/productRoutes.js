import { Router } from "express";
import {
  createProduct,
  getAllProduct,
  populate,
} from "../controllers/productControllers.js";

const productRouter = Router();

productRouter.get("/products", getAllProduct);
productRouter.post("/products", createProduct);
productRouter.post("/products/populate", populate);

export default productRouter;
