import { Link } from "react-router-dom";

export default function EmptyCart() {
  return (
    <div className="border w-full max-w-xl py-10 aspect-[1.3] shadow rounded-md mx-auto flex-center flex-col gap-8 p-4">
      <div className="w-[35%] aspect-square rounded-full bg-green-100 flex-center">
        <svg
          width="50%"
          height="50%"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="stroke-green-500"
            d="M2.5 3.33334H3.00526C3.85578 3.33334 4.56986 3.97376 4.6621 4.81926L5.3379 11.0141C5.43014 11.8596 6.14422 12.5 6.99474 12.5H14.205C14.9669 12.5 15.6317 11.9834 15.82 11.2452L16.9699 6.73593C17.2387 5.68213 16.4425 4.65742 15.355 4.65742H5.5M5.52063 15.5208H6.14563M5.52063 16.1458H6.14563M14.6873 15.5208H15.3123M14.6873 16.1458H15.3123M6.66667 15.8333C6.66667 16.2936 6.29357 16.6667 5.83333 16.6667C5.3731 16.6667 5 16.2936 5 15.8333C5 15.3731 5.3731 15 5.83333 15C6.29357 15 6.66667 15.3731 6.66667 15.8333ZM15.8333 15.8333C15.8333 16.2936 15.4602 16.6667 15 16.6667C14.5398 16.6667 14.1667 16.2936 14.1667 15.8333C14.1667 15.3731 14.5398 15 15 15C15.4602 15 15.8333 15.3731 15.8333 15.8333Z"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="flex-col text-center flex-center">
        <h1 className="text-xl font-semibold sm:text-2xl">
          Your wishlist is empty and sad :(
        </h1>
        <p>Add something to make it happy!</p>
      </div>
      <Link
        to={"/search?q="}
        className="px-4 py-2 text-base font-semibold text-white duration-300 rounded-md sm:text-lg bg-accent-blue-100 hover:bg-accent-blue-200 active:bg-accent-blue-300 focus-visible:ring ring-blue-400"
      >
        Continue Shopping
      </Link>
    </div>
  );
}
