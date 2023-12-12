import Product, { ProductType } from "./Product";
import SectionHeader from "./SectionHeader";

const demoNewArrivals = [
  {
    name: "Relaxed Fit V-Neck Tee",
    imgUrl: "/women-product-1.png",
    brand: "Helen",
    price: 299,
    sizes: ["l", "m", "xl", "s", "xs"],
    categories: ["V-Neck T-Shirts"],
    colors: ["black"],
    _id: "123abc",
  },
  {
    name: "Classic Straight-Leg Jeans",
    imgUrl: "/men-product-1.png",
    brand: "Helen",
    price: 299,
    sizes: ["l", "m", "xl", "s", "xs"],
    categories: ["V-Neck T-Shirts"],
    colors: ["black"],
    _id: "123abc",
  },
  {
    name: "Off-the-Shoulder Knit Sweater",
    imgUrl: "/women-product-2.png",
    brand: "Helen",
    price: 299,
    sizes: ["l", "m", "xl", "s", "xs"],
    categories: ["V-Neck T-Shirts"],
    colors: ["black"],
    _id: "123abc",
  },
  {
    name: "Leather Bomber Jacket",
    imgUrl: "/men-product-2.png",
    brand: "Helen",
    price: 299,
    sizes: ["l", "m", "xl", "s", "xs"],
    categories: ["V-Neck T-Shirts"],
    colors: ["black"],
    _id: "123abc",
  },
];
export default function NewArrival({
  newArrivals,
}: {
  newArrivals: ProductType[];
}) {
  return (
    <div className="max-w-7xl w-[90%] mx-auto flex flex-col gap-4">
      <SectionHeader title="New Arrivals" />
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {newArrivals.map((product) => (
          <Product key={product.name} product={product} />
        ))}
      </div>
    </div>
  );
}
