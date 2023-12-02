import FilterCategory from "../components/FilterCategory";

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

export default function SearchPage() {
  return (
    <main className="pt-[80px] min-h-[80dvh] max-w-7xl w-[90%] mx-auto flex gap-8 mb-8 text-zinc-500">
      <div className="w-64 border">
        <h2 className="flex items-center justify-between p-2 text-lg font-semibold border-b">
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
                stroke-width="1.8"
                stroke-linecap="round"
              />
            </svg>
          </span>
        </h2>
        <div className="flex flex-col py-2 border-b ">
          {filterCategories.map((category) => (
            <FilterCategory category={category} />
          ))}
        </div>
      </div>
      <div className="flex-1 bg-red-500"></div>
    </main>
  );
}
