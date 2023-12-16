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

export async function addShippingInformation(req, res) {
  try {
    const { userId } = req.session;
    if (!userId)
      return res.status(401).json({ error: "User is unauthenticated" });
    const {
      firstName,
      lastName,
      country,
      company,
      streetAddress,
      apartment,
      city,
      state,
      postalCode,
      phone,
    } = req.body;

    const newShippingInfo = await ShippingInformation.create({
      userId,
      firstName,
      lastName,
      country,
      company,
      streetAddress,
      apartment,
      city,
      state,
      postalCode,
      phone,
    });

    res.json(newShippingInfo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function editShippingInformation(req, res) {
  try {
    const { userId } = req.session;
    if (!userId)
      return res.status(401).json({ error: "User is unauthenticated" });
    const { shippingInfoId } = req.params;
    const {
      firstName,
      lastName,
      country,
      company,
      streetAddress,
      apartment,
      city,
      state,
      postalCode,
      phone,
    } = req.body;

    const newShippingInfo = await ShippingInformation.findByIdAndUpdate(
      shippingInfoId,
      {
        userId: userId || null,
        firstName: firstName || null,
        lastName: lastName || null,
        country: country || null,
        company: company || null,
        streetAddress: streetAddress || null,
        apartment: apartment || null,
        city: city || null,
        state: state || null,
        postalCode: postalCode || null,
        phone: phone || null,
      }
    );

    res.json(newShippingInfo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function deleteShippingInformation(req, res) {
  try {
    const { userId } = req.session;
    if (!userId)
      return res.status(401).json({ error: "User is unauthenticated" });
    const { shippingInfoId } = req.params;

    await ShippingInformation.findByIdAndDelete(shippingInfoId);
    res.json("Shipping Info deleted successfully");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
