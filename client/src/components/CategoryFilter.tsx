import { useState } from "react";

type CategoryFilterProps = {
  category: { title: string; subCategories: string[] };
  filterCategories: string[];
  setFilterCategories: React.Dispatch<React.SetStateAction<string[]>>;
};

export default function CategoryFilter({
  category,
  filterCategories,
  setFilterCategories,
}: CategoryFilterProps) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleOpen() {
    setIsOpen((curr) => !curr);
  }

  function togglefilterCategory(category: string) {
    if (filterCategories.includes(category))
      return setFilterCategories((curr) =>
        curr.filter((item) => item !== category)
      );
    setFilterCategories((curr) => [...curr, category]);
  }

  return (
    <div className="flex flex-col text-sm">
      <button
        onClick={toggleOpen}
        className="flex items-center justify-between p-2 duration-200 group hover:text-black focus:ring-accent-blue-100 focus:ring"
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
            onClick={() => togglefilterCategory(subCategory.toLowerCase())}
            key={subCategory}
            className={`p-1 cursor-pointer hover:text-zinc-800 w-fit rounded-md duration-200 focus:ring ${
              filterCategories?.includes(subCategory.toLowerCase())
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
