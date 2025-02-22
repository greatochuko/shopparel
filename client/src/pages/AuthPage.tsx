import Header from "../components/Header";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";

type AuthPageProps = { type: "signup" | "login" };

export default function AuthPage({ type }: AuthPageProps) {
  const PageForm = { login: <LoginForm />, signup: <SignupForm /> };

  return (
    <div className="flex h-screen flex-col">
      <Header />
      <main className="flex flex-1 overflow-hidden">
        <div className="hidden w-1/2 lg:block">
          <img
            src={`/${type}-page-photo.jpg`}
            alt="fashion dress"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="w-1/2 overflow-y-auto px-6 py-8 sm:px-8">
          {PageForm[type]}
        </div>
      </main>
    </div>
  );
}
