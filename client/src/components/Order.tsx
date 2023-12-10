import { Link } from "react-router-dom";

type OrderType = {
  _id: string;
  orderDate: string;
  deliveryDate: string;
  status: string;
  paymentMethod: string;
};

export default function Order({ order }: { order: OrderType }) {
  return (
    <div className="flex flex-col justify-between gap-4 p-4 rounded-md md:items-end bg-zinc-100 md:flex-row">
      <div className="flex flex-col gap-1 text-sm sm:text-base">
        <p className="text-base font-semibold sm:text-lg">
          Order ID: #{order._id}
        </p>
        <p>
          Order Date: <span className="font-semibold">{order.orderDate}</span>
        </p>
        <p>
          Delivery Date:{" "}
          <span className="font-semibold">{order.deliveryDate}</span>
        </p>
        <p>
          Order Status:{" "}
          <span
            className={`font-semibold ${
              order.status === "active"
                ? "text-yellow-600"
                : order.status === "cancelled"
                ? "text-red-600"
                : order.status === "completed"
                ? "text-green-600"
                : ""
            }`}
          >
            {order.status}
          </span>
        </p>
        <p>
          Payment Method:{" "}
          <span className="font-semibold">{order.paymentMethod}</span>
        </p>
      </div>
      <Link
        to={`/orders/${order._id}`}
        className="p-2 px-4 text-sm font-semibold text-center text-white duration-300 rounded-md sm:text-base whitespace-nowrap bg-accent-blue-100 hover:bg-accent-blue-200 active:bg-accent-blue-300 focus-visible:ring ring-blue-400"
      >
        View Order
      </Link>
    </div>
  );
}
