import { Link } from "react-router-dom";

export default function CategoryProducts({
  title,
  category,
}: {
  title: string;
  category: string;
}) {
  return (
    <div className="max-w-7xl w-[90%] mx-auto">
      <div className="flex justify-between items-center">
        <h2>{title}</h2> <Link to={`/category/${category}`}>See all</Link>
      </div>
    </div>
  );
}
