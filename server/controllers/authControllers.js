import { User } from "../models/User.js";
import bcrypt from "bcrypt";

export async function signup(req, res) {
  try {
    const { fullName, email, password } = req.body;

    // Handle errors
    if (!fullName) throw new Error("Path Full Name is required");
    if (!password) throw new Error("Path Password is required");
    if (password.length < 8)
      throw new Error("Password must be at least 8 characters long");
    if (!email) throw new Error("Path Email is required");

    // Check if user already exists
    const userExists = await User.findOne({ email });
    console.log(userExists);
    if (userExists) throw new Error("User with email already exists");

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = await User.create({
      fullName,
      email,
      password: hashedPassword,
    });

    req.session.userId = newUser._id;

    res.status(201).json(newUser);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
}
