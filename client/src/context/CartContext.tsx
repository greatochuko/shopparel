import { createContext, useEffect, useState } from "react";
import { fetchAddToCart, fetchCart } from "../services/cartServices";
import useUserContext from "../hooks/useUserContext";
import FullScreenLoader from "../components/FullScreenLoader";

const demoCartItems = [
  {
    _id: "12345679",
    userId: "65738973a4dfe79b73873662",
    name: "Classic Cotton Crew Neck Tee",
    imgUrl: "/men-product-3.png",
    color: "yellow",
    size: "l",
    price: 299,
    shipping: 24,
    quantity: 3,
  },
  {
    _id: "12345670",
    userId: "65738973a4dfe79b73873662",
    name: "Wrap Maxi Dress",
    imgUrl: "/women-product-3.png",
    color: "yellow",
    size: "l",
    price: 299,
    shipping: 0,
    quantity: 2,
  },
];

export type CartItemType = {
  _id: string;
  userId: string;
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
  removeItemFromCart: (item: CartItemType) => void;
  increaseItemQuantity: (item: CartItemType) => void;
  decreaseItemQuantity: (item: CartItemType) => void;
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
    setCartItems((curr) => [...curr, item]);
  }

  function removeItemFromCart(item: CartItemType) {
    setCartItems((curr) =>
      curr.filter((cartItem) => cartItem._id !== item._id)
    );
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

  function decreaseItemQuantity(item: CartItemType) {
    setCartItems((curr) =>
      curr.map((cartItem) => {
        if (cartItem._id === item._id) {
          if (cartItem.quantity > 1) cartItem.quantity -= 1;
          else removeItemFromCart(item);
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
