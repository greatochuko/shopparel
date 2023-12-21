import { ShippingInformationType } from "../pages/CheckoutPage";
import { BASE_URL } from "./authServices";

export async function fetchShippingInformations() {
  try {
    const token = localStorage.getItem("token");
    const res = await fetch(`${BASE_URL}/shipping/`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return { error: (error as Error).message };
  }
}

export async function fetchAddNewShippingInfo(
  newShippingInfo: ShippingInformationType
) {
  try {
    const token = localStorage.getItem("token");
    const res = await fetch(`${BASE_URL}/shipping/`, {
      method: "POST",
      body: JSON.stringify(newShippingInfo),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return { error: (error as Error).message };
  }
}

export async function fetchEditShippingInfo(
  shippingInfo: ShippingInformationType
) {
  try {
    const token = localStorage.getItem("token");
    const res = await fetch(`${BASE_URL}/shipping/${shippingInfo._id}`, {
      method: "PATCH",
      body: JSON.stringify(shippingInfo),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return { error: (error as Error).message };
  }
}

export async function fetchDeleteShippingInfo(shippingInfoId: string) {
  try {
    const token = localStorage.getItem("token");
    const res = await fetch(`${BASE_URL}/shipping/${shippingInfoId}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return { error: (error as Error).message };
  }
}
