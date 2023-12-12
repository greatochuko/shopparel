import { useContext } from "react";
import { CartContext, CartProviderValue } from "../context/CartContext";

export default function useCartContext() {
  const { cartItems, addItemToCart } = useContext(
    CartContext
  ) as CartProviderValue;
  return { cartItems, addItemToCart };
}
