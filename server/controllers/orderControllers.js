import { Order } from "../models/Order.js";

export async function getOrders(req, res) {
  try {
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
    res.json(orders);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
}
