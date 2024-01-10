export default function AdminPageSidebar({ open }: { open: boolean }) {
  return (
    <div
      className={`sticky top-0 h-screen bg-white shadow-md duration-200 z-10 overflow-hidden ${
        open ? "w-60" : "w-0"
      }`}
    >
      AdminPageSideBar
    </div>
  );
}
