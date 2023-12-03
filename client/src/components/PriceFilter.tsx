type PriceFilterProps = {
  minPrice: number;
  setMinPrice: React.Dispatch<React.SetStateAction<number>>;
  maxPrice: number;
  setMaxPrice: React.Dispatch<React.SetStateAction<number>>;
};

export default function PriceFilter({
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
}: PriceFilterProps) {
  function handleChangeMinPrice(e: React.ChangeEvent) {
    const value = (e.target as HTMLInputElement).value;
    if (isNaN(Number(value)) || Number(value) > maxPrice) return;
    setMinPrice(Number(value));
  }

  function handleChangeMaxPrice(e: React.ChangeEvent) {
    const value = (e.target as HTMLInputElement).value;
    if (value === "") {
      setMaxPrice(0);
      return;
    }
    if (
      isNaN(Number(value)) ||
      Number(value) < minPrice ||
      Number(value) > 1000
    )
      return;
    setMaxPrice(Number(value));
  }

  return (
    <div className="border-b">
      <div className=" text-base font-semibold border-b p-2">Price</div>
      <div className="py-6 px-3">
        <div className="w-[90%] mx-auto ">
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
        <div className="flex items-center w-full gap-4 p-2 overflow-hidden justify-evenly">
          <label
            htmlFor="min-price"
            className="flex max-w-[40%] items-center gap-1 "
          >
            $
            <input
              id="min-price"
              type="text"
              className="w-full p-1 px-2 text-center border-2 rounded-md border-zinc-300 text-zinc-700"
              value={minPrice}
              onChange={handleChangeMinPrice}
            />
          </label>
          <label
            htmlFor="min-price"
            className="max-w-[40%] items-center gap-1 flex "
          >
            $
            <input
              id="min-price"
              type="text"
              className="w-full p-1 px-2 text-center border-2 rounded-md border-zinc-300 text-zinc-700"
              value={maxPrice}
              onChange={handleChangeMaxPrice}
            />
          </label>
        </div>
      </div>
    </div>
  );
}
