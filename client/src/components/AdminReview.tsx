import Rating from "./Rating";
import { ReviewType } from "./Review";

export default function AdminReview({ review }: { review: ReviewType }) {
  return (
    <div className="flex flex-col gap-2 p-4 bg-white border-b">
      <div className="flex items-start justify-between">
        <div className="flex gap-2">
          <img
            src={review.user.imgUrl}
            alt={`${review.user.firstName} ${review.user.lastName} profile picture`}
            className="object-cover w-12 h-12 rounded-full bg-zinc-200"
          />
          <div className="flex flex-col justify-between">
            <h3 className="font-semibold text-zinc-700">
              {review.user.firstName} {review.user.lastName}
            </h3>
            <p className="text-sm text-zinc-500">
              {new Date(review.createdAt)
                .toDateString()
                .split(" ")
                .slice(1)
                .join(" ")}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 text-sm sm:ml-12 sm:text-base">
        <p className="text-zinc-600">{review.review}</p>
        <div className="flex gap-4">
          <Rating rating={review.rating} />
          <button className="gap-1 p-1 px-2 text-white duration-300 bg-green-600 rounded-full flex-center hover:bg-green-700 active:bg-green-800">
            Reply
            <svg
              height={20}
              width={20}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.4 3.80353C7.55322 2.26658 10 3.08182 10 5.00302V8.00928C14.6772 7.86093 17.7771 9.50672 19.7796 11.7657C21.8614 14.1142 22.6633 17.0184 22.9781 18.9028C23.116 19.7283 22.5806 20.3237 22.0149 20.5275C21.4711 20.7234 20.7467 20.6283 20.2749 20.0531C18.6945 18.1261 15.5 15.4884 10 15.4884V18.997C10 20.9182 7.55321 21.7334 6.4 20.1965L1.6 13.7992C0.800001 12.733 0.800001 11.267 1.6 10.2008L6.4 3.80353ZM8 5.00302L3.2 11.4003C2.93333 11.7557 2.93333 12.2443 3.2 12.5997L8 18.997V14.5C8 13.9477 8.44772 13.5 9 13.5H10C17 13.5 20.6009 17.4621 20.6009 17.4621C20.1828 16.0361 19.4749 14.4371 18.2829 13.0924C16.7183 11.3273 14.5 10 10 10H9C8.44772 10 8 9.55228 8 9V5.00302Z"
                  fill="#fff"
                ></path>
              </g>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
