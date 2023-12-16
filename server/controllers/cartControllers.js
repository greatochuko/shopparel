import { Cart } from "../models/Cart.js";

export async function getCartItems(req, res) {
  try {
    const { userId } = req.session;
    if (!userId) throw new Error("User is unauthenticated");
    const cartItems = await Cart.find({ userId, ordered: false });
    res.json(cartItems);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
}

export async function addProduct(req, res) {
  try {
    const { userId } = req.session;
    if (!userId) throw new Error("User is unauthenticated");
    const { productId, name, imgUrl, color, size, price, shipping, quantity } =
      req.body;

    const newCartItem = await Cart.create({
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
    const deletedCartItem = await Cart.findByIdAndUpdate(cartItemId, {
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
    const deletedCartItem = await Cart.findByIdAndUpdate(cartItemId, {
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
    const deletedCartItem = await Cart.findByIdAndDelete(cartItemId);
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
    await Cart.deleteMany({ userId });
    res.json("Cart cleared successfully");
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
}

export async function syncCart(req, res) {
  try {
    const { userId } = req.session;
    if (!userId)
      return res.status(401).json({ error: "User is unauthenticated" });

    const cartItems = req.body;

    const cart = await Cart.find({ userId });
    cartItems.forEach(async (cartItem) => {
      const productInCart = cart.find(
        (item) => item.productId.toString() === cartItem.productId
      );
      if (productInCart) {
        productInCart.quantity += cartItem.quantity;
        await productInCart.save();
      } else {
        const {
          productId,
          name,
          imgUrl,
          color,
          size,
          price,
          shipping,
          quantity,
        } = cartItem;
        await Cart.create({
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
      }
    });
    res.json(cart);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
}
