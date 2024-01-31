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
        {loading ? (
          <>
            <AdminOrderWireframe />
            <AdminOrderWireframe />
            <AdminOrderWireframe />
          </>
        ) : (
          orders.map((order) => <AdminOrder key={order._id} order={order} />)
        )}
      </ul>
    </section>
  );
}
