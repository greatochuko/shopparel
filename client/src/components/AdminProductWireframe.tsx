export default function AdminProductWireframe() {
  return (
    <div className="hidden md:flex items-center gap-2 p-3 cursor-pointer hover:bg-zinc-100 text-zinc-700 duration-300 focus-visible:bg-zinc-100">
      <input type="checkbox" className="mr-2" name="wireframe" id="" />
      <div className="flex flex-1 gap-4 h-full items-center">
        <div className="aspect-square bg-zinc-300 rounded-md w-10"></div>
        <div className="flex flex-col justify-between h-full">
          <div className="w-40 bg-zinc-300 animate-pulse h-5 rounded-md"></div>
          <div className="w-20 bg-zinc-300 animate-pulse h-5 rounded-md"></div>
        </div>
      </div>
      <div className="w-24 bg-zinc-300 animate-pulse h-5 rounded-md"></div>
      <div className="w-24 bg-zinc-300 animate-pulse h-5 rounded-md"></div>
      <div className="w-[70px] bg-zinc-300 animate-pulse h-5 rounded-md"></div>
      <p className="w-16 text-center">
        <button className="p-3 duration-200 rounded-full group">
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
                d="M20.5001 6H3.5"
                className="stroke-zinc-700 group-hover:stroke-red-500 duration-200 group-active:stroke-red-700 group-focus-visible:stroke-red-500"
                strokeWidth="1.5"
                strokeLinecap="round"
              ></path>{" "}
              <path
                d="M9.5 11L10 16"
                className="stroke-zinc-700 group-hover:stroke-red-500 duration-200 group-active:stroke-red-700 group-focus-visible:stroke-red-500"
                strokeWidth="1.5"
                strokeLinecap="round"
              ></path>{" "}
              <path
                d="M14.5 11L14 16"
                className="stroke-zinc-700 group-hover:stroke-red-500 duration-200 group-active:stroke-red-700 group-focus-visible:stroke-red-500"
                strokeWidth="1.5"
                strokeLinecap="round"
              ></path>{" "}
              <path
                d="M6.5 6C6.55588 6 6.58382 6 6.60915 5.99936C7.43259 5.97849 8.15902 5.45491 8.43922 4.68032C8.44784 4.65649 8.45667 4.62999 8.47434 4.57697L8.57143 4.28571C8.65431 4.03708 8.69575 3.91276 8.75071 3.8072C8.97001 3.38607 9.37574 3.09364 9.84461 3.01877C9.96213 3 10.0932 3 10.3553 3H13.6447C13.9068 3 14.0379 3 14.1554 3.01877C14.6243 3.09364 15.03 3.38607 15.2493 3.8072C15.3043 3.91276 15.3457 4.03708 15.4286 4.28571L15.5257 4.57697C15.5433 4.62992 15.5522 4.65651 15.5608 4.68032C15.841 5.45491 16.5674 5.97849 17.3909 5.99936C17.4162 6 17.4441 6 17.5 6"
                className="stroke-zinc-700 group-hover:stroke-red-500 duration-200 group-active:stroke-red-700 group-focus-visible:stroke-red-500"
                strokeWidth="1.5"
              ></path>{" "}
              <path
                d="M18.3735 15.3991C18.1965 18.054 18.108 19.3815 17.243 20.1907C16.378 21 15.0476 21 12.3868 21H11.6134C8.9526 21 7.6222 21 6.75719 20.1907C5.89218 19.3815 5.80368 18.054 5.62669 15.3991L5.16675 8.5M18.8334 8.5L18.6334 11.5"
                className="stroke-zinc-700 group-hover:stroke-red-500 duration-200 group-active:stroke-red-700 group-focus-visible:stroke-red-500"
                strokeWidth="1.5"
                strokeLinecap="round"
              ></path>{" "}
            </g>
          </svg>
        </button>
      </p>
    </div>
  );
}
