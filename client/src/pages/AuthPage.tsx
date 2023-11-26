type AuthPageProps = { type: "signup" | "login" };
import { AuthPageHeader, LoginForm, SignupForm } from "../components";

export default function AuthPage({ type }: AuthPageProps) {
  const PageForm = { login: <LoginForm />, signup: <SignupForm /> };
  return (
    <div className="flex flex-col h-screen">
      <AuthPageHeader />
      <main className="flex flex-1 overflow-hidden">
        <div className="flex-1">
          <img
            src={`/${type}-page-photo.jpg`}
            alt="fashion dress"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="px-8 py-4 flex-1 overflow-y-scroll">
          {PageForm[type]}
        </div>
      </main>
    </div>
  );
}
