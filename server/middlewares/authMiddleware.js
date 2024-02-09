import jwt from "jsonwebtoken";

export async function authenticateUser(req, res, next) {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) throw new Error("User is not Authenticated");

    let userId;
    userId = jwt.verify(token, process.env.JWT_SECRET)?.userId;
    req.userId = userId;
    next();
  } catch (error) {
    res.status(401).json({ error: error.message });
    return;
  }
}
