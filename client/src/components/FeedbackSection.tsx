import Feedback from "./Feedback";
import SectionHeader from "./SectionHeader";

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
];

export default function FeedbackSection() {
  return (
    <div className="w-[90%] max-w-7xl mx-auto flex flex-col gap-4">
      <SectionHeader title="Feedback" />
      <div className="flex gap-4">
        {feedbacks.map((feedback) => (
          <Feedback feedback={feedback} key={feedback.name} />
        ))}
      </div>
    </div>
  );
}
