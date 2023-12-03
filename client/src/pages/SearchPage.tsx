import SearchFilter from "../components/SearchFilter";

export default function SearchPage() {
  return (
    <main className="pt-[102px] min-h-[80dvh] max-w-7xl w-[90%] mx-auto flex flex-col md:flex-row gap-8 mb-8 text-zinc-500">
      <SearchFilter />
      <div className="flex-1 bg-red-500 h-[100px] w-full">asdf</div>
    </main>
  );
}
