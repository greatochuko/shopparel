import { Router } from "express";
import { addProduct } from "../controllers/cartControllers.js";

const cartRouter = Router();
cartRouter.post("/", addProduct);
// router.delete("/", addProduct);

export default cartRouter;
