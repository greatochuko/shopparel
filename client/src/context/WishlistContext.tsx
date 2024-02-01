import { createContext, useState } from "react";
import {
  fetchAddProductToWishlist,
  fetchRemoveProductFromWishlist,
} from "../services/wishlistServices";

export type WishlistItemType = {
  _id: string;
  productId: string;
  storeId: string;
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
  setWishlist: React.Dispatch<React.SetStateAction<WishlistItemType[]>>;
  addProductToWishlist: (item: WishlistItemType) => void;
  removeProductFromWishlist: (wishlistId: string) => void;
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

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        setWishlist,
        addProductToWishlist,
        removeProductFromWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}
