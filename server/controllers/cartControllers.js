import { Cart } from "../models/Cart.js";
import jwt from "jsonwebtoken";
import { User } from "../models/User.js";

export async function getCartItems(req, res) {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ error: "Invalid Token" });

    let userId;
    try {
      userId = jwt.verify(token, process.env.JWT_SECRET)?.userId;
    } catch (error) {
      return res.status(401).json({ error: error.message });
    }

    const cartItems = await Cart.find({ userId, ordered: false });
    res.json(cartItems);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function addProduct(req, res) {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ error: "Invalid Token" });

    let userId;
    try {
      userId = jwt.verify(token, process.env.JWT_SECRET)?.userId;
    } catch (error) {
      return res.status(401).json({ error: error.message });
    }

    const { productId, name, imgUrl, color, size, price, shipping, quantity } =
      req.body;

    const newCartItem = await Cart.create({
      userId,
      product: productId,
      name,
      imgUrl,
      color,
      size,
      price,
      shipping,
      quantity,
    });

    await User.findByIdAndUpdate(userId, { $push: { cart: newCartItem._id } });
    res.json(newCartItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function increaseProductQuantity(req, res) {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ error: "Invalid Token" });
    let userId;
    try {
      userId = jwt.verify(token, process.env.JWT_SECRET)?.userId;
    } catch (error) {
      return res.status(401).json({ error: error.message });
    }
    const { cartItemId } = req.params;
    const deletedCartItem = await Cart.findByIdAndUpdate(cartItemId, {
      $inc: { quantity: 1 },
    });
    if (!deletedCartItem) throw new Error("Invalid Cart Item ID");
    res.json(deletedCartItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function decreaseProductQuantity(req, res) {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ error: "Invalid Token" });
    let userId;
    try {
      userId = jwt.verify(token, process.env.JWT_SECRET)?.userId;
    } catch (error) {
      return res.status(401).json({ error: error.message });
    }
    const { cartItemId } = req.params;
    const deletedCartItem = await Cart.findByIdAndUpdate(cartItemId, {
      $inc: { quantity: -1 },
    });
    if (!deletedCartItem) throw new Error("Invalid Cart Item ID");
    res.json(deletedCartItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function removeProduct(req, res) {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ error: "Invalid Token" });
    let userId;
    try {
      userId = jwt.verify(token, process.env.JWT_SECRET)?.userId;
    } catch (error) {
      return res.status(401).json({ error: error.message });
    }
    const { cartItemId } = req.params;
    const deletedCartItem = await Cart.findByIdAndDelete(cartItemId);
    if (!deletedCartItem) throw new Error("Invalid Cart Item ID");
    res.json(deletedCartItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function clearCart(req, res) {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ error: "Invalid Token" });
    let userId;
    try {
      userId = jwt.verify(token, process.env.JWT_SECRET)?.userId;
    } catch (error) {
      return res.status(401).json({ error: error.message });
    }
    await Cart.deleteMany({ userId });
    res.json("Cart cleared successfully");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function syncCart(req, res) {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ error: "Invalid Token" });

    let userId;
    try {
      userId = jwt.verify(token, process.env.JWT_SECRET)?.userId;
    } catch (error) {}

    console.log(userId);

    if (!userId)
      return res.status(401).json({ error: "User is unauthenticated" });

    const cartItems = req.body;

    const cart = await Cart.find({ userId });
    cartItems.forEach(async (cartItem) => {
      const productInCart = cart.find(
        (item) => item.product.toString() === cartItem.productId
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
          product: productId,
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
    res.status(400).json({ error: error.message });
  }
}
