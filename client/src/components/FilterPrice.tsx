import { useState } from "react";

export default function FilterPrice() {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);

  function handleChangeMinPrice(e: React.ChangeEvent) {
    const value = Number((e.target as HTMLInputElement).value);
    if (isNaN(value) || value > maxPrice) return;
    setMinPrice(value);
  }

  function handleChangeMaxPrice(e: React.ChangeEvent) {
    const value = Number((e.target as HTMLInputElement).value);
    if (isNaN(value) || value < minPrice || value > 1000) return;
    setMaxPrice(value);
  }

  return (
    <div className="border-b">
      <div className="p-2 text-lg font-semibold border-b">Price</div>
      <div className="relative w-[90%] py-2 mx-auto">
        <input
          type="range"
          value={minPrice}
          onChange={handleChangeMinPrice}
          min={0}
          max={1000}
          className="w-full"
        />
        <input
          type="range"
          value={maxPrice}
          onChange={handleChangeMaxPrice}
          min={0}
          max={1000}
          className="w-full "
        />
      </div>
      <div className="flex items-center w-full p-2 overflow-hidden justify-evenly">
        <input
          type="text"
          className="max-w-[40%] p-1 text-center px-2 w-fit border-2 border-zinc-300 text-zinc-700 rounded-md"
          value={"$" + minPrice}
          onChange={handleChangeMinPrice}
        />
        <input
          type="text"
          className="max-w-[40%] p-1 text-center px-2 w-fit border-2 border-zinc-300 text-zinc-700 rounded-md"
          value={"$" + maxPrice}
          onChange={handleChangeMaxPrice}
        />
      </div>
    </div>
  );
}
