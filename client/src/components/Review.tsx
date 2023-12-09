import { useState } from "react";
import { UserType } from "../context/UserContext";
import Rating from "./Rating";

export type ReviewType = {
  user: UserType;
  rating: number;
  date: string;
  review: string;
};

export default function Review({ review }: { review: ReviewType }) {
  const [isHelpful, setIsHelpful] = useState(false);
  return (
    <div className="flex gap-2">
      <img
        src={review.user.imgUrl}
        alt=""
        className="object-cover w-10 h-10 rounded-full"
      />
      <div className="flex flex-col gap-2">
        <div className="flex gap-4">
          <div className="flex flex-col text-sm">
            <h3 className="font-semibold uppercase">
              {review.user.firstName + review.user.lastName}
            </h3>
            <p>{review.date}</p>
          </div>
        </div>
        <Rating rating={review.rating} />
        <p className="text-sm">{review.review}</p>
        <div className="flex gap-8 mt-1">
          <button
            onClick={() => setIsHelpful((curr) => !curr)}
            className={`px-4 py-1.5 text-sm duration-200 border rounded-md w-fit hover:shadow-md border-zinc-300 ${
              isHelpful ? "border-accent-blue-100/70" : ""
            }`}
          >
            Helpful
          </button>
          <button className="text-sm duration-200 hover:text-black">
            Report
          </button>
        </div>
      </div>
    </div>
  );
}
