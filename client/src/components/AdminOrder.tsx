import { useState } from "react";
import { OrderProductType } from "../services/orderServices";
export type AdminOrderType = {
  _id: string;
  product: OrderProductType;
  address: string;
  date: Date;
};

export default function AdminOrder({
  order,
  isSelected,
  toggleCheck,
}: {
  order: AdminOrderType;
  isSelected: boolean;
  toggleCheck: (orderId: string) => void;
}) {
  const [optionsIsOpen, setOptionsIsOpen] = useState(false);

  const orderStatusBg =
    order.product.status === "delivered"
      ? "bg-green-100"
      : order.product.status === "active"
      ? "bg-blue-100"
      : order.product.status === "cancelled"
      ? "bg-red-100"
      : "";

  const orderStatusText =
    order.product.status === "delivered"
      ? "text-green-600"
      : order.product.status === "active"
      ? "text-blue-600"
      : order.product.status === "cancelled"
      ? "text-red-500"
      : "";

  function toggleOpenOptions() {
    setOptionsIsOpen((curr) => !curr);
  }

  function handleFulfil() {
    if (order.product.status !== "active") return;
    console.clear();
    console.log("Fulfilling...");
    setOptionsIsOpen(false);
  }

  return (
    <>
      <li className="items-center justify-between hidden gap-2 md:flex">
        <input
          type="checkbox"
          name={`select ${order._id + order.product.productId}`}
          id={order._id + order.product.productId}
          checked={isSelected}
          onChange={() => toggleCheck(order._id + order.product.productId)}
        />

        <p className="w-28 overflow-hidden overflow-ellipsis" title={order._id}>
          {order._id}
        </p>
        <div className="flex items-center flex-1 gap-2">
          <img
            src={order.product.imgUrl}
            alt={order.product.name}
            className="w-12 h-12 object-cover"
          />
          <p className="flex-1 max-w-[333px] w-0 overflow-hidden overflow-ellipsis whitespace-nowrap">
            {order.product.name}
          </p>
        </div>
        <p className="max-w-[389px] w-0 flex-1 overflow-hidden whitespace-nowrap overflow-ellipsis">
          {order.address}
        </p>
        <p className="w-24">{new Date(order.date).toLocaleDateString()}</p>
        <p className="w-24 flex-center">
          ${(order.product.price * order.product.quantity).toFixed(2)}
        </p>
        <p
          className={`w-20 flex-center ${orderStatusBg} ${orderStatusText} rounded-full p-1`}
        >
          {order.product.status}
        </p>
        <div className="relative">
          <button
            className="p-1 duration-200 rounded-full hover:bg-zinc-100 active:bg-zinc-200"
            onClick={toggleOpenOptions}
          >
            <svg
              height={24}
              width={24}
              viewBox="0 0 24 24"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <title>elipsis-h</title> <desc>Created with sketchtool.</desc>
                <g
                  id="web-app"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <g id="elipsis-h" fill="#000000">
                    <path
                      d="M18,14 C16.8954305,14 16,13.1045695 16,12 C16,10.8954305 16.8954305,10 18,10 C19.1045695,10 20,10.8954305 20,12 C20,13.1045695 19.1045695,14 18,14 Z M6,14 C4.8954305,14 4,13.1045695 4,12 C4,10.8954305 4.8954305,10 6,10 C7.1045695,10 8,10.8954305 8,12 C8,13.1045695 7.1045695,14 6,14 Z M12,14 C10.8954305,14 10,13.1045695 10,12 C10,10.8954305 10.8954305,10 12,10 C13.1045695,10 14,10.8954305 14,12 C14,13.1045695 13.1045695,14 12,14 Z"
                      id="Shape"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
          </button>
          {optionsIsOpen && (
            <ul className="absolute left-0 top-[100%] w-fit bg-white rounded-md overflow-hidden shadow-lg animate-zoom-in z-20">
              <li
                aria-disabled={order.product.status !== "active"}
                onClick={handleFulfil}
                className="px-2 aria-disabled:grayscale aria-disabled:cursor-default cursor-pointer gap-1 group py-1 flex items-center hover:bg-green-100 hover:text-green-600 duration-300"
              >
                <svg
                  height={20}
                  width={20}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L12.7348 11.2045L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z"
                      fill="#1C274C"
                      className="group-hover:fill-green-600 fill-zinc-700 duration-300"
                    ></path>{" "}
                  </g>
                </svg>
                Fulfil
              </li>
              <li className="px-2 cursor-pointer py-1 text-left group flex items-center gap-1 hover:bg-red-100 hover:text-red-500 duration-300">
                <svg
                  height={20}
                  width={20}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                  className="group-hover:fill-red-500 fill-zinc-700 duration-300"
                  viewBox="0 0 24 24"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path>
                  </g>
                </svg>
                Cancel
              </li>
            </ul>
          )}
        </div>
      </li>

      {/* MOBILE ORDER ITEM */}

      <li className="relative flex flex-col justify-between w-full gap-2 p-2 pb-2 text-sm rounded-md md:hidden lg:border-b border-zinc-100 bg-zinc-50">
        <p>
          <span className="font-semibold">Order ID - </span> #{order._id}
        </p>
        <p>
          <span className="font-semibold">Customer Name - </span>{" "}
          {order.userName}
        </p>
        <p>
          <span className="font-semibold">Customer Email - </span>
          {order.userEmail}
        </p>
        <div className="flex items-center justify-between mt-4">
          <p>${order.product.price * order.product.quantity}</p>
          <p
            className={`py-1 text-center capitalize rounded-full w-24 ${orderStatusBg} ${orderStatusText}`}
          >
            {order.product.status}
          </p>
          <p>{new Date(order.date).toLocaleDateString()}</p>
        </div>
        <button className="absolute top-0 right-0 p-1 duration-200 rotate-90 rounded-full hover:bg-zinc-100 active:bg-zinc-200">
          <svg
            height={24}
            width={24}
            viewBox="0 0 24 24"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <title>elipsis-h</title> <desc>Created with sketchtool.</desc>
              <g
                id="web-app"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                <g id="elipsis-h" fill="#000000">
                  <path
                    d="M18,14 C16.8954305,14 16,13.1045695 16,12 C16,10.8954305 16.8954305,10 18,10 C19.1045695,10 20,10.8954305 20,12 C20,13.1045695 19.1045695,14 18,14 Z M6,14 C4.8954305,14 4,13.1045695 4,12 C4,10.8954305 4.8954305,10 6,10 C7.1045695,10 8,10.8954305 8,12 C8,13.1045695 7.1045695,14 6,14 Z M12,14 C10.8954305,14 10,13.1045695 10,12 C10,10.8954305 10.8954305,10 12,10 C13.1045695,10 14,10.8954305 14,12 C14,13.1045695 13.1045695,14 12,14 Z"
                    id="Shape"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
        </button>
      </li>
    </>
  );
}
