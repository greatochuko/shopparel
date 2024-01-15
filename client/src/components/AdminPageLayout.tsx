import AdminPageSidebar from "./AdminPageSidebar";
import { useEffect, useState } from "react";
import { fetchStore } from "../services/storeServices";
import useUserContext from "../hooks/useUserContext";
import AdminPageHeader from "./AdminPageHeader";
import { Outlet, useNavigate } from "react-router-dom";

export type StoreType = {
  name: string;
  banner: string;
};

export default function AdminPageLayout() {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(true);
  const [loading, setLoading] = useState(true);
  const [store, setStore] = useState<StoreType | null>(null);
  const { user } = useUserContext();
  const navigate = useNavigate();

  console.log(store);

  useEffect(() => {
    async function getStore() {
      setLoading(true);
      if (!user?.store) return navigate("/become-a-seller");
      const data = await fetchStore(user?.store as string);
      if (data.error) return;
      setStore(data);
      setLoading(false);
    }
    getStore();
  }, [user?.store, navigate]);

  function toggleShowSidebar() {
    setSidebarIsOpen((curr) => !curr);
  }

  return (
    <main className="flex h-[100rem]">
      <AdminPageSidebar open={sidebarIsOpen} store={store} loading={loading} />
      <div className="flex flex-col flex-1 bg-zinc-100">
        <AdminPageHeader toggleShowSidebar={toggleShowSidebar} store={store} />
        <Outlet context={loading} />
      </div>
    </main>
  );
}
