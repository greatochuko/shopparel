import { useState } from "react";
import AdminProduct from "./AdminProduct";

const demoAdminProducts = [
  {
    _id: "123456",
    name: "Training Hoodie",
    imgUrl: "/training-hoodie.png",
    categories: ["Sweatshirts and Hoodies"],
    price: 67.99,
    createdAt: "27 oct 2023",
    status: "in stock",
  },
  {
    _id: "123457",
    name: "Training Hoodie",
    imgUrl: "/training-hoodie.png",
    categories: ["Sweatshirts and Hoodies"],
    price: 67.99,
    createdAt: "27 oct 2023",
    status: "low stock",
  },
  {
    _id: "123458",
    name: "Training Hoodie",
    imgUrl: "/training-hoodie.png",
    categories: ["Sweatshirts and Hoodies"],
    price: 67.99,
    createdAt: "27 oct 2023",
    status: "out of stock",
  },
  {
    _id: "123458",
    name: "Training Hoodie",
    imgUrl: "/training-hoodie.png",
    categories: ["Sweatshirts and Hoodies"],
    price: 67.99,
    createdAt: "27 oct 2023",
    status: "draft",
  },
];

export default function AdminProductList() {
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);

  function toggleCheck(productId: string) {
    if (selectedProducts.includes(productId)) {
      setSelectedProducts((curr) => curr.filter((id) => id !== productId));
    } else {
      setSelectedProducts((curr) => [...curr, productId]);
    }
  }

  function toggleSelectAll() {
    if (selectedProducts.length === demoAdminProducts.length) {
      setSelectedProducts([]);
    } else {
      setSelectedProducts(demoAdminProducts.map((product) => product._id));
    }
  }

  return (
    <div className="flex flex-col gap-2 p-2 md:p-4 text-sm bg-white rounded-md">
      <div className="hidden items-center gap-2 p-3 rounded-md bg-zinc-100 md:flex">
        <input
          type="checkbox"
          name="selectAll"
          id="selectAll"
          className="w-fit mr-2"
          checked={selectedProducts.length === demoAdminProducts.length}
          onClick={toggleSelectAll}
        />
        <p className="min-w-[200px] flex-1 mr-auto">Product</p>
        <p className="w-24 text-center">Created At</p>
        <p className="w-24 text-center">Status</p>
        <p className="w-24 text-center">Price</p>
        <p className="w-24 text-center">Delete</p>
      </div>
      <ul className="flex flex-col gap-4 md:gap-0">
        {demoAdminProducts.map((product) => (
          <AdminProduct
            product={product}
            key={product._id}
            isSelected={selectedProducts.includes(product._id)}
            toggleCheck={toggleCheck}
          />
        ))}
      </ul>
    </div>
  );
}
