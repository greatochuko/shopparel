import { useState } from "react";
import { StoreType } from "./AdminPageLayout";
import { Link } from "react-router-dom";
import Modal from "./Modal";

export default function AdminPageHeader({
  toggleShowSidebar,
  store,
}: {
  toggleShowSidebar: () => void;
  store: StoreType | null;
}) {
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
  const [logoutModalIsOpen, setLogoutModalIsOpen] = useState(false);

  function toggleDropdown() {
    setDropdownIsOpen((curr) => !curr);
  }

  function toggleLogoutModal() {
    setLogoutModalIsOpen((curr) => !curr);
  }

  return (
    <>
      <nav className="sticky top-0 flex items-center justify-between w-full gap-4 p-2 px-6 bg-white shadow-md">
        <button onClick={toggleShowSidebar} className="p-1 group lg:hidden">
          <svg
            height={25}
            width={25}
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
              {" "}
              <g id="Menu / Hamburger_MD">
                {" "}
                <path
                  id="Vector"
                  d="M5 17H19M5 12H19M5 7H19"
                  stroke="#666"
                  className="duration-200 group-hover:stroke-black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>{" "}
            </g>
          </svg>
        </button>
        <h1 className="text-lg sm:text-xl font-semibold mr-auto">Dashboard</h1>

        <form className="sm:w-80">
          <input
            type="text"
            placeholder="Search"
            className="w-full p-2 px-3 duration-300 text-sm rounded-full bg-zinc-100 focus-visible:ring ring-blue-400"
          />
        </form>
        <button className="relative flex-center group" onClick={toggleDropdown}>
          <img
            src={store?.banner}
            alt={store?.name + " logo"}
            className="object-cover w-8 h-8 rounded-full bg-zinc-300"
          />
          <span
            className={`duration-300 ${dropdownIsOpen ? "rotate-180" : ""}`}
          >
            <svg
              height={24}
              width={24}
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
                {" "}
                <g id="Arrow / Caret_Down_MD">
                  {" "}
                  <path
                    id="Vector"
                    d="M16 10L12 14L8 10"
                    stroke="#999"
                    className={`group-hover:stroke-accent-blue-100 duration-200 ${
                      dropdownIsOpen ? "stroke-accent-blue-100" : ""
                    }`}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                </g>{" "}
              </g>
            </svg>
          </span>
          {dropdownIsOpen && (
            <ul className="p-1 rounded-lg absolute top-[110%] bg-white border right-0 w-fit flex flex-col text-zinc-700">
              <li>
                <Link
                  to={"/"}
                  className="flex items-center gap-2 p-2 py-1 duration-300 rounded-md group/dropdown text-start hover:bg-accent-blue-100/20 hover:text-accent-blue-300"
                >
                  <svg
                    height={20}
                    width={20}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.2796 3.71579C12.097 3.66261 11.903 3.66261 11.7203 3.71579C11.6678 3.7311 11.5754 3.7694 11.3789 3.91817C11.1723 4.07463 10.9193 4.29855 10.5251 4.64896L5.28544 9.3064C4.64309 9.87739 4.46099 10.0496 4.33439 10.24C4.21261 10.4232 4.12189 10.6252 4.06588 10.8379C4.00765 11.0591 3.99995 11.3095 3.99995 12.169V17.17C3.99995 18.041 4.00076 18.6331 4.03874 19.0905C4.07573 19.536 4.14275 19.7634 4.22513 19.9219C4.41488 20.2872 4.71272 20.5851 5.07801 20.7748C5.23658 20.8572 5.46397 20.9242 5.90941 20.9612C6.36681 20.9992 6.95893 21 7.82995 21H7.99995V18C7.99995 15.7909 9.79081 14 12 14C14.2091 14 16 15.7909 16 18V21H16.17C17.041 21 17.6331 20.9992 18.0905 20.9612C18.5359 20.9242 18.7633 20.8572 18.9219 20.7748C19.2872 20.5851 19.585 20.2872 19.7748 19.9219C19.8572 19.7634 19.9242 19.536 19.9612 19.0905C19.9991 18.6331 20 18.041 20 17.17V12.169C20 11.3095 19.9923 11.0591 19.934 10.8379C19.878 10.6252 19.7873 10.4232 19.6655 10.24C19.5389 10.0496 19.3568 9.87739 18.7145 9.3064L13.4748 4.64896C13.0806 4.29855 12.8276 4.07463 12.621 3.91817C12.4245 3.7694 12.3321 3.7311 12.2796 3.71579ZM11.1611 1.79556C11.709 1.63602 12.2909 1.63602 12.8388 1.79556C13.2189 1.90627 13.5341 2.10095 13.8282 2.32363C14.1052 2.53335 14.4172 2.81064 14.7764 3.12995L20.0432 7.81159C20.0716 7.83679 20.0995 7.86165 20.1272 7.88619C20.6489 8.34941 21.0429 8.69935 21.3311 9.13277C21.5746 9.49916 21.7561 9.90321 21.8681 10.3287C22.0006 10.832 22.0004 11.359 22 12.0566C22 12.0936 22 12.131 22 12.169V17.212C22 18.0305 22 18.7061 21.9543 19.2561C21.9069 19.8274 21.805 20.3523 21.5496 20.8439C21.1701 21.5745 20.5744 22.1701 19.8439 22.5496C19.3522 22.805 18.8274 22.9069 18.256 22.9543C17.706 23 17.0305 23 16.2119 23H15.805C15.7972 23 15.7894 23 15.7814 23C15.6603 23 15.5157 23.0001 15.3883 22.9895C15.2406 22.9773 15.0292 22.9458 14.8085 22.8311C14.5345 22.6888 14.3111 22.4654 14.1688 22.1915C14.0542 21.9707 14.0227 21.7593 14.0104 21.6116C13.9998 21.4843 13.9999 21.3396 13.9999 21.2185L14 18C14 16.8954 13.1045 16 12 16C10.8954 16 9.99995 16.8954 9.99995 18L9.99996 21.2185C10 21.3396 10.0001 21.4843 9.98949 21.6116C9.97722 21.7593 9.94572 21.9707 9.83107 22.1915C9.68876 22.4654 9.46538 22.6888 9.19142 22.8311C8.9707 22.9458 8.75929 22.9773 8.6116 22.9895C8.48423 23.0001 8.33959 23 8.21847 23C8.21053 23 8.20268 23 8.19495 23H7.78798C6.96944 23 6.29389 23 5.74388 22.9543C5.17253 22.9069 4.64769 22.805 4.15605 22.5496C3.42548 22.1701 2.8298 21.5745 2.4503 20.8439C2.19492 20.3523 2.09305 19.8274 2.0456 19.2561C1.99993 18.7061 1.99994 18.0305 1.99995 17.212L1.99995 12.169C1.99995 12.131 1.99993 12.0936 1.99992 12.0566C1.99955 11.359 1.99928 10.832 2.1318 10.3287C2.24383 9.90321 2.42528 9.49916 2.66884 9.13277C2.95696 8.69935 3.35105 8.34941 3.87272 7.8862C3.90036 7.86165 3.92835 7.83679 3.95671 7.81159L9.22354 3.12996C9.58274 2.81064 9.89467 2.53335 10.1717 2.32363C10.4658 2.10095 10.781 1.90627 11.1611 1.79556Z"
                        fill="#666"
                        className="group-hover/dropdown:fill-accent-blue-300"
                      ></path>{" "}
                    </g>
                  </svg>
                  Home
                </Link>
              </li>
              <li
                onClick={toggleLogoutModal}
                className="flex items-center gap-2 p-2 py-1 duration-300 rounded-md group/dropdown text-start hover:text-red-700 hover:bg-red-100"
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
                      stroke="#666"
                      className="group-hover/dropdown:stroke-red-700"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </g>
                </svg>{" "}
                Logout
              </li>
            </ul>
          )}
        </button>
      </nav>
      {logoutModalIsOpen ? (
        <Modal type="signout" closeModal={toggleLogoutModal} />
      ) : null}
    </>
  );
}
