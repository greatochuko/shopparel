import { useState } from "react";
import { Link } from "react-router-dom";

const heroProducts = [
  {
    name: "Slim Fit Button-Down Shirt",
    category: "men",
    imgUrl: "/slim-fit-button-down-t-shirt.png",
    color: "bg-[#D38236]/80",
  },
  {
    name: "Off-Shoulder Blouse",
    category: "women",
    imgUrl: "/off-shoulder blouse.png",
    color: "bg-[#009DE0]/80",
  },
];

export default function Hero() {
  const [currentIndex, setcurrentIndex] = useState(0);
  function showNextHeroProduct() {
    if (currentIndex + 1 >= heroProducts.length) return setcurrentIndex(0);
    setcurrentIndex((curr) => curr + 1);
  }

  function showPreviousHeroProduct() {
    if (currentIndex <= 0) return setcurrentIndex(heroProducts.length - 1);
    setcurrentIndex((curr) => curr - 1);
  }

  return (
    <section className={`relative min-h-[250px] max-h-[90vh] aspect-video `}>
      <button
        className="-translate-y-[50%] absolute z-10 top-[50%] left-0 group py-8 pr-4"
        onClick={showPreviousHeroProduct}
      >
        <svg
          height={40}
          width={40}
          className="sm:w-[50px] sm:h-[50px]"
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
              className="duration-200 fill-white/50 group-hover:fill-white"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.5 17C15.5 17.4045 15.2564 17.7691 14.8827 17.9239C14.509 18.0787 14.0789 17.9931 13.7929 17.7071L8.79289 12.7071C8.40237 12.3166 8.40237 11.6834 8.79289 11.2929L13.7929 6.29289C14.0789 6.00689 14.509 5.92134 14.8827 6.07612C15.2564 6.2309 15.5 6.59554 15.5 7V17Z"
              fill="#fff"
            ></path>
          </g>
        </svg>
      </button>
      <button
        className="-translate-y-[50%] absolute z-10 top-[50%] right-0 group py-8 pl-4"
        onClick={showNextHeroProduct}
      >
        <svg
          height={40}
          width={40}
          className="sm:w-[50px] sm:h-[50px]"
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
              className="duration-200 fill-white/50 group-hover:fill-white"
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
          key={product.name}
          className={`flex absolute px-4 items-center justify-evenly w-full h-full duration-500 ${
            product.color
          } ${i !== currentIndex ? "opacity-0" : "opacity-100"}`}
        >
          <div className={`flex justify-center  text-white max-w-[50%]`}>
            <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8 w-[90%] max-w-[500px]">
              <Link
                to={`/category/${product.category}`}
                className="text-lg sm:text-xl lg:text-2xl"
              >
                {product.category}
              </Link>
              <h2 className="text-2xl font-bold sm:text-3xl md:text-5xl lg:text-6xl">
                {product.name}
              </h2>
              <Link
                to={`/product/${product.name
                  .split(" ")
                  .join("-")
                  .toLowerCase()}`}
                className="px-4 py-2 text-base font-semibold duration-200 bg-white rounded-md sm:px-6 sm:py-3 sm:text-lg lg:text-xl whitespace-nowrap hover:shadow-md text-zinc-600 hover:text-zinc-800 w-fit"
              >
                Shop Now
              </Link>
            </div>
          </div>
          <div
            className={`flex items-center justify-center max-w-[50%] overflow-hidden h-full`}
          >
            <img
              src={product.imgUrl}
              alt={product.imgUrl}
              className="w-full object-containh-full"
            />
          </div>
        </div>
      ))}
    </section>
  );
}
