import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import useUserContext from "../hooks/useUserContext";
import SearchForm from "./SearchForm";
import AuthLinks from "./AuthLinks";
import CartLink from "./CartLink";
import MobileNav from "./MobileNav";
import favicon from "../assets/favicon.png";

const navLinks = [
  { text: "Home", href: "/" },
  { text: "Categories", href: "/categories" },
  { text: "About", href: "#" },
  { text: "Contact", href: "#" },
];

export default function Header() {
  const { pathname } = useLocation();
  const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false);
  const { user } = useUserContext();

  return (
    <>
      <header className="z-20 w-full bg-white shadow-sm ">
        <nav className="flex items-center justify-between max-w-6xl gap-4 p-3 mx-auto sm:gap-6">
          <Link
            to={"/"}
            className="flex items-center gap-1 text-lg font-bold focus-visible:ring focus-visible:ring-offset-2"
          >
            <img src={favicon} alt="Shopparel" width={24} />
            <span className="hidden sm:block">Shopparel</span>
          </Link>

          <ul className="hidden gap-2 font-medium lg:flex">
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
          </ul>

          <SearchForm />

          <div className="flex items-center gap-2 font-medium sm:gap-4">
            {user ? (
              <>
                <Link
                  title="My Wishlist"
                  to={"/wishlist"}
                  className={`${
                    pathname === "/wishlist"
                      ? " bg-accent-blue-100"
                      : "bg-zinc-100"
                  } p-1 px-1.5 relative group duration-200 hidden sm:grid rounded-md hover:bg-accent-blue-100 border border-zinc-100 focus-visible:ring-accent-blue-100 focus-visible:ring-2 place-content-center`}
                >
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
                        d="M15.7 4C18.87 4 21 6.98 21 9.76C21 15.39 12.16 20 12 20C11.84 20 3 15.39 3 9.76C3 6.98 5.13 4 8.3 4C10.12 4 11.31 4.91 12 5.71C12.69 4.91 13.88 4 15.7 4Z"
                        stroke={pathname === "/wishlist" ? "white" : "#333"}
                        className="duration-200 group-hover:stroke-white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </g>
                  </svg>
                </Link>

                <Link
                  title="My account"
                  to={"/account"}
                  className={`${
                    pathname === "/account"
                      ? " bg-accent-blue-100"
                      : "bg-zinc-100"
                  } p-1 px-1.5 group duration-200 hidden sm:grid rounded-md hover:bg-accent-blue-100 border border-zinc-100 focus-visible:ring-accent-blue-100 focus-visible:ring-2 place-content-center`}
                >
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
                        className="duration-200 group-hover:stroke-white"
                        d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                        stroke={pathname === "/account" ? "white" : "#333"}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </g>
                  </svg>
                </Link>
              </>
            ) : (
              <AuthLinks />
            )}
            <CartLink />

            {/* Toggle Mobile Nav Button */}
            <button
              onClick={() => setMobileNavIsOpen((curr) => !curr)}
              className="block lg:hidden ml-2 p-1.5 rounded-md active:scale-90 border duration-200"
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
