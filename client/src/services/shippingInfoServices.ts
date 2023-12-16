import { BASE_URL } from "./authServices";

export async function fetchShippingInformations() {
  try {
    const res = await fetch(`${BASE_URL}/shipping/`, {
      credentials: "include",
    });
    const data = await res.json();
    console.log(data);

    return data;
  } catch (error) {
    return { error: (error as Error).message };
  }
}
