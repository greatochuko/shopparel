import { useState } from "react";
import { createReview } from "../services/reviewServices";
import LoadingIndicator from "./LoadingIndicator";

export default function ReviewForm({
  closeModal,
  productId,
}: {
  closeModal: () => void;
  productId: string;
}) {
  const [rating, setRating] = useState(4);
  const [review, setReview] = useState("");
  const [loading, setLoading] = useState(false);

  async function handlePostReview(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const data = await createReview(productId, rating, review);
    console.log(data);

    if (data.error) return setLoading(false);
    closeModal();
    setLoading(false);
  }

  return (
    <form
      className="p-4 w-[90vw] max-w-[100%] flex flex-col gap-4 text-zinc-700"
      onSubmit={handlePostReview}
    >
      <label htmlFor="rating">Rating</label>
      <div className="flex gap-4 ">
        <input
          type="range"
          name="rating"
          id="rating"
          min={1}
          max={5}
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          className="sm:max-w-[200px] flex-1"
        />
        <p className="font-semibold">{rating}</p>
      </div>
      <label htmlFor="review">Review</label>
      <textarea
        name="review"
        id="review"
        value={review}
        onChange={(e) => setReview(e.target.value)}
        placeholder="Write a review"
        className="w-full p-2 border aspect-[2]"
        required
      ></textarea>
      <div className="flex flex-col w-full gap-4 ml-auto sm:flex-row sm:w-fit">
        <button
          type="button"
          onClick={closeModal}
          className="w-full p-2 px-4 font-semibold duration-300 border rounded-md text-zinc-700 border-zinc-300 hover:border-zinc-400 bg-zinc-200 sm:w-40 hover:bg-zinc-300 focus-visible:ring focus-visible:ring-blue-400"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="w-full p-2 px-4 font-semibold text-white duration-300 rounded-md bg-accent-blue-100 sm:w-40 hover:bg-accent-blue-200 active:bg-accent-blue-300 focus-visible:ring focus-visible:ring-blue-400"
        >
          {loading ? <LoadingIndicator /> : "Submit"}
        </button>
      </div>
    </form>
  );
}
