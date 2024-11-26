export default function ProductWireframe() {
  return (
    <div className="relative flex flex-col gap-4">
      <div className="hover:shadow-md duration-300 bg-zinc-300 group rounded-md overflow-hidden aspect-[0.8] focus-visible:ring focus-visible:ring-blue-400 animate-pulse"></div>
      <div className="flex items-start justify-between gap-1 text-zinc-700">
        <div className="flex flex-col flex-1 gap-1 sm:max-w-[65%] w-full">
          <div className="w-full h-4 rounded-full bg-zinc-200 animate-pulse"></div>
          <div className="w-16 h-4 rounded-full bg-zinc-200 animate-pulse"></div>
        </div>
        <div className="w-10 h-6 rounded-full sm:w-12 bg-zinc-200 animate-pulse"></div>
      </div>
    </div>
  );
}
