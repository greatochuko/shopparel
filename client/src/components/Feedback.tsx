import Rating from "./Rating";

type FeedbackType = {
  imgUrl: string;
  name: string;
  review: string;
  rating: number;
};

export default function Feedback({ feedback }: { feedback: FeedbackType }) {
  return (
    <div className="p-4 flex flex-col gap-3 h-full border rounded-md w-[calc(90vw-16px)] md:w-[calc(45vw-16px)] lg:w-[calc(30vw-16px)] max-w-[416px]">
      <div className="flex justify-between ">
        <img
          src={feedback.imgUrl}
          alt={feedback.name + "profile image"}
          className="object-cover w-12 h-12 border"
        />
        <Rating rating={feedback.rating} />
      </div>
      <h2 className="text-xl font-semibold text-zinc-700">{feedback.name}</h2>
      <p className="text-sm text-zinc-600">{feedback.review}</p>
    </div>
  );
}
