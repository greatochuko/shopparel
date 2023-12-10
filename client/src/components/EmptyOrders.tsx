import { Link } from "react-router-dom";

export default function EmptyOrders() {
  return (
    <div className="border w-full max-w-xl py-10 aspect-[1.3] shadow rounded-md mx-auto flex-center flex-col gap-8 p-4">
      <div className="w-[35%] aspect-square rounded-full bg-green-100 flex-center">
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
      <div className="flex-col text-center flex-center">
        <h1 className="text-xl font-semibold sm:text-2xl">
          Your have no orders
        </h1>
        <p>You have not made any purchase yet</p>
      </div>
      <Link
        to={"/search?q="}
        className="px-4 py-2 text-base font-semibold text-white duration-300 rounded-md sm:text-lg bg-accent-blue-100 hover:bg-accent-blue-200 active:bg-accent-blue-300 focus-visible:ring ring-blue-400"
      >
        Start Shopping
      </Link>
    </div>
  );
}
