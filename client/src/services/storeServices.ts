import { BASE_URL } from "./authServices";

export async function fetchStores() {
  try {
    const token = localStorage.getItem("token");
    const res = await fetch(`${BASE_URL}/stores`, {
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

export async function fetchCreateStore(name: string, logoUrl: string) {
  try {
    const token = localStorage.getItem("token");
    const res = await fetch(`${BASE_URL}/store`, {
      method: "POST",
      body: JSON.stringify({ name, logo: logoUrl }),
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

export async function fetchUpdateStore(
  storeId: string,
  name: string,
  logo: string,
  description: string
) {
  try {
    const token = localStorage.getItem("token");
    const res = await fetch(`${BASE_URL}/store/${storeId}`, {
      method: "PATCH",
      body: JSON.stringify({ name, logo, description }),
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return { error: (error as Error).message };
  }
}

export async function fetchStoreProducts(storeId: string) {
  try {
    const token = localStorage.getItem("token");
    const res = await fetch(`${BASE_URL}/store/${storeId}/products`, {
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

export async function fetchStoreOrders(storeId: string) {
  try {
    const token = localStorage.getItem("token");
    const res = await fetch(`${BASE_URL}/store/${storeId}/orders`, {
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
