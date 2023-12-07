import { useState } from "react";
import ShippingAddress from "../components/ShippingAddress";
import PaymentMethod from "../components/PaymentMethod";

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
  const [paymentType, setPaymentType] = useState("credit-card");
  const [cardNumber, setCardNumber] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [securityCode, setSecrityCode] = useState("");

  return (
    <main className="mt-[78px] pt-1 flex flex-col gap-4 text-zinc-700 max-w-7xl w-[90%] mx-auto mb-96">
      <h1 className="text-2xl font-semibold">Checkout</h1>
      <div className="flex flex-col lg:flex-row gap-10">
        <ShippingAddress setShippingAddress={setShippingAddress} />
        <section className="w-full lg:w-96 aspect-square border border-zinc-300 rounded-md sticky top-[700px]"></section>
      </div>
      {!shippingAddress ? (
        <section className="lg:w-[calc(100%-24rem)] lg:pr-10">
          <form>
            <div className="flex flex-col gap-4 bg-zinc-100 rounded-md p-4">
              <div className="flex flex-col gap-4 border-b border-zinc-300 pb-4">
                <div className="flex gap-4 p-2 ">
                  <input
                    type="radio"
                    name="payment-type"
                    value={"credit-card"}
                    id={"credit-card"}
                    checked={paymentType === "credit-card"}
                    onChange={(e) => setPaymentType(e.target.value)}
                  />
                  <label htmlFor="credit-card" className="flex flex-col">
                    <h3 className="font-semibold">Credit Card</h3>
                    <p className="text-sm">We accept all major credit cards</p>
                  </label>
                </div>
                <div
                  className={`flex flex-col gap-4 ml-9 ${
                    paymentType === "credit-card" ? "" : "hidden"
                  }`}
                >
                  <div className="flex sm:grid-cols-4 gap-2 sm:gap-4 max-w-[400px]">
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
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      placeholder="Card number"
                      className="p-3 rounded-md border border-zinc-200 focus-visible:ring ring-blue-400"
                    />
                    <input
                      type="text"
                      value={nameOnCard}
                      onChange={(e) => setNameOnCard(e.target.value)}
                      placeholder="Name on card"
                      className="p-3 rounded-md border border-zinc-200 focus-visible:ring ring-blue-400"
                    />
                    <input
                      type="text"
                      value={expirationDate}
                      onChange={(e) => setExpirationDate(e.target.value)}
                      placeholder="Expiration date (MM/YY)"
                      className="p-3 rounded-md border border-zinc-200 focus-visible:ring ring-blue-400"
                    />
                    <input
                      type="text"
                      value={securityCode}
                      onChange={(e) => setSecrityCode(e.target.value)}
                      placeholder="Security Code"
                      className="p-3 rounded-md border border-zinc-200 focus-visible:ring ring-blue-400"
                    />
                  </div>
                </div>
              </div>
              <div className="flex gap-2 p-2 pt-0">
                <div className="flex gap-4">
                  <input
                    type="radio"
                    name="payment-type"
                    value={"cash-on-delivery"}
                    id={"cash-on-delivery"}
                    checked={paymentType === "cash-on-delivery"}
                    onChange={(e) => setPaymentType(e.target.value)}
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
        </section>
      ) : null}
    </main>
  );
}
