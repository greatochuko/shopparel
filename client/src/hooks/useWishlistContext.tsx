import { useContext } from "react";
import {
  WishlistContext,
  WishlistProviderValue,
} from "../context/WishlistContext";

export default function useWishlistContext() {
  const { addProductToWishlist, wishlist } = useContext(
    WishlistContext
  ) as WishlistProviderValue;
  return {
    addProductToWishlist,
    wishlist,
  };
}
