import { BASE_URL } from "./authServices";

export async function fetchWishlist() {
  try {
    const res = await fetch(`${BASE_URL}/wishlist`, { credentials: "include" });
    const data = await res.json();
    return data;
  } catch (error) {
    return { error: (error as Error).message };
  }
}

export async function fetchAddProductToWishlist(
  productId: string,
  name: string,
  imgUrl: string,
  color: string,
  size: string,
  price: number,
  shipping: number
) {
  try {
    const res = await fetch(`${BASE_URL}/wishlist`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        productId,
        name,
        imgUrl,
        color,
        size,
        price,
        shipping,
      }),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return { error: (error as Error).message };
  }
}
