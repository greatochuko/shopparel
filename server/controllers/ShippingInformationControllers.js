import { ShippingInformation } from "../models/ShippingInformation.js";

export async function getShippingInformations(req, res) {
  try {
    const { userId } = req.session;
    if (!userId)
      return res.status(401).json({ error: "User is unauthenticated" });
    const userShippingInformations = await ShippingInformation.find({ userId });
    res.json(userShippingInformations);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
