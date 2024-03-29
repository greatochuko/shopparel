export const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function signupUser(
  firstName: string,
  lastName: string,
  email: string,
  password: string
) {
  try {
    const res = await fetch(`${BASE_URL}/signup`, {
      method: "POST",
      body: JSON.stringify({ firstName, lastName, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return { error: (error as Error).message };
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
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return { error: (error as Error).message };
  }
}

export async function loginUserWithGoogle(
  email: string,
  firstName: string,
  lastName: string,
  googleClientId: string
) {
  try {
    const res = await fetch(`${BASE_URL}/login/google`, {
      method: "POST",
      body: JSON.stringify({ email, firstName, lastName, googleClientId }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return { error: (error as Error).message };
  }
}
