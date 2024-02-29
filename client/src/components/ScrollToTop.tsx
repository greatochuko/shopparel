import { useEffect, useState } from "react";
import { useLocation, Outlet } from "react-router-dom";
import ToastContainer, { ToastType } from "./ToastContainer";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const [toasts, setToasts] = useState<ToastType[]>([
    { id: "sadf", message: "Success message" },
  ]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <ToastContainer toasts={toasts} setToasts={setToasts} />
      <Outlet />
    </>
  );
}
