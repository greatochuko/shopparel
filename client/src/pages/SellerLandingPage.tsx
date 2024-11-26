import { useState } from "react";
import CreateStoreModal from "../components/CreateStoreModal";
import useUserContext from "../hooks/useUserContext";
import { Navigate } from "react-router-dom";

export default function SellerLandingPage() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const { user } = useUserContext();

  if (user?.store) return <Navigate to={"/admin"} replace />;

  return (
    <>
      <div className="w-[90%] max-w-6xl mx-auto flex">
        <div className="flex flex-col w-full gap-4 py-8 md:flex-row h-fit">
          <div className="flex justify-center flex-col gap-4 flex-[1.5] text-zinc-700 order-2">
            <h1 className="text-4xl font-bold md:text-5xl xl:text-6xl">
              Become a Seller on Shopparel
            </h1>
            <p className="sm:text-lg">
              Join the Style Revolution: Showcase Your Creations as a Shopparel
              Seller
            </p>
            <button
              onClick={() => setModalIsOpen(true)}
              className="p-4 text-white duration-300 rounded-md w-fit bg-accent-blue-100 hover:bg-accent-blue-200 active:bg-accent-blue-300 focus-visible:ring ring-blue-400"
            >
              Get Started Today!
            </button>
          </div>
          <div className="flex-1 md:order-2 aspect-[2] md:aspect-[1.5] shadow-lg shadow-blue-200">
            <img
              src="/become-a-seller.jpg"
              alt="Become a Seller"
              className="object-cover w-full h-full rounded-md"
            />
          </div>
        </div>
      </div>
      {modalIsOpen && (
        <CreateStoreModal closeModal={() => setModalIsOpen(false)} />
      )}
    </>
  );
}
