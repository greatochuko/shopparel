import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function SearchForm() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const [searchQuery, setSearchQuery] = useState(query || "");
  const navigate = useNavigate();

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    navigate(`/products?q=${searchQuery}`);
  }

  return (
    <form
      className="relative flex min-w-[8em] max-w-xs flex-1"
      onSubmit={handleSearch}
    >
      <span className="flex-center absolute left-1 h-full text-sm text-zinc-400">
        <svg
          width={22}
          height={22}
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
              d="M5.5 11.1455C5.49956 8.21437 7.56975 5.69108 10.4445 5.11883C13.3193 4.54659 16.198 6.08477 17.32 8.79267C18.4421 11.5006 17.495 14.624 15.058 16.2528C12.621 17.8815 9.37287 17.562 7.3 15.4895C6.14763 14.3376 5.50014 12.775 5.5 11.1455Z"
              stroke="#888"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M15.989 15.4905L19.5 19.0015"
              stroke="#888"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </g>
        </svg>
      </span>
      <input
        name="search-query"
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full flex-1 rounded-lg border-2 border-zinc-100 py-2 pl-7 pr-2 text-sm text-zinc-700 duration-200 focus-visible:border-zinc-300"
        placeholder="Search"
      />
    </form>
  );
}
