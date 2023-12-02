import CategoryProducts from "../components/CategoryProducts";
import CategorySection from "../components/CategorySection";
import FeedbackSection from "../components/FeedbackSection";
import Hero from "../components/Hero";
import NewArrival from "../components/NewArrival";
import NewsLetterSection from "../components/NewsLetterSection";
import SectionHeader from "../components/SectionHeader";
import TopBrands from "../components/TopBrands";

const womenProducts = [
  {
    name: "Relaxed Fit V-Neck Tee",
    imgUrl: "/women-product-1.png",
    brand: "Helen",
    price: 299,
  },
  {
    name: "Off-the-Shoulder Knit Sweater",
    imgUrl: "/women-product-2.png",
    brand: "Helen",
    price: 299,
  },
  {
    name: "Wrap Maxi Dress",
    imgUrl: "/women-product-3.png",
    brand: "Helen",
    price: 299,
  },
  {
    name: "Floral Print Ruffle Top",
    imgUrl: "/women-product-4.png",
    brand: "Helen",
    price: 299,
  },
];
const menProducts = [
  {
    name: "Classic Straight-Leg Jeans",
    imgUrl: "/men-product-1.png",
    brand: "Helen",
    price: 299,
  },
  {
    name: "Leather Bomber Jacket",
    imgUrl: "/men-product-2.png",
    brand: "Helen",
    price: 299,
  },
  {
    name: "Classic Cotton Crew Neck Tee",
    imgUrl: "/men-product-3.png",
    brand: "Helen",
    price: 299,
  },
  {
    name: "Plaid Flannel Shirt",
    imgUrl: "/men-product-4.png",
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
      <CategoryProducts products={menProducts}>
        <SectionHeader title="Men's Wears" url="/category/men" />
      </CategoryProducts>
      <CategoryProducts products={womenProducts}>
        <SectionHeader title="Women's Wears" url="/category/women" />
      </CategoryProducts>
      <TopBrands />
      <FeedbackSection />
    </main>
  );
}
