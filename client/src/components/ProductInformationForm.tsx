export default function ProductInformationForm({
  handleSaveProductInformation,
  selectedColors,
  setSelectedColors,
  selectedSizes,
  setSelectedSizes,
}: {
  handleSaveProductInformation: (e: React.FormEvent) => void;
  selectedColors: string[];
  setSelectedColors: React.Dispatch<React.SetStateAction<string[]>>;
  selectedSizes: string[];
  setSelectedSizes: React.Dispatch<React.SetStateAction<string[]>>;
}) {
  function toggleAddColor(color: string) {
    if (selectedColors.includes(color)) {
      setSelectedColors((curr) => curr.filter((c) => c !== color));
    } else {
      setSelectedColors((curr) => [...curr, color]);
    }
  }

  function toggleAddSize(size: string) {
    if (selectedSizes.includes(size)) {
      setSelectedSizes((curr) => curr.filter((c) => c !== size));
    } else {
      setSelectedSizes((curr) => [...curr, size]);
    }
  }

  const colors = [
    "purple",
    "black",
    "red",
    "orange",
    "navy",
    "white",
    "teal",
    "green",
    "yellow",
    "gray",
    "pink",
    "blue",
  ];

  const sizeList = ["xxs", "xs", "s", "m", "l", "xl", "2xl", "3xl", "4xl"];

  return (
    <form
      className="p-4 pb-0 flex flex-col flex-1 bg- overflow-y-scroll"
      onSubmit={handleSaveProductInformation}
    >
      <label htmlFor="product-name" className="font-semibold w-fit">
        Product Name
      </label>
      <input
        required
        type="text"
        id="product-name"
        className="border p-2 rounded-md"
      />
      <div className="flex flex-col flex-1 mt-4">
        <label htmlFor="description" className="font-semibold w-fit">
          Description
        </label>
        <textarea
          required
          name="description"
          id="description"
          className="border p-2 rounded-md flex-1 aspect-[2] sm:aspect-[2.5] resize-none"
        ></textarea>
      </div>
      <div className="flex gap-2 mt-4 sm:flex-row flex-col w-full">
        <div className="flex-1 flex flex-col">
          <label htmlFor="price" className="font-semibold w-fit">
            Price ($)
          </label>
          <input
            required
            type="number"
            id="price"
            className="border p-2 rounded-md w-full"
          />
        </div>
        <div className="flex-1 flex flex-col">
          <label htmlFor="shipping" className="font-semibold w-fit">
            Shipping ($)
          </label>
          <input
            required
            type="number"
            id="shipping"
            className="border p-2 rounded-md w-full"
          />
        </div>
        <div className="flex-1 flex flex-col">
          <label htmlFor="discount" className="font-semibold w-fit">
            Discount (%)
          </label>
          <input
            required
            type="number"
            defaultValue={0}
            id="discount"
            className="border p-2 rounded-md w-full"
          />
        </div>
      </div>
      <div className="flex gap-2 mt-4 sm:flex-row flex-col w-full">
        <div className="flex-1 flex flex-col">
          <label htmlFor="price" className="font-semibold w-fit mb-2">
            Colors
          </label>
          <ul className="grid gap-4 ml-1 grid-cols-6 w-fit">
            {colors.map((color) => (
              <li
                key={color}
                role="button"
                onClick={() => toggleAddColor(color)}
                style={{ backgroundColor: color }}
                className={`w-7 h-7 border rounded-md hover:scale-110 active:scale-90 outline-offset-2 ring-blue-400 ring-offset-1 duration-300 ${
                  selectedColors.includes(color) ? "ring" : ""
                }`}
              ></li>
            ))}
          </ul>
        </div>
        <div className="flex-1 flex flex-col">
          <label htmlFor="shipping" className="font-semibold w-fit mb-2">
            Sizes
          </label>
          <ul className="gap-2 grid grid-cols-5 w-fit">
            {sizeList.map((size) => (
              <li
                key={size}
                role="button"
                onClick={() => toggleAddSize(size)}
                className={`w-8 h-8 border bg-white hover:scale-110 active:scale-90 rounded-md flex-center duration-300 ${
                  selectedSizes.includes(size)
                    ? "bg-zinc-200 border-zinc-300"
                    : ""
                }`}
              >
                {size}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex gap-2 sticky bottom-0 text-sm bg-white pb-4 mt-4">
        <button
          type="submit"
          className="flex-1 sm:flex-[2] p-2 rounded-md font-semibold bg-accent-blue-100 text-white duration-300 hover:bg-accent-blue-200 active:bg-accent-blue-300 focus-visible:ring ring-blue-400"
        >
          Save and Next
        </button>
        <button
          type="button"
          className="flex-1 p-2 rounded-md font-semibold border hover:bg-zinc-100 hover:border-zinc-200 duration-300 active:bg-zinc-200 active:border-zinc-300 focus-visible:ring ring-blue-400"
        >
          Save as Draft
        </button>
      </div>
    </form>
  );
}
