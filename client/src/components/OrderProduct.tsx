import { CartItemType } from "../context/CartContext";
import useUserContext from "../hooks/useUserContext";
import { ReviewType } from "./Review";

type OrderProductProps = {
  cartItem: CartItemType;
  orderStatus: string;
  openReviewModal: (productId: string, review: ReviewType | null) => void;
};

export default function OrderProduct({
  cartItem,
  orderStatus,
  openReviewModal,
}: OrderProductProps) {
  const { user } = useUserContext();

  return (
    <div
      key={cartItem._id}
      className="flex flex-col justify-between pb-4 gap-4 border-b last:border-b-0 last:pb-0 sm:flex-row"
    >
      <div className="flex gap-4">
        <div className="min-w-[80px] w-20 h-20 bg-zinc-200 rounded-md">
          <img
            src={cartItem.imgUrl}
            alt=""
            className="object-contain w-full h-full"
          />
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="font-semibold">{cartItem.name}</h3>
          <p>
            Color:{" "}
            <span className="font-semibold uppercase text-xs sm:text-sm">
              {cartItem.color}
            </span>
          </p>
          <p>
            Size:{" "}
            <span className="font-semibold uppercase">{cartItem.size}</span>
          </p>
        </div>
      </div>
      <div className="flex sm:flex-col gap-2 justify-between items-center">
        <div className="flex items-center gap-4 lg:gap-10 lg:text-base">
          <p className="whitespace-nowrap">
            Qty: <span className="font-semibold">{cartItem.quantity}</span>
          </p>
          <p className="whitespace-nowrap">
            Total Price:{" "}
            <span className="font-semibold">
              ${(cartItem.price * cartItem.quantity).toFixed(2)}
            </span>
          </p>
        </div>
        {orderStatus === "completed" && (
          <button
            onClick={() =>
              openReviewModal(
                cartItem.product?._id as string,
                cartItem.product?.reviews.find(
                  (review) => review.user === user?._id
                ) || null
              )
            }
            className="sm:w-full p-2 text-white duration-300 rounded-md bg-accent-blue-100 hover:bg-accent-blue-200 active:bg-accent-blue-300 focus-visible:ring focus-visible:ring-blue-400 flex-center"
          >
            {cartItem.product?.reviews.find(
              (review) => review.user === user?._id
            )
              ? "Edit your review"
              : "Write a Review"}
          </button>
        )}
      </div>
    </div>
  );
}
