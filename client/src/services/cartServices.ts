import { CartItemType } from "../context/CartContext";
import { BASE_URL } from "./authServices";

export async function fetchCart() {
  try {
    const token = localStorage.getItem("token");
    const res = await fetch(`${BASE_URL}/cart`, {
      credentials: "include",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return { error: (error as Error).message };
  }
}

export async function fetchAddToCart(cartItem: CartItemType) {
  try {
    const token = localStorage.getItem("token");
    const res = await fetch(`${BASE_URL}/cart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      credentials: "include",
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
    const token = localStorage.getItem("token");
    const res = await fetch(`${BASE_URL}/cart/inc/${cartItemId}`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
    });

    const data = await res.json();

    return data;
  } catch (error) {
    return { error: (error as Error).message };
  }
}

export async function fetchDecreaseQuantity(cartItemId: string) {
  try {
    const token = localStorage.getItem("token");
    const res = await fetch(`${BASE_URL}/cart/dec/${cartItemId}`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
    });

    const data = await res.json();

    return data;
  } catch (error) {
    return { error: (error as Error).message };
  }
}

export async function fetchRemoveFromCart(cartItemId: string) {
  try {
    const token = localStorage.getItem("token");
    const res = await fetch(`${BASE_URL}/cart/${cartItemId}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });

    const data = await res.json();

    return data;
  } catch (error) {
    return { error: (error as Error).message };
  }
}

export async function fetchClearCart() {
  try {
    const token = localStorage.getItem("token");
    const res = await fetch(`${BASE_URL}/cart/`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });

    const data = await res.json();

    return data;
  } catch (error) {
    return { error: (error as Error).message };
  }
}

export async function fetchSyncCart(cartItems: CartItemType[]) {
  try {
    const token = localStorage.getItem("token");
    const res = await fetch(`${BASE_URL}/cart/sync`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(cartItems),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return { error: (error as Error).message };
  }
}
