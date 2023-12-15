import { User } from "../models/User.js";

export async function getUser(req, res) {
  try {
    const user = await User.findById(req.session.userId);
    if (!user) throw new Error("User not Authenticated");

    res.json(user);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
}

export async function updateName(req, res) {
  try {
    if (!req.session.userId) throw new Error("User not Authenticated");
    const { firstName, lastName } = req.body;
    const user = await User.findByIdAndUpdate(
      req.session.userId,
      {
        firstName,
        lastName,
      },
      { new: true }
    );

    res.json(user);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
}
