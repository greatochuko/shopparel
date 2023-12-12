import { Link, useLocation } from "react-router-dom";
import useCartContext from "../hooks/useCartContext";

export default function CartLink() {
  const { pathname } = useLocation();
  const { cartItems } = useCartContext();

  return (
    <Link
      title="cart"
      to={"/cart"}
      className={`border ml-2 relative border-zinc-100 focus-visible:ring-accent-blue-100 focus-visible:ring-2 grid p-1 px-1.5 group duration-200 rounded-md hover:bg-accent-blue-100 place-content-center ${
        pathname === "/cart" ? " bg-accent-blue-100" : "bg-zinc-100"
      }`}
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
          stroke={pathname === "/cart" ? "#fff" : "#333"}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <p
        className={`absolute -top-2 -right-2 border bg-white text-accent-blue-100 text-sm w-5 shadow-md flex-center h-5 rounded-full`}
      >
        {cartItems.length}
      </p>
    </Link>
  );
}
