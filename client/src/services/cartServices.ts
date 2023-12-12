import { CartItemType } from "../context/CartContext";
import { BASE_URL } from "./authServices";

export async function fetchAddToCart(cartItem: CartItemType) {
  try {
    const res = await fetch(`${BASE_URL}/cart`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cartItem),
    });
    const data = res.json();
    return data;
  } catch (error) {
    return { error: (error as Error).message };
  }
}
