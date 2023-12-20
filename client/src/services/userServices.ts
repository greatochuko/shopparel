import { BASE_URL } from "./authServices";

export async function fetchUser() {
  try {
    const token = localStorage.getItem("token");
    const res = await fetch(`${BASE_URL}/user`, {
      credentials: "include",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
}

export async function updateUserFullName(firstName: string, lastName: string) {
  try {
    const res = await fetch(`${BASE_URL}/user/name`, {
      method: "PATCH",
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

export async function changePassword(oldPassword: string, newPassword: string) {
  try {
    const res = await fetch(`${BASE_URL}/user/password`, {
      method: "PUT",
      body: JSON.stringify({ oldPassword, newPassword }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
}
