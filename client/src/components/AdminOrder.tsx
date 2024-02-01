import { useState } from "react";
import { fetchFulfilOrder, fetchCancelOrder } from "../services/orderServices";
import AdminOrderOptions from "./AdminOrderOptions";

export type OrderProductType = {
  productId: string;
  imgUrl: string;
  name: string;
  color: string;
  size: string;
  quantity: number;
  price: number;
  storeId: string;
  status: "active" | "delivered" | "cancelled" | "packaged";
};

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
  isSelected?: boolean;
  toggleCheck?: (orderId: string) => void;
}) {
  const [optionsIsOpen, setOptionsIsOpen] = useState(false);
  const [orderStatus, setOrderStatus] = useState(order.product.status);

  const orderStatusBg =
    orderStatus === "active"
      ? "bg-blue-100"
      : orderStatus === "delivered"
      ? "bg-green-100"
      : orderStatus === "cancelled"
      ? "bg-red-100"
      : "bg-amber-100";

  const orderStatusText =
    orderStatus === "active"
      ? "text-blue-600"
      : orderStatus === "delivered"
      ? "text-green-600"
      : orderStatus === "cancelled"
      ? "text-red-500"
      : "text-amber-600";

  function toggleOpenOptions() {
    setOptionsIsOpen((curr) => !curr);
  }

  async function handleFulfilOrder() {
    if (orderStatus !== "active") return;
    const data = await fetchFulfilOrder(order._id, order.product.productId);
    if (data.error) return;
    setOrderStatus("packaged");
    setOptionsIsOpen(false);
  }

  async function handleCancelOrder() {
    if (orderStatus !== "active") return;
    const data = await fetchCancelOrder(order._id, order.product.productId);
    if (data.error) return;
    setOrderStatus("cancelled");
    setOptionsIsOpen(false);
  }

  return (
    <>
      <li className="items-center justify-between hidden gap-2 md:flex">
        {toggleCheck && (
          <input
            type="checkbox"
            name={`select ${order._id + order.product.productId}`}
            id={order._id + order.product.productId}
            checked={isSelected}
            onChange={() =>
              toggleCheck && toggleCheck(order._id + order.product.productId)
            }
          />
        )}

        <p className="overflow-hidden w-28 overflow-ellipsis" title={order._id}>
          {order._id}
        </p>
        <div className="flex items-center flex-1 gap-2">
          <img
            src={order.product.imgUrl}
            alt={order.product.name}
            className="object-cover w-12 h-12"
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
          {orderStatus}
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
            <AdminOrderOptions
              handleCancelOrder={handleCancelOrder}
              handleFulfilOrder={handleFulfilOrder}
              orderStatus={orderStatus}
            />
          )}
        </div>
      </li>

      {/* MOBILE ORDER ITEM */}

      <li className="relative flex flex-col justify-between w-full gap-2 p-2 pb-2 text-sm rounded-md md:hidden lg:border-b border-zinc-100 bg-zinc-50">
        <p className="w-[90%] overflow-hidden overflow-ellipsis whitespace-nowrap">
          <span className="font-semibold">Order ID - </span> #{order._id}
        </p>
        <div className="flex items-center gap-2">
          <span className="font-semibold">Product Info - </span>{" "}
          <img
            src={order.product.imgUrl}
            alt={order.product.name}
            className="object-cover w-12 h-12"
          />
          <p className="flex-1 max-w-[333px] w-0 ">{order.product.name}</p>
        </div>
        <p>
          <span className="font-semibold">Customer Address - </span>
          {order.address}
        </p>
        <div className="flex items-center justify-between mt-4">
          <p>
            <span className="font-semibold">Price:</span> $
            {order.product.price * order.product.quantity}
          </p>
          <p
            className={`py-1 text-center capitalize rounded-full w-24 ${orderStatusBg} ${orderStatusText}`}
          >
            {orderStatus}
          </p>
          <p>{new Date(order.date).toLocaleDateString()}</p>
        </div>
        <div className="absolute top-0 right-0">
          <button
            className="p-1 duration-200 rotate-90 rounded-full hover:bg-zinc-100 active:bg-zinc-200"
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
            <AdminOrderOptions
              handleCancelOrder={handleCancelOrder}
              handleFulfilOrder={handleFulfilOrder}
              orderStatus={orderStatus}
            />
          )}
        </div>
      </li>
    </>
  );
}
