import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import useUserContext from "../hooks/useUserContext";
import SearchForm from "./SearchForm";
import AuthLinks from "./AuthLinks";
import CartLink from "./CartLink";
import MobileNav from "./MobileNav";
import favicon from "../assets/favicon.png";
import { HeartIcon, MenuIcon, UserIcon, XIcon } from "lucide-react";

const navLinks = [
  { text: "Home", href: "/" },
  { text: "Products", href: "/products" },
  // { text: "About", href: "#" },
  // { text: "Contact", href: "#" },
];

export default function Header() {
  const { pathname } = useLocation();
  const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false);
  const { user } = useUserContext();

  console.log(pathname === navLinks[1].href);

  return (
    <>
      <header className="z-20 w-full bg-white shadow-sm">
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 p-3 sm:gap-6">
          <Link
            to={"/"}
            className="flex items-center gap-1 text-lg font-medium focus-visible:ring focus-visible:ring-offset-2"
          >
            <img src={favicon} alt="Shopparel" width={24} />
            <span className="hidden sm:block">Shopparel</span>
          </Link>

          <ul className="hidden gap-2 font-medium lg:flex">
            {navLinks.map((navLink, index) => (
              <li key={index}>
                <Link
                  to={navLink.href}
                  className={`whitespace-nowrap rounded-md p-2 text-sm duration-300 hover:text-accent-blue-100 focus-visible:ring-2 focus-visible:ring-accent-blue-100 ${pathname === navLink.href ? "text-accent-blue-100" : "text-zinc-700"}`}
                >
                  {navLink.text}
                </Link>
              </li>
            ))}
          </ul>

          <SearchForm />

          <div className="flex items-center gap-2 font-medium sm:gap-4">
            {user ? (
              <>
                <Link
                  title="My Wishlist"
                  to={"/wishlist"}
                  className={`${
                    pathname === "/wishlist" ? "bg-accent-blue-100" : "bg-white"
                  } group relative hidden rounded-md border border-zinc-100 p-2 duration-200 hover:bg-accent-blue-100 focus-visible:ring-2 focus-visible:ring-accent-blue-100 sm:block`}
                >
                  <HeartIcon
                    className={`h-4 w-4 duration-200 group-hover:text-white ${pathname === "/wishlist" ? "text-white" : ""}`}
                    strokeWidth={2.5}
                  />
                </Link>

                <Link
                  title="My account"
                  to={"/account"}
                  className={`${
                    pathname === "/account" ? "bg-accent-blue-100" : "bg-white"
                  } group relative hidden rounded-md border border-zinc-100 p-2 duration-200 hover:bg-accent-blue-100 focus-visible:ring-2 focus-visible:ring-accent-blue-100 sm:block`}
                >
                  <UserIcon
                    className={`h-4 w-4 duration-200 group-hover:text-white ${pathname === "/account" ? "text-white" : ""}`}
                    strokeWidth={2.5}
                  />
                </Link>
              </>
            ) : (
              <AuthLinks />
            )}
            <CartLink />

            {/* Toggle Mobile Nav Button */}
            <button
              onClick={() => setMobileNavIsOpen((curr) => !curr)}
              className="ml-2 block rounded-md border p-2 duration-200 active:scale-90 lg:hidden"
            >
              {mobileNavIsOpen ? (
                <XIcon className="h-4 w-4" />
              ) : (
                <MenuIcon className="h-4 w-4" />
              )}
            </button>
          </div>
        </nav>
      </header>
      <MobileNav
        closeModal={() => setMobileNavIsOpen(false)}
        open={mobileNavIsOpen}
      />
    </>
  );
}
