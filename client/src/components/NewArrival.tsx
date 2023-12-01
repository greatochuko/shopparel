import Product from "./Product";

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
    <div className="max-w-6xl w-[90%] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4">
      {newArrivals.map((product) => (
        <Product key={product.name} product={product} />
      ))}
    </div>
  );
}
