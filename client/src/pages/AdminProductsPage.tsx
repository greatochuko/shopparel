import { useState } from "react";
import AdminProductList from "../components/AdminProductList";
import AdminProductsHeader from "../components/AdminProductsHeader";

export default function AdminProductsPage() {
  const [filter, setFilter] = useState("all");

  return (
    <div className="flex flex-col flex-1 gap-4 w-[90%] max-w-7xl mx-auto py-6 text-zinc-800 overflow-hidden">
      <AdminProductsHeader filter={filter} setFilter={setFilter} />
      <AdminProductList />
    </div>
  );
}
