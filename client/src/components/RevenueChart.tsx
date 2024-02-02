import { useState } from "react";
import { AdminOrderType } from "./AdminOrder";

const data = [
  {
    month: "Jan",
    amount: 300,
  },
  {
    month: "Feb",
    amount: 400,
  },
  {
    month: "Mar",
    amount: 200,
  },
  {
    month: "Apr",
    amount: 400,
  },
  {
    month: "May",
    amount: 600,
  },
  {
    month: "Jun",
    amount: 400,
  },
  {
    month: "Jul",
    amount: 500,
  },
  {
    month: "Aug",
    amount: 700,
  },
  {
    month: "Sep",
    amount: 100,
  },
  {
    month: "Oct",
    amount: 600,
  },
  {
    month: "Nov",
    amount: 500,
  },
  {
    month: "Dec",
    amount: 700,
  },
];

export default function RevenueChart({
  orderData,
}: {
  orderData: AdminOrderType[];
}) {
  const [filter, setFilter] = useState("Y");

  data.forEach(
    (d, i) =>
      (d.amount = orderData
        .filter((order) => new Date(order.date).getMonth() === i + 1)
        .reduce(
          (acc: number, curr: AdminOrderType) =>
            acc + curr.product.price * curr.product.quantity,
          0
        ))
  );

  return (
    <div className="aspect-video flex flex-col gap-4 bg-white p-4 shadow rounded-md">
      <header className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Sales Revenue</h2>
        <div className="flex gap-2 p-2 rounded-full bg-gray-100 text-sm">
          <button
            onClick={() => setFilter("W")}
            className={`rounded-full duration-300 font-semibold flex-center h-6 w-10 ${
              filter === "W"
                ? "bg-accent-blue-100 text-white hover:bg-accent-blue-200 active:bg-accent-blue-300 focus-visible:ring ring-blue-400"
                : "hover:bg-zinc-200 active:bg-zinc-300 focus-visible:bg-zinc-200"
            }`}
          >
            1W
          </button>
          <button
            onClick={() => setFilter("M")}
            className={`rounded-full duration-300 font-semibold flex-center h-6 w-10 ${
              filter === "M"
                ? "bg-accent-blue-100 text-white hover:bg-accent-blue-200 active:bg-accent-blue-300 focus-visible:ring ring-blue-400"
                : "hover:bg-zinc-200 active:bg-zinc-300 focus-visible:bg-zinc-200"
            }`}
          >
            1M
          </button>
          <button
            onClick={() => setFilter("Y")}
            className={`rounded-full duration-300 font-semibold flex-center h-6 w-10 ${
              filter === "Y"
                ? "bg-accent-blue-100 text-white hover:bg-accent-blue-200 active:bg-accent-blue-300 focus-visible:ring ring-blue-400"
                : "hover:bg-zinc-200 active:bg-zinc-300 focus-visible:bg-zinc-200"
            }`}
          >
            1Y
          </button>
        </div>
      </header>
      <div className="flex h-[85%] justify-between relative">
        <div className="flex absolute pl-[7%] top-0 w-full h-full gap-4 flex-col">
          <div className="border-t border-zinc-200 border-dashed flex-1"></div>
          <div className="border-t border-zinc-200 border-dashed flex-1"></div>
          <div className="border-t border-zinc-200 border-dashed flex-1"></div>
          <div className="border-t border-zinc-200 border-dashed flex-1"></div>
          <div className="border-t border-zinc-200 border-dashed flex-1"></div>
          <div className="border-t border-zinc-200 border-dashed flex-1"></div>
          <div className="border-t border-zinc-200 border-dashed flex-1"></div>
          <div className="border-t border-zinc-200 border-dashed flex-1"></div>
        </div>
        <div className="flex flex-col gap-4 items-center z-[2]">
          <p className="flex-1 -translate-y-[50%] flex-center">$700</p>
          <p className="flex-1 -translate-y-[50%] flex-center">$600</p>
          <p className="flex-1 -translate-y-[50%] flex-center">$500</p>
          <p className="flex-1 -translate-y-[50%] flex-center">$400</p>
          <p className="flex-1 -translate-y-[50%] flex-center">$300</p>
          <p className="flex-1 -translate-y-[50%] flex-center">$200</p>
          <p className="flex-1 -translate-y-[50%] flex-center">$100</p>
          <p className="flex-1 -translate-y-[50%] flex-center">$0</p>
        </div>
        {data.map((month) => (
          <div
            key={month.month}
            className="flex flex-col justify-end items-center w-[5%] z-[2]"
          >
            <div
              title={month.amount.toString()}
              style={{ height: ((month.amount / 700) * 100).toFixed() + "%" }}
              className="w-full rounded-t-full hover:bg-accent-blue-200 duration-300 cursor-pointer bg-accent-blue-100"
            ></div>
            <p className="sm:block hidden h-[8.5%] sm:flex-center">
              {month.month}
            </p>
            <p className="sm:hidden">{month.month.slice(0, 1)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
