import { CartItemType } from "../context/CartContext";
import useCartContext from "../hooks/useCartContext";

export default function QuantityController({
  productInCart,
  size,
  maxQuantity,
}: {
  productInCart: CartItemType;
  size?: "small";
  maxQuantity: number;
}) {
  const { removeItemFromCart, increaseItemQuantity, decreaseItemQuantity } =
    useCartContext();

  function handleIncreaseQuantity() {
    console.clear();
    console.log(productInCart.quantity, maxQuantity);
    if (productInCart.quantity >= maxQuantity) return;
    increaseItemQuantity(productInCart._id);
  }

  function handleDecreaseQuantity() {
    if (productInCart.quantity <= 1) {
      removeItemFromCart(productInCart._id);
      return;
    }
    decreaseItemQuantity(productInCart._id);
  }
  return (
    <div className={`flex ${size === "small" ? "" : "gap-2"}`}>
      <button
        onClick={handleDecreaseQuantity}
        disabled={productInCart.quantity <= 1}
        className={`rounded-md shadow-md bg-accent-blue-100 ${
          size === "small" ? "h-6 w-6" : "h-9 w-9"
        } flex-center hover:bg-accent-blue-200 disabled:bg-zinc-200 disabled:shadow-none group focus-visible:ring focus-visible:ring-blue-400 active:shadow-none shadow-zinc-300`}
      >
        <svg
          height={size === "small" ? 12 : 16}
          width={size === "small" ? 12 : 16}
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
      <p
        className={`w-8 ${
          size === "small" ? "text-base" : "text-xl"
        } font-semibold flex-center text-zinc-600`}
      >
        {productInCart.quantity}
      </p>
      <button
        onClick={handleIncreaseQuantity}
        disabled={productInCart.quantity >= maxQuantity}
        className={`rounded-md shadow-md bg-accent-blue-100 ${
          size === "small" ? "h-6 w-6" : "h-9 w-9"
        } flex-center hover:bg-accent-blue-200 disabled:bg-zinc-200 disabled:shadow-none focus-visible:ring focus-visible:ring-blue-400 active:shadow-none shadow-zinc-300`}
      >
        <svg
          height={size === "small" ? 12 : 16}
          width={size === "small" ? 12 : 16}
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
  );
}
