import { Link } from "react-router-dom";

export default function AdminProductsHeader({
  filter,
  setFilter,
}: {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Products</h1>
        <Link
          to={"new"}
          className="block p-2 text-sm text-white duration-300 rounded-md bg-accent-blue-100 hover:bg-accent-blue-200 active:bg-accent-blue-300 focus-visible:ring ring-blue-400"
        >
          + New Product
        </Link>
      </div>
      <div className="mt-4 gap-4 text-sm sm:text-base hidden sm:flex">
        <button
          className={`flex items-center gap-1 ${
            filter === "all" ? "text-accent-blue-100" : ""
          }`}
        >
          All
          <span className="bg-zinc-200 p-1 text-xs border border-zinc-300 rounded-md text-zinc-800">
            200
          </span>
        </button>
        <button
          className={`flex items-center gap-1 ${
            filter === "in stock" ? "text-accent-blue-100" : ""
          }`}
        >
          In Stock
          <span className="bg-zinc-200 p-1 text-xs border border-zinc-300 rounded-md text-zinc-800">
            200
          </span>
        </button>
        <button
          className={`flex items-center gap-1 ${
            filter === "low stock" ? "text-accent-blue-100" : ""
          }`}
        >
          Low Stock
          <span className="bg-zinc-200 p-1 text-xs border border-zinc-300 rounded-md text-zinc-800">
            200
          </span>
        </button>
        <button
          className={`flex items-center gap-1 ${
            filter === "out of stock" ? "text-accent-blue-100" : ""
          }`}
        >
          Out of Stock
          <span className="bg-zinc-200 p-1 text-xs border border-zinc-300 rounded-md text-zinc-800">
            200
          </span>
        </button>
      </div>
      <div className="flex gap-1 sm:hidden mt-4">
        <label htmlFor="filter">Filter</label>
        <select
          name="filter"
          id="filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border rounded-md"
        >
          <option value="all">All</option>
          <option value="in stock">In Stock</option>
          <option value="low stock">Low Stock</option>
          <option value="out of stock">Out Of Stock</option>
        </select>
      </div>
    </div>
  );
}
