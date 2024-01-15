import RecentOrdersHeader from "./RecentOrdersHeader";

export default function RecentOrdersWireframe() {
  return (
    <section className="p-4 bg-white rounded-md">
      <RecentOrdersHeader />
      <ul className="flex flex-col gap-4">
        <li className="p-6 rounded-md animate-pulse bg-zinc-300"></li>
        <li className="p-6 rounded-md animate-pulse bg-zinc-300"></li>
        <li className="p-6 rounded-md animate-pulse bg-zinc-300"></li>
        <li className="p-6 rounded-md animate-pulse bg-zinc-300"></li>
        <li className="p-6 rounded-md animate-pulse bg-zinc-300"></li>
        <li className="p-6 rounded-md animate-pulse bg-zinc-300"></li>
      </ul>
    </section>
  );
}
