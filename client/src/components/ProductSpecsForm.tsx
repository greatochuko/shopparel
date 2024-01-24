import React, { useState } from "react";
import LoadingIndicator from "./LoadingIndicator";

const colorList = [
  "purple",
  "black",
  "red",
  "orange",
  "navy",
  "white",
  "teal",
  "green",
  "yellow",
  "gray",
  "pink",
  "blue",
];

const sizeList = ["xxs", "xs", "s", "m", "l", "xl", "2xl", "3xl", "4xl"];

const categoryList = [
  "Coats",
  "Jackets",
  "Blazers",
  "Vests",
  "Sweater",
  "Button-Down Shirts",
  "Short-Sleeve Shirts",
  "Printed or Patterned Shirts",
  "Crewneck T-Shirts",
  "V-Neck T-Shirts",
  "Long-Sleeve T-Shirts",
  "Polo Shirts",
  "Flannel Shirts",
  "Casual Dresses",
  "Formal Dresses",
  "Party Dresses",
  "Summer Dresses",
  "Jeans",
  "Trousers",
  "Shorts",
  "Skirts",
  "Sports Bras",
  "Athletic Shorts",
  "Performance Leggings",
  "Training Hoodies",
  "Baseball Caps",
  "Beanies",
  "Fedora Hats",
  "Bucket Hats",
  "Analog Watches",
  "Digital Watches",
  "Smartwatches",
  "Fashion Bracelet Watches",
];

export default function ProductSpecsForm({
  handlePublish,
  saveAsDraft,
  active,
  loading,
}: {
  handlePublish: (
    e: React.FormEvent,
    selectedColors: string[],
    selectedSizes: string[],
    gender: string,
    selectedCategories: string[]
  ) => void;
  saveAsDraft: () => void;
  active: boolean;
  loading: boolean;
}) {
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [gender, setGender] = useState("unisex");

  function toggleAddColor(color: string) {
    if (selectedColors.includes(color)) {
      setSelectedColors((curr) => curr.filter((c) => c !== color));
    } else {
      setSelectedColors((curr) => [...curr, color]);
    }
  }

  function toggleAddSize(size: string) {
    if (selectedSizes.includes(size)) {
      setSelectedSizes((curr) => curr.filter((c) => c !== size));
    } else {
      setSelectedSizes((curr) => [...curr, size]);
    }
  }

  function toggleAddCategory(category: string) {
    if (selectedCategories.includes(category)) {
      setSelectedCategories((curr) => curr.filter((c) => c !== category));
    } else {
      setSelectedCategories((curr) => [...curr, category]);
    }
  }

  return (
    <form
      className={`p-4 pb-0 flex flex-col flex-1 bg- overflow-y-scroll ${
        active ? "" : "hidden"
      }`}
      onSubmit={(e) =>
        handlePublish(
          e,
          selectedColors,
          selectedSizes,
          gender,
          selectedCategories
        )
      }
    >
      <div className="flex gap-2 flex-col w-full flex-1">
        <div className="flex flex-col">
          <label htmlFor="price" className="font-semibold w-fit mb-2">
            Colors
          </label>
          <ul className="flex flex-wrap gap-4 ml-1 w-fit">
            {colorList.map((color) => (
              <li
                key={color}
                role="button"
                onClick={() => toggleAddColor(color)}
                style={{ backgroundColor: color }}
                className={`w-7 h-7 border rounded-md hover:scale-110 active:scale-90 outline-offset-2 ring-blue-400 ring-offset-1 duration-300 ${
                  selectedColors.includes(color) ? "ring" : ""
                }`}
              ></li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col mt-4">
          <label htmlFor="shipping" className="font-semibold w-fit mb-2">
            Sizes
          </label>
          <ul className="gap-2 flex flex-wrap">
            {sizeList.map((size) => (
              <li
                key={size}
                role="button"
                onClick={() => toggleAddSize(size)}
                className={`w-8 h-8 border bg-white hover:scale-110 active:scale-90 rounded-md flex-center duration-300 ${
                  selectedSizes.includes(size)
                    ? "bg-zinc-200 border-zinc-300"
                    : ""
                }`}
              >
                {size}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col mt-4">
          <p className="font-semibold w-fit mb-2">Gender</p>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              name="gender"
              id="unisex"
              checked={gender === "unisex"}
              onClick={() => setGender("unisex")}
            />
            <label htmlFor="unisex">Unisex</label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              name="gender"
              id="male"
              checked={gender === "male"}
              onClick={() => setGender("male")}
            />
            <label htmlFor="male">Male</label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              name="gender"
              id="female"
              checked={gender === "female"}
              onClick={() => setGender("female")}
            />
            <label htmlFor="female">Female</label>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-4">
        <label htmlFor="shipping" className="font-semibold w-fit mb-2">
          Categories
        </label>
        <ul className="gap-2 flex flex-wrap">
          {categoryList.map((category) => (
            <li
              key={category}
              role="button"
              onClick={() => toggleAddCategory(category)}
              className={`p-1 border bg-white hover:scale-105 text-sm active:scale-95 rounded-md flex-center duration-300 ${
                selectedCategories.includes(category)
                  ? "bg-zinc-200 border-zinc-300"
                  : ""
              }`}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-2 sticky bottom-0 text-sm bg-white pb-4 mt-4">
        <button
          type="submit"
          className="flex-1 sm:flex-[2] flex-center p-2 rounded-md font-semibold bg-accent-blue-100 text-white duration-300 hover:bg-accent-blue-200 active:bg-accent-blue-300 focus-visible:ring ring-blue-400"
        >
          {loading ? <LoadingIndicator /> : "Publish"}
        </button>
        <button
          onClick={saveAsDraft}
          type="button"
          className="flex-1 p-2 rounded-md font-semibold border hover:bg-zinc-100 hover:border-zinc-200 duration-300 active:bg-zinc-200 active:border-zinc-300 focus-visible:ring ring-blue-400"
        >
          Save as Draft
        </button>
      </div>
    </form>
  );
}
