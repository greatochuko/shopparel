import CategoryProducts from "../components/CategoryProducts";
import CategorySection from "../components/CategorySection";
import Hero from "../components/Hero";
import NewArrival from "../components/NewArrival";
import NewsLetterSection from "../components/NewsLetterSection";
import SectionHeader from "../components/SectionHeader";

export default function HomePage() {
  return (
    <main className="pt-[70px] min-h-[80dvh] flex flex-col gap-8 mb-8">
      <Hero />
      <CategorySection />
      <NewArrival />
      <NewsLetterSection />
      <CategoryProducts>
        <SectionHeader title="Men's Wears" url="/category/men" />
      </CategoryProducts>
      <CategoryProducts>
        <SectionHeader title="Women's Wears" url="/category/women" />
      </CategoryProducts>
    </main>
  );
}
