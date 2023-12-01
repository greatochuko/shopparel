import CategorySection from "../components/CategorySection";
import Hero from "../components/Hero";
import NewArrival from "../components/NewArrival";

export default function HomePage() {
  return (
    <main className="pt-[70px] min-h-[80dvh] flex flex-col gap-4 mb-8">
      <Hero />
      <CategorySection />
      <NewArrival />
    </main>
  );
}
