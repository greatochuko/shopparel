import React from "react";
import LoadingIndicator from "./LoadingIndicator";

type PaymentMethodProps = {
  handlePayment: () => void;
  setPaymentType: React.Dispatch<React.SetStateAction<string>>;
  paymentType: string;
  loading: boolean;
};

export default function PaymentMethod({
  handlePayment,
  paymentType,
  setPaymentType,
  loading,
}: PaymentMethodProps) {
  function handlePaymentForm(e: React.FormEvent) {
    e.preventDefault();
    handlePayment();
  }

  return (
    <form onSubmit={handlePaymentForm}>
      <div className="flex flex-col gap-4 bg-zinc-100 rounded-md p-4">
        <div className="flex flex-col gap-4 border-b border-zinc-300 pb-4">
          <div className="flex gap-4 p-2 items-center">
            <input
              type="radio"
              name="stripe"
              value={"stripe"}
              id={"stripe"}
              checked={paymentType === "stripe"}
              onChange={(e) => setPaymentType(e.target.value)}
              onKeyDown={(e) => {
                if (e.code !== "Tab") e.preventDefault();
                if (e.code === "Enter") setPaymentType("stripe");
              }}
              className="focus-visible:ring focus-visible:ring-blue-400"
            />
            <label htmlFor="stripe" className="flex flex-col">
              <h3 className="font-semibold">Pay via Stripe</h3>
              <p className="text-sm">We accept all major credit cards</p>
            </label>
          </div>
        </div>
        <div className="flex gap-2 p-2 pt-0">
          <div className="flex gap-4 items-center">
            <input
              type="radio"
              name="cash"
              value={"cash"}
              id={"cash"}
              tabIndex={0}
              checked={paymentType === "cash"}
              onChange={(e) => setPaymentType(e.target.value)}
              onKeyDown={(e) => {
                if (e.code !== "Tab") e.preventDefault();
                if (e.code === "Enter") setPaymentType("cash");
              }}
              className="focus-visible:ring ring-blue-400"
            />

            <label htmlFor="cash" className="flex flex-col">
              <h3 className="font-semibold">Cash on delivery</h3>
              <p className="text-sm">Pay with cash upon delivery</p>
            </label>
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="p-2 w-full flex-center sm:w-40 text-lg mt-6 rounded-md bg-accent-blue-100 hover:bg-accent-blue-200 focus-visible:ring focus-visible:ring-blue-400 duration-300 text-white font-semibold active:bg-blue-800"
      >
        {loading ? (
          <LoadingIndicator />
        ) : paymentType === "stripe" ? (
          "Pay now"
        ) : (
          "Proceed"
        )}
      </button>
    </form>
  );
}
