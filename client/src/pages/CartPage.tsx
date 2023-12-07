import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useState } from "react";

const cartItems = [
  {
    _id: "12345678",
    name: "Plaid Flannel Shirt",
    imgUrl: "/men-product-4.png",
    color: "yellow",
    size: "l",
    price: 299,
    shipping: 0,
    quantity: 1,
  },
  {
    _id: "12345679",
    name: "Classic Cotton Crew Neck Tee",
    imgUrl: "/men-product-3.png",
    color: "yellow",
    size: "l",
    price: 299,
    shipping: 24,
    quantity: 3,
  },
  {
    _id: "12345670",
    name: "Wrap Maxi Dress",
    imgUrl: "/women-product-3.png",
    color: "yellow",
    size: "l",
    price: 299,
    shipping: 0,
    quantity: 2,
  },
];

export default function CartPage() {
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
    setCouponError("Error: the Coupon you entered is no longer valid");
  }

  return (
    <main className="mt-[72px] pt-1 flex flex-col gap-4">
      <h1 className="mt-4 text-zinc-400  mx-auto max-w-7xl w-[90%] font-semibold">
        <Link
          to={"/"}
          className="hover:underline hover:text-zinc-700 focus-visible:ring focus-visible:ring-blue-400 focus-visible:text-zinc-700 rounded-md focus-visible:ring-offset-2"
        >
          Home
        </Link>{" "}
        &gt; <span className="text-zinc-700">Cart</span>
      </h1>
      <div className="overflow-x-scroll scrollbar-hidden mx-auto max-w-7xl w-[90%]">
        <div className="mx-auto min-w-fit">
          <div className="flex justify-between gap-3 mb-4 bg-zinc-700 uppercase py-4 last:border-none text-white">
            <div className="flex gap-2 flex-1 min-w-[200px] uppercase text-sm font-semibold">
              <p className="pl-4">Product Information</p>
            </div>
            <div className="flex-1 flex gap-2 justify-between font-semibold text-sm">
              <div className="flex-1 min-w-[100px] flex-center">Price</div>
              <div className="flex-1 min-w-[100px] flex-center">Quantity</div>
              <div className="flex-1 min-w-[100px] flex-center">Shipping</div>
              <div className="flex-1 min-w-[100px] flex-center">SubTotal</div>
              <div className="flex-1 min-w-[100px] flex-center">Action</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 mx-auto min-w-fit">
          {cartItems.map((cartItem) => (
            <CartItem key={cartItem._id} cartItem={cartItem} />
          ))}
        </div>
        <Link
          to={"/"}
          className="group text-sm text-zinc-500 font-semibold hover:text-zinc-700 focus-visible:ring ml-2 focus-visible:ring-blue-400 rounded-md"
        >
          <span className="hover:underline">Continue Shopping</span>
          <span className="group-hover:ml-1 duration-300"> &rarr;</span>
        </Link>
      </div>
      <div className="bg-zinc-200 py-10">
        <div className="mx-auto max-w-7xl w-[90%] flex flex-col md:flex-row flex-wrap justify-between text-zinc-800 gap-10">
          <div className="flex flex-col gap-2 flex-1">
            <h3 className="text-xl font-semibold">Coupon Codes</h3>
            <p className="text-sm">Enter your coupon code if you have one</p>
            <form
              className="flex mt-4 border w-[100%] max-w-[300px] "
              onSubmit={handleCoupon}
            >
              <input
                type="text"
                value={couponCode}
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
            <p className="text-red-600 text-sm">{couponError}</p>
          </div>
          <div className="flex flex-col gap-2 flex-1 max-w-[300px]">
            <div className="grid grid-cols-2 border-b">
              <p>Sub Total</p>
              <p>${subTotal}</p>
              <p>Shipping</p>
              <p className="mb-4">${totalShipping}</p>
              <p className=" font-semibold">Grand Total</p>
              <p className="mb-4 font-semibold">${grandTotal}</p>
            </div>
            <Link
              to={"/checkout"}
              className="bg-accent-blue-100 p-2 text-center text-white rounded-md font-semibold hover:bg-accent-blue-200 focus-visible:ring focus-visible:ring-blue-400"
            >
              Proceed To Checkout
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
