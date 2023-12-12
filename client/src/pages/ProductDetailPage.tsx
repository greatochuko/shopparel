import ProductDetailImages from "../components/ProductDetailImages";
import ProductConfiguration from "../components/ProductConfiguration";
import SectionHeader from "../components/SectionHeader";
import Review from "../components/Review";
import SimilarProducts from "../components/SimilarProducts";
import { products } from "./SearchPage";
import { useParams } from "react-router-dom";
import { ProductType } from "../components/Product";

export default function ProductDetailPage() {
  const { productId } = useParams();

  const product = products.find(
    (p) => p._id === productId?.split("-")[0]
  ) as ProductType;

  return (
    <main className="mt-[72px] w-[90%] max-w-7xl mx-auto mb-4 flex flex-col gap-16">
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
      <SimilarProducts />
      <section className="max-w-3xl">
        <SectionHeader title="User Reviews" />
        <div
          id="reviews"
          className="flex flex-col gap-10 mt-4 text-zinc-700 scroll-mt-36"
        >
          {product.reviews.map((review) => (
            <Review key={review.user._id} review={review} />
          ))}
        </div>
      </section>
    </main>
  );
}
