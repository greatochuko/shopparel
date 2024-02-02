import { useEffect } from "react";

export default function AdminReviewsPage() {
  useEffect(() => {
    document.title = `Shopparel-Admin: Reviews`;
  }, []);
  return (
    <div className="flex flex-col flex-1 gap-4 w-[90%] max-w-7xl mx-auto py-6 text-zinc-800">
      AdminReviewsPage
    </div>
  );
}
