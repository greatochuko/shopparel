import { Link, useLocation } from "react-router-dom";
import useCartContext from "../hooks/useCartContext";
import { ShoppingBagIcon } from "lucide-react";

export default function CartLink() {
  const { pathname } = useLocation();
  const { cartItems } = useCartContext();

  const cartQuantity = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <Link
      title="cart"
      to={"/cart"}
      className={`group relative grid place-content-center rounded-md border p-2 duration-200 focus-visible:ring-2 focus-visible:ring-accent-blue-100 ${
        pathname === "/cart"
          ? "bg-accent-blue-100 hover:bg-accent-blue-200"
          : "bg-white hover:bg-zinc-100"
      }`}
    >
      <ShoppingBagIcon
        className={`h-4 w-4 ${pathname === "/cart" ? "stroke-white" : "group-hover:stroke-zinc-800"}`}
      />
      {Boolean(cartQuantity) && (
        <p
          className={`flex-center absolute -right-2.5 -top-2.5 h-6 w-6 rounded-full border bg-accent-blue-100 text-sm text-white shadow-md`}
        >
          {cartQuantity}
        </p>
      )}
    </Link>
  );
}
