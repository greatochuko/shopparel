import { useState } from "react";
import ProductInformationForm from "./ProductInformationForm";
import ProductImagesForm from "./ProductImagesForm";
import ProductSpecsForm from "./ProductSpecsForm";
import {
  ProductInfoType,
  fetchEditProduct,
  fetchSaveProductInfo,
} from "../services/productServices";
import { ProductType } from "./Product";

export default function CreateProductModal({
  closeModal,
  productProp,
}: {
  closeModal: () => void;
  productProp?: ProductType;
}) {
  const [activeTab, setActiveTab] = useState("information");
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState<ProductType | null>(
    productProp || null
  );
  const [level, setLevel] = useState(product ? (product.imgUrl ? 3 : 2) : 1);

  async function handleSaveProductInformation(
    e: React.FormEvent,
    productInfo: ProductInfoType
  ) {
    e.preventDefault();
    setLoading(true);
    const data = productInfo._id
      ? await fetchEditProduct(productInfo)
      : await fetchSaveProductInfo(productInfo);

    if (data.error) return setLoading(false);
    setProduct(data);
    setLevel(2);
    setLoading(false);
    setActiveTab("image");
  }

  async function handleSaveProductImages(e: React.FormEvent, images: string[]) {
    e.preventDefault();
    setLoading(true);

    const data = await fetchEditProduct({
      _id: product?._id as string,
      images: [...images].reverse(),
      imgUrl: images.at(-1) as string,
    });
    if (data.error) return setLoading(false);
    setLevel(3);
    setActiveTab("specs");
    setLoading(false);
  }

  async function handlePublish(
    e: React.FormEvent,
    colors: string[],
    sizes: string[],
    gender: string,
    quantity: number,
    categories: string[]
  ) {
    e.preventDefault();
    setLoading(true);
    const data = await fetchEditProduct({
      _id: product?._id as string,
      colors,
      sizes,
      gender,
      quantity,
      categories,
      isPublished: true,
    });
    if (data.error) return setLoading(false);
    setLoading(false);
    closeModal();
  }

  async function saveAsDraft() {
    const data = await fetchEditProduct({ isPublished: false });
    if (data.error) return setLoading(false);
    setLoading(false);
    closeModal();
  }

  return (
    <div
      className="mx-auto w-[90%] max-w-3xl aspect-[.8] max-h-[90%] sm:aspect-[1.2] flex flex-col shadow rounded-lg overflow-hidden bg-white animate-zoom-in"
      onClick={(e) => e.stopPropagation()}
    >
      <ul className="flex">
        <li
          onClick={() => setActiveTab("information")}
          tabIndex={0}
          className={`p-3 flex-1 border-b-4 text-center cursor-pointer hover:bg-zinc-100 duration-300 focus-visible:bg-zinc-100 ${
            activeTab === "information" ? "border-blue-400" : ""
          }`}
        >
          Information
        </li>
        <li
          onClick={() => level > 1 && setActiveTab("image")}
          tabIndex={0}
          className={`p-3 flex-1 border-b-4 text-center hover:bg-zinc-100 duration-300 focus-visible:bg-zinc-100 ${
            activeTab === "image" ? "border-blue-400" : ""
          } ${
            level > 1 ? " cursor-pointer" : " cursor-not-allowed opacity-50"
          }`}
        >
          Image
        </li>
        <li
          onClick={() => level > 2 && setActiveTab("specs")}
          tabIndex={0}
          className={`p-3 flex-1 border-b-4 text-center cursor-pointer hover:bg-zinc-100 duration-300 focus-visible:bg-zinc-100 ${
            activeTab === "specs" ? "border-blue-400" : ""
          } ${level > 2 ? " cursor-pointer" : " cursor-default opacity-50"}`}
        >
          Specs
        </li>
      </ul>
      <ProductInformationForm
        active={activeTab === "information"}
        loading={loading}
        saveAsDraft={saveAsDraft}
        product={product}
        handleSaveProductInformation={handleSaveProductInformation}
      />
      <ProductImagesForm
        active={activeTab === "image"}
        saveAsDraft={saveAsDraft}
        product={product}
        loading={loading}
        handleSaveProductImages={handleSaveProductImages}
      />
      <ProductSpecsForm
        active={activeTab === "specs"}
        product={product}
        loading={loading}
        saveAsDraft={saveAsDraft}
        handlePublish={handlePublish}
      />
    </div>
  );
}
