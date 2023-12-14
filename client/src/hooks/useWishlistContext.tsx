import { useContext } from "react";
import {
  WishlistContext,
  WishlistProviderValue,
} from "../context/WishlistContext";

export default function useWishlistContext() {
  const {
    wishlist,
    addProductToWishlist,
    removeProductFromWishlist,
    moveProductFromWishlistToCart,
  } = useContext(WishlistContext) as WishlistProviderValue;
  return {
    wishlist,
    addProductToWishlist,
    removeProductFromWishlist,
    moveProductFromWishlistToCart,
  };
}
