import { ProductType } from "./Product";
import { useState } from "react";
import Rating from "../components/Rating";

export default function ProductConfiguration({
  product,
}: {
  product: ProductType;
}) {
  const [sizeIndex, setSizeIndex] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);

  return (
    <div className="flex flex-col flex-1 gap-6 text-zinc-700">
      <h2 className="mt-4 text-zinc-500">Shop &gt; {product.brand}</h2>
      <h1 className="text-xl font-semibold">{product.name}</h1>
      {product.reviews.length ? (
        <div className="flex items-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <Rating rating={product.rating} />
            <span>{product.rating.toFixed(1)}</span>
          </div>
          <div className="flex items-center gap-2 ">
            <svg
              viewBox="0 0 24 24"
              height={20}
              width={20}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M7 9H17M7 13H12M21 20L17.6757 18.3378C17.4237 18.2118 17.2977 18.1488 17.1656 18.1044C17.0484 18.065 16.9277 18.0365 16.8052 18.0193C16.6672 18 16.5263 18 16.2446 18H6.2C5.07989 18 4.51984 18 4.09202 17.782C3.71569 17.5903 3.40973 17.2843 3.21799 16.908C3 16.4802 3 15.9201 3 14.8V7.2C3 6.07989 3 5.51984 3.21799 5.09202C3.40973 4.71569 3.71569 4.40973 4.09202 4.21799C4.51984 4 5.0799 4 6.2 4H17.8C18.9201 4 19.4802 4 19.908 4.21799C20.2843 4.40973 20.5903 4.71569 20.782 5.09202C21 5.51984 21 6.0799 21 7.2V20Z"
                  stroke="#444"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </g>
            </svg>
            {product.reviews.length} Reviews
          </div>
        </div>
      ) : null}
      <div className="flex flex-col gap-3">
        <h3 className="font-semibold">Select size</h3>
        <ul className="flex gap-3">
          {product.sizes.map((size, i) => (
            <li
              key={size}
              role="button"
              onClick={() => setSizeIndex(i)}
              className={`w-8 border rounded-lg aspect-square flex-center active:scale-95 hover:bg-zinc-200 duration-300 uppercase text-sm ${
                sizeIndex === i
                  ? "bg-zinc-700 text-white font-semibold hover:bg-zinc-800"
                  : ""
              }`}
            >
              {size}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="font-semibold">Colors Available</h3>
        <ul className="flex gap-3">
          {product.colors.map((color, i) => (
            <li
              key={color}
              role="button"
              onClick={() => setColorIndex(i)}
              style={{ backgroundColor: color }}
              className={`w-6 rounded-full aspect-square flex-center hover:scale-110 active:scale-95 duration-300 ${
                colorIndex === i
                  ? "ring-zinc-500 ring-offset-white ring-offset-2 ring-[2px]"
                  : ""
              }`}
            ></li>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <button className="flex items-center gap-2 px-8 py-2 text-sm text-white duration-300 border rounded-md border-accent-blue-100 bg-accent-blue-100 hover:bg-accent-blue-200 active:scale-95 w-fit">
          <svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.5 3.33334H3.00526C3.85578 3.33334 4.56986 3.97376 4.6621 4.81926L5.3379 11.0141C5.43014 11.8596 6.14422 12.5 6.99474 12.5H14.205C14.9669 12.5 15.6317 11.9834 15.82 11.2452L16.9699 6.73593C17.2387 5.68213 16.4425 4.65742 15.355 4.65742H5.5M5.52063 15.5208H6.14563M5.52063 16.1458H6.14563M14.6873 15.5208H15.3123M14.6873 16.1458H15.3123M6.66667 15.8333C6.66667 16.2936 6.29357 16.6667 5.83333 16.6667C5.3731 16.6667 5 16.2936 5 15.8333C5 15.3731 5.3731 15 5.83333 15C6.29357 15 6.66667 15.3731 6.66667 15.8333ZM15.8333 15.8333C15.8333 16.2936 15.4602 16.6667 15 16.6667C14.5398 16.6667 14.1667 16.2936 14.1667 15.8333C14.1667 15.3731 14.5398 15 15 15C15.4602 15 15.8333 15.3731 15.8333 15.8333Z"
              stroke="#fff"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          Add To Cart
        </button>
        <p className="px-4 py-1.5 border rounded-md border-zinc-400 font-semibold">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
}
