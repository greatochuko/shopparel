import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ProductType } from "./Product";

export default function PriceFilter({ products }: { products: ProductType[] }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const productPriceArray = products.map((product) => product.price);
  const urlMaxPrice = searchParams.get("maxPrice");

  const [minPrice, setMinPrice] = useState(searchParams.get("minPrice") || 0);
  const [maxPrice, setMaxPrice] = useState(
    urlMaxPrice
      ? parseInt(urlMaxPrice)
      : productPriceArray.length
      ? Math.max(...productPriceArray)
      : 1000
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
      <div className=" text-base font-semibold border-b p-2">Price</div>
      <div className="py-6 px-3">
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
            max={
              urlMaxPrice
                ? parseInt(urlMaxPrice)
                : productPriceArray.length
                ? Math.max(...productPriceArray)
                : 1000
            }
            className="w-full focus-visible:ring rounded-md p-1 focus-visible:ring-blue-400"
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
            max={
              urlMaxPrice
                ? parseInt(urlMaxPrice)
                : productPriceArray.length
                ? Math.max(...productPriceArray)
                : 1000
            }
            className="w-full focus-visible:ring rounded-md p-1 focus-visible:ring-blue-400 "
          />
        </div>
        <div className="flex items-center w-full gap-4 p-2 overflow-hidden justify-evenly">
          <p className="p-2 flex gap-1 items-center justify-center rounded-md border-2 w-20">
            <span>$</span>
            {minPrice}
          </p>
          <p className="p-2 flex gap-1 items-center justify-center rounded-md border-2 w-20">
            <span>$</span>
            {maxPrice}
          </p>
        </div>
      </div>
    </div>
  );
}
