import { createContext, useEffect, useState } from "react";
import {
  fetchAddToCart,
  fetchCart,
  fetchRemoveFromCart,
} from "../services/cartServices";
import useUserContext from "../hooks/useUserContext";
import FullScreenLoader from "../components/FullScreenLoader";

export type CartItemType = {
  _id?: string;
  userId: string;
  productId: string;
  name: string;
  imgUrl: string;
  color: string;
  size: string;
  price: number;
  shipping: number;
  quantity: number;
};

export type CartProviderValue = {
  cartItems: CartItemType[] | [];
  addItemToCart: (item: CartItemType) => void;
  removeItemFromCart: (itemId: string) => void;
  increaseItemQuantity: (item: CartItemType) => void;
  decreaseItemQuantity: (itemId: string) => void;
};

export const CartContext = createContext<CartProviderValue | null>(null);

export default function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const [refreshed, setRefreshed] = useState(false);
  const { user } = useUserContext();

  useEffect(() => {
    async function refreshUser() {
      if (!user?._id) return;
      const data = await fetchCart(user._id);

      if (data.error) {
        return setRefreshed(true);
      }

      setCartItems(data);
      setRefreshed(true);
    }
    refreshUser();
  }, [user?._id]);

  async function addItemToCart(item: CartItemType) {
    const data = await fetchAddToCart(item);
    if (data.error) return;
    setCartItems((curr) => [...curr, data]);
  }

  async function removeItemFromCart(itemId: string) {
    const data = await fetchRemoveFromCart(itemId);
    if (data?.error) return;
    setCartItems((curr) => curr.filter((cartItem) => cartItem._id !== itemId));
  }

  function increaseItemQuantity(item: CartItemType) {
    setCartItems((curr) =>
      curr.map((cartItem) => {
        if (cartItem._id === item._id) {
          cartItem.quantity += 1;
        }
        return cartItem;
      })
    );
  }

  function decreaseItemQuantity(itemId: string) {
    setCartItems((curr) =>
      curr.map((cartItem) => {
        if (cartItem._id === itemId) {
          if (cartItem.quantity > 1) cartItem.quantity -= 1;
          else removeItemFromCart(itemId);
        }
        return cartItem;
      })
    );
  }

  if (!refreshed) return <FullScreenLoader />;

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItemToCart,
        increaseItemQuantity,
        decreaseItemQuantity,
        removeItemFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
