import { User } from "../models/User.js";
import bcrypt from "bcrypt";

export async function signup(req, res) {
  try {
    const { fullName, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      fullName,
      email,
      password: hashedPassword,
    });
    req.session.userId = newUser._id;
    res.status(201).json(newUser);
  } catch (error) {
    if (error.message.includes("duplicate key error"))
      return res.status(401).json({ error: "User with email already exists" });
    res.status(401).json({ error: error.message });
  }
}
