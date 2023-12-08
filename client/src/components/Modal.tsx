import { useState } from "react";
import { ShippingInformationType } from "../pages/CheckoutPage";
import useUserContext from "../hooks/useUserContext";

export type Value =
  | ({
      firstName?: string;
      lastName?: string;
      email?: string;
      passeord?: string;
    } & ShippingInformationType)
  | null;

type ModalProps = {
  closeModal: () => void;
  type: string;
  shippingInfo?: ShippingInformationType;
};

export default function Modal({ type, shippingInfo, closeModal }: ModalProps) {
  const { user } = useUserContext();

  const [firstName, setFirstName] = useState(user?.firstName);
  const [lastName, setLastName] = useState(user?.lastName);
  console.clear();
  console.log(user);

  return (
    <div
      onClick={closeModal}
      className="fixed z-50 bg-black/20 top-0 left-0 w-screen h-screen flex-center animate-fade-in"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[90%] max-w-2xl sm:w-fit bg-white rounded-lg animate-zoom-in shadow-md overflow-hidden flex flex-col justify-between"
      >
        {type === "name" ? (
          <form className="w-full flex flex-col gap-4 p-6 ">
            <div className="flex flex-col gap-2">
              <label htmlFor="first-name" className="w-fit">
                First Name
              </label>
              <input
                type="text"
                name="first-name"
                id="first-name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="p-3 bg-zinc-100 rounded-md focus-visible:ring ring-blue-400"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="last-name" className="w-fit">
                Last Name
              </label>
              <input
                type="text"
                name="last-name"
                id="last-name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="p-3 bg-zinc-100 rounded-md focus-visible:ring ring-blue-400"
              />
            </div>
          </form>
        ) : null}
        <div className="bg-zinc-100 p-4 flex justify-end gap-4">
          <button className="p-2 px-4 rounded-md bg-zinc-200 hover:bg-zinc-300 active:bg-[#ccc] duration-300">
            Cancel
          </button>
          <button className="p-2 px-4 rounded-md bg-green-600 hover:bg-green-700 active:bg-green-800 text-white duration-300">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
