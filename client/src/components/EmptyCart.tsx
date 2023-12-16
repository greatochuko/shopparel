import { Link } from "react-router-dom";

export default function EmptyCart() {
  return (
    <div className="border w-full max-w-xl py-10 aspect-[1.3] shadow rounded-md mx-auto flex-center flex-col gap-8 p-4">
      <div className="w-[35%] aspect-square rounded-full bg-green-100 flex-center">
        <svg
          width={"50%"}
          height={"50%"}
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
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
              stroke="#000000"
              className="stroke-green-500"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
          </g>
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
