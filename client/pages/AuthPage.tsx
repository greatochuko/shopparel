type AuthPageProps = { type: "signup" | "login" };

export default function AuthPage({ type }: AuthPageProps) {
  return type === "signup" ? <h1>Signup</h1> : <h1>Login</h1>;
}
