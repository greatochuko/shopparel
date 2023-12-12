import { createContext, useState } from "react";

const demoCartItems = [
  {
    _id: "12345678",
    name: "Plaid Flannel Shirt",
    imgUrl: "/men-product-4.png",
    color: "yellow",
    size: "l",
    price: 299,
    shipping: 0,
    quantity: 1,
  },
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
  addItemToCart: ((item: CartItemType) => void) | null;
};

export const CartContext = createContext<CartProviderValue>({
  cartItems: [],
  addItemToCart: null,
});

export default function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);

  function addItemToCart(item: CartItemType) {
    setCartItems((curr) => [...curr, item]);
  }

  return (
    <CartContext.Provider value={{ cartItems, addItemToCart }}>
      {children}
    </CartContext.Provider>
  );
}
