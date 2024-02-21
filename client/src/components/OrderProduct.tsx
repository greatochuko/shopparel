import { OrderProductType } from "./AdminOrder";

export default function OrderProduct({
  product,
}: {
  product: OrderProductType;
}) {
  const orderStatusBg = {
    active: "bg-blue-100",
    packaged: "bg-amber-100",
    delivered: "bg-green-100",
    cancelled: "bg-red-100",
  };
  const orderStatusText = {
    active: "text-blue-600",
    packaged: "text-amber-600",
    delivered: "text-green-600",
    cancelled: "text-red-500",
  };

  return (
    <div
      key={product.productId}
      className="flex flex-col justify-between gap-4 pb-4 border-b last:border-b-0 last:pb-0 sm:flex-row"
    >
      <div className="flex flex-1 gap-4">
        <div className="min-w-[80px] w-20 h-20 bg-zinc-200 rounded-md">
          <img
            src={product.imgUrl}
            alt=""
            className="object-contain w-full h-full"
          />
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="font-semibold">{product.name}</h3>
          <p>
            Color:{" "}
            <span className="text-xs font-semibold uppercase sm:text-sm">
              {product.color}
            </span>
          </p>
          <p>
            Size:{" "}
            <span className="font-semibold uppercase">{product.size}</span>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between flex-1 gap-2 sm:flex-col">
        <div className="flex flex-wrap items-center gap-4 lg:gap-10 lg:text-base">
          <p className="whitespace-nowrap">
            Qty: <span className="font-semibold">{product.quantity}</span>
          </p>
          <p className="whitespace-nowrap">
            Total Price:{" "}
            <span className="font-semibold">
              ${(product.price * product.quantity).toFixed(2)}
            </span>
          </p>
          <p className="whitespace-nowrap">
            Status:{" "}
            <span
              className={`font-semibold p-2 rounded-full ${
                orderStatusBg[product.status]
              } ${orderStatusText[product.status]}`}
            >
              {product.status}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
