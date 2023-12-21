import { Wishlist } from "../models/Wishlist.js";

export async function getWishlistItems(req, res) {
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
    const wishlist = await Wishlist.find({ userId });
    res.json(wishlist);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function addProductToWishlist(req, res) {
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
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) throw new Error("User is not Authenticated");

    let userId;
    try {
      userId = jwt.verify(token, process.env.JWT_SECRET)?.userId;
    } catch (error) {
      throw new Error(error.message);
    }

    const { wishlistId } = req.params;
    await Wishlist.findByIdAndDelete(wishlistId);
    res.json("Product removed from wishlist successfully");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
