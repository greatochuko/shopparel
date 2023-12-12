import { useNavigate, useParams } from "react-router-dom";
import useCartContext from "../hooks/useCartContext";

const orders = [
  {
    _id: "123456a",
    orderDate: new Date().toDateString(),
    deliveryDate: new Date("12 12 2024").toDateString(),
    status: "active",
    paymentMethod: "card",
    totalPrice: 2893,
  },
  {
    _id: "123456b",
    orderDate: new Date().toDateString(),
    deliveryDate: new Date("12 12 2024").toDateString(),
    status: "active",
    paymentMethod: "cash on delivery",
    totalPrice: 2893,
  },
  {
    _id: "123456c",
    orderDate: new Date().toDateString(),
    deliveryDate: new Date("12 12 2024").toDateString(),
    status: "canceled",
    paymentMethod: "card",
    totalPrice: 2893,
  },
  {
    _id: "123456d",
    orderDate: new Date().toDateString(),
    deliveryDate: new Date("12 12 2024").toDateString(),
    status: "canceled",
    paymentMethod: "cash on delivery",
    totalPrice: 2893,
  },
  {
    _id: "123456e",
    orderDate: new Date().toDateString(),
    deliveryDate: new Date("12 12 2024").toDateString(),
    status: "completed",
    paymentMethod: "card",
    totalPrice: 2893,
  },
  {
    _id: "123456f",
    orderDate: new Date().toDateString(),
    deliveryDate: new Date("12 12 2024").toDateString(),
    status: "completed",
    paymentMethod: "cash on delivery",
    totalPrice: 2893,
  },
];

export default function OrderDetailPage() {
  const navigate = useNavigate();
  const { orderId } = useParams();
  const { cartItems } = useCartContext();

  const order = orders.find((order) => order._id === orderId);
  return (
    <section className="flex flex-col flex-1 gap-10">
      <h1 className="flex items-center text-xl font-semibold">
        <button onClick={() => navigate(-1)} className="px-1 group">
          <svg
            height={25}
            width={25}
            fill="#000000"
            className="duration-300 fill-zinc-500 hover:fill-black stroke-zinc-500 hover:stroke-black"
            viewBox="-12 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#000"
            strokeWidth="0.7"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M7.28 23.28c-0.2 0-0.44-0.080-0.6-0.24l-6.44-6.44c-0.32-0.32-0.32-0.84 0-1.2l6.44-6.44c0.32-0.32 0.84-0.32 1.2 0 0.32 0.32 0.32 0.84 0 1.2l-5.8 5.84 5.84 5.84c0.32 0.32 0.32 0.84 0 1.2-0.16 0.16-0.44 0.24-0.64 0.24z"></path>
            </g>
          </svg>
        </button>
        Order Details
      </h1>
      <div className="flex flex-col justify-between gap-2 p-4 rounded-md sm:flex-row bg-zinc-100 sm:items-center">
        <div className="flex flex-col gap-1 text-sm sm:text-base">
          <p className="font-semibold sm:text-lg">Order ID: {order?._id}</p>
          <p>
            Order Placed on{" "}
            <span className="font-semibold">{order?.orderDate}</span>
          </p>
          <p>
            Delivery Date:{" "}
            <span className="font-semibold">{order?.deliveryDate}</span>
          </p>
        </div>
        <p className="text-sm  sm:text-base">
          Total Price:{" "}
          <span className="font-semibold">
            {" "}
            ${order?.totalPrice.toFixed(2)}
          </span>
        </p>
      </div>
      <div className="flex relative bg-zinc-100 h-1 w-[90%] max-w-xl mx-auto font-semibold text-xs rounded-full">
        <div className="flex-center flex-col gap-2 h-fit absolute -top-1.5 -translate-x-[50%]">
          <div className="w-4 h-4 rounded-full bg-zinc-800"></div>
          <p className="hidden sm:block">Order Placed</p>
          <p className="sm:hidden">Placed</p>
        </div>
        <div className="flex-center flex-col gap-2 h-fit absolute -top-1.5 left-[25%]">
          {order?.status === "canceled" ? (
            <div className="w-4 h-4 bg-red-600 rounded-full border-zinc-400"></div>
          ) : (
            <div
              className={`w-4 h-4 bg-zinc-800 ${
                order?.status === "active" ? "border-[3px]" : ""
              } border-zinc-400 rounded-full`}
            ></div>
          )}
          <p className="hidden sm:block">
            {order?.status === "canceled" ? "Order Canceled" : "In Progress"}
          </p>
          <p className="sm:hidden">
            {order?.status === "canceled" ? "Canceled" : "In Progress"}
          </p>
        </div>
        <div className="flex-center flex-col gap-2 h-fit absolute -top-1.5 left-[60%] sm:left-[63%] text-zinc-400">
          <div
            className={`w-4 h-4 ${
              order?.status === "completed" ? "bg-zinc-800" : "bg-zinc-400"
            } rounded-full`}
          ></div>
          <p>Shipped</p>
        </div>
        <div className="flex-center flex-col gap-2 h-fit absolute -top-1.5 right-0 translate-x-[50%] text-zinc-400">
          <div
            className={`w-4 h-4 ${
              order?.status === "completed" ? "bg-green-600" : "bg-zinc-400"
            } rounded-full`}
          ></div>
          <p>Delivered</p>
        </div>
      </div>
      <div className="flex flex-col gap-4 p-4 mt-6 text-sm rounded-md bg-zinc-100">
        {cartItems.map((cartItem) => (
          <div
            key={cartItem._id}
            className="flex flex-col justify-between sm:flex-row"
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
                  <span className="font-semibold uppercase">
                    {cartItem.color}
                  </span>
                </p>
                <p>
                  Size:{" "}
                  <span className="font-semibold uppercase">
                    {cartItem.size}
                  </span>
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 pb-4 mt-4 border-b lg:gap-10 lg:text-base">
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
          </div>
        ))}
      </div>
    </section>
  );
}
