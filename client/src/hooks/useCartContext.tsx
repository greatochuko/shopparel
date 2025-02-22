import { useContext } from "react";
import { CartContext, CartProviderValue } from "../context/CartContext";

export default function useCartContext() {
  const context = useContext(CartContext) as CartProviderValue;
  return context;
}
