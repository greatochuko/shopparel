import { BASE_URL } from "./authServices";

export async function fetchWishlist() {
  try {
    const token = localStorage.getItem("token");
    const res = await fetch(`${BASE_URL}/wishlist`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return { error: (error as Error).message };
  }
}

export async function fetchRemoveProductFromWishlist(wishlistId: string) {
  try {
    const token = localStorage.getItem("token");
    const res = await fetch(`${BASE_URL}/wishlist/${wishlistId}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
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
  colors: string[],
  sizes: string[],
  price: number,
  shipping: number,
  storeId: string
) {
  try {
    const token = localStorage.getItem("token");
    const res = await fetch(`${BASE_URL}/wishlist`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },

      body: JSON.stringify({
        productId,
        name,
        imgUrl,
        colors,
        sizes,
        price,
        shipping,
        storeId,
      }),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return { error: (error as Error).message };
  }
}
