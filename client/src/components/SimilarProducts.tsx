import { useState } from "react";
import { products } from "../pages/SearchPage";
import SectionHeader from "./SectionHeader";
import Product from "./Product";

export default function SimilarProducts() {
  const [carouselPos, setCarouselPos] = useState(0);

  function scrollLeft() {
    const carouselWidth =
      window.innerWidth < 1422 ? window.innerWidth * 0.9 : 1280;
    const productsPerView = Math.ceil(carouselWidth / 200 - 1);

    if (carouselPos >= products.length - productsPerView) return;

    setCarouselPos((curr) => curr + 1);
  }

  function scrollRight() {
    if (carouselPos <= 0) return;
    setCarouselPos((curr) => curr - 1);
  }

  return (
    <section className="w-full relative">
      <SectionHeader title="Similar Products" />
      <button
        onClick={scrollRight}
        disabled={carouselPos <= 0}
        className="absolute -left-[25px] top-[50%] -translate-y-[50%] disabled:border-0 z-10 flex-center rounded-s-md px-1.5 py-3 bg-zinc-100 border shadow disabled:shadow-none hover:shadow-zinc-500 duration-300"
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
        className="absolute -right-[25px] top-[50%] -translate-y-[50%] z-10 flex-center border rounded-e-md px-1.5 py-3 bg-zinc-100 shadow-md hover:shadow-zinc-500 duration-300"
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
          className="grid grid-cols-8 gap-4 mt-4 duration-300 w-[1322px] md:w-[1722px]"
          style={{
            marginLeft:
              window.innerWidth > 768
                ? -(carouselPos * 200 + carouselPos * 16)
                : -(carouselPos * 150 + carouselPos * 16),
          }}
        >
          {products.map((product) => (
            <Product key={product.name} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
