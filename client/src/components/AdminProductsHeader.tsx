import { ProductType } from "./Product";
import CreateProductModal from "./CreateProductModal";
import { useState } from "react";
import ModalContainer from "./ModalContainer";

export default function AdminProductsHeader({
  products,
  filter,
  setFilter,
  refreshStoreProducts,
}: {
  products: ProductType[];
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  refreshStoreProducts: () => void;
}) {
  const [createProductModalIsOpen, setCreateProductModalIsOpen] =
    useState(false);

  function closeModal() {
    setCreateProductModalIsOpen(false);
    refreshStoreProducts();
  }

  return (
    <>
      <div>
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold">Products</h1>
          <button
            onClick={() => setCreateProductModalIsOpen(true)}
            className="block p-2 text-sm text-white duration-300 rounded-md bg-accent-blue-100 hover:bg-accent-blue-200 active:bg-accent-blue-300 focus-visible:ring ring-blue-400"
          >
            + New Product
          </button>
        </div>
        <div className="hidden gap-4 mt-4 text-sm sm:text-base sm:flex">
          <button
            onClick={() => setFilter("all")}
            className={`flex items-center gap-1 ${
              filter === "all" ? "text-accent-blue-100" : ""
            }`}
          >
            All
            <span className="bg-zinc-200 p-[2px] min-w-[25px] text-xs border border-zinc-300 rounded-md text-zinc-800">
              {products.length}
            </span>
          </button>
          <button
            onClick={() => setFilter("in stock")}
            className={`flex items-center gap-1 ${
              filter === "in stock" ? "text-accent-blue-100" : ""
            }`}
          >
            In Stock
            <span className="bg-zinc-200 p-[2px] min-w-[25px] text-xs border border-zinc-300 rounded-md text-zinc-800">
              {products.filter((product) => product.quantity > 5).length}
            </span>
          </button>
          <button
            onClick={() => setFilter("low stock")}
            className={`flex items-center gap-1 ${
              filter === "low stock" ? "text-accent-blue-100" : ""
            }`}
          >
            Low Stock
            <span className="bg-zinc-200 p-[2px] min-w-[25px] text-xs border border-zinc-300 rounded-md text-zinc-800">
              {
                products.filter(
                  (product) => product.quantity > 0 && product.quantity <= 5
                ).length
              }
            </span>
          </button>
          <button
            onClick={() => setFilter("out of stock")}
            className={`flex items-center gap-1 ${
              filter === "out of stock" ? "text-accent-blue-100" : ""
            }`}
          >
            Out of Stock
            <span className="bg-zinc-200 p-[2px] min-w-[25px] text-xs border border-zinc-300 rounded-md text-zinc-800">
              {
                products.filter(
                  (product) => product.quantity === 0 && product.isPublished
                ).length
              }
            </span>
          </button>
          <button
            onClick={() => setFilter("draft")}
            className={`flex items-center gap-1 ${
              filter === "draft" ? "text-accent-blue-100" : ""
            }`}
          >
            Draft
            <span className="bg-zinc-200 p-[2px] min-w-[25px] text-xs border border-zinc-300 rounded-md text-zinc-800">
              {products.filter((product) => !product.isPublished).length}
            </span>
          </button>
        </div>
        <div className="flex gap-1 mt-4 sm:hidden">
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
            <option value="draft">Draft</option>
          </select>
        </div>
      </div>
      {createProductModalIsOpen ? (
        <ModalContainer closeModal={closeModal}>
          <CreateProductModal closeModal={closeModal} />
        </ModalContainer>
      ) : null}
    </>
  );
}
