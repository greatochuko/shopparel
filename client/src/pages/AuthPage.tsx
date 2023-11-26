type AuthPageProps = { type: "signup" | "login" };
import { AuthPageHeader } from "../components";

export default function AuthPage({ type }: AuthPageProps) {
  return (
    <>
      <AuthPageHeader /> {type === "signup" ? <h1>Signup</h1> : <h1>Login</h1>}
    </>
  );
}
