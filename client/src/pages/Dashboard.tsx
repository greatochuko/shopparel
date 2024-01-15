import { useOutletContext } from "react-router-dom";
import DashboardStats from "../components/DashboardStats";
import DashboardStatsWireframe from "../components/DashboardStatsWireframe";
import RecentOrders from "../components/RecentOrders";
import RecentOrdersWireframe from "../components/RecentOrdersWireframe";

export default function Dashboard() {
  const [loading] = useOutletContext<[loading: boolean]>();
  return (
    <div className="flex flex-col flex-1 gap-4 w-[90%] max-w-7xl mx-auto py-6 text-zinc-800">
      <h1 className="text-xl font-semibold">Dashboard</h1>
      {loading ? <DashboardStatsWireframe /> : <DashboardStats />}
      {loading ? <RecentOrdersWireframe /> : <RecentOrders />}
    </div>
  );
}
