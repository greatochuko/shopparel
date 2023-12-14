import { useEffect, useState } from "react";
import Order, { OrderType } from "../components/Order";
import EmptyOrders from "../components/EmptyOrders";
import { fetchOrders } from "../services/orderServices";

export default function OrderPage() {
  const [filter, setFilter] = useState("active");
  const [orders, setOrders] = useState<OrderType[]>([]);

  useEffect(() => {
    async function getOrders() {
      const data = await fetchOrders();
      if (data.error) return;
      // setOrders(data);
      setOrders(
        [...data].sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        )
      );
    }
    getOrders();
  }, []);

  const filteredOrders =
    filter === "all"
      ? [...orders]
      : orders.filter((order) => order.status === filter);

  return (
    <section className="flex flex-col flex-1 gap-6">
      {orders.length ? (
        <>
          <h1 className="text-xl font-semibold">My Orders</h1>
          <ul className="flex border-b-[3px] justify-between text-base sm:text-lg font-semibold">
            <li
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.code === "Enter") setFilter("all");
              }}
              onClick={() => setFilter("all")}
              className={`p-2 ${
                filter === "all"
                  ? "bg-zinc-100 border-zinc-700 "
                  : "border-transparent"
              } hover:bg-zinc-100 rounded-t-md border-b-[3px] -mb-[2px] cursor-pointer focus-visible:ring ring-blue-400 duration-300`}
            >
              All
            </li>
            <li
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.code === "Enter") setFilter("active");
              }}
              onClick={() => setFilter("active")}
              className={`p-2 ${
                filter === "active"
                  ? "bg-zinc-100 border-zinc-700 "
                  : "border-transparent"
              } hover:bg-zinc-100 rounded-t-md border-b-[3px] -mb-[2px] cursor-pointer focus-visible:ring ring-blue-400 duration-300`}
            >
              Active
            </li>
            <li
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.code === "Enter") setFilter("cancelled");
              }}
              onClick={() => setFilter("cancelled")}
              className={`p-2 ${
                filter === "cancelled"
                  ? "bg-zinc-100 border-zinc-700"
                  : "border-transparent"
              } hover:bg-zinc-100 rounded-t-md border-b-[3px] -mb-[2px] cursor-pointer focus-visible:ring ring-blue-400 duration-300`}
            >
              Cancelled
            </li>
            <li
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.code === "Enter") setFilter("completed");
              }}
              onClick={() => setFilter("completed")}
              className={`p-2 ${
                filter === "completed"
                  ? "bg-zinc-100 border-zinc-700"
                  : "border-transparent"
              } hover:bg-zinc-100 rounded-t-md border-b-[3px] -mb-[2px] cursor-pointer focus-visible:ring ring-blue-400 duration-300`}
            >
              Completed
            </li>
          </ul>
          <div className="flex flex-col gap-4">
            {filteredOrders.map((order) => (
              <Order key={order._id} order={order} />
            ))}
          </div>
        </>
      ) : (
        <EmptyOrders />
      )}
    </section>
  );
}
