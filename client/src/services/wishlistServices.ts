import { BASE_URL } from "./authServices";

export async function fetchWishlist() {
  try {
    const res = await fetch(`${BASE_URL}/wishlist`);
    const data = await res.json();
    return data;
  } catch (error) {
    return { error: (error as Error).message };
  }
}
