import { useState } from "react";
import { Link } from "react-router-dom";
import { ProductType } from "./Product";

export default function Hero({
  heroProducts,
}: {
  heroProducts: ProductType[];
}) {
  const [currentIndex, setcurrentIndex] = useState(0);
  const colors = ["#5B6971", "#22AAA1", "#585481"];
  const backgroundColor = colors[currentIndex];

  function showNextHeroProduct() {
    if (currentIndex + 1 >= heroProducts.length) return setcurrentIndex(0);
    setcurrentIndex((curr) => curr + 1);
  }

  function showPreviousHeroProduct() {
    if (currentIndex <= 0) return setcurrentIndex(heroProducts.length - 1);
    setcurrentIndex((curr) => curr - 1);
  }

  return (
    <section
      className={`relative min-h-[250px] max-h-[90vh] aspect-[2] `}
      style={{ backgroundColor: colors[0] }}
    >
      <button
        className="top-[50%] left-1 sm:left-2 z-10 absolute bg-black/30 sm:bg-black/50 sm:opacity-70 hover:opacity-100 p-1 sm:p-2 rounded-full -translate-y-[50%] duration-300"
        onClick={showPreviousHeroProduct}
      >
        <svg
          height={20}
          width={20}
          className="sm:w-[30px] sm:h-[30px]"
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
              fill="#fff"
            ></path>
          </g>
        </svg>
      </button>
      <button
        className="top-[50%] right-1 sm:right-2 z-10 absolute bg-black/30 sm:bg-black/50 sm:opacity-70 hover:opacity-100 p-1 sm:p-2 rounded-full -translate-y-[50%] duration-300"
        onClick={showNextHeroProduct}
      >
        <svg
          height={20}
          width={20}
          className="sm:w-[30px] sm:h-[30px]"
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
              fill="#fff"
            ></path>
          </g>
        </svg>
      </button>
      {heroProducts.map((product, i) => (
        <div
          style={{ backgroundColor }}
          key={product.name}
          className={`flex absolute px-4 items-center justify-evenly w-full h-full duration-500 ${
            i !== currentIndex ? "opacity-0 z-0" : "opacity-100 z-[2]"
          }`}
        >
          <div className={`flex w-fit max-w-[40%] justify-center text-white `}>
            <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8 w-full">
              {product.store?.name && (
                <Link
                  to={`/store/${product.store.name
                    .split(" ")
                    .join("-")
                    .toLowerCase()}/${product.store._id}`}
                  className="w-fit text-[min(4vw,16px)] sm:text-xl lg:text-2xl xl:text-[2vw] hover:underline capitalize"
                >
                  {product.store.name}
                </Link>
              )}
              <h2 className="font-bold text-[4vw] sm:text-3xl md:text-4xl lg:text-5xl xl:text-[5vw]">
                {product.name}
              </h2>
              <Link
                to={`/product/${(product._id + "-" + product.name)
                  .split(" ")
                  .join("-")
                  .toLowerCase()}`}
                className="bg-white hover:shadow-md hover:shadow-black/50 px-3 sm:px-6 py-1.5 sm:py-3 rounded-md w-fit font-semibold text-[min(4vw,16px)] text-zinc-700 sm:text-lg lg:text-xl hover:text-zinc-900 whitespace-nowrap duration-200"
              >
                Shop Now
              </Link>
            </div>
          </div>
          <div
            className={`flex w-fit max-w-[40%] items-center justify-center overflow-hidden h-full`}
          >
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      ))}
    </section>
  );
}
