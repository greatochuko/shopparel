type PriceFilterProps = {
  colorList: string[];
  setColorList: React.Dispatch<React.SetStateAction<string[]>>;
};

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

export default function ColorFilter({
  colorList,
  setColorList,
}: PriceFilterProps) {
  function toggleAddColor(color: string) {
    setColorList((curr) => {
      if (curr.includes(color)) return curr.filter((c) => c !== color);
      return [...curr, color];
    });
  }

  return (
    <div className="border-b">
      <div className="p-2 text-base font-semibold border-b">Color</div>
      <ul className="grid grid-cols-4 px-3 py-6 gap-y-4 justify-evenly">
        {colors.map((color) => (
          <li
            key={color}
            onClick={() => toggleAddColor(color)}
            className="flex flex-col gap-2 items-center"
          >
            <div
              style={{ backgroundColor: color }}
              className={`w-8 rounded-md aspect-square border hover:scale-105 duration-300 active:scale-90${
                colorList.includes(color) ? " ring " : ""
              }`}
            ></div>
            <p className="text-sm capitalize">{color}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
