import { Link, Outlet, useLocation } from "react-router-dom";
import SectionHeader from "./SectionHeader";
import useUserContext from "../hooks/useUserContext";
import { useState } from "react";
import ModalContainer from "./ModalContainer";
import SignoutModal from "./SignoutModal";
import LoadingIndicator from "./LoadingIndicator";
import { resizeImage } from "../utils/resizeImage";
import { uploadImage } from "../utils/uploadImage";
import { fetchUpdateProfilePicture } from "../services/userServices";

export default function ProfilePageLayout() {
  const { user, udpateUser } = useUserContext();
  const { pathname } = useLocation();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  function openSignoutModal() {
    setModalIsOpen(true);
  }

  function handleSelectNewProfilePicture(
    e: React.ChangeEvent<HTMLInputElement>,
  ) {
    setLoading(true);
    if (!e.target.files) return setLoading(false);

    resizeImage(e.target.files[0], 200, async (resizedImg) => {
      const { url, error } = await uploadImage(resizedImg);
      if (error) return setLoading(false);
      const data = await fetchUpdateProfilePicture(url);
      if (data.error) return setLoading(false);
      udpateUser(data);
      setLoading(false);
    });
  }

  return (
    <>
      <main className="mx-auto mb-10 mt-[78px] flex w-[90%] max-w-6xl flex-col gap-4 pt-1 text-zinc-500">
        <p>
          <Link
            to={"/"}
            className="rounded-md p-1 ring-blue-400 hover:underline focus-visible:ring"
          >
            Home
          </Link>
          &gt; My Account &gt;
          <span className="font-semibold text-zinc-700"> Personal Info</span>
        </p>
        <div className="mt-6 flex flex-col gap-8 md:flex-row">
          <section className="w-full md:w-40 lg:w-64">
            <div className="flex-center flex-col gap-2">
              <div className="relative">
                <img
                  src={user?.imgUrl}
                  alt={`${user?.firstName} ${user?.lastName} profile picture`}
                  className="aspect-square w-24 rounded-full object-cover"
                />
                <label
                  htmlFor="profile-picture"
                  className="flex-center absolute right-0 top-[60%] translate-x-[20%] cursor-pointer rounded-full bg-accent-blue-100 p-[6px] duration-300 hover:bg-accent-blue-200 active:bg-accent-blue-300"
                >
                  <input
                    type="file"
                    accept=".png, .jpg, .jpeg"
                    name="profile-picture"
                    id="profile-picture"
                    className="hidden"
                    onChange={handleSelectNewProfilePicture}
                    disabled={loading}
                  />
                  {loading ? (
                    <LoadingIndicator />
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
                          d="M12 16C13.6569 16 15 14.6569 15 13C15 11.3431 13.6569 10 12 10C10.3431 10 9 11.3431 9 13C9 14.6569 10.3431 16 12 16Z"
                          stroke="#fff"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M3 16.8V9.2C3 8.0799 3 7.51984 3.21799 7.09202C3.40973 6.71569 3.71569 6.40973 4.09202 6.21799C4.51984 6 5.0799 6 6.2 6H7.25464C7.37758 6 7.43905 6 7.49576 5.9935C7.79166 5.95961 8.05705 5.79559 8.21969 5.54609C8.25086 5.49827 8.27836 5.44328 8.33333 5.33333C8.44329 5.11342 8.49827 5.00346 8.56062 4.90782C8.8859 4.40882 9.41668 4.08078 10.0085 4.01299C10.1219 4 10.2448 4 10.4907 4H13.5093C13.7552 4 13.8781 4 13.9915 4.01299C14.5833 4.08078 15.1141 4.40882 15.4394 4.90782C15.5017 5.00345 15.5567 5.11345 15.6667 5.33333C15.7216 5.44329 15.7491 5.49827 15.7803 5.54609C15.943 5.79559 16.2083 5.95961 16.5042 5.9935C16.561 6 16.6224 6 16.7454 6H17.8C18.9201 6 19.4802 6 19.908 6.21799C20.2843 6.40973 20.5903 6.71569 20.782 7.09202C21 7.51984 21 8.0799 21 9.2V16.8C21 17.9201 21 18.4802 20.782 18.908C20.5903 19.2843 20.2843 19.5903 19.908 19.782C19.4802 20 18.9201 20 17.8 20H6.2C5.0799 20 4.51984 20 4.09202 19.782C3.71569 19.5903 3.40973 19.2843 3.21799 18.908C3 18.4802 3 17.9201 3 16.8Z"
                          stroke="#fff"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </g>
                    </svg>
                  )}
                </label>
              </div>
              <SectionHeader title={`Hello, ${user?.firstName} `} />
              <p className="text-center">Welcome to your account</p>
              <Link
                to={user?.store ? "/admin" : "/become-a-seller"}
                className="flex-center w-fit gap-2 rounded-md bg-accent-blue-100 p-2 px-4 text-white ring-blue-400 duration-300 hover:bg-accent-blue-200 focus-visible:ring active:bg-accent-blue-300"
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
                      d="M15 14V17.6C15 18.4401 15 18.8601 14.8365 19.181C14.6927 19.4632 14.4632 19.6927 14.181 19.8365C13.8601 20 13.4401 20 12.6 20H7.40001C6.55994 20 6.1399 20 5.81903 19.8365C5.53679 19.6927 5.30731 19.4632 5.1635 19.181C5.00001 18.8601 5.00001 18.4401 5.00001 17.6V10M19 10V20M5.00001 16H15M5.55778 4.88446L3.5789 8.84223C3.38722 9.22559 3.29138 9.41727 3.3144 9.57308C3.3345 9.70914 3.40976 9.8309 3.52246 9.90973C3.65153 10 3.86583 10 4.29444 10H19.7056C20.1342 10 20.3485 10 20.4776 9.90973C20.5903 9.8309 20.6655 9.70914 20.6856 9.57308C20.7086 9.41727 20.6128 9.22559 20.4211 8.84223L18.4422 4.88446C18.2817 4.5634 18.2014 4.40287 18.0817 4.28558C17.9758 4.18187 17.8482 4.10299 17.7081 4.05465C17.5496 4 17.3701 4 17.0112 4H6.98887C6.62991 4 6.45043 4 6.29198 4.05465C6.15185 4.10299 6.02422 4.18187 5.91833 4.28558C5.79858 4.40287 5.71832 4.5634 5.55778 4.88446Z"
                      stroke="#fff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </g>
                </svg>
                {user?.store ? "Manage Your Shop" : "Become a Seller"}
              </Link>
            </div>
            <ul
              role="navigation"
              className="my-6 flex flex-row whitespace-nowrap md:flex-col"
            >
              <li className="flex-1">
                <Link
                  to={"/account"}
                  className={`flex items-center justify-center gap-2 p-3 duration-200 hover:bg-zinc-100 focus-visible:bg-zinc-100 md:justify-normal ${
                    pathname === "/account"
                      ? "border-b-2 border-zinc-700 bg-zinc-100 md:border-b-0 md:border-l-4"
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
                  className={`flex items-center justify-center gap-2 p-3 duration-200 hover:bg-zinc-100 focus-visible:bg-zinc-100 md:justify-normal ${
                    pathname === "/wishlist"
                      ? "border-b-2 border-zinc-700 bg-zinc-100 md:border-b-0 md:border-l-4"
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
                  className={`flex items-center justify-center gap-2 p-3 duration-200 hover:bg-zinc-100 focus-visible:bg-zinc-100 md:justify-normal ${
                    pathname.includes("/orders")
                      ? "border-b-2 border-zinc-700 bg-zinc-100 md:border-b-0 md:border-l-4"
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
                className="flex flex-1 cursor-pointer items-center justify-center gap-2 p-3 duration-200 hover:bg-zinc-100 focus-visible:bg-zinc-100 md:justify-normal"
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
      </main>
      {modalIsOpen ? (
        <ModalContainer closeModal={() => setModalIsOpen(false)}>
          <SignoutModal closeModal={() => setModalIsOpen(false)} />
        </ModalContainer>
      ) : null}
    </>
  );
}
