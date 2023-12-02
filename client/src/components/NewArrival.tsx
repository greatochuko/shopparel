import Product from "./Product";
import SectionHeader from "./SectionHeader";

const newArrivals = [
  {
    name: "Relaxed Fit V-Neck Tee",
    imgUrl: "/women-product-1.png",
    brand: "Helen",
    price: 299,
  },
  {
    name: "Classic Straight-Leg Jeans",
    imgUrl: "/men-product-1.png",
    brand: "Helen",
    price: 299,
  },
  {
    name: "Off-the-Shoulder Knit Sweater",
    imgUrl: "/women-product-2.png",
    brand: "Helen",
    price: 299,
  },
  {
    name: "Leather Bomber Jacket",
    imgUrl: "/men-product-2.png",
    brand: "Helen",
    price: 299,
  },
];
export default function NewArrival() {
  return (
    <div className="max-w-7xl w-[90%] mx-auto flex flex-col gap-4">
      <SectionHeader title="New Arrivals" />
      <div className="grid grid-cols-2 gap-4  lg:grid-cols-4">
        {newArrivals.map((product) => (
          <Product key={product.name} product={product} />
        ))}
      </div>
    </div>
  );
}
