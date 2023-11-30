import CategorySection from "../components/CategorySection";
import Hero from "../components/Hero";

export default function HomePage() {
  return (
    <main className="pt-[70px] min-h-[80dvh] flex flex-col gap-4">
      <Hero />
      <CategorySection />
    </main>
  );
}
