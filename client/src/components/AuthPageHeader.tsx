import { Link, useLocation } from "react-router-dom";
import { SearchForm } from "./index";

export default function AuthPageHeader() {
  const { pathname } = useLocation();
  const currentLinkStyle =
    " bg-accent-blue-100 hover:bg-accent-blue-200 focus:bg-accent-blue-200 border-accent-blue-100 text-white";
  const standardLinkStyle =
    " hover:bg-accent-blue-100 hover:border-accent-blue-100 focus:bg-accent-blue-100 focus:border-accent-blue-100 active:bg-accent-blue-200 border-zinc-400 hover:text-white focus:text-white text-accent-blue-100";

  return (
    <header className="py-2 shadow-sm sm:py-4">
      <nav className="flex justify-between w-[90%] gap-4 max-w-7xl mx-auto items-center">
        <h1 className="block sm:hidden">S</h1>
        <h1 className="hidden sm:block">Shopparel</h1>
        <SearchForm />
        <div className="flex items-center gap-4">
          <Link
            to="/login"
            className={`text-sm flex-center duration-300 border px-2 sm:px-6 py-1.5 rounded-md ${
              pathname === "/login" ? currentLinkStyle : standardLinkStyle
            }`}
          >
            Login
          </Link>
          <Link
            to="/signup"
            className={`text-sm flex-center duration-300 border px-2 sm:px-6 py-1.5 rounded-md ${
              pathname === "/signup" ? currentLinkStyle : standardLinkStyle
            }`}
          >
            Signup
          </Link>
        </div>
      </nav>
    </header>
  );
}
