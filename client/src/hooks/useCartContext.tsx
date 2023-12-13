import { useContext } from "react";
import { CartContext, CartProviderValue } from "../context/CartContext";

export default function useCartContext() {
  const {
    cartItems,
    addItemToCart,
    increaseItemQuantity,
    decreaseItemQuantity,
    removeItemFromCart,
    clearCart,
  } = useContext(CartContext) as CartProviderValue;
  return {
    cartItems,
    addItemToCart,
    increaseItemQuantity,
    decreaseItemQuantity,
    removeItemFromCart,
    clearCart,
  };
}
