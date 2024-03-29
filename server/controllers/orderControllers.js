import { Cart } from "../models/Cart.js";
import { Order } from "../models/Order.js";
import { User } from "../models/User.js";
import { Product } from "../models/Product.js";
import jwt from "jsonwebtoken";

export async function getOrders(req, res) {
  try {
    const orders = await Order.find({ userId: req.userId });
    res.json(orders);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function createOrder(req, res) {
  try {
    const { paymentMethod, address, products } = req.body;
    const orders = await Order.create({
      userId: req.userId,
      deliveryDate: new Date(new Date().getDate() + 14),
      status: "active",
      paymentMethod,
      address,
      products,
    });

    // Set all cart items to ordered
    products.forEach(async (cartItem) => {
      await Cart.findByIdAndDelete(cartItem._id);
    });

    // Reduce product quantities
    products.forEach(async (product) => {
      await Product.findByIdAndUpdate(product.productId, {
        $inc: { quantity: -product.quantity },
      });
    });

    res.json(orders);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function getOrder(req, res) {
  try {
    const { orderId } = req.params;
    const order = await Order.findById(orderId).populate({
      path: "products",
      populate: { path: "product", populate: { path: "reviews" } },
    });
    res.json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function cancelOrder(req, res) {
  try {
    const { orderId } = req.params;
    const order = await Order.findById(orderId);

    order.products.forEach((product) => {
      product.status = "cancelled";
    });
    order.status = "cancelled";

    await order.save();

    res.json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function fulfilOrder(req, res) {
  try {
    const { orderId, productId } = req.params;
    const order = await Order.findById(orderId);
    const user = await User.findById(req.userId);

    const productToFulfil = order.products.find(
      (product) => product.productId === productId
    );

    if (user.store.toString() !== productToFulfil.storeId)
      return res.status(400).json({ error: "User is Unauthorized" });

    if (!productToFulfil) throw new Error("Order Product not Found");

    productToFulfil.status = "packaged";
    await order.save();
    res.json(productToFulfil);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function cancelOrderProduct(req, res) {
  try {
    const { orderId, productId } = req.params;
    const order = await Order.findById(orderId);
    const user = await User.findById(req.userId);

    const productToCancel = order.products.find(
      (product) => product.productId === productId
    );
    if (user.store.toString() !== productToCancel.storeId)
      return res.status(400).json({ error: "User is Unauthorized" });

    if (!productToCancel) throw new Error("Order Product not Found");

    productToCancel.status = "cancelled";
    await order.save();
    res.json(productToCancel);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
