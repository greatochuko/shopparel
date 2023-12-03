import SearchFilter from "../components/SearchFilter";
import SearchResults from "../components/SearchResults";

export default function SearchPage() {
  return (
    <main className="pt-[102px] h-fit max-w-7xl w-[90%] mx-auto flex flex-col md:flex-row gap-8 mb-8 text-zinc-500">
      <SearchFilter />
      <SearchResults />
    </main>
  );
}
