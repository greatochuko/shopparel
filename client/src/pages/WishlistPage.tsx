import { useState } from "react";
import { Link } from "react-router-dom";

const demoWishlistItems = [
  {
    _id: "12345678",
    name: "Plaid Flannel Shirt",
    imgUrl: "/men-product-4.png",
    color: "yellow",
    size: "l",
    price: 299,
    shipping: 0,
    quantity: 1,
  },
  {
    _id: "12345679",
    name: "Classic Cotton Crew Neck Tee",
    imgUrl: "/men-product-3.png",
    color: "yellow",
    size: "l",
    price: 299,
    shipping: 24,
    quantity: 3,
  },
  {
    _id: "12345670",
    name: "Wrap Maxi Dress",
    imgUrl: "/women-product-3.png",
    color: "yellow",
    size: "l",
    price: 299,
    shipping: 0,
    quantity: 2,
  },
];

type WishlistItem = {
  _id: string;
  name: string;
  imgUrl: string;
  color: string;
  size: string;
  price: number;
  shipping: number;
  quantity: number;
};

export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);

  function removeProductFromWishlist(id: string) {
    console.log(id);
  }

  function addProductToCart(id: string) {
    console.log(id);
    removeProductFromWishlist(id);
  }
  return (
    <section className="flex-1">
      {wishlistItems.length ? (
        <>
          <h1 className="text-xl font-semibold">Wishlist</h1>
          <ul className="flex flex-col gap-4 mt-4">
            {wishlistItems.map((product) => (
              <li
                key={product._id}
                className="flex flex-col items-start justify-between gap-4 py-2 md:flex-row md:items-center"
              >
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => removeProductFromWishlist(product._id)}
                    className="p-1 duration-300 rounded-md group focus-visible:ring ring-blue-400 hover:bg-zinc-100"
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
                        className="duration-300 stroke-zinc-500 group-hover:stroke-black"
                        strokeWidth="6.272"
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
                  <div className="flex items-center flex-1 gap-4">
                    <div className="w-20 h-20 rounded-md bg-zinc-200 aspect-square">
                      <img
                        src={product.imgUrl}
                        alt=""
                        className="object-contain w-full h-full"
                      />
                    </div>
                    <div className="flex flex-col gap-2 text-sm sm:text-base">
                      <h2 className="font-semibold">{product.name}</h2>
                      <p>
                        Color:{" "}
                        <span className="text-xs font-semibold uppercase sm:text-sm">
                          {product.color}
                        </span>
                      </p>
                      <p>
                        Size:{" "}
                        <span className="text-xs font-semibold uppercase sm:text-sm">
                          {product.size}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 ml-[44px] md:ml-0 items-center">
                  <p className="w-24 font-semibold">
                    ${product.price.toFixed(2)}
                  </p>
                  <button
                    onClick={() => addProductToCart(product._id)}
                    className="p-2 px-4 text-white duration-300 rounded-md bg-accent-blue-100 whitespace-nowrap focus-visible:ring ring-blue-400 hover:bg-accent-blue-200 active:bg-accent-blue-300"
                  >
                    <span
                      className="hidden md:block lg:hidden"
                      title="Add To Cart"
                    >
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
                    <span className="text-sm md:hidden lg:block sm:text-base">
                      Add To Cart
                    </span>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <div className="border max-w-2xl aspect-[1.4] shadow rounded-md mx-auto flex-center flex-col gap-8 p-4">
          <div className="w-[35%] aspect-square rounded-full bg-green-100 flex-center">
            <svg
              width={"50%"}
              height={"50%"}
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
                  className="stroke-green-500"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </div>
          <div className="flex-col text-center flex-center">
            <h1 className="text-xl font-semibold sm:text-2xl">
              Your wishlist is empty
            </h1>
            <p>You don't have any products in your wishlist yet</p>
          </div>
          <Link
            to={"/search?q="}
            className="px-4 py-2 text-base font-semibold text-white duration-300 rounded-md sm:text-lg bg-accent-blue-100 hover:bg-accent-blue-200 active:bg-accent-blue-300 focus-visible:ring ring-blue-400"
          >
            Continue Shopping
          </Link>
        </div>
      )}
    </section>
  );
}
