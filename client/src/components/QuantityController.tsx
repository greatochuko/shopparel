import { CartItemType } from "../context/CartContext";
import useCartContext from "../hooks/useCartContext";

export default function QuantityController({
  product,
}: {
  product: CartItemType;
}) {
  const { removeItemFromCart, increaseItemQuantity, decreaseItemQuantity } =
    useCartContext();

  function handleIncreaseQuantity() {
    increaseItemQuantity(product._id);
  }

  function handleDecreaseQuantity() {
    if (product.quantity <= 1) {
      removeItemFromCart(product._id);
      return;
    }
    decreaseItemQuantity(product._id);
  }
  return (
    <div className="flex gap-2">
      <button
        onClick={handleDecreaseQuantity}
        className="text-3xl text-white rounded-md shadow-md bg-accent-blue-100 h-9 w-9 flex-center hover:bg-accent-blue-200 focus-visible:ring focus-visible:ring-blue-400 active:shadow-none shadow-zinc-300"
      >
        <svg
          height={16}
          width={16}
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
      <p className="w-8 text-xl font-semibold flex-center text-zinc-600">
        {product.quantity}
      </p>
      <button
        onClick={handleIncreaseQuantity}
        className="text-3xl text-white rounded-md shadow-md bg-accent-blue-100 h-9 w-9 flex-center hover:bg-accent-blue-200 focus-visible:ring focus-visible:ring-blue-400 active:shadow-none shadow-zinc-300"
      >
        <svg
          height={16}
          width={16}
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
