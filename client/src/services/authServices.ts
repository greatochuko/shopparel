export const BASE_URL = "http://localhost:5000/api";

export async function signupUser(
  fullName: string,
  email: string,
  password: string
) {
  try {
    const res = await fetch(`${BASE_URL}/signup`, {
      method: "POST",
      body: JSON.stringify({ fullName, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
}
