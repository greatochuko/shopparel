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
        className="absolute -left-[25px] top-[50%] -translate-y-[100%] disabled:border-0 z-10 flex-center rounded p-3 bg-zinc-100 border shadow disabled:shadow-none hover:shadow-zinc-500 duration-300"
      >
        &larr;
      </button>
      <button
        onClick={scrollLeft}
        className="absolute -right-[25px] top-[50%] -translate-y-[100%] z-10 flex-center border rounded p-3 bg-zinc-100 shadow-md hover:shadow-zinc-500 duration-300"
      >
        &rarr;
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
