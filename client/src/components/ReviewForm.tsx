export default function ReviewForm({ closeModal }: { closeModal: () => void }) {
  function handlePostReview(e: React.FormEvent) {
    e.preventDefault();
    closeModal();
  }

  return (
    <form
      className="p-4 w-[90vw] max-w-[100%] flex flex-col gap-4 text-zinc-700"
      onSubmit={handlePostReview}
    >
      <label htmlFor="review">Review</label>
      <textarea
        name="review"
        id="review"
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
          Submit
        </button>
      </div>
    </form>
  );
}
