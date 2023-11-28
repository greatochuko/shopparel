import AuthLinks from "./AuthLinks";
import { SearchForm } from "./index";

export default function AuthPageHeader() {
  return (
    <header className="shadow-sm py-4">
      <nav className="flex justify-between w-[95%] gap-4 max-w-7xl mx-auto items-center">
        <h1 className="block sm:hidden">S</h1>
        <h1 className="hidden sm:block">Shopparel</h1>
        <SearchForm />
        <div className="flex items-center gap-2 sm:gap-4">
          <AuthLinks forAuth />
        </div>
      </nav>
    </header>
  );
}
