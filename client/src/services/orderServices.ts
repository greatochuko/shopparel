import { OrderProductType } from "../components/AdminOrder";
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

export async function createOrder(
  paymentMethod: string,
  products: OrderProductType[],
  address: string
) {
  try {
    const token = localStorage.getItem("token");
    const res = await fetch(`${BASE_URL}/orders`, {
      method: "POST",
      body: JSON.stringify({ paymentMethod, products, address }),
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

export async function fetchFulfilOrder(orderId: string, productId: string) {
  try {
    const token = localStorage.getItem("token");
    const res = await fetch(
      `${BASE_URL}/order/${orderId}/fulfil/${productId}`,
      {
        method: "PATCH",
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    return { error: (error as Error).message };
  }
}

export async function fetchCancelOrder(orderId: string, productId: string) {
  try {
    const token = localStorage.getItem("token");
    const res = await fetch(
      `${BASE_URL}/order/${orderId}/cancel/${productId}`,
      {
        method: "PATCH",
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    return { error: (error as Error).message };
  }
}
