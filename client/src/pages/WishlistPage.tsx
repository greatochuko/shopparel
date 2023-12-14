import EmptyWishlist from "../components/EmptyWishlist";
import WishlistItem from "../components/WishlistItem";
import useWishlistContext from "../hooks/useWishlistContext";

export default function WishlistPage() {
  const { wishlist } = useWishlistContext();

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
