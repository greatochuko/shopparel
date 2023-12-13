import { CartItem } from "../models/Cart.js";

export async function getCartItems(req, res) {
  try {
    const { userId } = req.params;
    const cartItems = await CartItem.find({ userId, ordered: false });
    res.json(cartItems);
  } catch (error) {
    res.status(401).json({ error: error.message });
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
    res.status(401).json({ error: error.message });
  }
}

export async function increaseProductQuantity(req, res) {
  try {
    const { cartItemId } = req.params;
    const deletedCartItem = await CartItem.findByIdAndUpdate(cartItemId, {
      $inc: { quantity: 1 },
    });
    if (!deletedCartItem) throw new Error("Invalid Cart Item ID");
    res.json(deletedCartItem);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
}

export async function decreaseProductQuantity(req, res) {
  try {
    const { cartItemId } = req.params;
    const deletedCartItem = await CartItem.findByIdAndUpdate(cartItemId, {
      $inc: { quantity: -1 },
    });
    if (!deletedCartItem) throw new Error("Invalid Cart Item ID");
    res.json(deletedCartItem);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
}

export async function removeProduct(req, res) {
  try {
    const { cartItemId } = req.params;
    const deletedCartItem = await CartItem.findByIdAndDelete(cartItemId);
    if (!deletedCartItem) throw new Error("Invalid Cart Item ID");
    res.json(deletedCartItem);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
}

export async function clearCart(req, res) {
  try {
    const { userId } = req.session;
    if (!userId) throw new Error("User is unauthenticated");
    await CartItem.deleteMany({ userId });
    res.json("Cart cleared successfully");
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
}
