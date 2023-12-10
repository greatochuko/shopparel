export default function FullScreenLoader() {
  return (
    <div className="flex-center h-screen flex-col gap-4">
      <h1 className="text-3xl font-bold text-zinc-800">Shopparel</h1>
      <div className="w-32 bg-zinc-200 h-1 relative rounded-full overflow-hidden">
        <div className="animate-loader absolute w-full h-full bg-zinc-700"></div>
      </div>
    </div>
  );
}
