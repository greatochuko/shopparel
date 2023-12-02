import CategoryProducts from "../components/CategoryProducts";
import CategorySection from "../components/CategorySection";
import FeedbackSection from "../components/FeedBackSection";
import Hero from "../components/Hero";
import NewArrival from "../components/NewArrival";
import NewsLetterSection from "../components/NewsLetterSection";
import SectionHeader from "../components/SectionHeader";
import TopBrands from "../components/TopBrands";

const products = [
  {
    name: "Off Shoulder Blouse",
    imgUrl: "/off-shoulder blouse.png",
    brand: "Helen",
    price: 299,
  },
  {
    name: "Off Shoulder Blouse 2",
    imgUrl: "/off-shoulder blouse.png",
    brand: "Helen",
    price: 299,
  },
  {
    name: "Off Shoulder Blouse 3",
    imgUrl: "/off-shoulder blouse.png",
    brand: "Helen",
    price: 299,
  },
  {
    name: "Off Shoulder Blouse 4",
    imgUrl: "/off-shoulder blouse.png",
    brand: "Helen",
    price: 299,
  },
];

export default function HomePage() {
  return (
    <main className="pt-[70px] min-h-[80dvh] flex flex-col gap-8 mb-8">
      <Hero />
      <CategorySection />
      <NewArrival />
      <NewsLetterSection />
      <CategoryProducts products={products}>
        <SectionHeader title="Men's Wears" url="/category/men" />
      </CategoryProducts>
      <CategoryProducts products={products}>
        <SectionHeader title="Women's Wears" url="/category/women" />
      </CategoryProducts>
      <TopBrands />
      <FeedbackSection />
    </main>
  );
}
