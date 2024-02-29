import { useState } from "react";
import ShippingInformationSection from "../components/ShippingInformationSection";
import PaymentMethod from "../components/PaymentMethod";
import OrderSummary from "../components/OrderSummary";
import { Link, useNavigate } from "react-router-dom";
import { createOrder } from "../services/orderServices";
import useCartContext from "../hooks/useCartContext";
import useToastContext from "../hooks/useToastContext";

export type ShippingInformationType = {
  _id: string;
  userId: string;
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
  const [paymentType, setPaymentType] = useState("paystack");
  const { cartItems, clearOrderCart } = useCartContext();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const { createToast } = useToastContext();

  async function handlePayment() {
    setLoading(true);
    const address = `${shippingInformation?.apartment} ${shippingInformation?.streetAddress} ${shippingInformation?.country}`;
    // return;
    const data = await createOrder(
      paymentType,
      cartItems.map((item) => ({
        _id: item._id,
        productId: item.product?._id as string,
        color: item.color,
        imgUrl: item.imgUrl,
        name: item.name,
        price: item.price,
        shipping: item.shipping,
        quantity: item.quantity,
        size: item.size,
        storeId: item.storeId,
        status: "active",
      })),
      address
    );

    if (data.error) return setLoading(false);
    createToast("Order Placed Successfully", "success");

    clearOrderCart();
    navigate("/orders");
    setLoading(false);
  }

  return (
    <main className="mt-[78px] pt-1 flex flex-col gap-4 text-zinc-700 max-w-7xl w-[90%] mx-auto mb-2">
      <h1 className="text-2xl font-semibold">Checkout</h1>
      <div className="relative flex flex-col-reverse gap-10 lg:flex-row">
        <div className="flex flex-col flex-1 gap-10">
          <ShippingInformationSection
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
        className="p-1 mt-4 rounded-md hover:underline focus-visible:ring ring-blue-400 focus-visible:underline w-fit"
      >
        &larr; Back to cart
      </Link>
    </main>
  );
}
