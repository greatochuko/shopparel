import { useSearchParams } from "react-router-dom";

const sizeList = ["xxs", "xs", "s", "m", "l", "xl", "2xl", "3xl", "4xl"];

export default function SizeFilter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const sizes = searchParams.get("sizes")?.split(",") || [];

  function toggleAddSize(size: string) {
    if (sizes?.includes(size)) {
      searchParams.set("sizes", sizes.filter((s) => s !== size).join(","));
      if (searchParams.get("sizes")?.split(",")[0] === "") {
        searchParams.delete("sizes");
      }
    } else {
      searchParams.set("sizes", [...sizes, size].join(","));
    }

    setSearchParams(searchParams);
  }

  return (
    <div className="border-b">
      <div className="p-2 text-base font-semibold border-b">Size</div>
      <ul className="grid grid-cols-3 px-3 py-6 gap-y-4 justify-evenly">
        {sizeList.map((size) => (
          <li
            key={size}
            tabIndex={0}
            onClick={() => toggleAddSize(size)}
            onKeyDown={(e) => {
              if (e.code === "Enter") toggleAddSize(size);
            }}
            className={`flex-center mx-auto cursor-pointer focus-visible:ring focus-visible:ring-blue-500 border-zinc-300 active:scale-90 hover:bg-zinc-100 uppercase duration-300 text-sm border w-[60px] rounded-md p-1.5 ${
              sizes.includes(size) ? "bg-zinc-200" : ""
            }`}
          >
            {size}
          </li>
        ))}
      </ul>
    </div>
  );
}
