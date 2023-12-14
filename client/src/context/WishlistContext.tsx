import { createContext, useEffect, useState } from "react";
import {
  fetchAddProductToWishlist,
  fetchRemoveProductFromWishlist,
  fetchWishlist,
} from "../services/wishlistServices";
import useUserContext from "../hooks/useUserContext";
import FullScreenLoader from "../components/FullScreenLoader";
import { fetchUser } from "../services/userServices";
import { fetchCart } from "../services/cartServices";
import useCartContext from "../hooks/useCartContext";

export type WishlistItemType = {
  _id: string;
  productId: string;
  name: string;
  imgUrl: string;
  colors: string[];
  sizes: string[];
  price: number;
  shipping: number;
  quantity: number;
};

export type WishlistProviderValue = {
  wishlist: WishlistItemType[] | [];
  addProductToWishlist: (item: WishlistItemType) => void;
  removeProductFromWishlist: (wishlistId: string) => void;
  moveProductFromWishlistToCart: (
    product: WishlistItemType,
    color: string,
    size: string
  ) => void;
};

export const WishlistContext = createContext<WishlistProviderValue | null>(
  null
);

export default function WishlistProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [wishlist, setWishlist] = useState<WishlistItemType[]>([]);
  const [refreshed, setRefreshed] = useState(false);
  const { user, setUser } = useUserContext();
  const { setCartItems, addItemToCart } = useCartContext();

  // console.log(wishlist);

  useEffect(() => {
    async function refreshUser() {
      // Fetch and set Initial User context
      const userData = await fetchUser();
      if (userData.error) {
        return setRefreshed(true);
      }

      setUser(userData);

      // Fetch and set Initial Cart context
      if (!user?._id) return setRefreshed(true);
      const cartData = await fetchCart();
      if (cartData.error) {
        return setRefreshed(true);
      }
      setCartItems(cartData);

      // Fetch and set Initial Wishlist context
      if (!user?._id) return setRefreshed(true);
      const wishlistData = await fetchWishlist();

      if (wishlistData.error) {
        return setRefreshed(true);
      }
      setWishlist(wishlistData);
      setRefreshed(true);
    }
    refreshUser();
  }, [setCartItems, setUser, user?._id]);

  async function addProductToWishlist(product: WishlistItemType) {
    const resData = { ok: false };
    const data = await fetchAddProductToWishlist(
      product.productId,
      product.name,
      product.imgUrl,
      product.colors,
      product.sizes,
      product.price,
      product.shipping
    );
    if (data.error) return;
    setWishlist((curr) => [...curr, data]);
    return (resData.ok = true);
  }

  async function removeProductFromWishlist(wishlistId: string) {
    const data = await fetchRemoveProductFromWishlist(wishlistId);
    if (data.error) return;
    setWishlist((curr) => curr.filter((product) => product._id !== wishlistId));
  }

  async function moveProductFromWishlistToCart(
    product: WishlistItemType,
    size: string,
    color: string
  ) {
    const item = {
      _id: "1",
      userId: "1",
      productId: product.productId,
      name: product.name,
      imgUrl: product.imgUrl,
      color: size,
      size: color,
      price: product.price,
      shipping: product.shipping,
      quantity: 1,
    };
    addItemToCart(item);
    removeProductFromWishlist(product._id);
  }

  if (!refreshed) return <FullScreenLoader />;

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addProductToWishlist,
        removeProductFromWishlist,
        moveProductFromWishlistToCart,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}
