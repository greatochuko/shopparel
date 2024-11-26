import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function NotFoundPage() {
  return (
    <>
      <Header />
      <div className="flex-col flex-1 gap-4 py-10 flex-center text-zinc-700 w-[90%] max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-accent-blue-100 md:text-4xl">
          Oops!
        </h2>
        <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
          Page not found
        </h2>
        <p className="text-center text-zinc-500">
          The page you’re looking for doesn’t exist or might have been moved.
        </p>
        <Link
          to={"/"}
          className="p-2 px-4 font-semibold text-white duration-200 rounded-full bg-accent-blue-100 hover:bg-accent-blue-200"
        >
          Go Home
        </Link>
      </div>
      <Footer />
    </>
  );
}
