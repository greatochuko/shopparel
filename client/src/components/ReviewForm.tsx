import { useState } from "react";
import { createReview, editReview } from "../services/reviewServices";
import LoadingIndicator from "./LoadingIndicator";
import { ReviewType } from "./Review";
import Star from "./Star";

export default function ReviewForm({
  closeModal,
  productId,
  review,
}: {
  closeModal: () => void;
  productId: string;
  review?: ReviewType;
}) {
  const [rating, setRating] = useState(review?.rating || 4);
  const [tempRating, setTempRating] = useState(0);
  const [reviewText, setReview] = useState(review?.review || "");
  const [loading, setLoading] = useState(false);

  async function handlePostReview(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const data = await createReview(productId, rating, reviewText);
    if (data.error) return setLoading(false);
    closeModal();
    setLoading(false);
  }

  async function handleEditReview(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const data = await editReview(
      review?._id as string,
      rating,
      reviewText,
      review?.user as string
    );

    if (data.error) return setLoading(false);
    closeModal();
    setLoading(false);
  }

  return (
    <form
      className="p-4 w-[90%] max-w-2xl bg-white rounded-md shadow animate-zoom-in flex flex-col gap-4 text-zinc-700"
      onSubmit={review ? handleEditReview : handlePostReview}
      onClick={(e) => e.stopPropagation()}
    >
      <label htmlFor="rating">Rating</label>
      <div className="flex">
        <div className="flex">
          {Array.from(Array(5).keys()).map((_, i) => (
            <Star
              key={i}
              index={i + 1}
              rating={rating}
              setRating={setRating}
              tempRating={tempRating}
              setTempRating={setTempRating}
            />
          ))}
        </div>
        <p className="font-semibold ml-4">{rating}</p>
      </div>
      <label htmlFor="review">Review</label>
      <textarea
        name="review"
        id="review"
        value={reviewText}
        onChange={(e) => setReview(e.target.value)}
        placeholder="Write a review"
        className="w-full p-2 border aspect-[2]"
        required
      ></textarea>
      <div className="flex w-full gap-4 ml-auto sm:flex-row sm:w-fit">
        <button
          type="button"
          onClick={closeModal}
          className="w-full p-2 px-4 font-semibold duration-300 border rounded-md text-zinc-700 border-zinc-300 hover:border-zinc-400 bg-zinc-200 sm:w-40 hover:bg-zinc-300 focus-visible:ring focus-visible:ring-blue-400"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="w-full p-2 px-4 font-semibold text-white duration-300 rounded-md bg-accent-blue-100 sm:w-40 hover:bg-accent-blue-200 active:bg-accent-blue-300 focus-visible:ring focus-visible:ring-blue-400 flex-center"
        >
          {loading ? <LoadingIndicator /> : "Submit"}
        </button>
      </div>
    </form>
  );
}
