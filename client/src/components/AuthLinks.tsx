import { Link, useLocation } from "react-router-dom";

export default function AuthLinks({ forAuth }: { forAuth?: boolean }) {
  const { pathname } = useLocation();
  const currentLinkStyle =
    " bg-accent-blue-100 hover:bg-accent-blue-200 focus-visible:bg-accent-blue-200 border-accent-blue-100 text-white";
  const standardLinkStyle =
    " hover:bg-accent-blue-100 hover:border-accent-blue-100 focus-visible:ring-accent-blue-100 focus-visible:ring-2 active:bg-accent-blue-200 border-zinc-400 hover:text-white text-accent-blue-100";

  return (
    <>
      <Link
        to={`/login?redirect=${pathname}`}
        className={`text-sm duration-300 border px-2 sm:px-4 md:px-6 md:block ${
          !forAuth ? "hidden" : ""
        } py-1.5 rounded-md ${
          pathname === "/login" ? currentLinkStyle : standardLinkStyle
        }`}
      >
        Login
      </Link>
      <Link
        to={`/signup?redirect=${pathname}`}
        className={`text-sm duration-300 border px-2 sm:px-4 md:px-6 md:block ${
          !forAuth ? "hidden" : ""
        } py-1.5 rounded-md ${
          pathname === "/signup" ? currentLinkStyle : standardLinkStyle
        }`}
      >
        Signup
      </Link>
    </>
  );
}
