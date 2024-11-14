import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import useUserContext from "../hooks/useUserContext";
import SearchForm from "./SearchForm";
import AuthLinks from "./AuthLinks";
import CartLink from "./CartLink";

const navLinks = ["Jackets", "Jeans", "Polo Shirts"];

export default function Header() {
  const { pathname } = useLocation();
  const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false);
  const { user } = useUserContext();

  return (
    <>
      <header className="top-0 z-30 fixed bg-white shadow-sm w-full">
        <nav className="flex justify-between items-center gap-4 sm:gap-6 mx-auto p-4 max-w-7xl">
          <Link
            to={"/"}
            className="sm:block hidden focus-visible:ring focus-visible:ring-offset-2 font-bold"
          >
            <img src="/logo.png" alt="Shopparel" width={150} />
          </Link>
          <Link
            to={"/"}
            className="sm:hidden focus-visible:ring focus-visible:ring-offset-2 font-bold"
          >
            <img src="/favicon.png" alt="Shopparel" width={40} />
          </Link>
          <ul className="lg:flex gap-2 hidden">
            <li>
              <Link
                to={"/search"}
                className="p-2 rounded-md focus-visible:ring-accent-blue-100 focus-visible:ring-2 text-sm text-zinc-700 hover:text-accent-blue-100 whitespace-nowrap duration-300"
              >
                All Products
              </Link>
            </li>
            {navLinks.map((navLink) => (
              <li key={navLink}>
                <Link
                  to={`/search?q=&categories=${navLink
                    .toLowerCase()
                    .split(" ")
                    .join("+")}`}
                  className="p-2 rounded-md focus-visible:ring-accent-blue-100 focus-visible:ring-2 text-sm text-zinc-700 hover:text-accent-blue-100 whitespace-nowrap duration-300"
                >
                  {navLink}
                </Link>
              </li>
            ))}
          </ul>

          <SearchForm />

          <div className="flex items-center gap-2">
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
                        className="group-hover:stroke-white duration-200"
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
                        className="group-hover:stroke-white duration-200"
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
              className="block lg:hidden bg-zinc-100 ml-2 p-1.5 rounded-md active:scale-90 hover:bg-zinc-200 duration-200"
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
                    d="M4 6H20M4 12H20M4 18H20"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </g>
              </svg>
            </button>
          </div>
        </nav>
      </header>
      {/* Mobile Nav */}
      <ul
        onClick={() => setMobileNavIsOpen(false)}
        className={`fixed left-0 z-20 flex flex-col w-screen pt-[70px] h-screen duration-300 gap-2 bg-white lg:hidden ${
          mobileNavIsOpen ? " top-0" : " -top-[100%]"
        }`}
      >
        {navLinks.map((navLink) => (
          <li key={navLink}>
            <Link
              to={`/search?q=&categories=${navLink
                .toLowerCase()
                .split(" ")
                .join("+")}`}
              className="block hover:bg-zinc-100 px-4 p-2 rounded-md focus-visible:ring-accent-blue-100 focus-visible:ring-2 text-lg text-zinc-700 hover:text-accent-blue-100 whitespace-nowrap duration-300"
            >
              {navLink}
            </Link>
          </li>
        ))}

        {user ? (
          <>
            <li className="sm:hidden">
              <Link
                to={"/account"}
                className="flex items-center gap-2 hover:bg-zinc-100 px-4 p-2 rounded-md focus-visible:ring-accent-blue-100 focus-visible:ring-2 text-lg text-zinc-700 hover:text-accent-blue-100 whitespace-nowrap duration-300"
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
                      className="group-hover:stroke-white duration-200"
                      d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                      stroke="#333"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </g>
                </svg>
                My Account
              </Link>
            </li>
            <li className="sm:hidden">
              <Link
                to={"/wishlist"}
                className="flex items-center gap-2 hover:bg-zinc-100 px-4 p-2 rounded-md focus-visible:ring-accent-blue-100 focus-visible:ring-2 text-lg text-zinc-700 hover:text-accent-blue-100 whitespace-nowrap duration-300"
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
                      stroke="#333"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </g>
                </svg>
                Wishlist
              </Link>
            </li>
            <li className="sm:hidden">
              <Link
                to={"/orders"}
                className="flex items-center gap-2 hover:bg-zinc-100 px-4 p-2 rounded-md focus-visible:ring-accent-blue-100 focus-visible:ring-2 text-lg text-zinc-700 hover:text-accent-blue-100 whitespace-nowrap duration-300"
              >
                <svg
                  height={20}
                  width={20}
                  viewBox="0 -0.5 25 25"
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
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.50063 16.1407C5.46273 18.2335 7.1278 19.9613 9.22063 20.0007H15.7806C17.8735 19.9613 19.5385 18.2335 19.5006 16.1407L19.0636 11.4527C18.9527 9.68529 17.716 8.19053 16.0006 7.75065C15.6432 7.64667 15.2729 7.59348 14.9006 7.59265H10.1006C9.72837 7.59348 9.35808 7.64667 9.00063 7.75065C7.28636 8.19067 6.05026 9.68433 5.93863 11.4507L5.50063 16.1407Z"
                      stroke="#333"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M16.0006 9.38862V7.36762C15.9629 5.4718 14.3965 3.96493 12.5006 4.00062C10.6047 3.96493 9.03835 5.4718 9.00061 7.36762V9.38762"
                      stroke="#333"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </g>
                </svg>
                Orders
              </Link>
            </li>
          </>
        ) : (
          <>
            <li className="md:hidden">
              <Link
                to={`/login?redirect=${pathname}`}
                className="flex items-center gap-2 hover:bg-zinc-100 px-4 p-2 rounded-md focus-visible:ring-accent-blue-100 focus-visible:ring-2 text-lg text-zinc-700 hover:text-accent-blue-100 whitespace-nowrap duration-300"
              >
                Login
              </Link>
            </li>
            <li className="md:hidden">
              <Link
                to={`/signup?redirect=${pathname}`}
                className="flex items-center gap-2 hover:bg-zinc-100 px-4 p-2 rounded-md focus-visible:ring-accent-blue-100 focus-visible:ring-2 text-lg text-zinc-700 hover:text-accent-blue-100 whitespace-nowrap duration-300"
              >
                Signup
              </Link>
            </li>
          </>
        )}
      </ul>
    </>
  );
}
