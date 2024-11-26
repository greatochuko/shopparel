import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="flex-col flex-1 gap-6 py-10 flex-center text-zinc-700">
        <h2 className="text-4xl font-bold md:text-6xl">Oops!</h2>
        <p className="text-2xl">
          Something went <strong>wrong!</strong>
        </p>
        <button
          onClick={() => navigate(0)}
          className="p-2 px-4 font-semibold text-white rounded-full bg-accent-blue-100 hover:bg-accent-blue-200"
        >
          Refresh
        </button>
      </div>
      <Footer />
    </>
  );
}
