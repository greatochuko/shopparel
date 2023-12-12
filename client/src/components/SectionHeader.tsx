type SectionHeaderProps = { title: string };

export default function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <div className="flex items-center justify-between pl-4 border-l-4 border-l-accent-blue-100">
      <h2 className="text-lg font-semibold sm:text-xl text-zinc-700">
        {title}
      </h2>
    </div>
  );
}
