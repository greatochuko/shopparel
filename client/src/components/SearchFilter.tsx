import { useState } from "react";
import CategoryFilter from "../components/CategoryFilter";
import PriceFilter from "../components/PriceFilter";
import { useSearchParams } from "react-router-dom";
import ColorFilter from "../components/ColorFilter";
import SizeFilter from "../components/SizeFilter";
import { ProductType } from "./Product";

const filterCategories = [
  {
    title: "Outwear",
    subCategories: ["Coats", "Jackets", "Blazers", "Vests", "Sweater"],
  },
  {
    title: "Shirts",
    subCategories: [
      "Button-Down Shirts",
      "Short-Sleeve Shirts",
      "Printed or Patterned Shirts",
      "Crewneck T-Shirts",
      "V-Neck T-Shirts",
      "Long-Sleeve T-Shirts",
      "Polo Shirts",
      "Flannel Shirts",
    ],
  },
  {
    title: "Dresses",
    subCategories: [
      "Casual Dresses",
      "Formal Dresses",
      "Party Dresses",
      "Summer Dresses",
    ],
  },
  {
    title: "Bottoms",
    subCategories: ["Jeans", "Trousers", "Shorts", "Skirts"],
  },
  {
    title: "Active Wear",
    subCategories: [
      "Sports Bras",
      "Athletic Shorts",
      "Performance Leggings",
      "Training Hoodies",
    ],
  },
  {
    title: "Hats",
    subCategories: ["Baseball Caps", "Beanies", "Fedora Hats", "Bucket Hats"],
  },
  {
    title: "Watches",
    subCategories: [
      "Analog Watches",
      "Digital Watches",
      "Smartwatches",
      "Fashion Bracelet Watches",
    ],
  },
];

export default function SearchFilter({
  products,
}: {
  products: ProductType[];
}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") || "";

  const [isOpen, setIsOpen] = useState(false);

  function clearFilters() {
    setSearchParams({ query });
    toggleOpenFilter();
  }

  function toggleOpenFilter() {
    if (window.innerWidth > 768) return;
    setIsOpen((curr) => !curr);
  }

  return (
    <div
      className={`flex flex-col w-full md:w-64 border ${
        isOpen ? "h-fit" : "h-[41px] overflow-hidden md:h-fit md:overflow-auto"
      }`}
    >
      <h2
        onClick={toggleOpenFilter}
        className="flex items-center justify-between p-2 text-base font-semibold border-b cursor-pointer md:cursor-auto"
      >
        Filter
        <span>
          <svg
            width={20}
            height={20}
            viewBox="0 0 17 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.83333 6.33333L2.83333 1.75M2.83333 18.25L2.83333 10M13.8333 18.25L13.8333 10M8.33333 18.25V13.6667M8.33333 10V1.75M13.8333 6.33333L13.8333 1.75M1 6.33333H4.66667M6.5 13.6667H10.1667M12 6.33333L15.6667 6.33333"
              stroke="#807D7E"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </h2>
      <div className="flex flex-col py-2 border-b ">
        {filterCategories.map((category) => (
          <CategoryFilter key={category.title} category={category} />
        ))}
      </div>
      <PriceFilter products={products} />
      <ColorFilter products={products} />
      <SizeFilter products={products} />
      <div className="gap-2 p-3 mt-auto flex-center">
        <button
          onClick={clearFilters}
          className="flex-1 p-2 text-sm font-semibold text-white duration-300 bg-red-500 rounded-md whitespace-nowrap focus-visible:ring focus-visible:ring-red-300 hover:bg-red-600 active:bg-red-700"
        >
          Clear All Filters
        </button>
      </div>
    </div>
  );
}
