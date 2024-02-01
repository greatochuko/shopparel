import AdminOrder, { AdminOrderType } from "./AdminOrder";
import AdminOrderWireframe from "./AdminOrderWireframe";
import RecentOrdersHeader from "./RecentOrdersHeader";

export default function RecentOrders({
  orders,
  loading,
}: {
  orders: AdminOrderType[];
  loading: boolean;
}) {
  return (
    <section className="p-4 bg-white rounded-md">
      <RecentOrdersHeader />
      <ul className="flex flex-col gap-4">
        <div className="items-center justify-between hidden gap-2 md:flex">
          <h3 className="w-28">Order ID</h3>
          <h3 className="flex-1 whitespace-nowrap">Product Info</h3>
          <h3 className="flex-1">Address</h3>
          <h3 className="w-24">Date</h3>
          <h3 className="w-24 flex-center">Price</h3>
          <h3 className="w-20 flex-center">Status</h3>
          <h3 className="w-8">Opt</h3>
        </div>
        {loading ? (
          <>
            <AdminOrderWireframe />
            <AdminOrderWireframe />
            <AdminOrderWireframe />
          </>
        ) : (
          orders.map((order) => (
            <AdminOrder
              key={order._id + order.product.productId}
              order={order}
            />
          ))
        )}
      </ul>
    </section>
  );
}
