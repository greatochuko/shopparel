import SearchFilter from "../components/SearchFilter";
import SearchResults from "../components/SearchResults";

const products = [
  {
    name: "Relaxed Fit V-Neck Tee",
    imgUrl: "/women-product-1.png",
    brand: "Helen",
    price: 299,
    sizes: ["l", "m", "xl", "s", "xs"],
    categories: ["V-Neck T-Shirts"],
    colors: ["black"],
  },
  {
    name: "Off-the-Shoulder Knit Sweater",
    imgUrl: "/women-product-2.png",
    brand: "Helen",
    price: 299,
    sizes: ["l", "m", "xl", "s", "2xl"],
    categories: ["sweater"],
    colors: ["yellow", "orange"],
  },
  {
    name: "Classic Straight-Leg Jeans",
    imgUrl: "/men-product-1.png",
    brand: "Helen",
    price: 299,
    sizes: ["l", "m", "xl", "s"],
    categories: ["jeans", "trousers"],
    colors: ["navy", "black", "blue"],
  },
  {
    name: "Leather Bomber Jacket",
    imgUrl: "/men-product-2.png",
    brand: "Helen",
    price: 299,
    sizes: ["l", "m", "xl", "2xl"],
    categories: ["coats", "jackets", "sweater"],
    colors: ["black"],
  },
  {
    name: "Wrap Maxi Dress",
    imgUrl: "/women-product-3.png",
    brand: "Helen",
    price: 299,
    sizes: ["l", "m", "s", "xs"],
    categories: ["Casual Dresses", "Formal Dresses"],
    colors: ["red", "orange"],
  },
  {
    name: "Floral Print Ruffle Top",
    imgUrl: "/women-product-4.png",
    brand: "Helen",
    price: 299,
    sizes: ["l", "xl", "m", "s", "xs", "xxs"],
    categories: ["Casual Dresses", "Summer Dresses", "Party Dresses"],
    colors: ["yellow", "blue"],
  },
  {
    name: "Classic Cotton Crew Neck Tee",
    imgUrl: "/men-product-3.png",
    brand: "Helen",
    price: 299,
    sizes: ["l", "xl", "m", "s", "xs", "xxs", "2xl"],
    categories: ["Polo Shirts", "Crewneck T-Shirts"],
    colors: ["black", "navy"],
  },
  {
    name: "Plaid Flannel Shirt",
    imgUrl: "/men-product-4.png",
    brand: "Helen",
    price: 299,
    sizes: ["3xl", "2xl", "l", "m", "xl", "s", "xs"],
    categories: [
      "Flannel Shirts",
      "Long-Sleeve T-Shirts",
      "Button-Down Shirts",
    ],
    colors: ["red", "black", "blue"],
  },
];

export default function SearchPage() {
  return (
    <main className="pt-[102px] h-fit max-w-7xl w-[90%] mx-auto flex flex-col md:flex-row gap-8 mb-8 text-zinc-500">
      <SearchFilter products={products} />
      <SearchResults products={products} />
    </main>
  );
}
