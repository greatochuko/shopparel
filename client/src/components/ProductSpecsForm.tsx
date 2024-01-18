import React from "react";

export default function ProductSpecsForm({
  handlePublish,
  selectedColors,
  setSelectedColors,
  selectedSizes,
  setSelectedSizes,
  selectedCategories,
  setSelectedCategories,
}: {
  handlePublish: (e: React.FormEvent) => void;
  selectedColors: string[];
  setSelectedColors: React.Dispatch<React.SetStateAction<string[]>>;
  selectedSizes: string[];
  setSelectedSizes: React.Dispatch<React.SetStateAction<string[]>>;
  selectedCategories: string[];
  setSelectedCategories: React.Dispatch<React.SetStateAction<string[]>>;
}) {
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

  return (
    <form
      className="p-4 pb-0 flex flex-col flex-1 bg- overflow-y-scroll"
      onSubmit={handlePublish}
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
            <input type="radio" name="gender" id="male" />
            <label htmlFor="male">Male</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="radio" name="gender" id="female" />
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
          className="flex-1 sm:flex-[2] p-2 rounded-md font-semibold bg-accent-blue-100 text-white duration-300 hover:bg-accent-blue-200 active:bg-accent-blue-300 focus-visible:ring ring-blue-400"
        >
          Publish
        </button>
        <button
          type="button"
          className="flex-1 p-2 rounded-md font-semibold border hover:bg-zinc-100 hover:border-zinc-200 duration-300 active:bg-zinc-200 active:border-zinc-300 focus-visible:ring ring-blue-400"
        >
          Save as Draft
        </button>
      </div>
    </form>
  );
}
