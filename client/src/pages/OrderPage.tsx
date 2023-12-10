import { useState } from "react";

export default function OrderPage() {
  const [filter, setFilter] = useState("active");
  return (
    <section className="flex-1 flex flex-col gap-6">
      <h1 className="text-xl font-semibold">My Orders</h1>
      <ul className="flex border-b-[3px] justify-between text-lg font-semibold">
        <li
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.code === "Enter") setFilter("active");
          }}
          onClick={() => setFilter("active")}
          className={`p-2 ${
            filter === "active" ? "bg-zinc-100 border-zinc-700" : ""
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
            filter === "cancelled" ? "bg-zinc-100 border-zinc-700" : ""
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
            filter === "completed" ? "bg-zinc-100 border-zinc-700" : ""
          } hover:bg-zinc-100 rounded-t-md border-b-[3px] -mb-[2px] cursor-pointer focus-visible:ring ring-blue-400 duration-300`}
        >
          Completed
        </li>
      </ul>
    </section>
  );
}
