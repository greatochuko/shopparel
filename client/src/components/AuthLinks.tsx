import { Link, useLocation } from "react-router-dom";

export default function AuthLinks({ forAuth }: { forAuth?: boolean }) {
  const { pathname } = useLocation();

  function getHref(path: string) {
    const redirect = pathname === "/" ? "" : `?redirect=${pathname}`;
    return path + redirect;
  }

  const currentLinkStyle =
    " bg-accent-blue-100 hover:bg-accent-blue-200 focus-visible:bg-accent-blue-200 border-accent-blue-100 text-white";
  const standardLinkStyle =
    " hover:bg-accent-blue-100 border-accent-blue-100 focus-visible:ring-accent-blue-100 focus-visible:ring-2 active:bg-accent-blue-200 text-accent-blue-100 hover:text-white";

  return (
    <>
      <Link
        to={getHref("/login")}
        className={`border px-2 text-sm duration-200 sm:px-4 md:block ${
          !forAuth ? "hidden" : ""
        } rounded-md py-1.5 ${
          pathname === "/login" ? currentLinkStyle : standardLinkStyle
        }`}
      >
        Login
      </Link>
      <Link
        to={getHref("/signup")}
        className={`border px-2 text-sm duration-200 sm:px-4 md:block ${
          !forAuth ? "hidden" : ""
        } rounded-md py-1.5 ${
          pathname === "/signup" ? currentLinkStyle : standardLinkStyle
        }`}
      >
        Signup
      </Link>
    </>
  );
}
