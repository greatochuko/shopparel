import { Link } from "react-router-dom";

const categories = [
  {
    title: "Men's Fashion",
    url: "men",
    imgUrl: "/slim-fit-button-down-t-shirt.png",
    totalItems: 23,
    color: "bg-[#D38236]/80",
  },
  {
    title: "Women's Fashion",
    url: "women",
    totalItems: 13,
    imgUrl: "/off-shoulder blouse.png",
    color: "bg-[#009DE0]/80",
  },
  {
    title: "Accessories",
    url: "accessories",
    totalItems: 22,
    imgUrl: "/accessories-category.png",
    color: "bg-[#FFCB47]/80",
  },
  {
    title: "Cosmetics",
    url: "cosmetics",
    imgUrl: "/cosmetics-category.png",
    totalItems: 8,
    color: "bg-[#EB9E99]/80",
  },
];

export default function CategorySection() {
  return (
    <section className="max-w-6xl w-[90%] mx-auto mb-4">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-xl font-semibold text-zinc-700">Categories</h3>
        <Link to={"/categories"} className="hover:underline">
          See All
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-4 md:gap-2 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <Link
            to={`/categories/${category.url}`}
            key={category.title}
            className={`flex group items-center justify-evenly overflow-hidden gap-2 p-2 px-1 flex-1 rounded-md shadow-md duration-300 hover:-translate-y-1 ${category.color}`}
          >
            <div className="flex flex-col px-4 gap-2 text-white max-w-[50%]">
              <h3 className="text-2xl font-bold lg:text-base xl:text-xl">
                {category.title}
              </h3>
              <p className="text-sm whitespace-nowrap">
                {category.totalItems} Items
              </p>
              <p className="text-sm font-semibold uppercase xl:text-base lg:text-sm group-hover:underline ">
                Explore Items
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
