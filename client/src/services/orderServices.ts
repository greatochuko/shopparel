import { BASE_URL } from "./authServices";

export async function fetchOrders() {
  try {
    const res = await fetch(`${BASE_URL}/orders`);
    const data = await res.json();
    return data;
  } catch (error) {
    return { error: (error as Error).message };
  }
}

export async function createOrder(paymentMethod: string, products: string[]) {
  try {
    const res = await fetch(`${BASE_URL}/orders`, {
      method: "POST",
      body: JSON.stringify({ paymentMethod, products }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return { error: (error as Error).message };
  }
}

export async function fetchOrder(orderId: string) {
  try {
    const res = await fetch(`${BASE_URL}/order/${orderId}`);
    const data = await res.json();
    return data;
  } catch (error) {
    return { error: (error as Error).message };
  }
}
