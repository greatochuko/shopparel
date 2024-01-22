import { useState } from "react";
import { ProductType } from "./Product";
import ModalContainer from "./ModalContainer";
import DeleteProductModal from "./DeleteProductModal";
import CreateProductModal from "./CreateProductModal";

export default function AdminProduct({
  product,
  isSelected,
  toggleCheck,
  refreshStoreProducts,
}: {
  product: ProductType;
  isSelected: boolean;
  toggleCheck: (productId: string) => void;
  refreshStoreProducts: () => void;
}) {
  const [modalType, setModalType] = useState("");

  const productStatusBg = !product.isPublished
    ? "bg-zinc-100"
    : product.quantity > 10
    ? "bg-green-100"
    : product.quantity > 5
    ? "bg-amber-100"
    : product.quantity === 0
    ? "bg-red-100"
    : "";

  const productStatusText = !product.isPublished
    ? "text-zinc-600"
    : product.quantity > 10
    ? "text-green-600"
    : product.quantity > 5
    ? "text-amber-600"
    : product.quantity === 0
    ? "text-red-500"
    : "";

  function openDeleteProductModal(e: React.MouseEvent) {
    e.stopPropagation();
    setModalType("delete");
  }

  function closeModal() {
    setModalType("");
    refreshStoreProducts();
  }

  return (
    <>
      <li
        onClick={() => setModalType("edit")}
        className="hidden md:flex items-center gap-2 p-3 cursor-pointer hover:bg-zinc-100 text-zinc-700 duration-300 focus-visible:bg-zinc-100"
        tabIndex={1}
      >
        <input
          type="checkbox"
          name="selectAll"
          id={product._id}
          className="w-fit"
          checked={isSelected}
          onChange={() => toggleCheck(product._id)}
        />
        <div className="min-w-[200px] flex-1 mr-auto flex gap-2 items-center">
          <img src={product.imgUrl} alt="" className="w-16 h-16 rounded-md" />
          <div className="flex flex-col gap-1 overflow-hidden">
            <h3 className="font-semibold">{product.name}</h3>
            <p>{product.categories[0]}</p>
          </div>
        </div>
        <p className="w-24 text-center">01 July 2023</p>
        <p className="w-24 text-center">
          <span
            className={`w-fit  ${productStatusBg} ${productStatusText} p-1 px-2 rounded-md`}
          >
            {!product.isPublished ? "draft" : "in stock"}
          </span>
        </p>
        <p className="w-[70px] text-center">$245.99</p>
        <p className="w-16 text-center">
          <button
            className="p-3 duration-200 rounded-full group"
            tabIndex={1}
            onClick={openDeleteProductModal}
          >
            <svg
              height={20}
              width={20}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M20.5001 6H3.5"
                  className="stroke-zinc-700 group-hover:stroke-red-500 duration-200 group-active:stroke-red-700 group-focus-visible:stroke-red-500"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                ></path>{" "}
                <path
                  d="M9.5 11L10 16"
                  className="stroke-zinc-700 group-hover:stroke-red-500 duration-200 group-active:stroke-red-700 group-focus-visible:stroke-red-500"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                ></path>{" "}
                <path
                  d="M14.5 11L14 16"
                  className="stroke-zinc-700 group-hover:stroke-red-500 duration-200 group-active:stroke-red-700 group-focus-visible:stroke-red-500"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                ></path>{" "}
                <path
                  d="M6.5 6C6.55588 6 6.58382 6 6.60915 5.99936C7.43259 5.97849 8.15902 5.45491 8.43922 4.68032C8.44784 4.65649 8.45667 4.62999 8.47434 4.57697L8.57143 4.28571C8.65431 4.03708 8.69575 3.91276 8.75071 3.8072C8.97001 3.38607 9.37574 3.09364 9.84461 3.01877C9.96213 3 10.0932 3 10.3553 3H13.6447C13.9068 3 14.0379 3 14.1554 3.01877C14.6243 3.09364 15.03 3.38607 15.2493 3.8072C15.3043 3.91276 15.3457 4.03708 15.4286 4.28571L15.5257 4.57697C15.5433 4.62992 15.5522 4.65651 15.5608 4.68032C15.841 5.45491 16.5674 5.97849 17.3909 5.99936C17.4162 6 17.4441 6 17.5 6"
                  className="stroke-zinc-700 group-hover:stroke-red-500 duration-200 group-active:stroke-red-700 group-focus-visible:stroke-red-500"
                  strokeWidth="1.5"
                ></path>{" "}
                <path
                  d="M18.3735 15.3991C18.1965 18.054 18.108 19.3815 17.243 20.1907C16.378 21 15.0476 21 12.3868 21H11.6134C8.9526 21 7.6222 21 6.75719 20.1907C5.89218 19.3815 5.80368 18.054 5.62669 15.3991L5.16675 8.5M18.8334 8.5L18.6334 11.5"
                  className="stroke-zinc-700 group-hover:stroke-red-500 duration-200 group-active:stroke-red-700 group-focus-visible:stroke-red-500"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                ></path>{" "}
              </g>
            </svg>
          </button>
        </p>
      </li>

      {/* MOBILE PRODUCT ITEM */}
      <li className="flex relative md:hidden bg-zinc-50 rounded-md items-start p-3 gap-2">
        <input
          type="checkbox"
          name="selectAll"
          id={product._id + "mobile"}
          className="w-fit relative top-7"
        />
        <div className="flex flex-col gap-4 flex-1">
          <div className="min-w-[200px] flex-1 mr-auto flex gap-2 items-center">
            <img src={product.imgUrl} alt="" className="w-16 h-16 rounded-md" />
            <div className="flex flex-col gap-1 overflow-hidden">
              <h3 className="font-semibold">{product.name}</h3>
              <p>{product.categories[0]}</p>
            </div>
          </div>
          <div className="flex justify-between items-center w-full">
            <p className="text-center">
              {new Date(product.createdAt).toLocaleDateString()}
            </p>
            <p
              className={`text-center ${productStatusBg} ${productStatusText} p-1 rounded-md`}
            >
              {!product.isPublished ? "draft" : "in stock"}
            </p>
            <p className="text-center font-semibold">$245.99</p>
            <button className="absolute right-2 top-3">
              <svg
                height={20}
                width={20}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M12 3.99997H6C4.89543 3.99997 4 4.8954 4 5.99997V18C4 19.1045 4.89543 20 6 20H18C19.1046 20 20 19.1045 20 18V12M18.4142 8.41417L19.5 7.32842C20.281 6.54737 20.281 5.28104 19.5 4.5C18.7189 3.71895 17.4526 3.71895 16.6715 4.50001L15.5858 5.58575M18.4142 8.41417L12.3779 14.4505C12.0987 14.7297 11.7431 14.9201 11.356 14.9975L8.41422 15.5858L9.00257 12.6441C9.08001 12.2569 9.27032 11.9013 9.54951 11.6221L15.5858 5.58575M18.4142 8.41417L15.5858 5.58575"
                    stroke="#1a75ff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </button>
          </div>
        </div>
      </li>

      {modalType ? (
        <ModalContainer closeModal={closeModal}>
          {modalType === "delete" ? (
            <DeleteProductModal
              closeModal={closeModal}
              productId={product._id}
            />
          ) : (
            <CreateProductModal closeModal={closeModal} productProp={product} />
          )}
        </ModalContainer>
      ) : null}
    </>
  );
}
