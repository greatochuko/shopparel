import { Link } from "react-router-dom";

type SectionHeaderProps = { title: string; url?: string };

export default function SectionHeader({ title, url }: SectionHeaderProps) {
  return (
    <div className="flex justify-between items-center border-l-4 border-l-accent-blue-100 pl-4">
      <h2 className="font-semibold text-lg sm:text-xl text-zinc-700">
        {title}
      </h2>
      {url && (
        <Link
          to={url}
          className="text-zinc-600 text-sm font-semibold hover:text-black "
        >
          See all
        </Link>
      )}
    </div>
  );
}
