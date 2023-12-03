import { useState } from "react";
import CategoryFilter from "../components/CategoryFilter";
import PriceFilter from "../components/PriceFilter";
import { useSearchParams } from "react-router-dom";
import ColorFilter from "../components/ColorFilter";
import SizeFilter from "../components/SizeFilter";

const filterCategories = [
  { title: "Outwear", subCategories: ["Coats", "Jackets", "Blazers", "Vests"] },
  {
    title: "Dresses",
    subCategories: [
      "Casual Dresses",
      "Formal Dresses",
      "Party Dresses",
      "Summer Dresses",
    ],
  },
];

export default function SearchFilter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") || "";
  const [minPrice, setMinPrice] = useState(
    Number(searchParams.get("minPrice")) || 0
  );
  const [maxPrice, setMaxPrice] = useState(
    Number(searchParams.get("maxPrice")) || 1000
  );
  const [filterCategoryList, setFilterCategoryList] = useState<string[]>(
    searchParams.get("filterCategories")?.split("-") || []
  );
  const [colorList, setColorList] = useState<string[]>(
    searchParams.get("colors")?.split("-") || []
  );
  const [sizeList, setSizeList] = useState<string[]>(
    searchParams.get("sizes")?.split("-") || []
  );

  const [isOpen, setIsOpen] = useState(false);

  function applyFilters() {
    if (filterCategoryList.length) {
      searchParams.set("filterCategories", filterCategoryList.join("-"));
    } else {
      searchParams.delete("filterCategories");
    }
    if (minPrice !== 0) {
      searchParams.set("minPrice", minPrice.toString());
    } else {
      searchParams.delete("minPrice");
    }
    if (maxPrice !== 1000) {
      searchParams.set("maxPrice", maxPrice.toString());
    } else {
      searchParams.delete("maxPrice");
    }
    if (colorList.length) {
      searchParams.set("colors", colorList.join("-"));
    } else {
      searchParams.delete("colors");
    }
    if (sizeList.length) {
      searchParams.set("sizes", sizeList.join("-"));
    } else {
      searchParams.delete("sizes");
    }
    setSearchParams(searchParams);
    toggleOpenFilter();
  }

  function clearFilters() {
    setMinPrice(0);
    setMaxPrice(1000);
    setFilterCategoryList([]);
    setColorList([]);
    setSizeList([]);
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
        className="cursor-pointer md:cursor-auto flex items-center justify-between p-2 text-base font-semibold border-b"
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
          <CategoryFilter
            key={category.title}
            category={category}
            filterCategories={filterCategoryList}
            setFilterCategories={setFilterCategoryList}
          />
        ))}
      </div>
      <PriceFilter
        minPrice={minPrice}
        setMinPrice={setMinPrice}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
      />
      <ColorFilter colorList={colorList} setColorList={setColorList} />
      <SizeFilter sizeList={sizeList} setSizeList={setSizeList} />
      <div className="gap-2 p-3 mt-auto flex-center">
        <button
          onClick={clearFilters}
          className="flex-1 font-semibold p-2 text-sm text-white duration-300 bg-red-500 rounded-md whitespace-nowrap focus-visible:ring focus-visible:ring-red-300 hover:bg-red-600 active:bg-red-700"
        >
          Clear All Filters
        </button>
        <button
          onClick={applyFilters}
          className="flex-1 p-2 font-semibold text-sm text-white duration-300 rounded-md whitespace-nowrap bg-accent-blue-100 focus-visible:ring hover:bg-accent-blue-200 active:bg-blue-800"
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
}
