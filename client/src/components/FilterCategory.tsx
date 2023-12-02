import { useState } from "react";

type FilterCategoryProps = {
  category: { title: string; subCategories: string[] };
};

export default function FilterCategory({ category }: FilterCategoryProps) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleOpen() {
    setIsOpen((curr) => !curr);
  }

  return (
    <div className="flex flex-col">
      <button
        onClick={toggleOpen}
        key={category.title}
        className="flex items-center justify-between p-2 duration-200 group hover:text-black"
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
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                className="duration-200 stroke-zinc-500 group-hover:stroke-black"
                d="M9 6L15 12L9 18"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </g>
          </svg>
        </span>
      </button>
      <ul className={`${isOpen ? "h-fit" : "h-0"} pl-4 overflow-hidden`}>
        {category.subCategories.map((subCategory) => (
          <li className="p-1 cursor-pointer hover:text-zinc-800">
            {subCategory}
          </li>
        ))}
      </ul>
    </div>
  );
}
