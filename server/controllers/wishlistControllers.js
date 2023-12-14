import { Wishlist } from "../models/Wishlist.js";

export async function getWishlistItems(req, res) {
  try {
    const { userId } = req.session;
    if (!userId) throw new Error("user is unauthenticated");
    const wishlist = await Wishlist.find({ userId });
    res.json(wishlist);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
