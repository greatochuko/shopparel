import AdminOrder from "./AdminOrder";
import RecentOrdersHeader from "./RecentOrdersHeader";

const demoOrders = [
  {
    _id: "123456",
    name: "John Doe",
    email: "john@gmail.com",
    totalPrice: 123.99,
    status: "delivered",
    createdAt: "14 dec 2003",
  },
  {
    _id: "123452",
    name: "John Doe",
    email: "john@gmail.com",
    totalPrice: 123.99,
    status: "cancelled",
    createdAt: "14 dec 2003",
  },
  {
    _id: "123453",
    name: "John Doe",
    email: "john@gmail.com",
    totalPrice: 123.99,
    status: "pending",
    createdAt: "14 dec 2003",
  },
];

export default function RecentOrders() {
  return (
    <section className="p-4 bg-white rounded-md">
      <RecentOrdersHeader />
      <ul className="flex flex-col gap-4">
        {demoOrders.map((order) => (
          <AdminOrder key={order._id} order={order} />
        ))}
      </ul>
    </section>
  );
}
