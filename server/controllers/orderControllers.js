import { Cart } from "../models/Cart.js";
import { Order } from "../models/Order.js";
import jwt from "jsonwebtoken";

export async function getOrders(req, res) {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) throw new Error("User is not Authenticated");

    let userId;
    try {
      userId = jwt.verify(token, process.env.JWT_SECRET)?.userId;
    } catch (error) {
      throw new Error(error.message);
    }
    if (!userId)
      return res.status(401).json({ error: "User is unauthenticated" });
    const orders = await Order.find();
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
      const product = await Cart.findByIdAndDelete(cartItem._id);
    });

    res.json(orders);
  } catch (error) {
    console.log(error.message);
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
    const order = await Order.findByIdAndUpdate(
      orderId,
      { status: "cancelled" },
      { new: true }
    );
    res.json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
export async function fulfilOrder(req, res) {
  try {
    const { orderId, productId } = req.params;
    const order = await Order.findByIdAndUpdate(orderId);
    const productToFulfil = order.products.find(
      (product) => product.productId === productId
    );

    productToFulfil.status = "shipped";
    await order.save();
    res.json(productToFulfil);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
