import { createContext, useEffect, useState } from "react";
import {
  fetchAddToCart,
  fetchCart,
  fetchClearCart,
  fetchDecreaseQuantity,
  fetchIncreaseQuantity,
  fetchRemoveFromCart,
} from "../services/cartServices";
import useUserContext from "../hooks/useUserContext";
import FullScreenLoader from "../components/FullScreenLoader";
import { fetchUser } from "../services/userServices";

export type CartItemType = {
  _id: string;
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
  increaseItemQuantity: (itemId: string) => void;
  decreaseItemQuantity: (itemId: string) => void;
  clearCart: () => void;
};

export const CartContext = createContext<CartProviderValue | null>(null);

export default function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const [refreshed, setRefreshed] = useState(false);
  const { user, setUser } = useUserContext();

  useEffect(() => {
    async function refreshUser() {
      // Fetch and set Initial user context
      const userData = await fetchUser();
      if (userData.error) {
        return setRefreshed(true);
      }
      setUser(userData);

      // Fetch and set Initial user context
      if (!user?._id) return setRefreshed(true);
      const data = await fetchCart(user._id);
      if (data.error) {
        return setRefreshed(true);
      }
      setCartItems(data);
      setRefreshed(true);
    }
    refreshUser();
  }, [user?._id, setUser]);

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

  async function increaseItemQuantity(itemId: string) {
    const data = await fetchIncreaseQuantity(itemId);
    if (data?.error) return;

    setCartItems((curr) =>
      curr.map((cartItem) => {
        if (cartItem._id === itemId) {
          cartItem.quantity += 1;
        }
        return cartItem;
      })
    );
  }

  async function decreaseItemQuantity(itemId: string) {
    const data = await fetchDecreaseQuantity(itemId);
    if (data?.error) return;

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

  async function clearCart() {
    const data = await fetchClearCart();
    if (data?.error) return;
    setCartItems([]);
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
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
