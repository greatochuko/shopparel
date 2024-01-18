import { useState } from "react";
import ProductInformationForm from "./ProductInformationForm";
import ProductImagesForm from "./ProductImagesForm";

export default function CreateProductModal({
  closeModal,
}: {
  closeModal: () => void;
}) {
  const [activeTab, setActiveTab] = useState("information");
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);

  function handleSaveProductInformation(e: React.FormEvent) {
    e.preventDefault();
    setActiveTab("image");
  }

  function handlePublish(e: React.FormEvent) {
    e.preventDefault();
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
          onClick={() => setActiveTab("image")}
          tabIndex={0}
          className={`p-3 flex-1 border-b-4 text-center cursor-pointer hover:bg-zinc-100 duration-300 focus-visible:bg-zinc-100 ${
            activeTab === "image" ? "border-blue-400" : ""
          }`}
        >
          Image
        </li>
      </ul>
      {activeTab === "information" ? (
        <ProductInformationForm
          handleSaveProductInformation={handleSaveProductInformation}
          selectedColors={selectedColors}
          setSelectedColors={setSelectedColors}
          selectedSizes={selectedSizes}
          setSelectedSizes={setSelectedSizes}
        />
      ) : (
        <ProductImagesForm handlePublish={handlePublish} />
      )}
    </div>
  );
}
