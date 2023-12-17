import { User } from "../models/User.js";
import bcrypt from "bcrypt";

export async function getUser(req, res) {
  try {
    const { userId } = req.session;
    console.log(userId);
    if (!userId) throw new Error("User is not Authenticated");
    const user = await User.findById(userId).select("-password");

    res.json(user);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
}

export async function updateName(req, res) {
  try {
    if (!req.session.userId) throw new Error("User is not Authenticated");
    const { firstName, lastName } = req.body;
    const user = await User.findByIdAndUpdate(
      req.session.userId,
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

export async function changePassword(req, res) {
  try {
    if (!req.session.userId) throw new Error("User is not Authenticated");
    const { oldPassword, newPassword } = req.body;
    const user = await User.findById(req.session.userId);
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
