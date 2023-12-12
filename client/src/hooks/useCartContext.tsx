import { useContext } from "react";
import { CartContext, CartProviderValue } from "../context/CartContext";

export default function useCartContext() {
  const { cartItems, addItemToCart, increaseItemQuantity } = useContext(
    CartContext
  ) as CartProviderValue;
  return { cartItems, addItemToCart, increaseItemQuantity };
}
