import React from "react";
import Toast from "./Toast";

export type ToastType = {
  id: string;
  type?: "success" | "error" | "warning";
  message: string;
};

export default function ToastContainer({
  toasts,
  setToasts,
}: {
  toasts: ToastType[];
  setToasts: React.Dispatch<React.SetStateAction<ToastType[]>>;
}) {
  function removeToast(toastId: string) {
    setToasts((curr) => curr.filter((toast) => toast.id !== toastId));
  }

  return (
    <div className="fixed flex flex-col gap-2 top-20 right-4  z-[1000]">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          toast={toast}
          removeToast={() => removeToast(toast.id)}
        />
      ))}
    </div>
  );
}
