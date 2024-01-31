import React, { useState } from "react";
import LoadingIndicator from "./LoadingIndicator";
import { ProductType } from "./Product";

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
  "Maxi Dresses",
  "Bodycon Dresses",
  "Wrap Dresses",
  "Summer Dresses",
  "Shirt Dresses",
  "A-Line Dresses",
  "Jeans",
  "Trousers",
  "Shorts",
  "Culottes",
  "Palazzo Pants",
  "Chinos",
  "Skirts",
  "Sports Bras",
  "Leggings",
  "Running Shorts",
  "Athletic Shorts",
  "Performance Leggings",
  "Training Hoodies",
  "Baseball Caps",
  "Beanie Hats",
  "Snapback Caps",
  "Sun Hats",
  "Fedora Hats",
  "Bucket Hats",
  "Analog Watches",
  "Digital Watches",
  "Smartwatches",
  "Sports Watches",
  "Fashion Bracelet Watches",
  "Diver Watches",
  "Tote Bags",
  "Crossbody Bags",
  "Backpacks",
  "Clutch Bags",
  "Messenger Bags",
];

export default function ProductSpecsForm({
  handlePublish,
  saveAsDraft,
  active,
  loading,
  product,
}: {
  handlePublish: (
    e: React.FormEvent,
    selectedColors: string[],
    selectedSizes: string[],
    gender: string,
    quantity: number,
    selectedCategories: string[]
  ) => void;
  saveAsDraft: () => void;
  active: boolean;
  loading: boolean;
  product: ProductType | null;
}) {
  const [selectedColors, setSelectedColors] = useState<string[]>(
    product?.colors || []
  );
  const [selectedSizes, setSelectedSizes] = useState<string[]>(
    product?.sizes || []
  );
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    product?.categories || []
  );

  const [gender, setGender] = useState(product?.gender || "unisex");
  const [quantity, setQuantity] = useState(product?.quantity || "0");

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
          Number(quantity || 0),
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
              onChange={() => setGender("unisex")}
            />
            <label htmlFor="unisex">Unisex</label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              name="gender"
              id="male"
              checked={gender === "male"}
              onChange={() => setGender("male")}
            />
            <label htmlFor="male">Male</label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              name="gender"
              id="female"
              checked={gender === "female"}
              onChange={() => setGender("female")}
            />
            <label htmlFor="female">Female</label>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-4">
        <p className="font-semibold w-fit mb-2">Quantity</p>
        <input
          required
          type="number"
          className="p-2 border w-20"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
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
          {loading ? (
            <LoadingIndicator />
          ) : product?.isPublished ? (
            "Save"
          ) : (
            "Publish"
          )}
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
