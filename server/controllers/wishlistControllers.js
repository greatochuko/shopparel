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

export async function addProductToWishlist(req, res) {
  try {
    const { userId } = req.session;
    if (!userId) throw new Error("user is unauthenticated");
    const {
      productId,
      name,
      imgUrl,
      colors,
      sizes,
      price,
      shipping,
      quantity,
    } = req.body;
    const newWishlist = await Wishlist.create({
      userId,
      productId,
      name,
      imgUrl,
      colors,
      sizes,
      price,
      shipping,
    });
    res.json(newWishlist);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function removeProductFromWishlist(req, res) {
  try {
    const { wishlistId } = req.params;
    await Wishlist.findByIdAndDelete(wishlistId);
    res.json("Product removed from wishlist successfully");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}