import { useEffect, useState } from "react";
import About from "../components/About";
import CategoryProducts from "../components/CategoryProducts";
import FeedbackSection from "../components/FeedbackSection";
import Hero from "../components/Hero";
import NewArrival from "../components/NewArrival";
import NewsLetterSection from "../components/NewsLetterSection";
import SectionHeader from "../components/SectionHeader";
import TopSellers from "../components/TopSellers";
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
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        )
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
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      )
    );
    setLoading(false);
  }

  return (
    <main className="flex flex-col flex-1 gap-8 mb-8 pt-[70px]">
      <Hero heroProducts={products.slice(0, 3)} />
      <About />
      <NewArrival
        newArrivals={products.slice(0, 4)}
        loading={loading}
        error={error}
        refreshProducts={refreshProducts}
      />
      <NewsLetterSection />
      <CategoryProducts gender="male">
        <SectionHeader title="Men's Wears" />
      </CategoryProducts>
      <CategoryProducts gender="female">
        <SectionHeader title="Women's Wears" />
      </CategoryProducts>
      <TopSellers />
      <FeedbackSection />
    </main>
  );
}
