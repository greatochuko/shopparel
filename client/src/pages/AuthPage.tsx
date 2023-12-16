import Header from "../components/Header";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";

type AuthPageProps = { type: "signup" | "login" };

export default function AuthPage({ type }: AuthPageProps) {
  const PageForm = { login: <LoginForm />, signup: <SignupForm /> };
  return (
    <div className="flex flex-col h-screen pt-[72px]">
      <Header />
      <main className="flex flex-1 overflow-hidden">
        <div className="flex-1 hidden lg:block">
          <img
            src={`/${type}-page-photo.jpg`}
            alt="fashion dress"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex-1 px-6 py-8 overflow-y-scroll sm:px-8">
          {PageForm[type]}
        </div>
      </main>
    </div>
  );
}
