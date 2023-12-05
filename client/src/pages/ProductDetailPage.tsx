import { useState } from "react";

const product = {
  _id: "123abc",
  name: "Plaid Flannel Shirt",
  imgUrl: "/men-product-4.png",
  images: [
    "/men-product-4.png",
    "/men-product-3.png",
    "/men-product-2.png",
    "/men-product-1.png",
  ],
  brand: "Nike",
  price: 299,
  sizes: ["l", "m", "xl", "s", "xs"],
  categories: ["V-Neck T-Shirts"],
  colors: ["black"],
};

export default function ProductDetailPage() {
  const [index, setIndex] = useState(0);
  const image = product.images[index];
  return (
    <main className="mt-[70px] w-[90%] max-w-7xl mx-auto mb-4">
      <div className="flex gap-4">
        <div className="flex flex-col flex-1 gap-4">
          <img
            src={image}
            alt={product.name}
            className="flex-1 object-contain bg-zinc-200 aspect-square"
          />
          <ul className="flex h-16 gap-2">
            {product.images.map((image, i) => (
              <li
                key={image}
                onClick={() => setIndex(i)}
                className={`aspect-[1.1] cursor-pointer duration-300 rounded-md group overflow-hidden ${
                  index === i ? "ring ring-accent-blue-100/80 " : "ring-0"
                }`}
                role="button"
              >
                <img
                  src={image}
                  alt=""
                  className="object-contain w-full h-full p-1 duration-300 group-hover:bg-zinc-300 bg-zinc-200"
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1"></div>
      </div>
    </main>
  );
}
