import React from "react";
import LoadingIndicator from "./LoadingIndicator";
// import useUserContext from "../hooks/useUserContext";
// import useCartContext from "../hooks/useCartContext";

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

  // const { cartItems } = useCartContext();
  // const totalAmount =
  //   cartItems.reduce((acc, curr) => acc + curr.price * curr.quantity, 0) +
  //   cartItems.reduce((acc, curr) => acc + curr.shipping, 0);

  // const { user } = useUserContext();

  return (
    <div>
      <div className="flex flex-col gap-4 p-4 rounded-md bg-zinc-100">
        <div className="flex flex-col gap-4 pb-4 border-b border-zinc-300">
          <div className="flex items-center gap-4 p-2">
            <input
              type="radio"
              name="paystack"
              value={"paystack"}
              id={"paystack"}
              checked={paymentType === "paystack"}
              onChange={(e) => setPaymentType(e.target.value)}
              onKeyDown={(e) => {
                if (e.code !== "Tab") e.preventDefault();
                if (e.code === "Enter") setPaymentType("paystack");
              }}
              className="focus-visible:ring focus-visible:ring-blue-400"
            />
            <label htmlFor="paystack" className="flex flex-col">
              <h3 className="font-semibold">Pay via Paystack</h3>
              <p className="text-sm">We accept all major credit cards</p>
            </label>
          </div>
        </div>
        <div className="flex gap-2 p-2 pt-0">
          <div className="flex items-center gap-4">
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

      {paymentType === "paystack" ? //   amount={totalAmount} // <PaystackButton
      //   email={user?.email as string}
      //   publicKey="12345"
      //   text="Pay Now"
      //   onSuccess={handlePaymentForm}
      //   className="w-full p-2 mt-6 text-lg font-semibold text-white duration-300 rounded-md flex-center sm:w-40 bg-accent-blue-100 hover:bg-accent-blue-200 focus-visible:ring focus-visible:ring-blue-400 active:bg-blue-800"
      // />
      null : (
        <button
          onClick={handlePaymentForm}
          type="submit"
          className="w-full p-2 mt-6 text-lg font-semibold text-white duration-300 rounded-md flex-center sm:w-40 bg-accent-blue-100 hover:bg-accent-blue-200 focus-visible:ring focus-visible:ring-blue-400 active:bg-blue-800"
        >
          {loading ? <LoadingIndicator /> : "Proceed"}
        </button>
      )}
    </div>
  );
}
