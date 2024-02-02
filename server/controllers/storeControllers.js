import { Order } from "../models/Order.js";
import { Product } from "../models/Product.js";
import { Store } from "../models/Store.js";
import { User } from "../models/User.js";

export async function getStores(req, res) {
  try {
    const stores = await Store.find();

    res.json(stores);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function createStore(req, res) {
  try {
    const { name, logo } = req.body;
    const newStore = await Store.create({ name, logo });

    // update user seller status
    await User.findOneAndUpdate({ _id: req.userId }, { store: newStore._id });

    res.json({ storeId: newStore._id });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function getStore(req, res) {
  try {
    const { storeId } = req.params;
    const store = await Store.findById(storeId);
    if (!store) return res.status(404).json({ error: error.message });
    res.json(store);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function getStoreProducts(req, res) {
  try {
    const { storeId } = req.params;
    const products = await Product.find({ store: storeId }).populate("store");
    res.json(products);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function getStoreOrders(req, res) {
  try {
    const { storeId } = req.params;
    const orders = await Order.find().populate({
      path: "userId",
      select: "firstName lastName email",
    });

    const storeOrders = [];
    orders.forEach((order) => {
      if (order.products.some((product) => product.storeId === storeId)) {
        storeOrders.push(
          ...order.products.map((orderProduct) => ({
            product: orderProduct,
            address: order.address,
            date: order.createdAt,
            _id: order._id,
          }))
        );
      }
    });
    res.json(storeOrders);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
