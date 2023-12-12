import { useEffect, useState } from "react";
import About from "../components/About";
import CategoryProducts from "../components/CategoryProducts";
import FeedbackSection from "../components/FeedbackSection";
import Hero from "../components/Hero";
import NewArrival from "../components/NewArrival";
import NewsLetterSection from "../components/NewsLetterSection";
import SectionHeader from "../components/SectionHeader";
import TopBrands from "../components/TopBrands";
import { fetchProducts } from "../services/productServices";
import { ProductType } from "../components/Product";

export default function HomePage() {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    async function getProducts() {
      const data = await fetchProducts();
      if (data.error) return;
      setProducts(data);
    }
    getProducts();
  }, []);

  return (
    <main className="pt-[70px] min-h-[80dvh] flex flex-col gap-8 mb-8">
      <Hero />
      <About />
      <NewArrival />
      <NewsLetterSection />
      <CategoryProducts
        products={products.filter((product) => product.gender === "male")}
      >
        <SectionHeader title="Men's Wears" />
      </CategoryProducts>
      <CategoryProducts
        products={products.filter((product) => product.gender === "female")}
      >
        <SectionHeader title="Women's Wears" />
      </CategoryProducts>
      <TopBrands />
      <FeedbackSection />
    </main>
  );
}
