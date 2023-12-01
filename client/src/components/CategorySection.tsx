import { Link } from "react-router-dom";

const categories = [
  {
    title: "Men's Fashion",
    url: "men",
    imgUrl: "/slim-fit-button-down-t-shirt.png",
    totalItems: 23,
    color: "#D38236",
  },
  {
    title: "Women's Fashion",
    url: "women",
    totalItems: 13,
    imgUrl: "/off-shoulder blouse.png",
    color: "#D6EDFF",
  },
];

export default function CategorySection() {
  return (
    <section className="max-w-7xl w-[90%] mx-auto mb-4">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-xl font-semibold text-zinc-700">Categories</h3>
        <Link to={"/categories"} className="hover:underline">
          See All
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {categories.map((category) => (
          <Link
            to={`/categories/${category.url}`}
            key={category.title}
            style={{
              backgroundColor: category.color + "77",
              border: `solid 1px ${category.color}99`,
            }}
            className="flex items-center justify-evenly overflow-hidden gap-2 p-2 px-1 flex-1 rounded-md shadow-md duration-300 hover:-translate-y-1 "
          >
            <div className="flex flex-col px-4 gap-2 text-zinc-700 max-w-[50%]">
              <h3 className="text-xl sm:text-2xl font-bold ">
                {category.title}
              </h3>
              <p className="whitespace-nowrap sm:text-lg">
                {category.totalItems} Items
              </p>
            </div>

            <img
              src={category.imgUrl}
              alt=""
              className="aspect-square max-w-[50%] object-contain "
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
