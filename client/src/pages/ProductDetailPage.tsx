import ProductDetailImages from "../components/ProductDetailImages";
import ProductConfiguration from "../components/ProductConfiguration";

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
    <main className="mt-[70px] w-[90%] max-w-7xl mx-auto mb-4">
      <div className="flex gap-8">
        <ProductDetailImages product={product} />
        <ProductConfiguration product={product} />
      </div>
    </main>
  );
}
