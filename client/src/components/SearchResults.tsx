import { useSearchParams } from "react-router-dom";
import Product from "./Product";

const products = [
  {
    name: "Relaxed Fit V-Neck Tee",
    imgUrl: "/women-product-1.png",
    brand: "Helen",
    price: 299,
  },
  {
    name: "Off-the-Shoulder Knit Sweater",
    imgUrl: "/women-product-2.png",
    brand: "Helen",
    price: 299,
  },
  {
    name: "Wrap Maxi Dress",
    imgUrl: "/women-product-3.png",
    brand: "Helen",
    price: 299,
  },
  {
    name: "Floral Print Ruffle Top",
    imgUrl: "/women-product-4.png",
    brand: "Helen",
    price: 299,
  },
  {
    name: "Classic Straight-Leg Jeans",
    imgUrl: "/men-product-1.png",
    brand: "Helen",
    price: 299,
  },
  {
    name: "Leather Bomber Jacket",
    imgUrl: "/men-product-2.png",
    brand: "Helen",
    price: 299,
  },
  {
    name: "Classic Cotton Crew Neck Tee",
    imgUrl: "/men-product-3.png",
    brand: "Helen",
    price: 299,
  },
  {
    name: "Plaid Flannel Shirt",
    imgUrl: "/men-product-4.png",
    brand: "Helen",
    price: 299,
  },
];

export default function SearchResults() {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy");
  const query = searchParams.get("query") || "";

  function setSortBy(sortBy: string) {
    searchParams.set("sortBy", sortBy);
    setSearchParams(searchParams);
  }

  return (
    <div className="flex-1">
      <div className="flex flex-wrap gap-2 justify-between items-center mb-4">
        <h2>
          Search Results for <span className="font-semibold">{query}</span>
        </h2>
        <div className="flex gap-4">
          <button
            onClick={() => setSortBy("new")}
            className={
              sortBy === "new" || !sortBy
                ? "text-accent-blue-100 font-semibold"
                : "text-zinc-400"
            }
          >
            New
          </button>
          <button
            onClick={() => setSortBy("recomended")}
            className={
              sortBy === "recomended"
                ? "text-accent-blue-100 font-semibold"
                : "text-zinc-400 font-medium"
            }
          >
            Recomended
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {products.map((product) => (
          <Product key={product.name} product={product} />
        ))}
      </div>
    </div>
  );
}
