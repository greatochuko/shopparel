import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
const navLinks = ["Men", "Women", "jewelry", "accessories"];
import useUserContext from "../hooks/useUserContext";
import { SearchForm } from ".";
import AuthLinks from "./AuthLinks";

export default function Header() {
  const { pathname } = useLocation();
  const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false);
  const { user } = useUserContext();

  return (
    <>
      <header className="fixed top-0 z-30 w-full bg-white shadow-sm">
        <nav className="flex items-center justify-between gap-4 p-4 mx-auto sm:gap-6 max-w-7xl ">
          <Link to={"/"} className="hidden sm:block">
            Shopparel
          </Link>
          <Link to={"/"} className="sm:hidden">
            S
          </Link>
          <ul className="hidden gap-2 md:flex">
            {navLinks.map((navLink) => (
              <li key={navLink} className="hidden xl:block">
                <Link
                  to={`/categories/${navLink
                    .toLowerCase()
                    .split(" ")
                    .join("-")}`}
                  className={`${
                    pathname ===
                    `/categories/${navLink.toLowerCase().split(" ").join("-")}`
                      ? "font-bold "
                      : " "
                  } text-zinc-700 text-sm whitespace-nowrap duration-300   hover:text-accent-blue-100 focus:border focus:border-accent-blue-100 p-2 rounded-md`}
                >
                  {navLink}
                </Link>
              </li>
            ))}
            <li key={"categories"}>
              <Link
                to={"/categories"}
                className={`${
                  pathname === "/categories" ? "font-bold " : " "
                } text-zinc-700 text-sm whitespace-nowrap duration-300   hover:text-accent-blue-100 focus:border focus:border-accent-blue-100 p-2 rounded-md`}
              >
                All Categories
              </Link>
            </li>
          </ul>

          <SearchForm />

          <div className="flex items-center gap-2">
            {user ? (
              <>
                <Link
                  title="My account"
                  to={"/account"}
                  className="grid p-1 px-1.5 group duration-200 rounded-md hover:bg-accent-blue-100 border border-zinc-100 focus:border-accent-blue-100  bg-zinc-100 place-content-center"
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
                        stroke="#333"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </g>
                  </svg>
                </Link>
                <Link
                  title="wishlist"
                  to={"/wishlist"}
                  className="border border-zinc-100 focus:border-accent-blue-100 grid p-1 px-1.5 group duration-200 rounded-md hover:bg-accent-blue-100 bg-zinc-100 place-content-center"
                >
                  <svg
                    viewBox="0 0 24 24"
                    height={20}
                    width={20}
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
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
                        stroke="#333"
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
            <Link
              title="cart"
              to={"/cart"}
              className="border ml-2 border-zinc-100 focus:border-accent-blue-100 grid p-1 px-1.5 group duration-200 rounded-md hover:bg-accent-blue-100 bg-zinc-100 place-content-center"
            >
              <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="duration-200 group-hover:stroke-white"
                  d="M2.5 3.33334H3.00526C3.85578 3.33334 4.56986 3.97376 4.6621 4.81926L5.3379 11.0141C5.43014 11.8596 6.14422 12.5 6.99474 12.5H14.205C14.9669 12.5 15.6317 11.9834 15.82 11.2452L16.9699 6.73593C17.2387 5.68213 16.4425 4.65742 15.355 4.65742H5.5M5.52063 15.5208H6.14563M5.52063 16.1458H6.14563M14.6873 15.5208H15.3123M14.6873 16.1458H15.3123M6.66667 15.8333C6.66667 16.2936 6.29357 16.6667 5.83333 16.6667C5.3731 16.6667 5 16.2936 5 15.8333C5 15.3731 5.3731 15 5.83333 15C6.29357 15 6.66667 15.3731 6.66667 15.8333ZM15.8333 15.8333C15.8333 16.2936 15.4602 16.6667 15 16.6667C14.5398 16.6667 14.1667 16.2936 14.1667 15.8333C14.1667 15.3731 14.5398 15 15 15C15.4602 15 15.8333 15.3731 15.8333 15.8333Z"
                  stroke="#333"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </Link>
          </div>
          {/* Toggle Mobile Nav Button */}
          <button
            onClick={() => setMobileNavIsOpen((curr) => !curr)}
            className="block p-1.5 rounded-md active:scale-90 hover:bg-zinc-200 duration-200 md:hidden bg-zinc-100 "
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
        </nav>
      </header>
      {/* Mobile Nav */}
      <ul
        className={`fixed left-0 z-20 flex flex-col w-screen pt-[70px] h-screen duration-300 gap-2 bg-white md:hidden ${
          mobileNavIsOpen ? " top-0" : " -top-[100%]"
        }`}
      >
        {navLinks.map((navLink) => (
          <li key={navLink}>
            <Link
              to={`/categories/${navLink.toLowerCase().split(" ").join("-")}`}
              className={`${
                pathname ===
                `/categories/${navLink.toLowerCase().split(" ").join("-")}`
                  ? "font-bold "
                  : " "
              } text-zinc-700 block text-lg whitespace-nowrap duration-300 hover:text-accent-blue-100 hover:bg-zinc-100 focus:border focus:border-accent-blue-100 p-2 px-4 rounded-md`}
            >
              {navLink}
            </Link>
          </li>
        ))}
        <li key={"categories"}>
          <Link
            to={"/categories"}
            className={`${
              pathname === "/categories" ? "font-bold " : " "
            } text-zinc-700 block text-lg whitespace-nowrap duration-300 hover:text-accent-blue-100 hover:bg-zinc-100 focus:border focus:border-accent-blue-100 p-2 px-4 rounded-md`}
          >
            All Categories
          </Link>
        </li>

        {user ? (
          <>
            <li className="sm:hidden">
              <Link
                to={"/account"}
                className="flex items-center gap-2 p-2 px-4 text-lg duration-300 rounded-md text-zinc-700 whitespace-nowrap hover:text-accent-blue-100 hover:bg-zinc-100 focus:border focus:border-accent-blue-100"
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
                className="flex items-center gap-2 p-2 px-4 text-lg duration-300 rounded-md text-zinc-700 whitespace-nowrap hover:text-accent-blue-100 hover:bg-zinc-100 focus:border focus:border-accent-blue-100"
              >
                <svg
                  viewBox="0 0 24 24"
                  height={20}
                  width={20}
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
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
                      stroke="#333"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </g>
                </svg>
                Wish List
              </Link>
            </li>
          </>
        ) : (
          <>
            <li className="md:hidden">
              <Link
                to={"/login"}
                className="flex items-center gap-2 p-2 px-4 text-lg duration-300 rounded-md text-zinc-700 whitespace-nowrap hover:text-accent-blue-100 hover:bg-zinc-100 focus:border focus:border-accent-blue-100"
              >
                Login
              </Link>
            </li>
            <li className="md:hidden">
              <Link
                to={"/signup"}
                className="flex items-center gap-2 p-2 px-4 text-lg duration-300 rounded-md text-zinc-700 whitespace-nowrap hover:text-accent-blue-100 hover:bg-zinc-100 focus:border focus:border-accent-blue-100"
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
