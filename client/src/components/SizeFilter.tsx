type PriceFilterProps = {
  sizeList: string[];
  setSizeList: React.Dispatch<React.SetStateAction<string[]>>;
};

const sizes = ["xxs", "xs", "s", "m", "l", "xl", "xxl", "3xl", "4xl"];

export default function SizeFilter({
  sizeList,
  setSizeList,
}: PriceFilterProps) {
  function toggleAddSize(size: string) {
    setSizeList((curr) => {
      if (curr.includes(size)) return curr.filter((c) => c !== size);
      return [...curr, size];
    });
  }

  return (
    <div className="border-b">
      <div className="p-2 text-base font-semibold border-b">Size</div>
      <ul className="grid grid-cols-3 px-3 py-6 gap-y-4 justify-evenly">
        {sizes.map((size) => (
          <li
            onClick={() => toggleAddSize(size)}
            className={`flex-center cursor-pointer border-zinc-300 active:scale-90 hover:bg-zinc-100 uppercase duration-300 text-sm border max-w-[60px] rounded-md p-1.5 ${
              sizeList.includes(size) ? "bg-zinc-200" : ""
            }`}
          >
            {size}
          </li>
        ))}
      </ul>
    </div>
  );
}
