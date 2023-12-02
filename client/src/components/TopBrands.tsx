import { Link } from "react-router-dom";

const brands = [
  { name: "Gucci", url: "gucci", imgUrl: "/gucci.png" },
  { name: "Luis Vuitton", url: "luis-vuitton", imgUrl: "/luis-vuitton.png" },
  { name: "Chanel", url: "chanel", imgUrl: "/chanel.png" },
  { name: "Nike", url: "nike", imgUrl: "/nike.png" },
  { name: "Adidas", url: "adidas", imgUrl: "/adidas.png" },
  { name: "Prada", url: "versace", imgUrl: "/versace.png" },
];

export default function TopBrands() {
  return (
    <div className="bg-zinc-600 w-[90%] max-w-7xl rounded-md mx-auto p-4 md:p-8 flex flex-col gap-4 lg:gap-6 text-white">
      <h2 className="text-lg font-bold text-center md:text-xl lg:text-2xl xl:text-3xl">
        Top Brands
      </h2>
      <p className="text-center ">
        Up to <span className="text-yellow-300 ">60%</span> off on brands
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        {brands.map((brand) => (
          <Link
            to={`/brands/${brand.url}`}
            key={brand.name}
            className="w-[45%] sm:w-[150px] hover:scale-105 duration-300 lg:w-[160px] max-w-[180px] xl:flex-1 rounded-md aspect-[2.2] bg-white p-3 "
          >
            <img
              src={brand.imgUrl}
              alt=""
              className="object-contain w-full h-full"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
