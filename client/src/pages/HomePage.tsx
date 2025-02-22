import { useEffect, useState } from "react";
import CustomerAssurance from "../components/CustomerAssurance";
import CategoryProducts from "../components/CategoryProducts";
import Hero from "../components/Hero";
import NewArrival from "../components/NewArrival";
import NewsLetterSection from "../components/NewsLetterSection";
import SectionHeader from "../components/SectionHeader";
import { fetchProducts } from "../services/productServices";
import { ProductType } from "../components/Product";

export default function HomePage() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getProducts() {
      setError("");
      setLoading(true);
      const data = await fetchProducts();
      if (data.error) {
        setError("There was an error fetching products");
        setLoading(false);
        return;
      }
      document.title = "Shopparel";

      setProducts(
        [...data].sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
        ),
      );
      setLoading(false);
    }
    getProducts();
  }, []);

  async function refreshProducts() {
    setError("");
    setLoading(true);
    const data = await fetchProducts();
    if (data.error) {
      setError("There was an error fetching products");
      setLoading(true);
      return;
    }
    setProducts(
      [...data].sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      ),
    );
    setLoading(false);
  }

  return (
    <main className="mb-8 flex flex-1 flex-col gap-12">
      <Hero />
      <CustomerAssurance />
      <NewArrival
        newArrivals={products.slice(0, 8)}
        loading={loading}
        error={error}
        refreshProducts={refreshProducts}
      />
      <NewsLetterSection />
      <CategoryProducts category="male">
        <SectionHeader title="Men's Wears" />
      </CategoryProducts>
      <CategoryProducts category="female">
        <SectionHeader title="Women's Wears" />
      </CategoryProducts>
    </main>
  );
}
