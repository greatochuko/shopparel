import Product from "./Product";
import SectionHeader from "./SectionHeader";

const newArrivals = [
  {
    name: "Off Shoulder Blouse",
    imgUrl: "/off-shoulder blouse.png",
    brand: "Helen",
    price: 299,
  },
  {
    name: "Off Shoulder Blouse 2",
    imgUrl: "/off-shoulder blouse.png",
    brand: "Helen",
    price: 299,
  },
  {
    name: "Off Shoulder Blouse 3",
    imgUrl: "/off-shoulder blouse.png",
    brand: "Helen",
    price: 299,
  },
  {
    name: "Off Shoulder Blouse 4",
    imgUrl: "/off-shoulder blouse.png",
    brand: "Helen",
    price: 299,
  },
];
export default function NewArrival() {
  return (
    <div className="max-w-7xl w-[90%] mx-auto flex flex-col gap-4">
      <SectionHeader title="New Arrivals" />
      <div className=" grid grid-cols-2 lg:grid-cols-4 gap-4">
        {newArrivals.map((product) => (
          <Product key={product.name} product={product} />
        ))}
      </div>
    </div>
  );
}
