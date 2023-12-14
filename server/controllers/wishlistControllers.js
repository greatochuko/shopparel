import { Wishlist } from "../models/Wishlist.js";

export async function getWishlistItems(req, res) {
  try {
    const wishlist = await Wishlist.find();
    res.json(wishlist);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
