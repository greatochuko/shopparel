import { ShippingInformationType } from "../pages/CheckoutPage";

export default function ShippingInformation({
  shippingInformation,
  openModal,
}: {
  shippingInformation: ShippingInformationType;
  openModal: (type: string, shippingInfo?: ShippingInformationType) => void;
}) {
  return (
    <div className="flex flex-col gap-3 p-4 rounded-md bg-zinc-100">
      <p className="font-semibold">
        {shippingInformation.firstName} {shippingInformation.lastName}
      </p>
      <p>{shippingInformation.phone}</p>
      <p>{shippingInformation.streetAddress}</p>
      <div className="flex gap-4">
        <button
          onClick={() => openModal("edit-shipping-info", shippingInformation)}
          className="font-semibold border-2 border-zinc-500 text-zinc-500 hover:bg-zinc-700 hover:text-white hover:border-zinc-700 focus-visible:ring ring-blue-400 p-0.5 px-2 rounded-md duration-300"
        >
          Edit
        </button>
        <button
          onClick={() => openModal("delete-shipping-info", shippingInformation)}
          className="font-semibold border-2 border-zinc-500 text-zinc-500 hover:bg-red-600 hover:text-white hover:border-red-600 focus-visible:ring ring-blue-400 p-0.5 px-2 rounded-md duration-300"
        >
          Remove
        </button>
      </div>
    </div>
  );
}
