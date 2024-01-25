import DashboardStats from "../components/DashboardStats";
import DashboardStatsWireframe from "../components/DashboardStatsWireframe";
import RecentOrders from "../components/RecentOrders";
import RecentOrdersWireframe from "../components/RecentOrdersWireframe";
import { useEffect, useState } from "react";
import { fetchStoreProducts } from "../services/storeServices";
import { useOutletContext } from "react-router-dom";
import { StoreType } from "../components/AdminPageLayout";

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const { store } = useOutletContext<{ store: StoreType }>();
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalOrders: 0,
    totalSales: 0,
    totalIncome: 0,
  });

  useEffect(() => {
    async function getStoreStats() {
      setLoading(true);
      const data = await fetchStoreProducts(store?._id);
      if (data.error) return setLoading(false);
      setStats((curr) => ({ ...curr, totalProducts: data.length }));
      setLoading(false);
    }
    getStoreStats();
  }, [store?._id]);

  return (
    <div className="flex flex-col flex-1 gap-4 w-[90%] max-w-7xl mx-auto py-6 text-zinc-800">
      {loading ? <DashboardStatsWireframe /> : <DashboardStats stats={stats} />}
      {loading ? <RecentOrdersWireframe /> : <RecentOrders />}
    </div>
  );
}
