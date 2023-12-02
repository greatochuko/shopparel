import Rating from "./Rating";

type FeedbackType = {
  imgUrl: string;
  name: string;
  review: string;
  rating: number;
};

export default function Feedback({ feedback }: { feedback: FeedbackType }) {
  return (
    <div className="p-4 flex flex-col gap-3 aspect-4 border rounded-md flex-1 ">
      <div className="flex justify-between ">
        <img
          src={feedback.imgUrl}
          alt={feedback.name + "profile image"}
          className="border object-cover w-12 h-12"
        />
        <Rating rating={feedback.rating} />
      </div>
      <h2 className="font-semibold text-xl text-zinc-700">{feedback.name}</h2>
      <p className="text-sm text-zinc-600">{feedback.review}</p>
    </div>
  );
}
