import Feedback from "./Feedback";
import SectionHeader from "./SectionHeader";
import { useState, useEffect } from "react";

const feedbacks = [
  {
    imgUrl: "/feedback-user-image-1.jpg",
    name: "Ronald Richards",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut nemo et tempora itaque sint doloremque eligendi eos consequatur, nihil ad doloribus possimus tempore, quidem error nulla maxime ducimus! Dolorem, quam.",
    rating: 4,
  },
  {
    imgUrl: "/feedback-user-image-2.jpg",
    name: "Ronald Richards 2",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut nemo et tempora itaque sint doloremque eligendi eos consequatur, nihil ad doloribus possimus tempore, quidem error nulla maxime ducimus! Dolorem, quam.",
    rating: 2,
  },
  {
    imgUrl: "/feedback-user-image-3.jpg",
    name: "Ronald Richards 3",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut nemo et tempora itaque sint doloremque eligendi eos consequatur, nihil ad doloribus possimus tempore, quidem error nulla maxime ducimus! Dolorem, quam.",
    rating: 5,
  },
  {
    imgUrl: "/feedback-user-image-3.jpg",
    name: "Ronald Richards 4",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut nemo et tempora itaque sint doloremque eligendi eos consequatur, nihil ad doloribus possimus tempore, quidem error nulla maxime ducimus! Dolorem, quam.",
    rating: 5,
  },
  {
    imgUrl: "/feedback-user-image-3.jpg",
    name: "Ronald Richards 5",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut nemo et tempora itaque sint doloremque eligendi eos consequatur, nihil ad doloribus possimus tempore, quidem error nulla maxime ducimus! Dolorem, quam.",
    rating: 5,
  },
  {
    imgUrl: "/feedback-user-image-3.jpg",
    name: "Ronald Richards 6",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut nemo et tempora itaque sint doloremque eligendi eos consequatur, nihil ad doloribus possimus tempore, quidem error nulla maxime ducimus! Dolorem, quam.",
    rating: 5,
  },
];

export default function FeedbackSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((curr) => {
        let feedbackShown = 3;
        if (window.innerWidth < 1024) feedbackShown = 2;
        if (window.innerWidth < 768) feedbackShown = 1;

        if (curr + 1 >= feedbacks.length / feedbackShown) return 0;
        return curr + 1;
      });
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="w-[90%] max-w-7xl overflow-hidden mx-auto flex flex-col gap-4">
      <SectionHeader title="Feedback" />
      <div className="relative">
        <div
          style={{
            marginLeft: `${-(100 * index)}%`,
          }}
          className={`flex gap-4 w-fit duration-500`}
        >
          {feedbacks.map((feedback) => (
            <Feedback feedback={feedback} key={feedback.name} />
          ))}
        </div>
      </div>

      <div className={`flex-center gap-2`}>
        <div className="w-4 h-2 duration-200 rounded-full bg-zinc-600"></div>
        <div className="w-2 h-2 duration-200 rounded-full bg-zinc-200"></div>
        <div className="w-2 h-2 duration-200 rounded-full bg-zinc-200"></div>
      </div>
    </div>
  );
}