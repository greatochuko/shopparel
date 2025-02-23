import React, { useState } from "react";
import { CartItemType } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function CartSummary({
  cartItems,
}: {
  cartItems: CartItemType[];
}) {
  const [couponError, setCouponError] = useState("");
  const [couponCode, setCouponCode] = useState("");

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
    setCouponError(
      "Error: The coupon code you entered is not valid or has expired",
    );
  }

  return (
    <div className="bg-zinc-200 py-10">
      <div className="mx-auto flex w-[90%] max-w-6xl flex-col flex-wrap justify-between gap-10 text-zinc-800 md:flex-row">
        <div className="flex flex-1 flex-col gap-2">
          <h3 className="text-xl font-semibold">Coupon Codes</h3>
          <p className="text-sm">Enter your coupon code if you have one</p>
          <form
            className="flex w-[100%] max-w-[300px] border"
            onSubmit={handleCoupon}
          >
            <input
              type="text"
              value={couponCode}
              name="coupon"
              onChange={(e) => setCouponCode(e.target.value)}
              className="w-[100%] rounded-s-md border-2 border-r-0 border-zinc-400 px-2 text-sm focus-visible:ring focus-visible:ring-blue-400 sm:w-auto"
            />
            <button
              type="submit"
              className="w-fit whitespace-nowrap rounded-e-md bg-accent-blue-100 px-3 py-2.5 text-sm text-white hover:bg-accent-blue-200 focus-visible:ring focus-visible:ring-blue-400 sm:px-2.5"
            >
              Apply Coupon
            </button>
          </form>
          <p className="text-sm text-red-600">{couponError}</p>
        </div>
        <div className="flex max-w-[300px] flex-1 flex-col gap-2">
          <div className="grid grid-cols-2 border-b">
            <p>Sub Total</p>
            <p>${subTotal}</p>
            <p>Shipping</p>
            <p className="mb-4">${totalShipping}</p>
            <p className="font-semibold">Grand Total</p>
            <p className="mb-4 font-semibold">${grandTotal}</p>
          </div>
          <Link
            to={"/checkout"}
            className="rounded-md bg-accent-blue-100 p-2 text-center text-sm font-medium text-white duration-300 hover:bg-accent-blue-200 focus-visible:ring focus-visible:ring-blue-400"
          >
            Proceed To Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}
