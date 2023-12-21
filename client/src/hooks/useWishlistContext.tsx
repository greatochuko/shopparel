import { useContext } from "react";
import {
  WishlistContext,
  WishlistProviderValue,
} from "../context/WishlistContext";

export default function useWishlistContext() {
  const {
    wishlist,
    setWishlist,
    addProductToWishlist,
    removeProductFromWishlist,
  } = useContext(WishlistContext) as WishlistProviderValue;
  return {
    wishlist,
    setWishlist,
    addProductToWishlist,
    removeProductFromWishlist,
  };
}
