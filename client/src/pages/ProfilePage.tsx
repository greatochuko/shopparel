import { useEffect, useState } from "react";
import useUserContext from "../hooks/useUserContext";
import { ShippingInformationType } from "./CheckoutPage";
import Modal from "../components/Modal";
import { fetchShippingInformations } from "../services/shippingInfoServices";

export default function ProfilePage() {
  const { user } = useUserContext();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const [shippingInformation, setShippingInformation] =
    useState<ShippingInformationType | null>(null);
  const [shippingInformations, setShippingInformations] = useState<
    ShippingInformationType[] | null
  >(null);

  function openModal(type: string, shippingInfo?: ShippingInformationType) {
    setShippingInformation(shippingInfo || null);
    setModalIsOpen(true);
    setModalType(type);
  }

  function closeModal() {
    setModalIsOpen(false);
    setShippingInformation(null);
    setModalType("");
  }

  useEffect(() => {
    async function getShippingInformations() {
      const data = await fetchShippingInformations();
      if (data.error) return;
      setShippingInformations(data);
    }
    getShippingInformations();
  }, []);

  return (
    <>
      <section className="flex-1">
        <h1 className="text-xl font-semibold">My Info</h1>
        <div className="flex flex-col gap-4">
          <div className="py-2 border-b border-zinc-100">
            <h2>Your Name</h2>
            <p className="flex items-center justify-between font-semibold">
              {user?.firstName} {user?.lastName}
              <button
                onClick={() => openModal("name")}
                className="p-1 rounded-sm hover:text-accent-blue-100 focus-visible:ring focus-visible:ring-blue-400"
              >
                Change
              </button>
            </p>
          </div>
          <div className="py-2 border-b border-zinc-100">
            <h2>Email Address</h2>
            <p className="flex items-center justify-between font-semibold">
              {user?.email}
              <button
                onClick={() => openModal("email")}
                className="p-1 rounded-sm hover:text-accent-blue-100 focus-visible:ring focus-visible:ring-blue-400"
              >
                Change
              </button>
            </p>
          </div>
          <div className="py-2 border-b border-zinc-100">
            <h2>Password</h2>
            <p className="flex items-center justify-between font-semibold">
              <span className="text-2xl">........</span>
              <button
                onClick={() => openModal("password")}
                className="p-1 rounded-sm hover:text-accent-blue-100 focus-visible:ring focus-visible:ring-blue-400"
              >
                Change
              </button>
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-10">
          <h2 className="flex items-center justify-between text-xl font-semibold">
            Shipping Information
            <button
              onClick={() => openModal("add-new-shipping-info")}
              className="p-1 text-base rounded-sm hover:text-accent-blue-100 focus-visible:ring focus-visible:ring-blue-400"
            >
              Add New
            </button>
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {shippingInformations?.length ? (
              shippingInformations?.map((shippingInformation) => (
                <div
                  key={shippingInformation._id}
                  className="flex flex-col gap-3 p-4 rounded-md bg-zinc-100"
                >
                  <p className="font-semibold">
                    {shippingInformation.firstName}{" "}
                    {shippingInformation.lastName}
                  </p>
                  <p>{shippingInformation.phone}</p>
                  <p>{shippingInformation.streetAddress}</p>
                  <div className="flex gap-4">
                    <button
                      onClick={() =>
                        openModal("edit-shipping-info", shippingInformation)
                      }
                      className="font-semibold border-2 border-zinc-500 text-zinc-500 hover:bg-zinc-700 hover:text-white hover:border-zinc-700 focus-visible:ring ring-blue-400 p-0.5 px-2 rounded-md duration-300"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() =>
                        openModal("delete-shipping-info", shippingInformation)
                      }
                      className="font-semibold border-2 border-zinc-500 text-zinc-500 hover:bg-red-600 hover:text-white hover:border-red-600 focus-visible:ring ring-blue-400 p-0.5 px-2 rounded-md duration-300"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="h-32 flex-center col-span-2 text-zinc-500">
                You have no Addresses saved yet
              </p>
            )}
          </div>
        </div>
      </section>
      {modalIsOpen ? (
        <Modal
          closeModal={closeModal}
          type={modalType}
          shippingInfo={shippingInformation}
          setShippingInformations={setShippingInformations}
        />
      ) : null}
    </>
  );
}
