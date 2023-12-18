import { Cart } from "../models/Cart.js";
import { Order } from "../models/Order.js";

export async function getOrders(req, res) {
  try {
    const { userId } = req.session;
    if (!userId) throw new Error("User is not Authenticated");
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
}

export async function createOrder(req, res) {
  try {
    const { userId } = req.session;
    if (!userId) throw new Error("User is not Authenticated");
    const { paymentMethod, products } = req.body;
    const orders = await Order.create({
      userId,
      deliveryDate: new Date(new Date().getDate() + 14),
      status: "active",
      paymentMethod,
      products,
    });

    // Set all cart items to ordered
    products.forEach(async (productId) => {
      const product = await Cart.findById(productId);
      product.ordered = true;
      product.save();
    });

    res.json(orders);
  } catch (error) {
    res.status(401).json({ error: error.message });
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
    res.status(401).json({ error: error.message });
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
    res.status(401).json({ error: error.message });
  }
}
