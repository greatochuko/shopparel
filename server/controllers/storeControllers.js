import { Product } from "../models/Product.js";
import { Store } from "../models/Store.js";
import { User } from "../models/User.js";

export async function createStore(req, res) {
  try {
    const { name, banner } = req.body;
    const newStore = await Store.create({ name, banner });

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
    const products = await Product.find({ store: storeId });
    res.json(products);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
