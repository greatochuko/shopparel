import { BASE_URL } from "./authServices";

export async function createReview(
  productId: string,
  rating: number,
  review: string
) {
  try {
    const res = await fetch(`${BASE_URL}/reviews`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId, rating, review }),
      credentials: "include",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return { error: (error as Error).message };
  }
}

export async function editReview(
  reviewId: string,
  rating: number,
  review: string,
  reviewUserId: string
) {
  try {
    const res = await fetch(`${BASE_URL}/review/${reviewId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ reviewUserId, rating, review }),
      credentials: "include",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return { error: (error as Error).message };
  }
}
