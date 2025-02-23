import { useEffect, useState } from "react";
import { ProductType } from "../components/Product";
import SearchFilter from "../components/SearchFilter";
import SearchResults from "../components/SearchResults";
import { useSearchParams } from "react-router-dom";
import { fetchSearchProducts } from "../services/productServices";

export default function ProductListingPage() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const page = searchParams.get("page");
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    async function searchProducts() {
      setLoading(true);
      window.scrollTo(0, 0);
      document.title = `Shopparel: Search results for '${query}'`;

      const data = await fetchSearchProducts(query as string, page as string);
      if (data.error) return setLoading(false);
      setProducts(data.products);
      setTotalPages(Math.ceil(data.totalProducts / 16));
      setLoading(false);
    }
    searchProducts();
  }, [query, page]);

  return (
    <main className="mx-auto mb-8 flex h-fit w-[90%] max-w-6xl flex-col gap-8 pt-8 text-zinc-500 md:flex-row">
      <SearchFilter products={products} />
      <SearchResults
        products={products}
        loading={loading}
        totalPages={totalPages}
      />
    </main>
  );
}
