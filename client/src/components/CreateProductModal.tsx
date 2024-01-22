import { useState } from "react";
import ProductInformationForm from "./ProductInformationForm";
import ProductImagesForm from "./ProductImagesForm";
import ProductSpecsForm from "./ProductSpecsForm";
import {
  ProductInfoType,
  fetchSaveProductInfo,
} from "../services/productServices";

export default function CreateProductModal({
  closeModal,
  id,
}: {
  closeModal: () => void;
  id?: string;
}) {
  const [activeTab, setActiveTab] = useState("information");
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [level, setLevel] = useState(1);
  const [productId, setProductId] = useState<string | null>(id || null);
  const [loading, setLoading] = useState(false);

  async function handleSaveProductInformation(
    e: React.FormEvent,
    productInfo: ProductInfoType
  ) {
    e.preventDefault();
    setLoading(true);
    const data = await fetchSaveProductInfo(productInfo);
    if (data.error) return setLoading(false);
    setProductId(data._id);
    setLevel(2);
    setActiveTab("image");
    setLoading(false);
  }

  function handleSaveProductImages(e: React.FormEvent) {
    e.preventDefault();
    setLevel(3);
    setActiveTab("specs");
  }

  function handlePublish(e: React.FormEvent) {
    e.preventDefault();
    closeModal();
  }

  function saveAsDraft() {
    closeModal();
  }

  return (
    <div
      className="mx-auto w-[90%] max-w-3xl aspect-[.8] sm:aspect-[1.3] flex flex-col shadow rounded-lg overflow-hidden bg-white animate-zoom-in"
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
          } ${
            level > 2 ? " cursor-pointer" : " cursor-not-allowed opacity-50"
          }`}
        >
          Specs
        </li>
      </ul>
      <ProductInformationForm
        active={activeTab === "information"}
        loading={loading}
        saveAsDraft={saveAsDraft}
        handleSaveProductInformation={handleSaveProductInformation}
      />
      <ProductImagesForm
        active={activeTab === "image"}
        saveAsDraft={saveAsDraft}
        loading={loading}
        handleSaveProductImages={handleSaveProductImages}
      />
      <ProductSpecsForm
        active={activeTab === "specs"}
        loading={loading}
        saveAsDraft={saveAsDraft}
        handlePublish={handlePublish}
        selectedColors={selectedColors}
        setSelectedColors={setSelectedColors}
        selectedSizes={selectedSizes}
        setSelectedSizes={setSelectedSizes}
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
      />
    </div>
  );
}
