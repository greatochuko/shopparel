import { useState } from "react";
import ShippingInformation from "../components/ShippingInformation";
import PaymentMethod from "../components/PaymentMethod";
import OrderSummary from "../components/OrderSummary";
import { Link } from "react-router-dom";

export type ShippingInformationType = {
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
  const [shippingInformation, setShippingInformation] =
    useState<ShippingInformationType | null>(null);

  function handlePayment() {
    console.log("Payment Successful");
  }

  return (
    <main className="mt-[78px] pt-1 flex flex-col gap-4 text-zinc-700 max-w-7xl w-[90%] mx-auto mb-2">
      <h1 className="text-2xl font-semibold">Checkout</h1>
      <div className="relative flex gap-10">
        <div className="flex flex-col gap-10 flex-1">
          <ShippingInformation
            setShippingInformation={setShippingInformation}
          />
          {shippingInformation ? (
            <PaymentMethod handlePayment={handlePayment} />
          ) : null}
        </div>
        <OrderSummary />
      </div>
      <Link
        to={"/cart"}
        className="hover:underline p-1 mt-4 focus-visible:ring ring-blue-400 focus-visible:underline rounded-md w-fit"
      >
        &larr; Back to cart
      </Link>
    </main>
  );
}
