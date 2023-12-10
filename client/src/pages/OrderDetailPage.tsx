import { useNavigate, useParams } from "react-router-dom";

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
    status: "cancelled",
    paymentMethod: "card",
    totalPrice: 2893,
  },
  {
    _id: "123456d",
    orderDate: new Date().toDateString(),
    deliveryDate: new Date("12 12 2024").toDateString(),
    status: "cancelled",
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

  const order = orders.find((order) => order._id === orderId);
  return (
    <section className="flex flex-col gap-10 flex-1">
      <h1 className="text-xl font-semibold items-center flex">
        <button onClick={() => navigate(-1)} className="px-1 group">
          <svg
            height={25}
            width={25}
            fill="#000000"
            className="fill-zinc-500 hover:fill-black stroke-zinc-500 duration-300 hover:stroke-black"
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
      <div className="flex gap-2 flex-col sm:flex-row p-4 rounded-md bg-zinc-100 items-center justify-between">
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
        <p>
          Total Price:{" "}
          <span className="font-semibold"> ${order?.totalPrice}</span>
        </p>
      </div>
      <div className="flex relative bg-zinc-100 h-1 w-[90%] max-w-xl mx-auto rounded-full">
        <div className="flex-center flex-col gap-2 h-fit absolute -top-1.5 -translate-x-[50%] text-sm font-semibold">
          <div className="w-4 h-4 bg-zinc-800 rounded-full"></div>
          <p>Order Placed</p>
        </div>
        <div className="flex-center flex-col gap-2 h-fit absolute -top-1.5 left-[33%] text-sm font-semibold">
          <div className="w-4 h-4 bg-zinc-800 border-[3px] border-zinc-400 rounded-full"></div>
          <p>In Progress</p>
        </div>
        <div className="flex-center flex-col gap-2 h-fit absolute -top-1.5 left-[66%] text-sm font-semibold text-zinc-400">
          <div className="w-4 h-4 bg-zinc-400 rounded-full"></div>
          <p>Shipped</p>
        </div>
        <div className="flex-center flex-col gap-2 h-fit absolute -top-1.5 right-0 translate-x-[50%] text-sm font-semibold text-zinc-400">
          <div className="w-4 h-4 bg-zinc-400 rounded-full"></div>
          <p>Delivered</p>
        </div>
      </div>
    </section>
  );
}
