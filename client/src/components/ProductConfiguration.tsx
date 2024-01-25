import { ProductType } from "./Product";
import { useState } from "react";
import Rating from "../components/Rating";
import useCartContext from "../hooks/useCartContext";
import useUserContext from "../hooks/useUserContext";
import LoadingIndicator from "./LoadingIndicator";
import QuantityController from "./QuantityController";
import useWishlistContext from "../hooks/useWishlistContext";

export default function ProductConfiguration({
  product,
}: {
  product: ProductType;
}) {
  const { cartItems, addItemToCart } = useCartContext();
  const { wishlist, addProductToWishlist, removeProductFromWishlist } =
    useWishlistContext();
  const { user } = useUserContext();
  const [currentSize, setCurrentSize] = useState(product.sizes[0]);
  const [currentColor, setCurrentColor] = useState(product.colors[0]);
  const [loading, setLoading] = useState(false);
  const [wishlistLoading, setWishlistLoading] = useState(false);

  const productInCart = cartItems.find(
    (cartItem) =>
      (cartItem.product as string) === product._id &&
      cartItem.size === currentSize &&
      cartItem.color === currentColor
  );

  const productInWishlist = wishlist.find(
    (cartItem) => cartItem.productId === product._id
  );

  function handleAddItemToCart() {
    const newItem = {
      _id: crypto.randomUUID(),
      userId: user?._id || "123",
      product: product,
      productId: product._id,
      name: product.name,
      imgUrl: product.imgUrl,
      color: currentColor,
      size: currentSize,
      price: product.price,
      shipping: 19.99,
      quantity: 1,
      storeId: product.store as string,
    };
    setLoading(true);
    addItemToCart({
      ...newItem,
    });
    setLoading(false);
  }

  function toggleAddItemToWishlist() {
    setWishlistLoading(true);

    if (productInWishlist) {
      removeProductFromWishlist(productInWishlist._id);
    } else {
      addProductToWishlist({
        _id: product._id,
        productId: product._id,
        name: product.name,
        imgUrl: product.imgUrl,
        colors: product.colors,
        sizes: product.sizes,
        price: product.price,
        shipping: 19.99,
        quantity: 1,
      });
    }
    setWishlistLoading(false);
  }

  return (
    <div className="flex flex-col flex-1 gap-6 text-zinc-700">
      <h2 className="mt-4 text-zinc-500">Shop &gt; {product.brand}</h2>
      <h1 className="text-xl font-semibold">{product.name}</h1>
      <p className="px-4 py-1.5 w-fit border rounded-md border-zinc-300 text-lg font-semibold">
        ${product.price.toFixed(2)}
      </p>
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
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M7 9H17M7 13H12M21 20L17.6757 18.3378C17.4237 18.2118 17.2977 18.1488 17.1656 18.1044C17.0484 18.065 16.9277 18.0365 16.8052 18.0193C16.6672 18 16.5263 18 16.2446 18H6.2C5.07989 18 4.51984 18 4.09202 17.782C3.71569 17.5903 3.40973 17.2843 3.21799 16.908C3 16.4802 3 15.9201 3 14.8V7.2C3 6.07989 3 5.51984 3.21799 5.09202C3.40973 4.71569 3.71569 4.40973 4.09202 4.21799C4.51984 4 5.0799 4 6.2 4H17.8C18.9201 4 19.4802 4 19.908 4.21799C20.2843 4.40973 20.5903 4.71569 20.782 5.09202C21 5.51984 21 6.0799 21 7.2V20Z"
                  stroke="#444"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </g>
            </svg>
            <a href="#reviews">{product.reviews.length} Reviews</a>
          </div>
        </div>
      ) : null}
      <div className="flex flex-col gap-3">
        <h3 className="font-semibold">Select size</h3>
        <ul className="flex gap-3">
          {product.sizes.map((size) => (
            <li
              key={size}
              role="button"
              onClick={() => setCurrentSize(size)}
              className={`w-8 border rounded-lg aspect-square flex-center active:scale-95 hover:bg-zinc-200 duration-300 uppercase text-sm ${
                currentSize === size
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
          {product.colors.map((color) => (
            <li
              key={color}
              role="button"
              onClick={() => setCurrentColor(color)}
              style={{ backgroundColor: color }}
              className={`w-6 rounded-full outline outline-[1px] outline-zinc-200 aspect-square flex-center hover:scale-110 active:scale-95 duration-300 ${
                currentColor === color
                  ? "ring-zinc-500 ring-offset-white ring-offset-2 ring-[2px]"
                  : ""
              }`}
            ></li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col w-full gap-4 mt-4 md:items-center md:flex-row">
        {product.quantity === 0 ? (
          <div className="self-stretch flex-1 w-full gap-2 p-3 text-sm font-semibold text-red-400 duration-300 rounded-md flex-center focus-visible:ring-offset-1 bg-zinc-200 ">
            Out of Stock
          </div>
        ) : productInCart ? (
          <QuantityController product={productInCart} />
        ) : (
          <button
            onClick={handleAddItemToCart}
            className="self-stretch flex-1 w-full gap-2 p-3 text-sm font-semibold text-white duration-300 rounded-md flex-center focus-visible:ring focus-visible:ring-blue-400 focus-visible:ring-offset-1 bg-accent-blue-100 hover:bg-accent-blue-200 active:scale-95"
          >
            {loading ? (
              <LoadingIndicator />
            ) : (
              <>
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
              </>
            )}
          </button>
        )}
        {user && (
          <button
            onClick={toggleAddItemToWishlist}
            className="self-stretch flex-1 w-full gap-2 p-3 text-sm font-semibold duration-300 border-2 rounded-md whitespace-nowrap text-accent-blue-100 flex-center focus-visible:ring focus-visible:ring-blue-400 focus-visible:ring-offset-1 border-accent-blue-100 hover:shadow-md hover:shadow-blue-300 active:scale-95"
          >
            {wishlistLoading ? (
              <LoadingIndicator className="fill-accent-blue-100" />
            ) : (
              <>
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
                    {" "}
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
                      stroke="#000000"
                      className={`stroke-accent-blue-100 ${
                        productInWishlist ? "fill-accent-blue-100" : ""
                      }`}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
                {productInWishlist ? "Added To Wishlist" : "Add To Wishlist"}
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
}
