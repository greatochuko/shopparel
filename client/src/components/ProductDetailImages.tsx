import { useState } from "react";
import { ProductType } from "./Product";

export default function ProductDetailImages({
  product,
}: {
  product: ProductType;
}) {
  const [index, setIndex] = useState(0);
  const image = product.images[index];

  return (
    <div className="flex flex-col flex-1 gap-4">
      <img
        src={image}
        alt={product.name}
        className="flex-1 object-contain bg-zinc-200 aspect-square"
      />
      <ul className="grid grid-cols-5 h-16 gap-2">
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
  );
}
