import { User } from "../models/User.js";

export async function getUser(req, res) {
  try {
    const user = await User.findById(req.session.userId);
    if (!user) throw new Error("User not Authenticated");

    req.session.userId = user._id;

    res.json(user);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
}
