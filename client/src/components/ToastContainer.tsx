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
  return (
    <div className="fixed top-20 right-4  z-[1000]">
      {toasts.map((toast) => (
        <Toast key={toast.id} toast={toast} />
      ))}
    </div>
  );
}
