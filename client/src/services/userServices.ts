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

export async function updateUserFullName(firstName: string, lastName: string) {
  try {
    const res = await fetch(`${BASE_URL}/user/name`, {
      method: "POST",
      body: JSON.stringify({ firstName, lastName }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
}
