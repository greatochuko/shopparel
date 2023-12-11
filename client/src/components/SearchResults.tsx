import { useSearchParams } from "react-router-dom";
import Product, { ProductType } from "./Product";

export default function SearchResults({
  products,
}: {
  products: ProductType[];
}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy");
  const query = searchParams.get("q") || "";
  const colors = searchParams.get("colors")?.split(",");
  const categories = searchParams.get("categories")?.toLowerCase().split(",");
  const sizes = searchParams.get("sizes")?.toLowerCase().split(",");

  let filteredProducts = [...products];

  // Filter products by colors
  if (colors)
    filteredProducts = filteredProducts.filter((product) =>
      product.colors.some((c) => colors?.includes(c))
    );

  // Filter products by category
  if (categories)
    filteredProducts = filteredProducts.filter((product) =>
      product.categories.some((c) => categories?.includes(c.toLowerCase()))
    );

  // Filter products by size
  if (sizes)
    filteredProducts = filteredProducts.filter((product) =>
      product.sizes.some((c) => sizes?.includes(c.toLowerCase()))
    );

  function setSortBy(sortBy: string) {
    searchParams.set("sortBy", sortBy);
    setSearchParams(searchParams);
  }

  return (
    <div className="flex-1">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
        <h2>
          Search Results for "
          <span className="font-semibold">{query || " "}</span>"
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
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredProducts.map((product) => (
          <Product key={product.name} product={product} />
        ))}
      </div>
    </div>
  );
}
