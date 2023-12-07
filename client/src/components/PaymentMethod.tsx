import React, { useState } from "react";

export default function PaymentMethod({
  handlePayment,
}: {
  handlePayment: () => void;
}) {
  const [paymentType, setPaymentType] = useState("credit-card");
  const [cardNumber, setCardNumber] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [securityCode, setSecrityCode] = useState("");

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
              name="credit-card"
              value={"credit-card"}
              id={"credit-card"}
              checked={paymentType === "credit-card"}
              onChange={(e) => setPaymentType(e.target.value)}
              onKeyDown={(e) => {
                if (e.code !== "Tab") e.preventDefault();
                if (e.code === "Enter") setPaymentType("credit-card");
              }}
              className="focus:ring focus:ring-blue-400"
            />
            <label htmlFor="credit-card" className="flex flex-col">
              <h3 className="font-semibold">Credit Card</h3>
              <p className="text-sm">We accept all major credit cards</p>
            </label>
          </div>
          <div
            className={`flex flex-col gap-8 ml-9 ${
              paymentType === "credit-card" ? "" : "hidden"
            }`}
          >
            <div className="flex sm:grid-cols-4 gap-2 sm:gap-4 max-w-[350px]">
              <div className="flex-1 p-2 bg-white aspect-video rounded-md">
                <img
                  src="/master-card-logo.png"
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex-1 p-2 bg-white aspect-video rounded-md">
                <img
                  src="/visa-card-logo.webp"
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex-1 p-2 bg-white aspect-video rounded-md">
                <img
                  src="/google-pay-logo.png"
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex-1 p-2 bg-white aspect-video rounded-md">
                <img
                  src="/paypal-logo.png"
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                required={paymentType === "credit-card"}
                id="card-number"
                value={cardNumber}
                placeholder="Card number"
                onChange={(e) => setCardNumber(e.target.value)}
                className="p-3 rounded-md border border-zinc-200 focus-visible:ring ring-blue-400 scroll-mt-[80px]"
              />
              <input
                type="text"
                required={paymentType === "credit-card"}
                id="name-on-card"
                value={nameOnCard}
                onChange={(e) => setNameOnCard(e.target.value)}
                placeholder="Name on card"
                className="p-3 rounded-md border border-zinc-200 focus-visible:ring ring-blue-400 sm:scroll-mt-[80px]"
              />
              <input
                type="text"
                required={paymentType === "credit-card"}
                id="expiration-date"
                value={expirationDate}
                onChange={(e) => setExpirationDate(e.target.value)}
                placeholder="Expiration date (MM/YY)"
                className="p-3 rounded-md border border-zinc-200 focus-visible:ring ring-blue-400 sm:scroll-mt-[80px]"
              />
              <input
                type="text"
                required={paymentType === "credit-card"}
                id="security-code"
                value={securityCode}
                onChange={(e) => setSecrityCode(e.target.value)}
                placeholder="Security Code"
                className="p-3 rounded-md border border-zinc-200 focus-visible:ring ring-blue-400 sm:scroll-mt-[80px]"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-2 p-2 pt-0">
          <div className="flex gap-4 items-center">
            <input
              type="radio"
              name="cash-on-delivery"
              value={"cash-on-delivery"}
              id={"cash-on-delivery"}
              tabIndex={0}
              checked={paymentType === "cash-on-delivery"}
              onChange={(e) => setPaymentType(e.target.value)}
              onKeyDown={(e) => {
                if (e.code !== "Tab") e.preventDefault();
                if (e.code === "Enter") setPaymentType("cash-on-delivery");
              }}
              className="focus-visible:ring ring-blue-400"
            />

            <label htmlFor="cash-on-delivery" className="flex flex-col">
              <h3 className="font-semibold">Cash on delivery</h3>
              <p className="text-sm">Pay with cash upon delivery</p>
            </label>
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="p-3 w-full sm:w-40 text-lg mt-4 rounded-md bg-accent-blue-100 hover:bg-accent-blue-200 focus-visible:ring focus-visible:ring-blue-400 duration-300 text-white font-semibold active:bg-blue-800"
      >
        Pay now
      </button>
    </form>
  );
}
