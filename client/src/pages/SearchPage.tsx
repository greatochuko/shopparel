import { useEffect, useState } from "react";
import { ProductType } from "../components/Product";
import SearchFilter from "../components/SearchFilter";
import SearchResults from "../components/SearchResults";
import { useSearchParams } from "react-router-dom";
import { fetchSearchProducts } from "../services/productServices";

export default function SearchPage() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  useEffect(() => {
    async function searchProducts() {
      if (query) {
        const data = await fetchSearchProducts(query as string);

        if (data.error) return;
        setProducts(data);
      }
    }
    searchProducts();
  }, [query]);
  return (
    <main className="pt-[102px] h-fit max-w-7xl w-[90%] mx-auto flex flex-col md:flex-row gap-8 mb-8 text-zinc-500">
      <SearchFilter products={products} />
      <SearchResults products={products} />
    </main>
  );
}
