import { useEffect, useState } from "react";
import AdminProductList from "../components/AdminProductList";
import AdminProductsHeader from "../components/AdminProductsHeader";
import { ProductType } from "../components/Product";
import { useOutletContext } from "react-router-dom";
import { StoreType } from "../components/AdminPageLayout";
import { fetchStoreProducts } from "../services/storeServices";

// const demoAdminProducts = [
//   {
//     _id: "123456",
//     name: "Training Hoodie",
//     imgUrl: "/training-hoodie.png",
//     categories: ["Sweatshirts and Hoodies"],
//     price: 67.99,
//     createdAt: "27 oct 2023",
//     status: "in stock",
//   },
//   {
//     _id: "123457",
//     name: "Training Hoodie",
//     imgUrl: "/training-hoodie.png",
//     categories: ["Sweatshirts and Hoodies"],
//     price: 67.99,
//     createdAt: "27 oct 2023",
//     status: "low stock",
//   },
//   {
//     _id: "123458",
//     name: "Training Hoodie",
//     imgUrl: "/training-hoodie.png",
//     categories: ["Sweatshirts and Hoodies"],
//     price: 67.99,
//     createdAt: "27 oct 2023",
//     status: "out of stock",
//   },
//   {
//     _id: "123459",
//     name: "Training Hoodie",
//     imgUrl: "/training-hoodie.png",
//     categories: ["Sweatshirts and Hoodies"],
//     price: 67.99,
//     createdAt: "27 oct 2023",
//     status: "draft",
//   },
// ];

export default function AdminProductsPage() {
  const [filter, setFilter] = useState("all");
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);
  const { store } = useOutletContext<{ store: StoreType }>();

  useEffect(() => {
    async function getStoreProducts() {
      setLoading(true);
      if (store?._id) {
        const data = await fetchStoreProducts(store?._id);
        if (data.error) return setLoading(false);
        setProducts(data);
      }
      setLoading(false);
    }
    getStoreProducts();
  }, [store?._id]);

  async function refreshStoreProducts() {
    setLoading(true);
    if (store?._id) {
      const data = await fetchStoreProducts(store?._id);
      if (data.error) return setLoading(false);
      setProducts(data);
    }
    setLoading(false);
  }

  return (
    <div className="flex flex-col flex-1 gap-4 w-[90%] max-w-7xl mx-auto py-6 text-zinc-800 overflow-hidden">
      <AdminProductsHeader
        filter={filter}
        setFilter={setFilter}
        products={products}
        refreshStoreProducts={refreshStoreProducts}
      />
      <AdminProductList
        loading={loading}
        filter={filter}
        products={products}
        refreshStoreProducts={refreshStoreProducts}
      />
    </div>
  );
}
