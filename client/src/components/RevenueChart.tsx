import { useState } from "react";
import { AdminOrderType } from "./AdminOrder";

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
    <div className="aspect-video flex flex-col gap-4 bg-white p-4 shadow rounded-md">
      <header className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Sales Revenue</h2>
        <div className="flex gap-2 p-2 rounded-full bg-gray-100 text-sm">
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
        {data.map((month) => (
          <div
            key={month.month}
            className="flex flex-col justify-end items-center w-[5%] z-[2]"
          >
            <div
              style={{ height: ((month.amount / 700) * 100).toFixed() + "%" }}
              tabIndex={month.amount ? 0 : undefined}
              className="w-full relative rounded-t-full group active:bg-accent-blue-300 focus-visible:bg-accent-blue-300 hover:bg-accent-blue-200 duration-500 cursor-pointer bg-accent-blue-100"
            >
              <div className="flex-center flex-col opacity-0 duration-300 group-hover:opacity-100 absolute left-[50%] -translate-y-[100%] -translate-x-[50%]">
                <div className="bg-zinc-700 font-sm top-0 px-3 py-1 rounded-md text-white w-fit">
                  ${month.amount}
                </div>
                <div className="bg-transparent border-[12px] border-transparent border-t-zinc-700 -mt-1 w-0 h-0"></div>
              </div>
            </div>
            <p className="sm:block hidden h-[8.5%] xl:h-[9.9%] sm:flex-center">
              {month.month}
            </p>
            <p className="sm:hidden text-sm">{month.month.slice(0, 1)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
