import { useEffect, useState } from "react";
import useUserContext from "../hooks/useUserContext";
import { ShippingInformationType } from "./CheckoutPage";
import Modal from "../components/Modal";

export default function ProfilePage() {
  const { user } = useUserContext();
  const [modalIsOpen, setModalIsOpen] = useState({ open: false, type: "" });
  const [shippingInformations, setShippingInformations] = useState<
    ShippingInformationType[] | null
  >(null);

  function openModal(type: string) {
    setModalIsOpen({ open: true, type });
  }

  function closeModal() {
    setModalIsOpen({ open: false, type: "" });
  }

  useEffect(() => {
    async function fetchShippingInformations() {
      const res = await fetch("/data/shippingInformations.json");
      if (!res.ok) return;
      const data = await res.json();
      setShippingInformations(data);
    }
    fetchShippingInformations();
  }, []);

  return (
    <>
      <section className="flex-1">
        <h1 className="font-semibold text-xl">My Info</h1>
        <div className="flex flex-col gap-4">
          <div className="py-2 border-b border-zinc-100">
            <h2>Your Name</h2>
            <p className="flex justify-between font-semibold items-center">
              {user?.firstName || "Great Ogheneochuko"}
              <button
                onClick={() => openModal("fullName")}
                className="p-1 hover:text-accent-blue-100 focus-visible:ring focus-visible:ring-blue-400 rounded-sm"
              >
                Change
              </button>
            </p>
          </div>
          <div className="py-2 border-b border-zinc-100">
            <h2>Email Address</h2>
            <p className="flex justify-between font-semibold items-center">
              {user?.email}
              <button
                onClick={() => openModal("email")}
                className="p-1 hover:text-accent-blue-100 focus-visible:ring focus-visible:ring-blue-400 rounded-sm"
              >
                Change
              </button>
            </p>
          </div>
          <div className="py-2 border-b border-zinc-100">
            <h2>Password</h2>
            <p className="flex justify-between font-semibold items-center">
              <span className="text-2xl">........</span>
              <button
                onClick={() => openModal("password")}
                className="p-1 hover:text-accent-blue-100 focus-visible:ring focus-visible:ring-blue-400 rounded-sm"
              >
                Change
              </button>
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-10">
          <h2 className="text-xl font-semibold flex justify-between items-center">
            Shipping Information
            <button className="text-base hover:text-accent-blue-100 rounded-sm p-1 focus-visible:ring focus-visible:ring-blue-400">
              Add New
            </button>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {shippingInformations?.map((shippingInformation) => (
              <div
                key={shippingInformation._id}
                className="rounded-md bg-zinc-100 p-4 flex flex-col gap-3"
              >
                <p className="font-semibold">
                  {shippingInformation.firstName} {shippingInformation.lastName}
                </p>
                <p>{shippingInformation.phone}</p>
                <p>{shippingInformation.streetAddress}</p>
                <div className="flex gap-4">
                  <button className="font-semibold border-2 border-zinc-500 text-zinc-500 hover:bg-zinc-700 hover:text-white hover:border-zinc-700 focus-visible:ring ring-blue-400 p-0.5 px-2 rounded-md duration-300">
                    Edit
                  </button>
                  <button className="font-semibold border-2 border-zinc-500 text-zinc-500 hover:bg-zinc-700 hover:text-white hover:border-zinc-700 focus-visible:ring ring-blue-400 p-0.5 px-2 rounded-md duration-300">
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {modalIsOpen.open ? <Modal closeModal={closeModal} /> : null}
    </>
  );
}
