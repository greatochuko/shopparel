import { useContext } from "react";
import { ToastContext, ToastProviderValue } from "../context/ToastContext";

export default function useToastContext() {
  const { toasts, createToast } = useContext(
    ToastContext
  ) as ToastProviderValue;
  return {
    toasts,
    createToast,
  };
}
