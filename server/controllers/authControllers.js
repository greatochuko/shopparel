import { User } from "../models/User.js";
import bcrypt from "bcrypt";

export async function signup(req, res) {
  try {
    const { firstName, lastName, email, password } = req.body;

    // Handle errors
    if (!firstName) throw new Error("Full Name Field is required");
    if (!lastName) throw new Error("Full Name Field is required");
    if (!password) throw new Error("Password Field is required");
    if (password.length < 8)
      throw new Error("Password must be at least 8 characters long");
    if (!email) throw new Error("Email Field is required");

    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) throw new Error("User with email already exists");

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    req.session.userId = newUser._id;

    res.status(201).json(newUser);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
}

export async function login(req, res) {
  try {
    const { email, password } = req.body;

    // Handle errors
    if (!email) throw new Error("Email Field is required");
    if (!password) throw new Error("Password Field is required");

    // Check if user already exists
    const user = await User.findOne({ email });
    if (!user) throw new Error("Invalid username and password combination");

    // Check if user password is available
    if (!user.password) throw new Error("Login with google instead");

    // Compare password
    const passwordIsCorrect = await bcrypt.compare(password, user.password);

    if (!passwordIsCorrect)
      throw new Error("Invalid username and password combination");

    req.session.userId = user._id;

    res.status(200).json(user);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
}

export async function loginWithGoogle(req, res) {
  try {
    const { email, firstName, lastName, googleClientId } = req.body;

    // Handle errors
    if (!email) throw new Error("Email Field is required");
    if (!firstName || !lastName) throw new Error("Name Field is required");

    // Find or create user
    let user = await User.findOne({ email });
    if (!user)
      user = await User.create({
        email,
        firstName,
        lastName,
        googleClientId,
      });

    req.session.userId = user._id;

    res.json(user);
  } catch (error) {
    console.log(error.message);
    res.status(401).json({ error: error.message });
  }
}

export async function logout(req, res) {
  req.session.userId = null;
  res.json("Logout Successful!");
}
