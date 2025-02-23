import { Link, useLocation } from "react-router-dom";
import useUserContext from "../hooks/useUserContext";
import {
  HeartIcon,
  HouseIcon,
  PackageIcon,
  UserIcon,
  WalletCardsIcon,
} from "lucide-react";

const navLinks = [
  {
    text: "Home",
    href: "/",
    Icon: <HouseIcon className="h-4 w-4 sm:h-5 sm:w-5" />,
  },
  {
    text: "Products",
    href: "/products",
    Icon: <PackageIcon className="h-4 w-4 sm:h-5 sm:w-5" />,
  },
  // { text: "About", href: "#" },
  // { text: "Contact", href: "#" },
];

export default function MobileNav({
  open,
  closeModal,
}: {
  open: boolean;
  closeModal: () => void;
}) {
  const { pathname } = useLocation();
  const { user } = useUserContext();

  return (
    <ul
      onClick={closeModal}
      className={`fixed left-0 z-10 flex h-fit w-screen flex-col gap-2 bg-white py-2 pt-[72px] shadow-md duration-300 lg:hidden ${
        open ? "top-0" : "-top-[100%]"
      }`}
    >
      {navLinks.map((navLink, index) => (
        <li key={index}>
          <Link
            to={navLink.href}
            className="flex items-center gap-2 whitespace-nowrap rounded-md p-2 px-4 text-base text-zinc-700 duration-300 hover:bg-zinc-100 hover:text-accent-blue-100 focus-visible:ring-2 focus-visible:ring-accent-blue-100 sm:text-lg"
          >
            {navLink.Icon}
            {navLink.text}
          </Link>
        </li>
      ))}

      {user ? (
        <>
          <li className="sm:hidden">
            <Link
              to={"/account"}
              className="flex items-center gap-2 whitespace-nowrap rounded-md p-2 px-4 text-base text-zinc-700 duration-300 hover:bg-zinc-100 hover:text-accent-blue-100 focus-visible:ring-2 focus-visible:ring-accent-blue-100 sm:text-lg"
            >
              <UserIcon className="h-4 w-4 sm:h-5 sm:w-5" />
              My Account
            </Link>
          </li>
          <li className="sm:hidden">
            <Link
              to={"/wishlist"}
              className="flex items-center gap-2 whitespace-nowrap rounded-md p-2 px-4 text-base text-zinc-700 duration-300 hover:bg-zinc-100 hover:text-accent-blue-100 focus-visible:ring-2 focus-visible:ring-accent-blue-100 sm:text-lg"
            >
              <HeartIcon className="h-4 w-4 sm:h-5 sm:w-5" />
              Wishlist
            </Link>
          </li>
          <li className="sm:hidden">
            <Link
              to={"/orders"}
              className="flex items-center gap-2 whitespace-nowrap rounded-md p-2 px-4 text-base text-zinc-700 duration-300 hover:bg-zinc-100 hover:text-accent-blue-100 focus-visible:ring-2 focus-visible:ring-accent-blue-100 sm:text-lg"
            >
              <WalletCardsIcon className="h-4 w-4 sm:h-5 sm:w-5" />
              Orders
            </Link>
          </li>
        </>
      ) : (
        <>
          <li className="md:hidden">
            <Link
              to={`/login?redirect=${pathname}`}
              className="flex items-center gap-2 whitespace-nowrap rounded-md p-2 px-4 text-base text-zinc-700 duration-300 hover:bg-zinc-100 hover:text-accent-blue-100 focus-visible:ring-2 focus-visible:ring-accent-blue-100 sm:text-lg"
            >
              Login
            </Link>
          </li>
          <li className="md:hidden">
            <Link
              to={`/signup?redirect=${pathname}`}
              className="flex items-center gap-2 whitespace-nowrap rounded-md p-2 px-4 text-base text-zinc-700 duration-300 hover:bg-zinc-100 hover:text-accent-blue-100 focus-visible:ring-2 focus-visible:ring-accent-blue-100 sm:text-lg"
            >
              Signup
            </Link>
          </li>
        </>
      )}
    </ul>
  );
}
