import { useState } from "react";
import { UserType } from "../context/UserContext";
import Rating from "./Rating";

export type ReviewType = {
  _id: string;
  user: UserType;
  rating: number;
  createdAt: string;
  review: string;
};

export default function Review({ review }: { review: ReviewType }) {
  const [isHelpful, setIsHelpful] = useState(false);
  console.log(review.user);

  return (
    <div className="flex items-start gap-2">
      <img
        src={review.user.imgUrl}
        alt={review.user.imgUrl}
        className="bg-gray-100 rounded-full w-10 h-10 object-cover"
      ></img>
      <div className="flex flex-col flex-1 gap-1">
        <div className="flex flex-col text-sm">
          <h3 className="font-semibold uppercase">
            {review.user.firstName} {review.user.lastName}
          </h3>
          <p>{new Date(review.createdAt).toDateString()}</p>
        </div>
        <Rating rating={review.rating} />
        <p className="text-sm">{review.review}</p>
        <div className="flex gap-8 mt-1">
          <button
            onClick={() => setIsHelpful((curr) => !curr)}
            className={`px-4 py-1.5 text-sm duration-200 border rounded-md w-fit hover:shadow-md border-zinc-300 ${
              isHelpful
                ? "border-accent-blue-100/70 bg-green-600 text-white border-green-600"
                : ""
            }`}
          >
            Helpful
          </button>
          <button className="text-sm hover:text-red-500 duration-200">
            Report
          </button>
        </div>
      </div>
    </div>
  );
}
