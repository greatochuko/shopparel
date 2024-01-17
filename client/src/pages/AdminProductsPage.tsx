import { useState } from "react";
import AdminProductList from "../components/AdminProductList";
import AdminProductsHeader from "../components/AdminProductsHeader";

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
    _id: "123459",
    name: "Training Hoodie",
    imgUrl: "/training-hoodie.png",
    categories: ["Sweatshirts and Hoodies"],
    price: 67.99,
    createdAt: "27 oct 2023",
    status: "draft",
  },
];

export default function AdminProductsPage() {
  const [filter, setFilter] = useState("all");

  return (
    <div className="flex flex-col flex-1 gap-4 w-[90%] max-w-7xl mx-auto py-6 text-zinc-800 overflow-hidden">
      <AdminProductsHeader
        filter={filter}
        setFilter={setFilter}
        products={demoAdminProducts}
      />
      <AdminProductList filter={filter} products={demoAdminProducts} />
    </div>
  );
}
