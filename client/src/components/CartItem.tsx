import { Link } from "react-router-dom";
import { CartItemType } from "../context/CartContext";
import useCartContext from "../hooks/useCartContext";
import { ProductType } from "./Product";

type CartItemProps = {
  cartItem: CartItemType;
};

export default function CartItem({ cartItem }: CartItemProps) {
  const quantity = cartItem.quantity;
  const { increaseItemQuantity, decreaseItemQuantity, removeItemFromCart } =
    useCartContext();

  function handleIncreaseQuantity() {
    increaseItemQuantity(cartItem._id);
  }

  function handleDecreaseQuantity() {
    decreaseItemQuantity(cartItem._id);
  }

  function handleRemoveItemFromCart() {
    removeItemFromCart(cartItem._id);
  }

  const subTotal = cartItem.price * quantity + cartItem.shipping;

  return (
    <div
      className="flex justify-between gap-3 border-b pb-4 text-zinc-700 last:border-none"
      key={cartItem._id}
    >
      <div className="flex min-w-[250px] flex-1 gap-2">
        <img
          src={cartItem.imgUrl}
          alt={cartItem.name}
          className="aspect-square w-20 rounded-md bg-zinc-200 object-contain"
        />
        <div className="flex flex-col gap-1">
          <Link
            tabIndex={0}
            to={`/products/${
              (cartItem.product as ProductType)._id +
              "-" +
              cartItem.name.split(" ").join("-")
            }`}
            className="rounded-md font-semibold duration-200 hover:text-accent-blue-100 focus-visible:text-accent-blue-100 focus-visible:ring focus-visible:ring-blue-400 focus-visible:ring-offset-2"
          >
            {cartItem.name}
          </Link>
          <p className="text-sm capitalize">
            Color: <span className="font-semibold">{cartItem.color}</span>
          </p>
          <p className="text-sm">
            Size:{" "}
            <span className="font-semibold uppercase">{cartItem.size}</span>
          </p>
        </div>
      </div>
      <div className="flex flex-1 justify-between gap-2 text-sm">
        <div className="flex-center min-w-[100px] flex-1 font-bold">
          ${cartItem.price.toFixed(2)}
        </div>
        <div className="flex-center min-w-[100px] flex-1 font-bold">
          <div className="flex gap-2">
            <button
              onClick={handleDecreaseQuantity}
              disabled={quantity <= 1}
              className="flex-center group h-7 w-7 rounded-md bg-accent-blue-100 text-3xl text-white shadow-md shadow-zinc-300 hover:bg-accent-blue-200 focus-visible:ring focus-visible:ring-blue-400 active:shadow-none disabled:bg-zinc-200 disabled:shadow-none"
            >
              <svg
                height={14}
                width={14}
                viewBox="0 -12 32 32"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <defs> </defs>
                  <g
                    id="Page-1"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g
                      id="Icon-Set-Filled"
                      transform="translate(-414.000000, -1049.000000)"
                      fill="#fff"
                      className="group-disabled:fill-zinc-700"
                    >
                      <path
                        d="M442,1049 L418,1049 C415.791,1049 414,1050.79 414,1053 C414,1055.21 415.791,1057 418,1057 L442,1057 C444.209,1057 446,1055.21 446,1053 C446,1050.79 444.209,1049 442,1049"
                        id="minus"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
            </button>
            <p className="flex-center w-6 text-base font-semibold text-zinc-600">
              {quantity}
            </p>
            <button
              onClick={handleIncreaseQuantity}
              disabled={quantity >= (cartItem.product?.quantity as number)}
              className="flex-center h-7 w-7 rounded-md bg-accent-blue-100 text-3xl text-white shadow-md shadow-zinc-300 hover:bg-accent-blue-200 focus-visible:ring focus-visible:ring-blue-400 active:shadow-none disabled:bg-zinc-200 disabled:shadow-none"
            >
              <svg
                height={14}
                width={14}
                viewBox="0 0 32 32"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                fill="#fff"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <title>plus</title> <desc>Created with Sketch Beta.</desc>
                  <defs> </defs>
                  <g
                    id="Page-1"
                    stroke="none"
                    strokeWidth="1"
                    fill="#fff"
                    fillRule="evenodd"
                  >
                    <g
                      id="Icon-Set-Filled"
                      transform="translate(-362.000000, -1037.000000)"
                      fill="#fff"
                    >
                      <path
                        d="M390,1049 L382,1049 L382,1041 C382,1038.79 380.209,1037 378,1037 C375.791,1037 374,1038.79 374,1041 L374,1049 L366,1049 C363.791,1049 362,1050.79 362,1053 C362,1055.21 363.791,1057 366,1057 L374,1057 L374,1065 C374,1067.21 375.791,1069 378,1069 C380.209,1069 382,1067.21 382,1065 L382,1057 L390,1057 C392.209,1057 394,1055.21 394,1053 C394,1050.79 392.209,1049 390,1049"
                        id="plus"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
            </button>
          </div>
        </div>
        <div
          className={`flex-center min-w-[100px] flex-1 font-bold uppercase ${
            cartItem.shipping === 0 ? "font-normal text-zinc-500" : ""
          }`}
        >
          {cartItem.shipping === 0
            ? "Free"
            : "$" + cartItem.shipping.toFixed(2)}
        </div>
        <div className="lg:flex-center hidden min-w-[100px] flex-1 font-bold">
          ${subTotal.toFixed(2)}
        </div>
        <div className="flex-center min-w-[100px] flex-1 font-bold">
          <button
            onClick={handleRemoveItemFromCart}
            className="group rounded-md p-2 duration-300 focus-visible:ring focus-visible:ring-red-300 active:scale-90"
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
    </div>
  );
}
