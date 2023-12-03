import { useSearchParams } from "react-router-dom";

const colorList = [
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

export default function ColorFilter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const colors = searchParams.get("colors")?.split(",") || [];
  function toggleAddColor(color: string) {
    if (colors?.includes(color)) {
      searchParams.set("colors", colors.filter((c) => c !== color).join(","));
      if (searchParams.get("colors")?.split(",")[0] === "") {
        searchParams.delete("colors");
      }
    } else {
      searchParams.set("colors", [...colors, color].join(","));
    }

    setSearchParams(searchParams);
  }

  return (
    <div className="border-b">
      <div className="p-2 text-base font-semibold border-b">Color</div>
      <ul className="grid grid-cols-4 px-3 py-6 gap-y-4 justify-evenly">
        {colorList.map((color) => (
          <li
            tabIndex={0}
            key={color}
            className="flex flex-col gap-2 items-center group"
            onClick={() => toggleAddColor(color)}
            onKeyDown={(e) => {
              if (e.code === "Enter") toggleAddColor(color);
            }}
          >
            <div
              style={{ backgroundColor: color }}
              className={`w-8 rounded-md aspect-square border hover:scale-105 duration-300 group-focus-visible:ring group-focus-visible:ring-zinc-400 active:scale-90${
                colors.includes(color)
                  ? " ring group-focus-visible:ring-blue-500"
                  : ""
              }`}
            ></div>
            <p className="text-sm capitalize">{color}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
