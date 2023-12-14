import { createContext, useEffect, useState } from "react";
import {
  fetchAddProductToWishlist,
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
  color: string;
  size: string;
  price: number;
  shipping: number;
  quantity: number;
};

export type WishlistProviderValue = {
  wishlist: WishlistItemType[] | [];
  addProductToWishlist: (item: WishlistItemType) => void;
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
  const { setCartItems } = useCartContext();

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
      const cartData = await fetchCart(user._id);
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
    const data = await fetchAddProductToWishlist(
      product.productId,
      product.name,
      product.imgUrl,
      product.color,
      product.size,
      product.price,
      product.shipping
    );
    if (data.error) return;
    setCartItems((curr) => [...curr, data]);
  }

  if (!refreshed) return <FullScreenLoader />;

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addProductToWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}
