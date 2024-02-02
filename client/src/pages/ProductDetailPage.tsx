import ProductDetailImages from "../components/ProductDetailImages";
import ProductConfiguration from "../components/ProductConfiguration";
import SectionHeader from "../components/SectionHeader";
import Review, { ReviewType } from "../components/Review";
import SimilarProducts from "../components/SimilarProducts";
import { useParams } from "react-router-dom";
import { ProductType } from "../components/Product";
import { useEffect, useState } from "react";
import { fetchProduct } from "../services/productServices";
import ProductDetailWireframe from "../components/ProductDetailWireframe";
import ReviewForm from "../components/ReviewForm";
import ModalContainer from "../components/ModalContainer";
import { UserType } from "../context/UserContext";
import useUserContext from "../hooks/useUserContext";
import SimilarStoreProducts from "../components/SimilarStoreProducts";

export default function ProductDetailPage() {
  const { user } = useUserContext();
  const { productId } = useParams();
  const [product, setProduct] = useState<ProductType | null>(null);
  const [loading, setLoading] = useState(true);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [productReviews, setProductReviews] = useState<ReviewType[]>([]);

  useEffect(() => {
    async function getProduct() {
      setLoading(true);
      if (!productId) return setLoading(false);
      const data = await fetchProduct(productId.split("-")[0]);
      if (data.error) return setLoading(false);
      document.title = `Shopparel: ${data.name}`;
      setProduct(data);
      setProductReviews(data.reviews);
      setLoading(false);
    }
    getProduct();
  }, [productId]);

  return (
    <main className="mt-[72px] w-[90%] max-w-7xl mx-auto mb-8 flex flex-col gap-16">
      {loading || !product ? (
        <ProductDetailWireframe />
      ) : (
        <>
          <div className="flex flex-col gap-8 md:flex-row">
            <ProductDetailImages product={product as ProductType} />
            <ProductConfiguration product={product as ProductType} />
          </div>
          <section>
            <SectionHeader title="Product Description" />
            <p className="mt-3 text-zinc-700">{product.description}</p>
          </section>

          <SimilarStoreProducts storeId={product.store._id} />

          <section className="max-w-3xl">
            <SectionHeader title="User Reviews" />
            <div
              id="reviews"
              className="flex flex-col gap-10 mt-4 text-zinc-700 scroll-mt-36"
            >
              {productReviews.length ? (
                productReviews.map((review) => (
                  <Review key={review._id} review={review} />
                ))
              ) : (
                <p className="h-20 flex-center">
                  No reviews for this product. Be the first to write a review
                </p>
              )}
            </div>
            {!productReviews.find(
              (review) => (review.user as UserType)._id === user?._id
            ) && (
              <button
                onClick={() => setModalIsOpen(true)}
                className="p-2 px-6 w-full mt-6 focus-visible:ring ring-blue-400 hover:bg-accent-blue-200 active:bg-accent-blue-300 duration-300 sm:w-fit rounded-md bg-accent-blue-100 text-white"
              >
                Write a Review
              </button>
            )}
          </section>

          <SimilarProducts
            productCategories={product.categories as string[]}
            productId={product._id as string}
          />
          {modalIsOpen && (
            <ModalContainer closeModal={() => setModalIsOpen(false)}>
              <ReviewForm
                productId={product._id as string}
                closeModal={() => setModalIsOpen(false)}
                setProductReviews={setProductReviews}
              />
            </ModalContainer>
          )}
        </>
      )}
    </main>
  );
}
