export default function ProductDetailWireframe() {
  return (
    <div>
      <div className="flex flex-col gap-8 md:flex-row">
        <div className="flex-1 aspect-square flex flex-col gap-2">
          <div className="bg-zinc-200 animate-pulse w-full h-full"></div>
          <div className="grid grid-cols-5 gap-2">
            <div className="flex-1 aspect-square bg-zinc-200 rounded-md"></div>
            <div className="flex-1 aspect-square bg-zinc-200 rounded-md"></div>
            <div className="flex-1 aspect-square bg-zinc-200 rounded-md"></div>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-6 pt-4 text-zinc-700">
          <div className="flex gap-2">
            Shop &gt;
            <div className="w-20 h-6 bg-zinc-200 animate-pulse rounded-full"></div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="w-full h-8 bg-zinc-200 animate-pulse rounded-full"></div>
            <div className="w-80 h-8 bg-zinc-200 animate-pulse rounded-full"></div>
          </div>
          <div className="w-32 h-10 bg-zinc-100 animate-pulse rounded-md border border-zinc-300"></div>
          <div className="flex flex-col gap-2">
            <p className="font-semibold">Select Size</p>
            <div className="flex gap-4">
              <div className="border bg-zinc-100 border-zinc-300 animate-pulse w-8 rounded-md h-8"></div>
              <div className="border bg-zinc-100 border-zinc-300 animate-pulse w-8 rounded-md h-8"></div>
              <div className="border bg-zinc-100 border-zinc-300 animate-pulse w-8 rounded-md h-8"></div>
              <div className="border bg-zinc-100 border-zinc-300 animate-pulse w-8 rounded-md h-8"></div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-semibold">Colors Available</p>
            <div className="flex gap-4">
              <div className="bg-zinc-200 animate-pulse w-8 rounded-full h-8"></div>
              <div className="bg-zinc-200 animate-pulse w-8 rounded-full h-8"></div>
              <div className="bg-zinc-200 animate-pulse w-8 rounded-full h-8"></div>
              <div className="bg-zinc-200 animate-pulse w-8 rounded-full h-8"></div>
            </div>
          </div>
          <div className="w-full bg-zinc-100 text-zinc-500 border border-zinc-300 p-2 font-semibold flex-center rounded-md">
            Add To Cart
          </div>
        </div>
      </div>
    </div>
  );
}
