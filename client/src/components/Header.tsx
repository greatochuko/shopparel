import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import useUserContext from "../hooks/useUserContext";
import SearchForm from "./SearchForm";
import AuthLinks from "./AuthLinks";
import CartLink from "./CartLink";
import MobileNav from "./MobileNav";
import favicon from "../assets/favicon.png";
import { HeartIcon, UserIcon } from "lucide-react";

const navLinks = [
  { text: "Home", href: "/" },
  { text: "Categories", href: "/#" },
  { text: "About", href: "#" },
  { text: "Contact", href: "#" },
];

export default function Header() {
  const { pathname } = useLocation();
  const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false);
  const { user } = useUserContext();

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

          {/* <ul className="hidden gap-2 font-medium lg:flex">
            {navLinks.map((navLink, index) => (
              <li key={index}>
                <Link
                  to={navLink.href}
                  className="p-2 text-sm duration-300 rounded-md focus-visible:ring-accent-blue-100 focus-visible:ring-2 text-zinc-700 hover:text-accent-blue-100 whitespace-nowrap"
                >
                  {navLink.text}
                </Link>
              </li>
            ))}
          </ul> */}

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
                    className="h-4 w-4 duration-200 group-hover:text-white"
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
                    className="h-4 w-4 duration-200 group-hover:text-white"
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
              className="ml-2 block rounded-md border p-1.5 duration-200 active:scale-90 lg:hidden"
            >
              {mobileNavIsOpen ? (
                <svg
                  height={20}
                  width={20}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <g id="Menu / Close_MD">
                      <path
                        id="Vector"
                        d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18"
                        stroke="#000000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </g>
                  </g>
                </svg>
              ) : (
                <svg
                  height={20}
                  width={20}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M4 6H20M4 12H20M4 18H20"
                      stroke="#000000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </g>
                </svg>
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
