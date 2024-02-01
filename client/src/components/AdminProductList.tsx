import { useState } from "react";
import AdminProduct from "./AdminProduct";
import { ProductType } from "./Product";
import AdminProductWireframe from "./AdminProductWireframe";

export default function AdminProductList({
  filter,
  products,
  refreshStoreProducts,
  loading,
}: {
  filter: string;
  products: ProductType[];
  refreshStoreProducts: () => void;
  loading: boolean;
}) {
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);

  function toggleCheck(productId: string) {
    if (selectedProducts.includes(productId)) {
      setSelectedProducts((curr) => curr.filter((id) => id !== productId));
    } else {
      setSelectedProducts((curr) => [...curr, productId]);
    }
  }

  function toggleSelectAll() {
    if (selectedProducts.length === products.length) {
      setSelectedProducts([]);
    } else {
      setSelectedProducts(products.map((product) => product._id));
    }
  }

  const filteredProducts =
    filter === "all"
      ? products
      : filter === "draft"
      ? products.filter((product) => !product.isPublished)
      : filter === "in stock"
      ? products.filter((product) => product.quantity >= 10)
      : filter === "low stock"
      ? products.filter(
          (product) => product.quantity > 0 && product.quantity < 10
        )
      : filter === "out of stock"
      ? products.filter(
          (product) => product.quantity == 0 && product.isPublished
        )
      : products;

  return (
    <div className="flex flex-col gap-2 p-2 md:p-4 text-sm bg-white rounded-md">
      <div className="hidden items-center gap-2 p-3 rounded-md bg-zinc-100 md:flex">
        <input
          type="checkbox"
          name="selectAll"
          id="selectAll"
          className="w-fit mr-2"
          checked={selectedProducts.length === products.length}
          onChange={toggleSelectAll}
        />
        <p className="min-w-[200px] flex-1 mr-auto">Product</p>
        <p className="w-24 text-center">Created At</p>
        <p className="w-24 text-center">Status</p>
        <p className="w-[70px] text-center">Price</p>
        <p className="w-16 text-center">Delete</p>
      </div>
      <ul className="flex flex-col gap-2 md:gap-0">
        {loading ? (
          <>
            <AdminProductWireframe />
            <AdminProductWireframe />
            <AdminProductWireframe />
          </>
        ) : products.length ? (
          filteredProducts.map((product) => (
            <AdminProduct
              refreshStoreProducts={refreshStoreProducts}
              product={product}
              key={product._id}
              isSelected={selectedProducts.includes(product._id)}
              toggleCheck={toggleCheck}
            />
          ))
        ) : (
          <p className="flex-center py-10">
            It seems there are no products listed in the system at the moment.
            Add new products to your inventory to showcase them on your online
            store
          </p>
        )}
      </ul>
    </div>
  );
}
