import { useEffect, useState } from "react";
import SectionHeader from "./SectionHeader";
import Product, { ProductType } from "./Product";
import ProductWireframe from "./ProductWireframe";
import { fetchStoreProducts } from "../services/storeServices";

export default function SimilarStoreProducts({
  storeId,
  productId,
}: {
  storeId: string;
  productId: string;
}) {
  const [similarSellerProducts, setSimilarSellerProducts] = useState<
    ProductType[]
  >([]);
  const [carouselPos, setCarouselPos] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getProduct() {
      setLoading(true);
      const data = await fetchStoreProducts(storeId);

      if (data.error) return setLoading(false);
      setSimilarSellerProducts(
        data
          .filter(
            (product: ProductType) =>
              product._id !== productId && product.isPublished
          )
          .slice(0, 8)
      );
      setLoading(false);
    }
    getProduct();
  }, [productId, storeId]);

  function scrollLeft() {
    const carouselWidth =
      window.innerWidth < 1422 ? window.innerWidth * 0.9 : 1280;
    const productsPerView = Math.ceil(carouselWidth / 216 - 1);

    if (carouselPos >= similarSellerProducts.length - productsPerView) return;

    setCarouselPos((curr) => curr + 1);
  }

  function scrollRight() {
    if (carouselPos <= 0) return;
    setCarouselPos((curr) => curr - 1);
  }
  if (similarSellerProducts.length)
    return (
      <section className="relative w-full">
        <SectionHeader title="More products from this seller" />
        <button
          onClick={scrollRight}
          className="top-[50%] -left-[18px] z-10 absolute flex-center bg-white shadow hover:shadow-zinc-500 border rounded-full w-10 h-10 -translate-y-[50%] duration-300"
        >
          <svg
            width={30}
            height={30}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.5 17C15.5 17.4045 15.2564 17.7691 14.8827 17.9239C14.509 18.0787 14.0789 17.9931 13.7929 17.7071L8.79289 12.7071C8.40237 12.3166 8.40237 11.6834 8.79289 11.2929L13.7929 6.29289C14.0789 6.00689 14.509 5.92134 14.8827 6.07612C15.2564 6.2309 15.5 6.59554 15.5 7V17Z"
                fill="#000000"
              ></path>
            </g>
          </svg>
        </button>
        <button
          onClick={scrollLeft}
          className="top-[50%] -right-[18px] z-10 absolute flex-center bg-white shadow-md hover:shadow-zinc-500 border rounded-full w-10 h-10 -translate-y-[50%] duration-300"
        >
          <svg
            width={30}
            height={30}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.5 17C8.5 17.4045 8.74364 17.7691 9.11732 17.9239C9.49099 18.0787 9.92111 17.9931 10.2071 17.7071L15.2071 12.7071C15.5976 12.3166 15.5976 11.6834 15.2071 11.2929L10.2071 6.29289C9.92111 6.00689 9.49099 5.92134 9.11732 6.07612C8.74364 6.2309 8.5 6.59554 8.5 7V17Z"
                fill="#000000"
              ></path>
            </g>
          </svg>
        </button>
        <div className="w-full overflow-hidden">
          <div
            className="gap-4 grid grid-cols-8 mt-4 w-[1322px] md:w-[1722px] duration-300"
            style={{
              marginLeft:
                window.innerWidth > 768
                  ? -(carouselPos * 200 + carouselPos * 16)
                  : -(carouselPos * 150 + carouselPos * 16),
            }}
          >
            {loading ? (
              <>
                <ProductWireframe />
                <ProductWireframe />
                <ProductWireframe />
                <ProductWireframe />
                <ProductWireframe />
                <ProductWireframe />
                <ProductWireframe />
                <ProductWireframe />
              </>
            ) : (
              similarSellerProducts.map((product) => (
                <Product key={product.name} product={product} />
              ))
            )}
          </div>
        </div>
      </section>
    );
}
