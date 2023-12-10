import { Link } from "react-router-dom";
import { ReviewType } from "./Review";

export type ProductType = {
  _id: string;
  name: string;
  imgUrl: string;
  brand: string;
  price: number;
  colors: string[];
  categories: string[];
  sizes: string[];
  images: string[];
  reviews: ReviewType[];
  rating: number;
};

export default function Product({ product }: { product: ProductType }) {
  function handleToggleLike(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
  }

  return (
    <div className="relative flex flex-col gap-4">
      <Link
        to={`/product/${(product._id + " " + product.name)
          .toLowerCase()
          .split(" ")
          .join("-")}`}
        className="hover:shadow-md duration-300 bg-zinc-300 group rounded-md overflow-hidden aspect-[0.8] focus-visible:ring focus-visible:ring-blue-400"
      >
        <img
          src={product.imgUrl}
          alt=""
          className="object-contain w-full h-full duration-300 hover:scale-110 group-focus-visible:scale-110"
        />
      </Link>
      <button
        className="p-1.5 rounded-full z-[5] bg-white focus-visible:ring focus-visible:ring-blue-400 active:scale-90 duration-200 hover:shadow-lg absolute right-2 top-2"
        onClick={handleToggleLike}
      >
        <svg
          width={20}
          height={20}
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
              d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </g>
        </svg>
      </button>

      <div className="flex flex-col items-start justify-between gap-1 sm:flex-row text-zinc-700">
        <div className="flex flex-col flex-1 gap-1 sm:max-w-[65%] w-full">
          <Link
            to={`/product/${(product._id + " " + product.name)
              .toLowerCase()
              .split(" ")
              .join("-")}`}
            className="overflow-hidden text-sm font-semibold duration-300 overflow-ellipsis whitespace-nowrap hover:text-accent-blue-100 focus-visible:text-accent-blue-100"
          >
            {product.name}
          </Link>
          <Link
            to={`/brands/${product.brand}`}
            className="text-sm hover:underline focus-visible:underline"
          >
            {product.brand}
          </Link>
        </div>
        <p className="grid px-1 py-2 text-sm font-semibold rounded-md w-fit bg-zinc-100 place-content-center sm:px-2">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
}
