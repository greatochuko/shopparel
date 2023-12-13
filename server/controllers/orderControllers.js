import { Order } from "../models/Order.js";

export async function getOrders(req, res) {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
}
