import { useState } from "react";
import { ProductInfoType } from "../services/productServices";
import { useOutletContext } from "react-router-dom";
import { StoreType } from "./AdminPageLayout";
import { ProductType } from "./Product";
import LoadingIndicator from "./LoadingIndicator";

export default function ProductInformationForm({
  handleSaveProductInformation,
  saveAsDraft,
  active,
  loading,
  product,
}: {
  handleSaveProductInformation: (
    e: React.FormEvent,
    productInfo: ProductInfoType
  ) => void;
  saveAsDraft: () => void;
  active: boolean;
  loading: boolean;
  product: ProductType | null;
}) {
  const [productName, setProductName] = useState(product?.name || "");
  const [description, setDescription] = useState(product?.description || "");
  const [price, setPrice] = useState(product?.price || "0");
  const [shipping, setShipping] = useState(product?.shipping || "0");
  const [discount, setDiscount] = useState(product?.discount || "0");
  const { store } = useOutletContext<{ store: StoreType }>();

  return (
    <form
      className={`p-4 pb-0 flex flex-col flex-1 bg- overflow-y-scroll ${
        active ? "" : "hidden"
      }`}
      onSubmit={(e) =>
        handleSaveProductInformation(e, {
          name: productName,
          description,
          price: Number(price || 0),
          discount: Number(discount || 0),
          shipping: Number(shipping || 0),
          store: store._id,
          _id: product?._id || "",
        })
      }
    >
      <label htmlFor="product-name" className="font-semibold w-fit">
        Product Name
      </label>
      <input
        required
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        type="text"
        id="product-name"
        className="border p-2 rounded-md"
      />
      <div className="flex flex-col flex-1 mt-4">
        <label htmlFor="description" className="font-semibold w-fit">
          Description
        </label>
        <textarea
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          name="description"
          id="description"
          className="border p-2 rounded-md flex-1 aspect-[2] sm:aspect-[2.5] resize-none"
        ></textarea>
      </div>
      <div className="flex gap-2 mt-4 sm:flex-row flex-col w-full">
        <div className="flex-1 flex flex-col">
          <label htmlFor="price" className="font-semibold w-fit">
            Price ($)
          </label>
          <input
            required
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type="number"
            id="price"
            className="border p-2 rounded-md w-full"
          />
        </div>
        <div className="flex-1 flex flex-col">
          <label htmlFor="shipping" className="font-semibold w-fit">
            Shipping ($)
          </label>
          <input
            required
            value={shipping}
            onChange={(e) => setShipping(e.target.value)}
            type="number"
            id="shipping"
            className="border p-2 rounded-md w-full"
          />
        </div>
        <div className="flex-1 flex flex-col">
          <label htmlFor="discount" className="font-semibold w-fit">
            Discount (%)
          </label>
          <input
            required
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
            type="number"
            id="discount"
            className="border p-2 rounded-md w-full"
          />
        </div>
      </div>

      <div className="flex gap-2 sticky bottom-0 text-sm bg-white pb-4 mt-4">
        <button
          type="submit"
          className="flex-1 flex-center sm:flex-[2] p-2 rounded-md font-semibold bg-accent-blue-100 text-white duration-300 hover:bg-accent-blue-200 active:bg-accent-blue-300 focus-visible:ring ring-blue-400"
        >
          {loading ? <LoadingIndicator /> : "Save and Next"}
        </button>
        <button
          onClick={saveAsDraft}
          type="button"
          className="flex-1 p-2 rounded-md font-semibold border hover:bg-zinc-100 hover:border-zinc-200 duration-300 active:bg-zinc-200 active:border-zinc-300 focus-visible:ring ring-blue-400"
        >
          Save as Draft
        </button>
      </div>
    </form>
  );
}
