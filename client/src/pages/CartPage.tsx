import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect } from "react";
import useCartContext from "../hooks/useCartContext";
import EmptyCart from "../components/EmptyCart";
import MobileCartITem from "../components/MobileCartITem";
import CartSummary from "../components/CartSummary";

export default function CartPage() {
  const { cartItems } = useCartContext();

  useEffect(() => {
    document.title = "Shopparel: Cart";
  }, []);

  return (
    <main className="flex flex-col gap-4 pt-1">
      <h1 className="mx-auto mt-4 w-[90%] max-w-6xl font-medium text-zinc-400">
        <Link
          to={"/"}
          className="rounded-md hover:text-zinc-500 hover:underline focus-visible:text-zinc-700 focus-visible:ring focus-visible:ring-blue-400 focus-visible:ring-offset-2"
        >
          Home
        </Link>{" "}
        &gt; <span className="text-zinc-700">Cart</span>
      </h1>
      {cartItems.length ? (
        <>
          <div className="scrollbar-hidden mx-auto hidden w-[90%] max-w-6xl overflow-x-scroll md:block">
            <div className="mx-auto min-w-fit">
              <div className="mb-4 flex justify-between gap-3 bg-zinc-700 py-4 uppercase text-white last:border-none">
                <div className="flex min-w-[250px] flex-1 gap-2 text-sm font-semibold uppercase">
                  <p className="pl-4">Product Information</p>
                </div>
                <div className="flex flex-1 justify-between gap-2 text-sm font-semibold">
                  <div className="flex-center min-w-[100px] flex-1">Price</div>
                  <div className="flex-center min-w-[100px] flex-1">
                    Quantity
                  </div>
                  <div className="flex-center min-w-[100px] flex-1">
                    Shipping
                  </div>
                  <div className="lg:flex-center hidden min-w-[100px] flex-1">
                    SubTotal
                  </div>
                  <div className="flex-center min-w-[100px] flex-1">Action</div>
                </div>
              </div>
            </div>
            <div className="mx-auto flex min-w-fit flex-col gap-4">
              {cartItems.map((cartItem) => (
                <CartItem key={cartItem._id} cartItem={cartItem} />
              ))}
            </div>
            <Link
              to={"/products"}
              className="group ml-2 rounded-md text-sm font-semibold text-zinc-500 hover:text-zinc-700 focus-visible:ring focus-visible:ring-blue-400"
            >
              <span className="hover:underline">Continue Shopping</span>
              <span className="duration-300 group-hover:ml-1"> &rarr;</span>
            </Link>
          </div>
          <div className="mx-auto flex w-[90%] flex-col gap-2 md:hidden">
            {cartItems.map((cartItem) => (
              <MobileCartITem key={cartItem._id} cartItem={cartItem} />
            ))}
          </div>
        </>
      ) : (
        <EmptyCart />
      )}
      <CartSummary cartItems={cartItems} />
    </main>
  );
}
