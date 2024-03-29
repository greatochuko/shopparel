import { useState } from "react";
import { fetchDeleteProduct } from "../services/productServices";
import LoadingIndicator from "./LoadingIndicator";

export default function DeleteProductModal({
  closeModal,
  productId,
}: {
  closeModal: () => void;
  productId: string;
}) {
  const [loading, setLoading] = useState(false);

  async function handleDeleteProduct() {
    setLoading(true);
    const data = await fetchDeleteProduct(productId);
    if (data.error) return setLoading(false);
    setLoading(false);
    closeModal();
  }

  return (
    <div
      className="mx-auto w-[90%] max-w-md flex flex-col gap-4 overflow-hidden shadow rounded-md bg-white animate-zoom-in"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex flex-col gap-2 px-6 py-2">
        <h3 className="text-lg font-semibold">Delete Product</h3>
        <p>
          Are you sure you want to delete product with ID{" "}
          <strong>#{productId}</strong> ?
        </p>
      </div>
      <div className="flex justify-end gap-4 p-4 bg-zinc-100">
        <button
          onClick={closeModal}
          className="p-2 border border-zinc-300 hover:border-zinc-400 focus-visible:ring ring-blue-400 px-4 rounded-md bg-zinc-200 hover:bg-zinc-300 active:bg-[#ccc] duration-300"
        >
          Cancel
        </button>
        <button
          disabled={loading}
          onClick={handleDeleteProduct}
          className="p-2 w-20 flex-center text-white duration-300 bg-red-600 rounded-md focus-visible:ring ring-red-800 hover:bg-red-700 active:bg-red-800"
        >
          {loading ? <LoadingIndicator /> : "Delete"}
        </button>
      </div>
    </div>
  );
}
