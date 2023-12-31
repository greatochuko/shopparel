import { useState } from "react";
import { useSearchParams } from "react-router-dom";

type CategoryFilterProps = {
  category: { title: string; subCategories: string[] };
};

export default function CategoryFilter({ category }: CategoryFilterProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);

  const categories =
    searchParams.get("categories")?.toLowerCase().split(",") || [];

  function toggleOpen() {
    setIsOpen((curr) => !curr);
  }

  function togglefilterCategory(category: string) {
    if (categories?.includes(category)) {
      searchParams.set(
        "categories",
        categories.filter((c) => c !== category).join(",")
      );
      if (searchParams.get("categories")?.split(",")[0] === "") {
        searchParams.delete("categories");
      }
    } else {
      searchParams.set("categories", [...categories, category].join(","));
    }

    setSearchParams(searchParams);
  }

  return (
    <div className="flex flex-col text-sm">
      <button
        onClick={toggleOpen}
        className="flex items-center justify-between p-2 duration-200 group hover:text-black focus-visible:ring-accent-blue-100 focus-visible:ring"
      >
        {category.title}
        <span className={`p-1 ${isOpen ? "rotate-90" : ""} duration-300`}>
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
              <path
                className="duration-200 stroke-zinc-500 group-hover:stroke-black"
                d="M9 6L15 12L9 18"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </g>
          </svg>
        </span>
      </button>
      <ul
        className={`${
          isOpen ? "h-fit py-1" : "h-0"
        } pl-4 overflow-hidden gap-1 flex flex-col`}
      >
        {category.subCategories.map((subCategory) => (
          <li
            role="button"
            tabIndex={0}
            style={{ display: isOpen ? "block" : "none" }}
            onClick={() => togglefilterCategory(subCategory.toLowerCase())}
            onKeyDown={(e) => {
              if (e.code === "Enter")
                togglefilterCategory(subCategory.toLowerCase());
            }}
            key={subCategory}
            className={`p-1 cursor-pointer hover:text-zinc-800 w-fit rounded-md duration-200 focus-visible:ring ${
              categories?.includes(subCategory.toLowerCase())
                ? "bg-accent-blue-100/10 text-zinc-700 font-semibold"
                : ""
            }`}
          >
            {subCategory}
          </li>
        ))}
      </ul>
    </div>
  );
}
