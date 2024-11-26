import { Link } from "react-router-dom";
import menHeroImage from "../assets/men-hero-image.png";
import womenHeroImage from "../assets/women-hero-image.png";
import { useEffect, useState } from "react";

const heroDataList = [
  {
    title: "Style Reimagined: Men's Fashion",
    subTitle:
      "Elevate your wardrobe with our men's fashion collection. Discover the latest trends, timeless pieces, and versatile styles to keep you looking sharp.",
    image: menHeroImage,
    href: "#",
  },
  {
    title: "Chic & Elegant: Women's Fashion",
    subTitle:
      "Explore the newest trends, sophisticated outfits, and everyday essentials that reflect your personal style.",
    image: womenHeroImage,
    href: "#",
  },
];

export default function Hero() {
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setHeroIndex((prevIndex) =>
        prevIndex < heroDataList.length - 1 ? prevIndex + 1 : 0
      );
    }, 10000);

    return () => clearTimeout(timeout);
  }, [heroIndex]);

  return (
    <section className="p-8 h-fit lg:aspect-[3] sm:max-h-96 bg-zinc-100 flex-center ">
      <div className="sm:w-[90%] w-full max-w-4xl mx-auto relative h-[calc(30rem-20vw)] sm:aspect-[3]">
        {heroDataList.map((heroData, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full flex-col-reverse duration-300 gap-6 sm:flex-row flex justify-between items-center ${
              index === heroIndex ? "hero-show" : "hero-hide"
            }`}
          >
            <div className="flex flex-col items-center flex-1 gap-2 text-center sm:text-left sm:items-start sm:gap-4">
              <h2 className="text-xl font-semibold sm:text-2xl">
                {heroData.title}
              </h2>
              <p className="text-sm text-zinc-500 ">{heroData.subTitle}</p>
              <Link
                to={heroData.href}
                className="px-4 py-2 mt-2 text-sm font-medium text-white duration-200 rounded-md bg-zinc-900 w-fit hover:bg-zinc-800"
              >
                Shop Now
              </Link>
            </div>
            <div className="relative flex-1 sm:w-full">
              <div className="sm:w-[60%] sm:ml-auto mx-auto sm:mx-0 rounded-full aspect-square bg-zinc-200/60 h-48 sm:h-auto  w-48"></div>
              <img
                src={heroData.image}
                alt={"Product Image"}
                className="absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] sm:-translate-x-[20%] h-full scale-110 object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
