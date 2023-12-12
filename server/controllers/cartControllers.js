import { CartItem } from "../models/Cart.js";

export async function getCartItems(req, res) {
  try {
    const { userId } = req.params;
    const cartItems = await CartItem.find({ userId });
    res.json(cartItems);
  } catch (error) {
    res.json({ error: error.message });
  }
}

export async function addProduct(req, res) {
  try {
    const {
      userId,
      productId,
      name,
      imgUrl,
      color,
      size,
      price,
      shipping,
      quantity,
    } = req.body;

    const newCartItem = await CartItem.create({
      userId,
      productId,
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

export async function removeProduct(req, res) {
  try {
    const { cartItemId } = req.params;
    const deletedCartItem = await CartItem.findByIdAndDelete(cartItemId);
    if (!deletedCartItem) throw new Error("Invalid Cart Item ID");
    res.json(deletedCartItem);
  } catch (error) {
    res.json({ error: error.message });
  }
}
