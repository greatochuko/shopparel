import { Link } from "react-router-dom";
import AuthLinks from "./AuthLinks";
import SearchForm from "./SearchForm";

export default function AuthPageHeader() {
  return (
    <header className="shadow-sm py-4">
      <nav className="flex justify-between w-[95%] gap-4 max-w-7xl mx-auto items-center">
        <Link to={"/"} className="block sm:hidden">
          S
        </Link>
        <Link to={"/"} className="hidden sm:block">
          Shopparel
        </Link>
        <SearchForm />
        <div className="flex items-center gap-2 sm:gap-4">
          <AuthLinks forAuth />
        </div>
      </nav>
    </header>
  );
}
