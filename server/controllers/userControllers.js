import { User } from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export async function getUser(req, res) {
  try {
    const user = await User.findById(req.userId)
      .select("-password")
      .populate("wishlist")
      .populate({ path: "cart", populate: "product" });

    if (!user) throw new Error("User not found");

    res.json(user);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
}

export async function updateName(req, res) {
  try {
    const { firstName, lastName } = req.body;
    const user = await User.findByIdAndUpdate(
      req.userId,
      {
        firstName,
        lastName,
      },
      { new: true }
    ).select("-password");

    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function updateProfilePicture(req, res) {
  try {
    const { imgUrl } = req.body;

    const user = await User.findByIdAndUpdate(
      req.userId,
      {
        imgUrl,
      },
      { new: true }
    ).select("-password");

    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function changePassword(req, res) {
  try {
    const { oldPassword, newPassword } = req.body;
    const user = await User.findById(req.userId);
    let oldPasswordIsCorrect = false;
    if (user.googleClientId && !user.password) {
      oldPasswordIsCorrect = true;
    } else {
      oldPasswordIsCorrect = await bcrypt.compare(oldPassword, user.password);
    }
    if (!oldPasswordIsCorrect) throw new Error("Incorrect password");
    user.password = await bcrypt.hash(newPassword, 10);
    await user.save();

    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
