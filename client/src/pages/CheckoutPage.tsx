import { useState } from "react";
import ShippingAddress from "../components/ShippingAddress";

export type ShippingAddressType = {
  firstName: string;
  lastName: string;
  country: string;
  company: string;
  streetAddress: string;
  apartment: string;
  city: string;
  state: string;
  postalCode: string;
  phone: string;
};

export default function CheckoutPage() {
  const [shippingAddress, setShippingAddress] =
    useState<ShippingAddressType | null>(null);
  console.log(shippingAddress);

  return (
    <main className="mt-[78px] pt-1 flex flex-col gap-4 text-zinc-700 max-w-7xl w-[90%] mx-auto mb-96">
      <h1 className="text-2xl font-semibold">Checkout</h1>
      <div className="flex flex-col lg:flex-row gap-4">
        <ShippingAddress setShippingAddress={setShippingAddress} />
        <div className="w-full lg:w-96 aspect-square border border-zinc-300 rounded-md sticky top-[700px]"></div>
      </div>
    </main>
  );
}
