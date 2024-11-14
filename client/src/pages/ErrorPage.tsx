import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="flex-col flex-1 flex-center gap-6 mt-[70px] py-10 text-zinc-700">
        <h2 className="font-bold text-4xl md:text-6xl">Oops!</h2>
        <p className="text-2xl">
          Something went <strong>wrong!</strong>
        </p>
        <button
          onClick={() => navigate(0)}
          className="bg-accent-blue-100 hover:bg-accent-blue-200 px-4 p-2 rounded-full font-semibold text-white"
        >
          Refresh
        </button>
      </div>
      <Footer />
    </>
  );
}
