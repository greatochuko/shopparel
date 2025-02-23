import { Link } from "react-router-dom";

export default function EmptyOrders() {
  return (
    <div className="flex-center mx-auto aspect-[1.3] w-[90%] max-w-xl flex-col gap-8 rounded-md border p-4 py-10 shadow">
      <div className="flex-center aspect-square w-[35%] rounded-full bg-green-100">
        <svg
          height="50%"
          width="50%"
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
              className="stroke-green-500"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M16.0006 9.38862V7.36762C15.9629 5.4718 14.3965 3.96493 12.5006 4.00062C10.6047 3.96493 9.03835 5.4718 9.00061 7.36762V9.38762"
              stroke="#333"
              className="stroke-green-500"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </g>
        </svg>
      </div>
      <div className="flex-center flex-col text-center">
        <h1 className="text-xl font-semibold text-zinc-700 sm:text-2xl">
          Your have no orders
        </h1>
        <p className="text-sm sm:text-base">
          You have not made any purchase yet
        </p>
      </div>
      <Link
        to={"/products"}
        className="rounded-md bg-accent-blue-100 px-4 py-2 text-sm font-medium text-white ring-blue-400 duration-300 hover:bg-accent-blue-200 focus-visible:ring active:bg-accent-blue-300 sm:text-base"
      >
        Start Shopping
      </Link>
    </div>
  );
}
