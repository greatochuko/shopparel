import CategoryProducts from "../components/CategoryProducts";
import CategorySection from "../components/CategorySection";
import Hero from "../components/Hero";
import NewArrival from "../components/NewArrival";
import NewsLetterSection from "../components/NewsLetterSection";

export default function HomePage() {
  return (
    <main className="pt-[70px] min-h-[80dvh] flex flex-col gap-8 mb-8">
      <Hero />
      <CategorySection />
      <NewArrival />
      <NewsLetterSection />
      <CategoryProducts title="Men's Wears" category="men" />
      <CategoryProducts title="Women's Wears" category="women" />
    </main>
  );
}
