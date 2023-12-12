import { CartItem } from "../models/Cart.js";

export function addProduct(req, res) {
  try {
    const { userId, name, imgUrl, color, size, price, shipping, quantity } =
      req.body;

    const newCartItem = CartItem.create({
      userId,
      name,
      imgUrl,
      color,
      size,
      price,
      shipping,
      quantity,
    });
    res.json(newCartItem);
  } catch (error) {
    res.json({ error: error.message });
  }
}
