import { ShippingInformationType } from "../pages/CheckoutPage";
import { BASE_URL } from "./authServices";

export async function fetchShippingInformations() {
  try {
    const res = await fetch(`${BASE_URL}/shipping/`, {
      credentials: "include",
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
    const res = await fetch(`${BASE_URL}/shipping/`, {
      method: "POST",
      body: JSON.stringify(newShippingInfo),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return { error: (error as Error).message };
  }
}

export async function fetchDeleteShippingInfo(shippingInfoId: string) {
  try {
    const res = await fetch(`${BASE_URL}/shipping/${shippingInfoId}`, {
      method: "DELETE",
      credentials: "include",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return { error: (error as Error).message };
  }
}
