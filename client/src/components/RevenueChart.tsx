import { useState } from "react";
import { AdminOrderType } from "./AdminOrder";
import RevenueChartBar from "./RevenueChartBar";

const data = [
  {
    month: "Jan",
    amount: 0,
    sales: 0,
  },
  {
    month: "Feb",
    amount: 0,
    sales: 0,
  },
  {
    month: "Mar",
    amount: 0,
    sales: 0,
  },
  {
    month: "Apr",
    amount: 0,
    sales: 0,
  },
  {
    month: "May",
    amount: 0,
    sales: 0,
  },
  {
    month: "Jun",
    amount: 0,
    sales: 0,
  },
  {
    month: "Jul",
    amount: 0,
    sales: 0,
  },
  {
    month: "Aug",
    amount: 0,
    sales: 0,
  },
  {
    month: "Sep",
    amount: 0,
    sales: 0,
  },
  {
    month: "Oct",
    amount: 0,
    sales: 0,
  },
  {
    month: "Nov",
    amount: 0,
    sales: 0,
  },
  {
    month: "Dec",
    amount: 0,
    sales: 0,
  },
];

export default function RevenueChart({
  orderData,
}: {
  orderData: AdminOrderType[];
}) {
  const [year, setYear] = useState(2024);

  data.forEach((d, i) => {
    const productsSold = orderData.filter(
      (order) =>
        new Date(order.date).getMonth() === i &&
        new Date(order.date).getFullYear() === year
    );
    d.amount = productsSold.reduce(
      (acc: number, curr: AdminOrderType) =>
        acc + curr.product.price * curr.product.quantity,
      0
    );

    d.sales = productsSold.length;
  });

  return (
    <div className="flex flex-col gap-4 p-4 bg-white rounded-md shadow aspect-video">
      <header className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Sales Revenue</h2>
        <div className="flex gap-2 p-2 text-sm bg-gray-100 rounded-full">
          <button
            onClick={() => setYear(2022)}
            className={`rounded-full duration-300 font-semibold flex-center h-6 w-12 ${
              year === 2022
                ? "bg-accent-blue-100 text-white hover:bg-accent-blue-200 active:bg-accent-blue-300 focus-visible:ring ring-blue-400"
                : "hover:bg-zinc-200 active:bg-zinc-300 focus-visible:bg-zinc-200"
            }`}
          >
            2022
          </button>
          <button
            onClick={() => setYear(2023)}
            className={`rounded-full duration-300 font-semibold flex-center h-6 w-12 ${
              year === 2023
                ? "bg-accent-blue-100 text-white hover:bg-accent-blue-200 active:bg-accent-blue-300 focus-visible:ring ring-blue-400"
                : "hover:bg-zinc-200 active:bg-zinc-300 focus-visible:bg-zinc-200"
            }`}
          >
            2023
          </button>
          <button
            onClick={() => setYear(2024)}
            className={`rounded-full duration-300 font-semibold flex-center h-6 w-12 ${
              year === 2024
                ? "bg-accent-blue-100 text-white hover:bg-accent-blue-200 active:bg-accent-blue-300 focus-visible:ring ring-blue-400"
                : "hover:bg-zinc-200 active:bg-zinc-300 focus-visible:bg-zinc-200"
            }`}
          >
            2024
          </button>
        </div>
      </header>
      <div className="flex h-[85%] justify-between relative">
        <div className="flex absolute pl-[7%] top-0 w-full h-full gap-4 flex-col">
          <div className="flex-1 border-t border-dashed border-zinc-200"></div>
          <div className="flex-1 border-t border-dashed border-zinc-200"></div>
          <div className="flex-1 border-t border-dashed border-zinc-200"></div>
          <div className="flex-1 border-t border-dashed border-zinc-200"></div>
          <div className="flex-1 border-t border-dashed border-zinc-200"></div>
          <div className="flex-1 border-t border-dashed border-zinc-200"></div>
          <div className="flex-1 border-t border-dashed border-zinc-200"></div>
          <div className="flex-1 border-t border-dashed border-zinc-200"></div>
        </div>
        <div className="flex flex-col gap-4 items-center z-[2]">
          <p className="flex-1 -translate-y-[50%] flex-center text-sm sm:text-base">
            $700
          </p>
          <p className="flex-1 -translate-y-[50%] flex-center text-sm sm:text-base">
            $600
          </p>
          <p className="flex-1 -translate-y-[50%] flex-center text-sm sm:text-base">
            $500
          </p>
          <p className="flex-1 -translate-y-[50%] flex-center text-sm sm:text-base">
            $400
          </p>
          <p className="flex-1 -translate-y-[50%] flex-center text-sm sm:text-base">
            $300
          </p>
          <p className="flex-1 -translate-y-[50%] flex-center text-sm sm:text-base">
            $200
          </p>
          <p className="flex-1 -translate-y-[50%] flex-center text-sm sm:text-base">
            $100
          </p>
          <p className="flex-1 -translate-y-[50%] flex-center text-sm sm:text-base">
            $0
          </p>
        </div>
        {data.map((month, i) => (
          <RevenueChartBar
            key={month.month}
            month={month}
            index={i}
            data={data}
          />
        ))}
      </div>
    </div>
  );
}
