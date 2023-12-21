import { BASE_URL } from "./authServices";

export async function fetchOrders() {
  try {
    const token = localStorage.getItem("token");
    const res = await fetch(`${BASE_URL}/orders`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return { error: (error as Error).message };
  }
}

export async function createOrder(paymentMethod: string, products: string[]) {
  try {
    const token = localStorage.getItem("token");
    const res = await fetch(`${BASE_URL}/orders`, {
      method: "POST",
      body: JSON.stringify({ paymentMethod, products }),
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

export async function fetchOrder(orderId: string) {
  try {
    const token = localStorage.getItem("token");
    const res = await fetch(`${BASE_URL}/order/${orderId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return { error: (error as Error).message };
  }
}

export async function cancelOrder(orderId: string) {
  try {
    const token = localStorage.getItem("token");
    const res = await fetch(`${BASE_URL}/order/${orderId}`, {
      method: "PATCH",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return { error: (error as Error).message };
  }
}
