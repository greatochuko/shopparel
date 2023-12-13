import { useState } from "react";
import ShippingInformation from "../components/ShippingInformation";
import PaymentMethod from "../components/PaymentMethod";
import OrderSummary from "../components/OrderSummary";
import { Link, useNavigate } from "react-router-dom";
import { createOrder } from "../services/orderServices";
import useCartContext from "../hooks/useCartContext";

export type ShippingInformationType = {
  _id: string;
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
  const [paymentType, setPaymentType] = useState("stripe");
  const { cartItems, clearCart } = useCartContext();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  async function handlePayment() {
    setLoading(true);
    const data = await createOrder(
      paymentType,
      cartItems.map((item) => item._id)
    );
    if (data.error) return setLoading(false);
    clearCart();
    navigate("/orders");
    setLoading(false);
  }

  return (
    <main className="mt-[78px] pt-1 flex flex-col gap-4 text-zinc-700 max-w-7xl w-[90%] mx-auto mb-2">
      <h1 className="text-2xl font-semibold">Checkout</h1>
      <div className="relative flex gap-10 flex-col-reverse lg:flex-row">
        <div className="flex flex-col gap-10 flex-1">
          <ShippingInformation
            setShippingInformation={setShippingInformation}
          />
          {shippingInformation ? (
            <PaymentMethod
              handlePayment={handlePayment}
              paymentType={paymentType}
              setPaymentType={setPaymentType}
              loading={loading}
            />
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
