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
