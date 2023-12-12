import { BASE_URL } from "./authServices";

export async function fetchProducts() {
  try {
    const res = await fetch(`${BASE_URL}/products`);
    const data = await res.json();
    return data;
  } catch (error) {
    return { error: (error as Error).message };
  }
}
