import { Link } from "react-router-dom";
import { CartItemType } from "../context/CartContext";
import QuantityController from "./QuantityController";
import useCartContext from "../hooks/useCartContext";
import { ProductType } from "./Product";

export default function MobileCartITem({
  cartItem,
}: {
  cartItem: CartItemType;
}) {
  const { removeItemFromCart } = useCartContext();
  return (
    <div className="flex flex-col justify-between gap-2 p-2 border rounded-md text-zinc-700 bg-zinc-100 sm:flex-row">
      <div className="flex flex-1 gap-2">
        <img
          src={cartItem.imgUrl}
          alt={cartItem.name}
          className="object-contain w-20 rounded-md bg-zinc-200 aspect-square"
        />
        <div className="flex flex-col gap-1">
          <Link
            tabIndex={0}
            to={`/product/${
              (cartItem.product as ProductType)._id +
              "-" +
              cartItem.name.split(" ").join("-")
            }`}
            className="text-sm font-semibold duration-200 rounded-md sm:text-base hover:text-accent-blue-100 focus-visible:ring focus-visible:ring-offset-2 focus-visible:ring-blue-400 focus-visible:text-accent-blue-100"
          >
            {cartItem.name}
          </Link>
          <p className="text-sm capitalize ">
            Color: <span className="font-semibold">{cartItem.color}</span>
          </p>
          <p className="text-sm">
            Size:{" "}
            <span className="font-semibold uppercase">{cartItem.size}</span>
          </p>
          <p className="text-sm">
            Price:{" "}
            <span className="font-semibold uppercase">
              ${cartItem.price.toFixed(2)}
            </span>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between sm:flex-col sm:items-end">
        <QuantityController
          productInCart={cartItem}
          size="small"
          maxQuantity={(cartItem.product as ProductType).quantity}
        />
        <button
          onClick={() => removeItemFromCart(cartItem._id)}
          className="p-2 duration-300 rounded-md group active:scale-90 focus-visible:ring focus-visible:ring-red-300"
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
                d="M10 11V17"
                stroke="#666"
                className="duration-300 group-hover:stroke-red-500 group-focus-visible:stroke-red-500"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M14 11V17"
                stroke="#666"
                className="duration-300 group-hover:stroke-red-500 group-focus-visible:stroke-red-500"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M4 7H20"
                stroke="#666"
                className="duration-300 group-hover:stroke-red-500 group-focus-visible:stroke-red-500"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z"
                stroke="#666"
                className="duration-300 group-hover:stroke-red-500 group-focus-visible:stroke-red-500"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                stroke="#666"
                className="duration-300 group-hover:stroke-red-500 group-focus-visible:stroke-red-500"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
}
