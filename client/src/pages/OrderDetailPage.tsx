import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { OrderType } from "../components/Order";
import { cancelOrder, fetchOrder } from "../services/orderServices";
import LoadingIndicator from "../components/LoadingIndicator";
import Modal from "../components/Modal";
import { ReviewType } from "../components/Review";
import OrderProduct from "../components/OrderProduct";

export default function OrderDetailPage() {
  const navigate = useNavigate();
  const { orderId } = useParams();
  const [order, setOrder] = useState<OrderType | null>(null);
  const [loading, setLoading] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const [currProductId, setCurrProductId] = useState("");
  const [currReview, setCurrReview] = useState<ReviewType | null>(null);

  useEffect(() => {
    async function getOrder() {
      const data = await fetchOrder(orderId as string);
      if (data.error) return;
      document.title = `Shopparel: Order:#${orderId}`;
      setOrder(data);
    }
    getOrder();
  }, [orderId]);

  async function handleCancelOrder() {
    setLoading(true);
    const data = await cancelOrder(orderId as string);
    if (data.error) return setLoading(false);
    setOrder(data);
    setLoading(false);
  }

  function openReviewModal(productId: string, review: ReviewType | null) {
    setCurrReview(review);
    setCurrProductId(productId);
    setModalIsOpen(true);
    setModalType("review");
  }

  function closeModal() {
    setCurrReview(null);
    setCurrProductId("");
    setModalIsOpen(false);
    setModalType("");
  }

  return (
    <>
      <section className="flex flex-col flex-1 gap-10">
        <h1 className="flex items-center text-xl font-semibold">
          <button onClick={() => navigate(-1)} className="px-1 group">
            <svg
              height={25}
              width={25}
              fill="#000000"
              className="duration-300 fill-zinc-500 hover:fill-black stroke-zinc-500 hover:stroke-black"
              viewBox="-12 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#000"
              strokeWidth="0.7"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M7.28 23.28c-0.2 0-0.44-0.080-0.6-0.24l-6.44-6.44c-0.32-0.32-0.32-0.84 0-1.2l6.44-6.44c0.32-0.32 0.84-0.32 1.2 0 0.32 0.32 0.32 0.84 0 1.2l-5.8 5.84 5.84 5.84c0.32 0.32 0.32 0.84 0 1.2-0.16 0.16-0.44 0.24-0.64 0.24z"></path>
              </g>
            </svg>
          </button>
          Order Details
        </h1>
        <div className="flex flex-col justify-between gap-2 p-4 rounded-md sm:flex-row bg-zinc-100 sm:items-center">
          <div className="flex flex-col gap-1 text-sm sm:text-base">
            <p className="font-semibold sm:text-lg">Order ID: {order?._id}</p>
            <p>
              Order Placed on{" "}
              <span className="font-semibold">{order?.orderDate}</span>
            </p>
            <p>
              Delivery Date:{" "}
              <span className="font-semibold">
                {new Date(order?.deliveryDate as string).toDateString()}
              </span>
            </p>
          </div>
          <p className="text-sm sm:text-base">
            Total Price:{" "}
            <span className="font-semibold">
              $
              {order?.products
                .reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
                .toFixed(2)}
            </span>
          </p>
        </div>
        <div className="flex relative bg-zinc-100 h-1 w-[90%] max-w-xl mx-auto font-semibold text-xs rounded-full">
          <div className="flex-center flex-col gap-2 h-fit absolute -top-1.5 -translate-x-[50%]">
            <div className="w-4 h-4 rounded-full bg-zinc-800"></div>
            <p className="hidden sm:block">Order Placed</p>
            <p className="sm:hidden">Placed</p>
          </div>
          <div className="flex-center flex-col gap-2 h-fit absolute -top-1.5 left-[25%]">
            {order?.status === "cancelled" ? (
              <div className="w-4 h-4 bg-red-600 rounded-full border-zinc-400"></div>
            ) : (
              <div
                className={`w-4 h-4 bg-zinc-800 ${
                  order?.status === "active" ? "border-[3px]" : ""
                } border-zinc-400 rounded-full`}
              ></div>
            )}
            <p className="hidden sm:block">
              {order?.status === "cancelled"
                ? "Order Cancelled"
                : "In Progress"}
            </p>
            <p className="sm:hidden">
              {order?.status === "cancelled" ? "Cancelled" : "In Progress"}
            </p>
          </div>
          <div className="flex-center flex-col gap-2 h-fit absolute -top-1.5 left-[60%] sm:left-[63%] text-zinc-400">
            <div
              className={`w-4 h-4 ${
                order?.status === "completed" ? "bg-zinc-800" : "bg-zinc-400"
              } rounded-full`}
            ></div>
            <p>Shipped</p>
          </div>
          <div className="flex-center flex-col gap-2 h-fit absolute -top-1.5 right-0 translate-x-[50%] text-zinc-400">
            <div
              className={`w-4 h-4 ${
                order?.status === "completed" ? "bg-green-600" : "bg-zinc-400"
              } rounded-full`}
            ></div>
            <p>Delivered</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 p-4 mt-6 text-sm rounded-md bg-zinc-100">
          {order?.products.map((cartItem) => (
            <OrderProduct
              cartItem={cartItem}
              key={cartItem._id}
              openReviewModal={openReviewModal}
              orderStatus={order.status}
            />
          ))}
        </div>
        {order?.status === "active" ? (
          <button
            onClick={handleCancelOrder}
            className="w-full p-2 text-white duration-300 bg-red-500 rounded-md focus-visible:ring focus-visible:ring-red-400 hover:bg-red-600 active:bg-red-700 sm:w-36 flex-center"
          >
            {loading ? <LoadingIndicator /> : "Cancel Order"}
          </button>
        ) : null}
      </section>
      {modalIsOpen && (
        <Modal
          type={modalType}
          closeModal={closeModal}
          productId={currProductId}
          review={currReview as ReviewType}
        />
      )}
    </>
  );
}
