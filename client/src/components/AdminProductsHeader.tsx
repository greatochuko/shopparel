import { Link } from "react-router-dom";

export default function AdminProductsHeader() {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-xl font-semibold">Products</h1>
      <Link
        to={"new"}
        className="block p-2 text-sm text-white duration-300 rounded-md bg-accent-blue-100 hover:bg-accent-blue-200 active:bg-accent-blue-300 focus-visible:ring ring-blue-400"
      >
        + New Product
      </Link>
    </div>
  );
}
