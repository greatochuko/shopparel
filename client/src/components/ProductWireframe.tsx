export default function ProductWireframe({ fixedWidth = false }) {
  return (
    <div className="relative flex flex-col gap-4">
      <div
        className={`group aspect-[0.8] animate-pulse overflow-hidden rounded-md bg-zinc-300 duration-300 hover:shadow-md focus-visible:ring focus-visible:ring-blue-400 ${fixedWidth ? "w-48 sm:w-60" : ""}`}
      ></div>
      <div className="flex items-start justify-between gap-1 text-zinc-700">
        <div className="flex w-full flex-1 flex-col gap-1 sm:max-w-[65%]">
          <div className="h-4 w-20 animate-pulse rounded-full bg-zinc-200"></div>
          <div className="h-4 w-full animate-pulse rounded-full bg-zinc-200"></div>
          <div className="h-4 w-16 animate-pulse rounded-full bg-zinc-200"></div>
        </div>
        <div className="h-4 w-10 animate-pulse rounded-full bg-zinc-200 sm:w-12"></div>
      </div>
    </div>
  );
}
