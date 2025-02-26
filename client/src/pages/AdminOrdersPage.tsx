import { useEffect, useState } from "react";
import AdminOrder, { AdminOrderType } from "../components/AdminOrder";
import { useOutletContext } from "react-router-dom";
import { fetchStoreOrders } from "../services/storeServices";
import { StoreType } from "../components/AdminPageLayout";
import AdminOrderWireframe from "../components/AdminOrderWireframe";

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<AdminOrderType[]>([]);
  const [loading, setLoading] = useState(true);
  const { store } = useOutletContext<{ store: StoreType }>();
  const [selectedOrders, setSelectedOrders] = useState<string[]>([]);

  useEffect(() => {
    document.title = `Shopparel-Admin: Orders`;

    async function getStoreStats() {
      setLoading(true);

      const orderData = await fetchStoreOrders(store?._id);
      if (orderData.error) return setLoading(false);
      setOrders(
        [...orderData].sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        )
      );

      setLoading(false);
    }
    if (!store?._id) return;
    getStoreStats();
  }, [store?._id]);

  function toggleCheck(orderId: string) {
    if (selectedOrders.includes(orderId)) {
      setSelectedOrders((curr) => curr.filter((id) => id !== orderId));
    } else {
      setSelectedOrders((curr) => [...curr, orderId]);
    }
  }

  function toggleSelectAll() {
    if (selectedOrders.length === orders.length) {
      setSelectedOrders([]);
    } else {
      // setSelectedOrders(orders.map((order) => order._id));
      setSelectedOrders(
        orders.map((order) => order._id + "-" + order.product.productId)
      );
    }
  }

  return (
    <div className="flex flex-col flex-1 gap-4 w-[90%] max-w-6xl mx-auto py-6 text-zinc-800">
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-xl font-semibold">Orders</h2>
        <p>
          {orders.length} Order{orders.length > 1 && "s"} found
        </p>
      </div>
      <section className="p-4 bg-white rounded-md ">
        <ul className="flex flex-col gap-4">
          <div className="items-center justify-between hidden gap-2 lg:flex">
            <input
              type="checkbox"
              name="selectAll"
              id="selectAll"
              checked={selectedOrders.length === orders.length}
              onChange={toggleSelectAll}
            />
            <h3 className="w-20">Order ID</h3>
            <h3 className="flex-1 whitespace-nowrap">Product Info</h3>
            <h3 className="flex-1">Address</h3>
            <h3 className="flex-1">Customer Info</h3>
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
          ) : orders.length ? (
            orders.map((order) => (
              <AdminOrder
                key={order._id + order.product.productId}
                order={order}
                isSelected={selectedOrders.includes(
                  order._id + "-" + order.product.productId
                )}
                toggleCheck={toggleCheck}
              />
            ))
          ) : (
            <p className="py-10 flex-center">
              There are currently no orders in the system. Start processing
              orders by directing customers to your online store
            </p>
          )}
        </ul>
      </section>
    </div>
  );
}
