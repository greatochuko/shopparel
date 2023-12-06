import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const cartItems = [
  {
    _id: "12345678",
    name: "Plaid Flannel Shirt",
    imgUrl: "/men-product-4.png",
    color: "yellow",
    size: "l",
    price: 299,
    shipping: "free",
    quantity: 3,
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
    shipping: "free",
    quantity: 3,
  },
];

export default function CartPage() {
  return (
    <main className="mt-[72px] pt-1">
      <h1 className="my-4 text-zinc-400  mx-auto max-w-7xl w-[90%] font-semibold">
        <Link to={"/"} className="hover:underline hover:text-zinc-700">
          Home
        </Link>{" "}
        &gt; <span className="text-zinc-700">Cart</span>
      </h1>
      <div className="overflow-x-scroll mx-auto max-w-7xl w-[90%]">
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
      </div>
    </main>
  );
}
