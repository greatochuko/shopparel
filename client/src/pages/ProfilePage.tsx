import { useEffect, useState } from "react";
import useUserContext from "../hooks/useUserContext";
import { ShippingInformationType } from "./CheckoutPage";
import { fetchShippingInformations } from "../services/shippingInfoServices";
import ShippingInformation from "../components/ShippingInformation";
import ModalContainer from "../components/ModalContainer";
import ChangeNameForm from "../components/ChangeNameForm";
import ChangeEmailForm from "../components/ChangeEmailForm";
import ChangePasswordForm from "../components/ChangePasswordForm";
import ShippingInformationForm from "../components/ShippingInformationForm";
import DeleteShippingInfoModal from "../components/DeleteShippingInfoModal";

export default function ProfilePage() {
  const { user } = useUserContext();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const [loading, setLoading] = useState(false);
  const [shippingInformation, setShippingInformation] =
    useState<ShippingInformationType | null>(null);
  const [shippingInformations, setShippingInformations] = useState<
    ShippingInformationType[]
  >([]);

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
      setLoading(true);
      const data = await fetchShippingInformations();
      if (data.error) return setLoading(false);
      document.title = "Shopparel: My Profile";
      setShippingInformations(
        [...data].sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        )
      );
      setLoading(false);
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
            {loading ? (
              <>
                <div className="rounded-md bg-zinc-300 animate-pulse h-44"></div>
                <div className="rounded-md bg-zinc-300 animate-pulse h-44"></div>
              </>
            ) : shippingInformations?.length ? (
              shippingInformations?.map((shippingInformation) => (
                <ShippingInformation
                  shippingInformation={shippingInformation}
                  key={shippingInformation._id}
                  openModal={openModal}
                />
              ))
            ) : (
              <p className="h-32 col-span-2 flex-center text-zinc-500">
                You have no Addresses saved yet
              </p>
            )}
          </div>
        </div>
      </section>
      {modalIsOpen ? (
        <ModalContainer closeModal={closeModal}>
          {modalType === "name" ? (
            <ChangeNameForm closeModal={closeModal} />
          ) : modalType === "email" ? (
            <ChangeEmailForm closeModal={closeModal} />
          ) : modalType === "password" ? (
            <ChangePasswordForm closeModal={closeModal} />
          ) : modalType === "add-new-shipping-info" ? (
            <ShippingInformationForm
              closeModal={closeModal}
              setShippingInformations={setShippingInformations}
            />
          ) : modalType === "edit-shipping-info" ? (
            <ShippingInformationForm
              type="edit"
              closeModal={closeModal}
              shippingInformation={
                shippingInformation as ShippingInformationType
              }
              setShippingInformations={setShippingInformations}
            />
          ) : modalType === "delete-shipping-info" ? (
            <DeleteShippingInfoModal
              closeModal={closeModal}
              shippingInfo={shippingInformation as ShippingInformationType}
              setShippingInformations={setShippingInformations}
            />
          ) : (
            ""
          )}
        </ModalContainer>
      ) : null}
    </>
  );
}
