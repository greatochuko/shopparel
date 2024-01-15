import { Link } from "react-router-dom";

export default function RecentOrdersHeader() {
  return (
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-xl font-semibold">Recent Orders</h2>
      <Link
        to={"/admin/orders"}
        className="p-2 rounded-md hover:text-accent-blue-100 focus-visible:ring"
      >
        See all
      </Link>
    </div>
  );
}
