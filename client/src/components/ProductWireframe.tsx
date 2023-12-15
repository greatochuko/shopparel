export default function ProductWireframe() {
  return (
    <div className="relative flex flex-col gap-4">
      <div className="hover:shadow-md duration-300 bg-zinc-300 group rounded-md overflow-hidden aspect-[0.8] focus-visible:ring focus-visible:ring-blue-400 animate-pulse"></div>
      <button className="p-1.5 rounded-full z-[5] bg-white focus-visible:ring focus-visible:ring-blue-400 active:scale-90 duration-200 hover:shadow-lg absolute right-2 top-2">
        <svg
          width={20}
          height={20}
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
              stroke="#333"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </g>
        </svg>
      </button>

      <div className="flex items-start justify-between gap-1 text-zinc-700">
        <div className="flex flex-col flex-1 gap-1 sm:max-w-[65%] w-full">
          <div className="w-full h-4 bg-zinc-200 animate-pulse rounded-full"></div>
          <div className="w-16 h-4 bg-zinc-200 animate-pulse rounded-full"></div>
        </div>
        <div className="w-10 sm:w-12 h-6 bg-zinc-200 animate-pulse rounded-full"></div>
      </div>
    </div>
  );
}
