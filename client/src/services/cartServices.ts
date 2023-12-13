import { CartItemType } from "../context/CartContext";
import { BASE_URL } from "./authServices";

export async function fetchCart(userId: string) {
  try {
    const res = await fetch(`${BASE_URL}/cart/${userId}`);
    const data = await res.json();
    return data;
  } catch (error) {
    return { error: (error as Error).message };
  }
}

export async function fetchAddToCart(cartItem: CartItemType) {
  try {
    const res = await fetch(`${BASE_URL}/cart`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cartItem),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return { error: (error as Error).message };
  }
}

export async function fetchIncreaseQuantity(cartItemId: string) {
  try {
    const res = await fetch(`${BASE_URL}/cart/inc/${cartItemId}`, {
      method: "POST",
    });

    const data = await res.json();

    return data;
  } catch (error) {
    return { error: (error as Error).message };
  }
}

export async function fetchDecreaseQuantity(cartItemId: string) {
  try {
    const res = await fetch(`${BASE_URL}/cart/dec/${cartItemId}`, {
      method: "POST",
    });

    const data = await res.json();

    return data;
  } catch (error) {
    return { error: (error as Error).message };
  }
}

export async function fetchRemoveFromCart(cartItemId: string) {
  try {
    const res = await fetch(`${BASE_URL}/cart/${cartItemId}`, {
      method: "DELETE",
    });

    const data = await res.json();

    return data;
  } catch (error) {
    return { error: (error as Error).message };
  }
}

export async function fetchClearCart() {
  try {
    const res = await fetch(`${BASE_URL}/cart/`, {
      method: "DELETE",
      credentials: "include",
    });

    const data = await res.json();

    return data;
  } catch (error) {
    return { error: (error as Error).message };
  }
}
