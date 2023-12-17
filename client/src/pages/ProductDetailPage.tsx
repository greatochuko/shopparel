import ProductDetailImages from "../components/ProductDetailImages";
import ProductConfiguration from "../components/ProductConfiguration";
import SectionHeader from "../components/SectionHeader";
import Review from "../components/Review";
import SimilarProducts from "../components/SimilarProducts";
import { useParams } from "react-router-dom";
import { ProductType } from "../components/Product";
import { useEffect, useState } from "react";
import { fetchProduct } from "../services/productServices";
import ProductDetailWireframe from "../components/ProductDetailWireframe";

export default function ProductDetailPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState<ProductType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getProduct() {
      setLoading(true);
      if (!productId) return setLoading(false);
      const data = await fetchProduct(productId.split("-")[0]);
      if (data.error) return setLoading(false);
      setProduct(data);
      setLoading(false);
    }
    getProduct();
  }, [productId]);

  return (
    <main className="mt-[72px] w-[90%] max-w-7xl mx-auto mb-4 flex flex-col gap-16">
      {loading ? (
        <ProductDetailWireframe />
      ) : (
        <>
          <div className="flex flex-col gap-8 md:flex-row">
            <ProductDetailImages product={product as ProductType} />
            <ProductConfiguration product={product as ProductType} />
          </div>
          <section>
            <SectionHeader title="Product Description" />
            <p className="mt-3 text-zinc-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto reprehenderit perspiciatis tempore aut quis officiis
              officia eum. Id debitis iure maiores soluta perspiciatis
              voluptate, reprehenderit ad accusamus, aliquam accusantium
              exercitationem.
            </p>
          </section>
          {/* <SimilarProducts /> */}
          <section className="max-w-3xl">
            <SectionHeader title="User Reviews" />
            <div
              id="reviews"
              className="flex flex-col gap-10 mt-4 text-zinc-700 scroll-mt-36"
            >
              {product?.reviews.length ? (
                product?.reviews.map((review) => (
                  <Review key={review.user._id} review={review} />
                ))
              ) : (
                <p className="h-20 flex-center">No reviews yet</p>
              )}
            </div>
          </section>
        </>
      )}
    </main>
  );
}
