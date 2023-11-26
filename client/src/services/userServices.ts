import { BASE_URL } from "./authServices";

export async function fetchUser() {
  try {
    const res = await fetch(`${BASE_URL}/user`, { credentials: "include" });

    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
}
