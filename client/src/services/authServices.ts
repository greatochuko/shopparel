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

export async function loginUser(email: string, password: string) {
  try {
    const res = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      body: JSON.stringify({ email, password }),
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

export async function loginUserWithGoogle(
  email: string,
  name: string,
  googleClientId: string
) {
  try {
    const res = await fetch(`${BASE_URL}/login/google`, {
      method: "POST",
      body: JSON.stringify({ email, name, googleClientId }),
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
