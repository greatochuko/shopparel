import { HeartIcon } from "lucide-react";
import { Link } from "react-router-dom";

export default function EmptyWishlist() {
  return (
    <div className="flex-center mx-auto aspect-[1.3] w-[90%] max-w-xl flex-col gap-8 rounded-md border p-4 py-10 text-zinc-700 shadow">
      <div className="flex-center aspect-square w-[35%] rounded-full bg-green-100">
        <HeartIcon className="h-1/2 w-1/2 stroke-green-500" />
      </div>
      <div className="flex-center flex-col text-center">
        <h1 className="text-xl font-semibold sm:text-2xl">
          Your wishlist is empty
        </h1>
        <p className="text-sm text-zinc-500 sm:text-base">
          You don't have any products in your wishlist yet
        </p>
      </div>
      <Link
        to={"/products"}
        className="rounded-md bg-accent-blue-100 px-4 py-2 text-sm font-medium text-white ring-blue-400 duration-300 hover:bg-accent-blue-200 focus-visible:ring active:bg-accent-blue-300 sm:text-base"
      >
        Continue Shopping
      </Link>
    </div>
  );
}
