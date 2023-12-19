import { useParams } from "react-router-dom";

const brands = [
  { name: "Gucci", url: "gucci", imgUrl: "/gucci.png" },
  { name: "Luis Vuitton", url: "luis-vuitton", imgUrl: "/luis-vuitton.png" },
  { name: "Chanel", url: "chanel", imgUrl: "/chanel.png" },
  { name: "Nike", url: "nike", imgUrl: "/nike.png" },
  { name: "Adidas", url: "adidas", imgUrl: "/adidas.png" },
  { name: "Prada", url: "versace", imgUrl: "/versace.png" },
];

export default function BrandPage() {
  const { brandId } = useParams();
  const brand = brands.find((b) => b.url === brandId);
  console.clear();
  console.log(brand);

  return (
    <main className="pt-[82px] h-fit max-w-7xl w-[90%] mx-auto flex flex-col md:flex-row gap-8 mb-8 text-zinc-700">
      <div className="w-full aspect-[3] overflow-hidden rounded-lg bg-zinc-200 p-5">
        <img
          src={brand?.imgUrl}
          alt={brand?.name}
          className="w-full h-full object-contain"
        />
      </div>
    </main>
  );
}
