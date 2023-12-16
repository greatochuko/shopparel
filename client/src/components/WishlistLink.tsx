import { Link, useLocation } from "react-router-dom";
import useWishlistContext from "../hooks/useWishlistContext";

export default function WishlistLink() {
  const { pathname } = useLocation();
  const { wishlist } = useWishlistContext();

  return (
    <Link
      title="My Wishlist"
      to={"/wishlist"}
      className={`${
        pathname === "/wishlist" ? " bg-accent-blue-100" : "bg-zinc-100"
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
      <p
        className={`absolute -top-2 -right-2 border bg-white text-accent-blue-100 text-sm w-5 shadow-md flex-center h-5 rounded-full`}
      >
        {wishlist.length}
      </p>
    </Link>
  );
}
