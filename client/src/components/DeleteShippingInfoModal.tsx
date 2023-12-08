import { ShippingInformationType } from "../pages/CheckoutPage";

export default function DeleteShippingInfoModal({
  closeModal,
  shippingInfo,
}: {
  closeModal: () => void;
  shippingInfo: ShippingInformationType;
}) {
  function handleDeleteShippingInfo(e: React.FormEvent) {
    e.preventDefault();
    console.log(shippingInfo._id);
  }
  return (
    <div className="w-full sm:min-w-[500px] flex flex-col gap-4 pt-6">
      <div className="flex flex-col gap-2 px-6">
        <h3 className="text-lg font-semibold">Delete Shipping Information</h3>
        <p>Are you sure you want to delete your shipping info?</p>
      </div>
      <div className="bg-zinc-100 p-4 flex justify-end gap-4">
        <button
          onClick={closeModal}
          className="p-2 border border-zinc-300 hover:border-zinc-400 focus-visible:ring ring-blue-400 px-4 rounded-md bg-zinc-200 hover:bg-zinc-300 active:bg-[#ccc] duration-300"
        >
          Cancel
        </button>
        <button
          onClick={handleDeleteShippingInfo}
          className="p-2 focus-visible:ring ring-red-800 px-4 rounded-md bg-red-600 hover:bg-red-700 active:bg-red-800 text-white duration-300"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
