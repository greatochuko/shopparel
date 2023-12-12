import useCartContext from "../hooks/useCartContext";

export default function OrderSummary() {
  const { cartItems } = useCartContext();

  return (
    <section className="lg:block hidden h-fit sticky w-[400px] border p-4 border-zinc-200 rounded-md top-[80px] right-0">
      <h2 className="pb-3 text-xl font-semibold border-b border-zinc-100">
        Order Summary
      </h2>
      <ul className="flex flex-col gap-4">
        {cartItems.map((cartItem) => (
          <li
            key={cartItem._id}
            className="flex items-start gap-4 py-2 border-b border-zinc-100"
          >
            <div className="w-16 overflow-hidden rounded-md aspect-square bg-zinc-100">
              <img
                src={cartItem.imgUrl}
                alt=""
                className="object-contain w-full h-full"
              />
            </div>
            <div className="flex flex-col gap-1 text-sm">
              <h3 className="font-semibold">
                {cartItem.name} X {cartItem.quantity}
              </h3>
              <p>
                Color -{" "}
                <span className="font-semibold uppercase">
                  {cartItem.color}
                </span>
              </p>
              <p>
                Size -{" "}
                <span className="font-semibold uppercase">{cartItem.size}</span>
              </p>
            </div>
            <p className="ml-auto font-semibold">
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
