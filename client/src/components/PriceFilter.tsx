import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function PriceFilter() {
  const [searchParams, setSearchParams] = useSearchParams();

  const urlMaxPrice = searchParams.get("maxPrice");

  const [minPrice, setMinPrice] = useState(searchParams.get("minPrice") || 0);
  const [maxPrice, setMaxPrice] = useState(
    urlMaxPrice ? parseInt(urlMaxPrice) : 1000
  );

  function handleSetMinPrice() {
    searchParams.set("minPrice", minPrice.toString());
    setSearchParams(searchParams);
  }

  function handleSetMaxPrice() {
    searchParams.set("maxPrice", maxPrice.toString());
    setSearchParams(searchParams);
  }

  return (
    <div className="border-b">
      <div className="p-2 text-base font-semibold border-b ">Price</div>
      <div className="px-3 py-6">
        <div className="w-[90%] mx-auto ">
          <input
            type="range"
            value={minPrice}
            onChange={(e) => {
              if (Number(e.target.value) > Number(maxPrice)) return;
              setMinPrice(e.target.value);
            }}
            onMouseUp={handleSetMinPrice}
            min={0}
            max={1000}
            className="w-full p-1 rounded-md focus-visible:ring focus-visible:ring-blue-400"
          />
          <input
            type="range"
            value={maxPrice}
            onChange={(e) => {
              if (Number(e.target.value) < Number(minPrice)) return;
              setMaxPrice(parseInt(e.target.value));
            }}
            onMouseUp={handleSetMaxPrice}
            min={0}
            max={1000}
            className="w-full p-1 rounded-md focus-visible:ring focus-visible:ring-blue-400 "
          />
        </div>
        <div className="flex items-center w-full gap-4 p-2 overflow-hidden justify-evenly">
          <p className="flex items-center justify-center w-20 gap-1 p-2 border-2 rounded-md">
            <span>$</span>
            {minPrice}
          </p>
          <p className="flex items-center justify-center w-20 gap-1 p-2 border-2 rounded-md">
            <span>$</span>
            {maxPrice}
          </p>
        </div>
      </div>
    </div>
  );
}
