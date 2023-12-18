import { Link, Outlet, useLocation } from "react-router-dom";
import SectionHeader from "./SectionHeader";
import useUserContext from "../hooks/useUserContext";
import { useState } from "react";
import Modal from "./Modal";
import Product from "./Product";

export default function ProfilePageLayout() {
  const { user } = useUserContext();
  const { pathname } = useLocation();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openSignoutModal() {
    setModalIsOpen(true);
  }

  function closeSignoutModal() {
    setModalIsOpen(false);
  }

  return (
    <>
      <main className="mt-[78px] pt-1 flex flex-col gap-4  max-w-7xl w-[90%] mx-auto text-zinc-700 mb-10">
        <p>
          <Link
            to={"/"}
            className="p-1 rounded-md hover:underline focus-visible:ring ring-blue-400"
          >
            Home
          </Link>
          &gt; My Account &gt;
          <span className="font-semibold"> Personal Info</span>
        </p>
        <div className="flex flex-col gap-10 mt-6 md:flex-row">
          <section className="w-full md:w-40 lg:w-64">
            <SectionHeader title={`Hello, ${user?.firstName} `} />
            <p className="mt-2">Welcome to your account</p>
            <ul
              role="navigation"
              className="flex flex-row my-6 md:flex-col whitespace-nowrap"
            >
              <li className="flex-1">
                <Link
                  to={"/account"}
                  className={`p-3 flex items-center justify-center md:justify-normal gap-2 hover:bg-zinc-100 duration-200 focus-visible:bg-zinc-100 ${
                    pathname === "/account"
                      ? "md:border-l-4 md:border-b-0 border-b-2 border-zinc-700 bg-zinc-100"
                      : ""
                  }`}
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
                  <span
                    className={`${
                      pathname === "/account" ? "block" : "hidden"
                    } sm:block`}
                  >
                    My info
                  </span>
                </Link>
              </li>
              <li className="flex-1">
                <Link
                  to={"/wishlist"}
                  className={`p-3 flex items-center justify-center md:justify-normal gap-2 hover:bg-zinc-100 duration-200 focus-visible:bg-zinc-100 ${
                    pathname === "/wishlist"
                      ? "md:border-l-4 md:border-b-0 border-b-2 border-zinc-700 bg-zinc-100"
                      : ""
                  }`}
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
                  <span
                    className={`${
                      pathname === "/wishlist" ? "" : "hidden"
                    } sm:block`}
                  >
                    Wishlist
                  </span>
                </Link>
              </li>
              <li className="flex-1">
                <Link
                  to={"/orders"}
                  className={`p-3 flex items-center justify-center md:justify-normal gap-2 hover:bg-zinc-100 duration-200 focus-visible:bg-zinc-100 ${
                    pathname.includes("/orders")
                      ? "md:border-l-4 md:border-b-0 border-b-2 border-zinc-700 bg-zinc-100"
                      : ""
                  }`}
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
                  <span
                    className={`${
                      pathname.includes("/orders") ? "" : "hidden"
                    } sm:block`}
                  >
                    My orders
                  </span>
                </Link>
              </li>
              <li
                role="button"
                onClick={openSignoutModal}
                className="flex items-center justify-center flex-1 gap-2 p-3 duration-200 cursor-pointer md:justify-normal hover:bg-zinc-100 focus-visible:bg-zinc-100 "
              >
                <svg
                  height={20}
                  width={20}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  transform="matrix(-1, 0, 0, 1, 0, 0)"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M14 4L18 4C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H14M3 12L15 12M3 12L7 8M3 12L7 16"
                      stroke="#333"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </g>
                </svg>
                <span className="hidden sm:block">Sign out</span>
              </li>
            </ul>
          </section>
          <Outlet />
        </div>
        {pathname === "/wishlist" ? (
          <section className="w-full mt-10">
            <SectionHeader title="Recently Viewed" />
            {/* <div className="grid grid-cols-2 gap-4 mt-6 md:grid-cols-4">
              {products.slice(0, 4).map((product) => (
                <Product key={product._id} product={product} />
              ))}
            </div> */}
          </section>
        ) : null}
      </main>
      {modalIsOpen ? (
        <Modal type="signout" closeModal={closeSignoutModal} />
      ) : null}
    </>
  );
}
