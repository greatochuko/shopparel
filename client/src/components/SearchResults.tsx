import { Link, useSearchParams } from "react-router-dom";
import Product, { ProductType } from "./Product";
import ProductWireframe from "./ProductWireframe";

export default function SearchResults({
  products,
  loading,
  totalPages,
}: {
  products: ProductType[];
  loading: boolean;
  totalPages: number;
}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy");
  const query = searchParams.get("q") || "";
  const colors = searchParams.get("colors")?.split(",");
  const categories = searchParams.get("categories")?.toLowerCase().split(",");
  const sizes = searchParams.get("sizes")?.toLowerCase().split(",");
  const currentPage = searchParams.get("page");
  const price = {
    minPrice: Number(searchParams.get("minPrice")),
    maxPrice: Number(searchParams.get("maxPrice")),
  };

  let filteredProducts = [...products];

  // Filter products by colors
  if (colors)
    filteredProducts = filteredProducts.filter((product) =>
      product.colors.some((c) => colors?.includes(c)),
    );

  // Filter products by category
  if (categories)
    filteredProducts = filteredProducts.filter((product) =>
      product.categories.some((c) => categories?.includes(c.toLowerCase())),
    );

  // Filter products by size
  if (sizes)
    filteredProducts = filteredProducts.filter((product) =>
      product.sizes.some((c) => sizes?.includes(c.toLowerCase())),
    );

  // Filter products by Price
  if (price.minPrice)
    filteredProducts = filteredProducts.filter(
      (product) => product.price > price.minPrice,
    );
  if (price.maxPrice)
    filteredProducts = filteredProducts.filter(
      (product) => product.price < price.maxPrice,
    );

  function setSortBy(sortBy: string) {
    searchParams.set("sortBy", sortBy);
    setSearchParams(searchParams);
  }

  return (
    <div className="flex flex-1 flex-col">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        {query ? (
          <h2>
            Search Results for "<span className="font-semibold">{query}</span>"
          </h2>
        ) : (
          <h2>All Products</h2>
        )}
        <div className="flex gap-4">
          <button
            onClick={() => setSortBy("new")}
            className={
              sortBy === "new" || !sortBy
                ? "font-semibold text-accent-blue-100"
                : "text-zinc-400"
            }
          >
            New
          </button>
          <button
            onClick={() => setSortBy("recomended")}
            className={
              sortBy === "recomended"
                ? "font-semibold text-accent-blue-100"
                : "font-medium text-zinc-400"
            }
          >
            Recomended
          </button>
        </div>
      </div>
      <div className="mb-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {loading
          ? Array(8)
              .fill("")
              .map((_, i) => <ProductWireframe key={i} />)
          : filteredProducts.map((product) => (
              <Product key={product.name} product={product} />
            ))}
      </div>

      <ul className="flex-center mt-auto flex gap-2">
        <p>Page:</p>
        {new Array(totalPages).fill("a").map((_, i) => (
          <li role="button" key={i}>
            <Link
              to={`/products?q=${query}&page=${i + 1}`}
              className={`border ${
                (!currentPage && i === 0) || currentPage === (i + 1).toString()
                  ? "bg-accent-blue-100 text-white"
                  : "bg-zinc-100"
              } flex-center h-8 w-8 rounded-md duration-300 hover:shadow active:scale-90`}
            >
              {i + 1}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
