import { useEffect, useState } from "react";
import EmptyWishlist from "../components/EmptyWishlist";
import { fetchWishlist } from "../services/wishlistServices";
import WishlistItem from "../components/WishlistItem";
import { WishlistItemType } from "../context/WishlistContext";

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState<WishlistItemType[]>([]);

  useEffect(() => {
    async function getWishlist() {
      const data = await fetchWishlist();
      console.log(data);
      setWishlist(data);
    }
    getWishlist();
  }, []);

  return (
    <section className="flex-1">
      {wishlist.length ? (
        <>
          <h1 className="text-xl font-semibold">Wishlist</h1>
          <ul className="flex flex-col gap-4 mt-4">
            {wishlist.map((product) => (
              <WishlistItem product={product} key={product._id} />
            ))}
          </ul>
        </>
      ) : (
        <EmptyWishlist />
      )}
    </section>
  );
}
