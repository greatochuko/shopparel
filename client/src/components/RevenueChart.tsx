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
    <div className="flex flex-col p-4 bg-white rounded-md shadow aspect-video">
      <header className="flex items-center justify-between">
        <h2 className="text-base font-semibold md:text-lg">Sales Revenue</h2>
        <div className="flex gap-2 p-1 text-sm bg-gray-100 rounded-full sm:p-2">
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
        <div className="absolute top-0 flex flex-col w-full h-full gap-2 pl-8 pb-7 sm:pl-14">
          <div className="flex-1 border-b border-dashed border-zinc-200"></div>
          <div className="flex-1 border-b border-dashed border-zinc-200"></div>
          <div className="flex-1 border-b border-dashed border-zinc-200"></div>
          <div className="flex-1 border-b border-dashed border-zinc-200"></div>
          <div className="flex-1 border-b border-dashed border-zinc-200"></div>
          <div className="flex-1 border-b border-dashed border-zinc-200"></div>
        </div>
        <div className="flex flex-col items-center z-[2] pb-5 text-sm md:text-base">
          <p className="flex items-end flex-1 pt-4">
            $<span className="hidden sm:block">5000</span>
            <span className="sm:hidden">5k</span>
          </p>
          <p className="flex items-end flex-1 pt-4">
            $<span className="hidden sm:block">4000</span>
            <span className="sm:hidden">4k</span>
          </p>
          <p className="flex items-end flex-1 pt-4">
            $<span className="hidden sm:block">3000</span>
            <span className="sm:hidden">3k</span>
          </p>
          <p className="flex items-end flex-1 pt-4">
            $<span className="hidden sm:block">2000</span>
            <span className="sm:hidden">2k</span>
          </p>
          <p className="flex items-end flex-1 pt-4">
            $<span className="hidden sm:block">1000</span>
            <span className="sm:hidden">1k</span>
          </p>
          <p className="flex items-end flex-1 pt-4">$0</p>
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
