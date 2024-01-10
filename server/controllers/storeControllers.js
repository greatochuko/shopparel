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
    res.json({ error: error.message });
  }
}
