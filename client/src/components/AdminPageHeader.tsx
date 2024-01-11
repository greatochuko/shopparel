export default function AdminPageHeader({
  toggleShowSidebar,
}: {
  toggleShowSidebar: () => void;
}) {
  return (
    <nav className="sticky top-0 w-full flex items-center justify-between gap-2 p-2 mx-auto bg-white shadow-md">
      <button onClick={toggleShowSidebar} className="p-1 group">
        <svg
          height={25}
          width={25}
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
            <g id="Menu / Hamburger_MD">
              {" "}
              <path
                id="Vector"
                d="M5 17H19M5 12H19M5 7H19"
                stroke="#666"
                className="group-hover:stroke-black duration-200"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
            </g>{" "}
          </g>
        </svg>
      </button>
      <form className="flex-1">
        <input
          type="text"
          placeholder="Search"
          className="w-full p-2 text-sm bg-zinc-100 rounded-full focus-visible:ring ring-blue-400"
        />
      </form>
    </nav>
  );
}
