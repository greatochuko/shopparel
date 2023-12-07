import { cartItems } from "../pages/CartPage";

export default function OrderSummary() {
  return (
    <section className="lg:block hidden h-fit sticky w-[400px] border p-4 border-zinc-200 rounded-md top-[80px] right-0">
      <h2 className="border-b pb-3 border-zinc-100 text-xl font-semibold">
        Order Summary
      </h2>
      <ul className="flex flex-col gap-4">
        {cartItems.map((cartItem) => (
          <li
            key={cartItem._id}
            className="border-b border-zinc-100 py-2 flex gap-4 items-start"
          >
            <div className="w-16 aspect-square bg-zinc-100 rounded-md overflow-hidden">
              <img
                src={cartItem.imgUrl}
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col gap-1 text-sm">
              <h3 className="font-semibold">
                {cartItem.name} X {cartItem.quantity}
              </h3>
              <p>
                Color -{" "}
                <span className="uppercase font-semibold">
                  {cartItem.color}
                </span>
              </p>
              <p>
                Size -{" "}
                <span className="uppercase font-semibold">{cartItem.size}</span>
              </p>
            </div>
            <p className="font-semibold ml-auto">
              ${cartItem.price * cartItem.quantity}
            </p>
          </li>
        ))}
      </ul>
      <div className="flex flex-col gap-2 py-2 border-b border-zinc-100">
        <div className="flex justify-between">
          <p className="font-semibold">
            Sub Total{" "}
            <span className="font-normal">({cartItems.length} Items)</span>
          </p>
          <p className="font-semibold">
            $
            {cartItems.reduce(
              (acc, curr) => acc + curr.price * curr.quantity,
              0
            )}
          </p>
        </div>
        <div className="flex justify-between">
          <p className="font-semibold">Shipping</p>
          <p className="font-semibold">
            ${cartItems.reduce((acc, curr) => acc + curr.shipping, 0)}
          </p>
        </div>
      </div>
      <div className="py-2">
        <div className="flex justify-between">
          <p className="font-semibold">Total</p>
          <p className="font-semibold">
            $
            {cartItems.reduce(
              (acc, curr) => acc + curr.price * curr.quantity,
              0
            ) + cartItems.reduce((acc, curr) => acc + curr.shipping, 0)}
          </p>
        </div>
      </div>
    </section>
  );
}
