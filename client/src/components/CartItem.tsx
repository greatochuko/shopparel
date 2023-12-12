import { Link } from "react-router-dom";
import { CartItemType } from "../context/CartContext";
import useCartContext from "../hooks/useCartContext";

type CartItemProps = {
  cartItem: CartItemType;
};

export default function CartItem({ cartItem }: CartItemProps) {
  const quantity = cartItem.quantity;
  const { increaseItemQuantity, decreaseItemQuantity, removeItemFromCart } =
    useCartContext();

  function handleIncreaseQuantity() {
    increaseItemQuantity(cartItem);
  }

  function handleDecreaseQuantity() {
    decreaseItemQuantity(cartItem);
  }

  function handleRemoveItemFromCart() {
    removeItemFromCart(cartItem);
  }

  const subTotal = cartItem.price * quantity + cartItem.shipping;

  return (
    <div
      className="flex justify-between gap-3 pb-4 border-b last:border-none text-zinc-700"
      key={cartItem._id}
    >
      <div className="flex gap-2 flex-1 min-w-[200px]">
        <img
          src={cartItem.imgUrl}
          alt={cartItem.name}
          className="object-contain w-20 rounded-md bg-zinc-200 aspect-square"
        />
        <div className="flex flex-col gap-1">
          <Link
            tabIndex={0}
            to={`/product/${cartItem._id + cartItem.name.split(" ").join("-")}`}
            className="font-semibold duration-200 rounded-md hover:text-accent-blue-100 focus-visible:ring focus-visible:ring-offset-2 focus-visible:ring-blue-400 focus-visible:text-accent-blue-100"
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
        </div>
      </div>
      <div className="flex justify-between flex-1 gap-2 text-sm">
        <div className="font-bold flex-1 min-w-[100px] flex-center">
          ${cartItem.price.toFixed(2)}
        </div>
        <div className="font-bold flex-1 min-w-[100px] flex-center">
          <div className="flex gap-2">
            <button
              onClick={handleDecreaseQuantity}
              disabled={quantity <= 1}
              className="text-3xl text-white rounded-md shadow-md group disabled:bg-zinc-200 disabled:shadow-none bg-accent-blue-100 h-7 w-7 flex-center hover:bg-accent-blue-200 focus-visible:ring focus-visible:ring-blue-400 active:shadow-none shadow-zinc-300"
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
            <p className="w-6 text-base font-semibold flex-center text-zinc-600">
              {quantity}
            </p>
            <button
              onClick={handleIncreaseQuantity}
              className="text-3xl text-white rounded-md shadow-md bg-accent-blue-100 h-7 w-7 flex-center hover:bg-accent-blue-200 focus-visible:ring focus-visible:ring-blue-400 active:shadow-none shadow-zinc-300"
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
          className={`font-bold flex-1 min-w-[100px] uppercase flex-center ${
            cartItem.shipping === 0 ? "font-normal text-zinc-500" : ""
          }`}
        >
          {cartItem.shipping === 0
            ? "Free"
            : "$" + cartItem.shipping.toFixed(2)}
        </div>
        <div className="font-bold flex-1 min-w-[100px] flex-center">
          ${subTotal.toFixed(2)}
        </div>
        <div className="font-bold flex-1 min-w-[100px] flex-center">
          <button
            onClick={handleRemoveItemFromCart}
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
    </div>
  );
}
