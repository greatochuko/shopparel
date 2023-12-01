export type ProductType = {
  name: string;
  imgUrl: string;
  brand: string;
  price: number;
};

export default function Product({ product }: { product: ProductType }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="bg-zinc-300 rounded-md overflow-hidden apect-[0.7]">
        <img
          src={product.imgUrl}
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex justify-between text-zinc-700">
        <div className="flex flex-col gap-1">
          <h4 className=" font-semibold">{product.name}</h4>
          <p className="text-sm">{product.brand}</p>
        </div>
        <p className="bg-zinc-100 grid place-content-center p-2 rounded-md">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
}
