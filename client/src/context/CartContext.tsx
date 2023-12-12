import { createContext, useEffect, useState } from "react";

const demoCartItems = [
  {
    _id: "12345679",
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
  increaseItemQuantity: (item: CartItemType) => void;
  decreaseItemQuantity: (item: CartItemType) => void;
};

export const CartContext = createContext<CartProviderValue | null>(null);

export default function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cartItems, setCartItems] = useState<CartItemType[]>(demoCartItems);

  function addItemToCart(item: CartItemType) {
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

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItemToCart,
        increaseItemQuantity,
        decreaseItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
