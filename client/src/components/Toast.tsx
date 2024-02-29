import { ToastType } from "./ToastContainer";

export default function Toast({ toast }: { toast: ToastType }) {
  const { color, title }: { color: string; title: string } =
    toast.type === "success"
      ? { color: "#16a34a", title: "Success" }
      : toast.type === "error"
      ? { color: "#ef4444", title: "Error" }
      : toast.type === "warning"
      ? { color: "#fbbf60", title: "Warning" }
      : { color: "#555", title: "Alert" };

  return (
    <div
      className="relative p-3 overflow-hidden text-[#f87171] bg-white rounded-md shadow w-60"
      style={{ boxShadow: `0 0 5px 0 #ddd` }}
    >
      <h3 style={{ color }} className="font-semibold ">
        {title}
      </h3>
      <p className="text-sm text-zinc-700">{toast.message}</p>
      <div
        style={{ backgroundColor: color }}
        className="absolute bottom-0 left-0 w-full h-1 "
      ></div>
      <button className="absolute top-0 p-1 px-2 text-lg font-semibold duration-300 text-zinc-600 hover:text-black right-1">
        &times;
      </button>
    </div>
  );
}
