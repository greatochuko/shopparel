import { BASE_URL } from "./authServices";

export async function fetchCreateStore(name: string, bannerUrl: string) {
  try {
    const token = localStorage.getItem("token");
    const res = await fetch(`${BASE_URL}/store`, {
      method: "POST",
      body: JSON.stringify({ name, banner: bannerUrl }),
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

export async function fetchStore(storeId: string) {
  try {
    const token = localStorage.getItem("token");
    const res = await fetch(`${BASE_URL}/store/${storeId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return { error: (error as Error).message };
  }
}
