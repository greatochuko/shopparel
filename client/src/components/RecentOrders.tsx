import AdminOrder, { AdminOrderType } from "./AdminOrder";
import RecentOrdersHeader from "./RecentOrdersHeader";

export default function RecentOrders({ orders }: { orders: AdminOrderType[] }) {
  return (
    <section className="p-4 bg-white rounded-md">
      <RecentOrdersHeader />
      <ul className="flex flex-col gap-4">
        {orders.map((order) => (
          <AdminOrder key={order._id} order={order} />
        ))}
      </ul>
    </section>
  );
}
