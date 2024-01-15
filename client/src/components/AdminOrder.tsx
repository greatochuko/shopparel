type AdminOrderType = {
  _id: string;
  name: string;
  email: string;
  totalPrice: number;
  status: string;
  createdAt: string;
};

export default function AdminOrder({ order }: { order: AdminOrderType }) {
  const orderStatusBg =
    order.status === "delivered"
      ? "bg-green-100"
      : order.status === "pending"
      ? "bg-amber-100"
      : order.status === "cancelled"
      ? "bg-red-100"
      : "";

  const orderStatusText =
    order.status === "delivered"
      ? "text-green-600"
      : order.status === "pending"
      ? "text-amber-600"
      : order.status === "cancelled"
      ? "text-red-500"
      : "";

  return (
    <li className="flex items-center justify-between w-full gap-2 pb-2 text-sm border-b border-zinc-100">
      <p>#{order._id}</p>
      <p>{order.name}</p>
      <p>{order.email}</p>
      <p>${order.totalPrice}</p>
      <p
        className={`py-1 text-center capitalize rounded-full w-24 ${orderStatusBg} ${orderStatusText}`}
      >
        {order.status}
      </p>
      <p>{new Date(order.createdAt).toLocaleDateString()}</p>
      <button className="p-1 duration-200 rounded-full hover:bg-zinc-100 active:bg-zinc-200">
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
  );
}
