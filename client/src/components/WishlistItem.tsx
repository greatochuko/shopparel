import { Link } from "react-router-dom";
import { WishlistItemType } from "../context/WishlistContext";
import useWishlistContext from "../hooks/useWishlistContext";
import { useState } from "react";
import useCartContext from "../hooks/useCartContext";
import QuantityController from "./QuantityController";

export default function WishlistItem({
  product,
}: {
  product: WishlistItemType;
}) {
  const { removeProductFromWishlist } = useWishlistContext();
  const { cartItems, addItemToCart } = useCartContext();
  const [currentSize, setCurrentSize] = useState(product.sizes[0]);
  const [currentColor, setCurrentColor] = useState(product.colors[0]);

  const productInCart = cartItems.find(
    (cartItem) =>
      cartItem.product?._id === product.productId &&
      cartItem.size === currentSize &&
      cartItem.color === currentColor,
  );

  function handleAddItemToCart() {
    const item = {
      _id: "1",
      userId: "1",
      productId: product.productId,
      name: product.name,
      imgUrl: product.imgUrl,
      color: currentColor,
      size: currentSize,
      price: product.price,
      shipping: product.shipping,
      quantity: 1,
      storeId: product.storeId,
    };
    addItemToCart(item);
  }

  return (
    <li className="flex flex-col items-start justify-between gap-4 py-2 md:flex-row md:items-center">
      <div className="flex items-center gap-4">
        <button
          onClick={() => removeProductFromWishlist(product._id)}
          className="group rounded-md p-1 ring-blue-400 duration-300 hover:bg-red-200 focus-visible:ring"
        >
          <svg
            height={20}
            width={20}
            viewBox="-6.4 -6.4 76.80 76.80"
            xmlns="http://www.w3.org/2000/svg"
            strokeWidth="0.00064"
            stroke="#000"
            fill="none"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="#000"
              className="stroke-zinc-500 duration-300 group-hover:stroke-red-600"
              strokeWidth="8"
            >
              <line x1="8.06" y1="8.06" x2="55.41" y2="55.94"></line>
              <line x1="55.94" y1="8.06" x2="8.59" y2="55.94"></line>
            </g>
            <g id="SVGRepo_iconCarrier">
              <line x1="8.06" y1="8.06" x2="55.41" y2="55.94"></line>
              <line x1="55.94" y1="8.06" x2="8.59" y2="55.94"></line>
            </g>
          </svg>
        </button>
        <div className="flex flex-1 items-center gap-4">
          <div className="aspect-square h-20 w-20 rounded-md bg-zinc-200">
            <img
              src={product.imgUrl}
              alt=""
              className="h-full w-full object-contain"
            />
          </div>
          <div className="flex flex-col gap-2 text-sm sm:text-base">
            <Link
              to={`/products/${(
                product.productId +
                "-" +
                product.name.split(" ").join("-")
              ).toLowerCase()}`}
              className="font-semibold hover:underline"
            >
              {product.name}
            </Link>
            <p>
              Color:{" "}
              <select
                name="color"
                onChange={(e) => setCurrentColor(e.target.value)}
                value={currentColor}
                style={{ color: currentColor }}
                className="text-xs font-semibold uppercase sm:text-sm"
              >
                {product.colors.map((color) => (
                  <option key={color} value={color}>
                    {color}
                  </option>
                ))}
              </select>
            </p>
            <p>
              Size:{" "}
              <select
                name="size"
                onChange={(e) => setCurrentSize(e.target.value)}
                value={currentSize}
                className="text-xs font-semibold uppercase sm:text-sm"
              >
                {product.sizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </p>
          </div>
        </div>
      </div>
      <div className="ml-[44px] flex items-center gap-4 md:ml-0">
        <p className="w-24 font-semibold">${product.price.toFixed(2)}</p>
        {productInCart ? (
          <QuantityController
            productInCart={productInCart}
            maxQuantity={product.quantity}
          />
        ) : (
          <button
            onClick={handleAddItemToCart}
            className="whitespace-nowrap rounded-md bg-accent-blue-100 p-2 px-4 text-white ring-blue-400 duration-300 hover:bg-accent-blue-200 focus-visible:ring active:bg-accent-blue-300"
          >
            <span className="hidden md:block lg:hidden" title="Add To Cart">
              <svg
                height={20}
                width={20}
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 26 26"
                fill="#fff"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <g>
                    <path d="M25.856,10.641C21.673,19.5,20.312,19.5,19.5,19.5h-8c-2.802,0-4.949-1.648-5.47-4.2 c-0.016-0.078-1.6-7.853-2.005-10.025C3.826,4.21,3.32,3.5,1.5,3.5C0.671,3.5,0,2.829,0,2s0.671-1.5,1.5-1.5 c3.02,0,4.964,1.5,5.474,4.224c0.401,2.149,1.98,9.898,1.996,9.977c0.319,1.566,1.722,1.8,2.53,1.8h7.605 c0.817-0.878,2.679-4.261,4.038-7.141c0.354-0.749,1.249-1.068,1.997-0.716C25.89,8.997,26.21,9.891,25.856,10.641z M10.5,20.5 C9.119,20.5,8,21.619,8,23s1.119,2.5,2.5,2.5S13,24.381,13,23S11.881,20.5,10.5,20.5z M19.5,20.5c-1.381,0-2.5,1.119-2.5,2.5 s1.119,2.5,2.5,2.5S22,24.381,22,23S20.881,20.5,19.5,20.5z M14.663,12.344c0.1,0.081,0.223,0.12,0.346,0.12 s0.244-0.039,0.346-0.12c0.1-0.079,2.828-2.74,4.316-4.954c0.115-0.172,0.126-0.392,0.028-0.574 c-0.095-0.181-0.285-0.295-0.49-0.295h-2.226c0,0-0.217-4.291-0.359-4.49c-0.206-0.294-1.057-0.494-1.616-0.494 c-0.561,0-1.427,0.2-1.634,0.494c-0.141,0.198-0.328,4.49-0.328,4.49h-2.255c-0.206,0-0.395,0.114-0.492,0.295 c-0.097,0.182-0.086,0.403,0.028,0.574C11.816,9.605,14.564,12.265,14.663,12.344z"></path>
                  </g>
                </g>
              </svg>
            </span>
            <span className="text-sm sm:text-base md:hidden lg:block">
              Add To Cart
            </span>
          </button>
        )}
      </div>
    </li>
  );
}
