import { createContext, useState } from "react";
import ToastContainer, { ToastType } from "../components/ToastContainer";

export type ToastProviderValue = {
  toasts: ToastType[];
  createToast: (message: string, type: "success" | "error" | "warning") => void;
};

export const ToastContext = createContext<ToastProviderValue | null>(null);

export default function ToastProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [toasts, setToasts] = useState<ToastType[]>([]);

  function createToast(message: string, type: "success" | "error" | "warning") {
    setToasts((curr) => [
      ...curr,
      {
        id: crypto.randomUUID(),
        message,
        type,
      },
    ]);
  }

  return (
    <ToastContext.Provider value={{ toasts, createToast }}>
      <ToastContainer toasts={toasts} setToasts={setToasts} />

      {children}
    </ToastContext.Provider>
  );
}
