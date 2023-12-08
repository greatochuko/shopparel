import { Link } from "react-router-dom";

export default function ProfilePage() {
  return (
    <main className="mt-[78px] pt-1 flex flex-col gap-4  max-w-7xl w-[90%] mx-auto mb-2 text-zinc-700">
      <p>
        <Link
          to={"/"}
          className="hover:underline focus-visible:ring ring-blue-400 rounded-md p-1"
        >
          {" "}
          Home
        </Link>{" "}
        &gt; My Account &gt;{" "}
        <span className="font-semibold">Personal Info</span>
      </p>
    </main>
  );
}
