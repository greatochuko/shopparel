export default function AdminOrderOptions({
  orderStatus,
  handleFulfilOrder,
  handleCancelOrder,
}: {
  orderStatus: string;
  handleFulfilOrder: () => void;
  handleCancelOrder: () => void;
}) {
  return (
    <ul className="absolute right-0 top-[100%] w-fit bg-white rounded-md overflow-hidden shadow-lg animate-zoom-in z-20">
      <li
        aria-disabled={orderStatus !== "active"}
        onClick={handleFulfilOrder}
        className="px-2 aria-disabled:grayscale aria-disabled:cursor-default cursor-pointer gap-1 group py-1 flex items-center hover:bg-green-100 hover:text-green-600 duration-300"
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
            {" "}
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L12.7348 11.2045L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z"
              fill="#1C274C"
              className="group-hover:fill-green-600 fill-zinc-700 duration-300"
            ></path>{" "}
          </g>
        </svg>
        Fulfil
      </li>
      <li
        aria-disabled={orderStatus !== "active"}
        onClick={handleCancelOrder}
        className="px-2 aria-disabled:grayscale aria-disabled:cursor-default cursor-pointer py-1 text-left group flex items-center gap-1 hover:bg-red-100 hover:text-red-500 duration-300"
      >
        <svg
          height={20}
          width={20}
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
          className="group-hover:fill-red-500 fill-zinc-700 duration-300"
          viewBox="0 0 24 24"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path>
          </g>
        </svg>
        Cancel
      </li>
    </ul>
  );
}
