import ProductDetailImages from "../components/ProductDetailImages";
import ProductConfiguration from "../components/ProductConfiguration";
import SectionHeader from "../components/SectionHeader";

const product = {
  _id: "123abc",
  name: "Plaid Flannel Shirt",
  imgUrl: "/men-product-4.png",
  images: [
    "/men-product-4.png",
    "/men-product-3.png",
    "/men-product-2.png",
    "/men-product-1.png",
  ],
  brand: "Nike",
  price: 299,
  sizes: ["l", "m", "xl", "s", "xs"],
  categories: ["V-Neck T-Shirts"],
  colors: ["black", "red", "blue", "orange"],
  rating: 4,
  reviews: ["a", "b", "c"],
};

export default function ProductDetailPage() {
  return (
    <main className="mt-[70px] w-[90%] max-w-7xl mx-auto mb-4 flex flex-col gap-16">
      <div className="flex flex-col gap-8 md:flex-row">
        <ProductDetailImages product={product} />
        <ProductConfiguration product={product} />
      </div>
      <section>
        <SectionHeader title="Product Description" />
        <p className="mt-3 text-zinc-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          reprehenderit perspiciatis tempore aut quis officiis officia eum. Id
          debitis iure maiores soluta perspiciatis voluptate, reprehenderit ad
          accusamus, aliquam accusantium exercitationem.
        </p>
      </section>
    </main>
  );
}
