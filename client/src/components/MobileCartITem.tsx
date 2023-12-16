import { Link } from "react-router-dom";
import { CartItemType } from "../context/CartContext";
import QuantityController from "./QuantityController";

export default function MobileCartITem({
  cartItem,
}: {
  cartItem: CartItemType;
}) {
  return (
    <div className="bg-zinc-100 rounded-md p-2 border">
      <div className="flex gap-2 flex-1 min-w-[250px]">
        <img
          src={cartItem.imgUrl}
          alt={cartItem.name}
          className="object-contain w-20 rounded-md bg-zinc-100 aspect-square"
        />
        <div className="flex flex-col gap-1">
          <Link
            tabIndex={0}
            to={`/product/${
              cartItem.productId + "-" + cartItem.name.split(" ").join("-")
            }`}
            className="font-semibold text-sm sm:text-base duration-200 rounded-md hover:text-accent-blue-100 focus-visible:ring focus-visible:ring-offset-2 focus-visible:ring-blue-400 focus-visible:text-accent-blue-100"
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
        <QuantityController product={cartItem} size="small" />
      </div>
    </div>
  );
}
