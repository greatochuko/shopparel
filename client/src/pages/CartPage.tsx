import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useState } from "react";
import useCartContext from "../hooks/useCartContext";
import EmptyCart from "../components/EmptyCart";
import MobileCartITem from "../components/MobileCartITem";

export default function CartPage() {
  const [couponError, setCouponError] = useState("");
  const [couponCode, setCouponCode] = useState("");
  const { cartItems } = useCartContext();

  const subTotal = cartItems
    .reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
    .toFixed(2);

  const totalShipping = cartItems
    .reduce((acc, curr) => acc + curr.shipping, 0)
    .toFixed(2);

  const grandTotal = (Number(subTotal) + Number(totalShipping)).toFixed(2);

  function handleCoupon(e: React.FormEvent) {
    setCouponError("");
    e.preventDefault();
    setCouponError("Error: the Coupon you entered is no longer valid");
  }

  return (
    <main className="mt-[72px] pt-1 flex flex-col gap-4">
      <h1 className="mt-4 text-zinc-400  mx-auto max-w-7xl w-[90%] font-semibold">
        <Link
          to={"/"}
          className="rounded-md hover:underline hover:text-zinc-700 focus-visible:ring focus-visible:ring-blue-400 focus-visible:text-zinc-700 focus-visible:ring-offset-2"
        >
          Home
        </Link>{" "}
        &gt; <span className="text-zinc-700">Cart</span>
      </h1>
      {cartItems.length ? (
        <>
          <div className="overflow-x-scroll scrollbar-hidden mx-auto max-w-7xl w-[90%] hidden md:block">
            <div className="mx-auto min-w-fit">
              <div className="flex justify-between gap-3 py-4 mb-4 text-white uppercase bg-zinc-700 last:border-none">
                <div className="flex gap-2 flex-1 min-w-[250px] uppercase text-sm font-semibold">
                  <p className="pl-4">Product Information</p>
                </div>
                <div className="flex justify-between flex-1 gap-2 text-sm font-semibold">
                  <div className="flex-1 min-w-[78px] lg:min-w-[100px] flex-center">
                    Price
                  </div>
                  <div className="flex-1 min-w-[100px] flex-center">
                    Quantity
                  </div>
                  <div className="flex-1 min-w-[78px] lg:min-w-[100px] flex-center">
                    Shipping
                  </div>
                  <div className="flex-1 min-w-[78px] lg:min-w-[100px] flex-center">
                    SubTotal
                  </div>
                  <div className="flex-1 min-w-[78px] lg:min-w-[100px] flex-center">
                    Action
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 mx-auto min-w-fit">
              {cartItems.map((cartItem) => (
                <CartItem key={cartItem._id} cartItem={cartItem} />
              ))}
            </div>
            <Link
              to={"/search?q="}
              className="ml-2 text-sm font-semibold rounded-md group text-zinc-500 hover:text-zinc-700 focus-visible:ring focus-visible:ring-blue-400"
            >
              <span className="hover:underline">Continue Shopping</span>
              <span className="duration-300 group-hover:ml-1"> &rarr;</span>
            </Link>
          </div>
          <div className="flex gap-2 flex-col w-[90%] mx-auto md:hidden">
            {cartItems.map((cartItem) => (
              <MobileCartITem key={cartItem._id} cartItem={cartItem} />
            ))}
          </div>
        </>
      ) : (
        <EmptyCart />
      )}
      <div className="py-10 bg-zinc-200">
        <div className="mx-auto max-w-7xl w-[90%] flex flex-col md:flex-row flex-wrap justify-between text-zinc-800 gap-10">
          <div className="flex flex-col flex-1 gap-2">
            <h3 className="text-xl font-semibold">Coupon Codes</h3>
            <p className="text-sm">Enter your coupon code if you have one</p>
            <form
              className="flex mt-4 border w-[100%] max-w-[300px] "
              onSubmit={handleCoupon}
            >
              <input
                type="text"
                value={couponCode}
                name="coupon"
                onChange={(e) => setCouponCode(e.target.value)}
                className="text-sm border-zinc-400 border-2 w-[100%] sm:w-auto border-r-0 rounded-s-md focus-visible:ring focus-visible:ring-blue-400 px-2"
              />
              <button
                type="submit"
                className="bg-accent-blue-100 text-white w-fit px-1 py-2.5 whitespace-nowrap sm:px-2.5 rounded-e-md text-sm hover:bg-accent-blue-200 focus-visible:ring focus-visible:ring-blue-400"
              >
                Apply Coupon
              </button>
            </form>
            <p className="text-sm text-red-600">{couponError}</p>
          </div>
          <div className="flex flex-col gap-2 flex-1 max-w-[300px]">
            <div className="grid grid-cols-2 border-b">
              <p>Sub Total</p>
              <p>${subTotal}</p>
              <p>Shipping</p>
              <p className="mb-4">${totalShipping}</p>
              <p className="font-semibold ">Grand Total</p>
              <p className="mb-4 font-semibold">${grandTotal}</p>
            </div>
            <Link
              to={"/checkout"}
              className="p-2 font-semibold text-center text-white duration-300 rounded-md bg-accent-blue-100 hover:bg-accent-blue-200 focus-visible:ring focus-visible:ring-blue-400"
            >
              Proceed To Checkout
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
