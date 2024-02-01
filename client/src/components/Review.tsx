import { useState } from "react";
import { UserType } from "../context/UserContext";
import Rating from "./Rating";

export type ReviewType = {
  _id: string;
  user: UserType | string;
  rating: number;
  date: string;
  review: string;
};

export default function Review({ review }: { review: ReviewType }) {
  const [isHelpful, setIsHelpful] = useState(false);

  return (
    <div className="flex gap-2 items-start">
      <img
        src={(review.user as UserType).imgUrl}
        alt={(review.user as UserType).imgUrl}
        className="w-10 h-10 rounded-full bg-gray-100 object-cover"
      ></img>
      <div className="flex-1 flex flex-col gap-1">
        <div className="flex flex-col text-sm">
          <h3 className="font-semibold uppercase">
            {(review.user as UserType).firstName}{" "}
            {(review.user as UserType).lastName}
          </h3>
          <p>{review.date}</p>
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
          <button className="text-sm duration-200 hover:text-red-500">
            Report
          </button>
        </div>
      </div>
    </div>
  );
}
