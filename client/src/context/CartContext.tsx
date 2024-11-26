import { createContext, useCallback, useEffect, useState } from "react";
import {
  fetchAddToCart,
  fetchClearCart,
  fetchDecreaseQuantity,
  fetchIncreaseQuantity,
  fetchRemoveFromCart,
} from "../services/cartServices";
import useUserContext from "../hooks/useUserContext";
import { ProductType } from "../components/Product";
import { fetchUser } from "../services/userServices";
import useWishlistContext from "../hooks/useWishlistContext";
import { WishlistItemType } from "./WishlistContext";
import FullScreenLoader from "../components/FullScreenLoader";

export type CartItemType = {
  _id: string;
  userId: string;
  product?: ProductType;
  name: string;
  imgUrl: string;
  color: string;
  size: string;
  price: number;
  shipping: number;
  quantity: number;
  storeId: string;
};

export type CartProviderValue = {
  cartItems: CartItemType[] | [];
  addItemToCart: (item: CartItemType) => void;
  removeItemFromCart: (itemId: string) => void;
  increaseItemQuantity: (itemId: string) => void;
  decreaseItemQuantity: (itemId: string) => void;
  clearCart: () => void;
  clearOrderCart: () => void;
  setCartItems: React.Dispatch<React.SetStateAction<CartItemType[]>>;
};

export const CartContext = createContext<CartProviderValue | null>(null);

export default function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, setUser } = useUserContext();
  const { setWishlist } = useWishlistContext();
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const [refreshed, setRefreshed] = useState(false);
  const [error, setError] = useState(false);

  const refreshUser = useCallback(
    async function refreshUser() {
      const { userData, error } = await fetchUser();

      if (!error) {
        if (!userData.error) {
          setUser(userData);
          setCartItems(userData?.cart as CartItemType[]);
          setWishlist(userData?.wishlist as WishlistItemType[]);
          setError(false);
        } else {
          setUser(null);
          localStorage.removeItem("token");
          const localCart: CartItemType[] = JSON.parse(
            localStorage.getItem("cart") as string
          );

          setCartItems(localCart || []);
        }
      } else {
        setError(true);
      }
      setRefreshed(true);
    },
    [setUser, setWishlist]
  );

  useEffect(() => {
    refreshUser();
  }, [refreshUser, setCartItems, setUser, setWishlist]);

  async function addItemToCart(item: CartItemType) {
    let data: CartItemType & { error: string };
    if (!user) {
      const localCart: CartItemType[] = JSON.parse(
        localStorage.getItem("cart") as string
      );
      if (localCart) {
        localStorage.setItem("cart", JSON.stringify([...localCart, item]));
      } else {
        localStorage.setItem("cart", JSON.stringify([item]));
      }
    } else {
      data = await fetchAddToCart(item);
      if (data.error) {
        return;
      }
    }
    setCartItems((curr) => [...curr, data || item]);
  }

  async function removeItemFromCart(itemId: string) {
    if (user) {
      const data = await fetchRemoveFromCart(itemId);
      if (data?.error) {
        return;
      }
    } else {
      const localCart: CartItemType[] = JSON.parse(
        localStorage.getItem("cart") as string
      );
      localStorage.setItem(
        "cart",
        JSON.stringify(localCart.filter((cartItem) => cartItem._id !== itemId))
      );
    }
    setCartItems((curr) => curr.filter((cartItem) => cartItem._id !== itemId));
  }

  async function increaseItemQuantity(itemId: string) {
    if (!user) {
      const localCart: CartItemType[] = JSON.parse(
        localStorage.getItem("cart") as string
      );
      const productInCart = localCart.find(
        (cartItem) => cartItem._id === itemId
      );
      if (!productInCart) return;
      localStorage.setItem(
        "cart",
        JSON.stringify(
          localCart.map((cartItem) => {
            if (cartItem._id === productInCart._id) {
              cartItem.quantity += 1;
              return cartItem;
            }
            return cartItem;
          })
        )
      );
    } else {
      const data = await fetchIncreaseQuantity(itemId);
      if (data?.error) {
        return;
      }
    }

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
    if (!user) {
      const localCart: CartItemType[] = JSON.parse(
        localStorage.getItem("cart") as string
      );
      const productInCart = localCart.find(
        (cartItem) => cartItem._id === itemId
      );
      if (!productInCart) return;
      localStorage.setItem(
        "cart",
        JSON.stringify(
          localCart.map((cartItem) => {
            if (cartItem._id === productInCart._id) {
              cartItem.quantity -= 1;
              return cartItem;
            }
            return cartItem;
          })
        )
      );
    } else {
      const data = await fetchDecreaseQuantity(itemId);
      if (data?.error) {
        return;
      }
    }

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
    if (user) {
      const data = await fetchClearCart();
      if (data?.error) {
        return;
      }
    } else {
      localStorage.setItem("cart", JSON.stringify([]));
    }
    setCartItems([]);
  }

  async function clearOrderCart() {
    localStorage.setItem("cart", JSON.stringify([]));
    setCartItems([]);
  }

  if (!refreshed) return <FullScreenLoader />;

  if (error) {
    return (
      <div className="flex-center flex-col h-screen w-[80%] max-w-3xl mx-auto">
        <img
          src="/favicon.png"
          alt="shopparel logo"
          className="w-32 h-32 mb-4"
        />
        <h2 className="font-semibold text-9xl text-accent-blue-100">500</h2>
        <div className="text-center">
          <p className="mb-1 text-xl font-semibold text-zinc-800">
            Something Went wrong
          </p>
          <p className="text-sm text-zinc-400">
            Error Loading data from Server
          </p>
        </div>
        <button
          onClick={refreshUser}
          className="p-1 px-4 mt-4 text-white duration-300 bg-red-500 rounded-full hover:bg-red-600 active:bg-red-700"
        >
          Refresh
        </button>
      </div>
    );
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItemToCart,
        increaseItemQuantity,
        decreaseItemQuantity,
        removeItemFromCart,
        clearCart,
        clearOrderCart,
        setCartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
