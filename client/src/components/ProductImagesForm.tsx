import React, { useEffect, useState } from "react";
import LoadingIndicator from "./LoadingIndicator";
import UploadedProductImage from "./UploadedProductImage";
import { ProductType } from "./Product";

export type ProductImageType = { id: string; dataUrl: string; file: File };

export default function ProductImagesForm({
  handleSaveProductImages,
  saveAsDraft,
  active,
  loading,
  product,
}: {
  handleSaveProductImages: (e: React.FormEvent, files: File[]) => void;
  saveAsDraft: () => void;
  active: boolean;
  loading: boolean;
  product: ProductType | null;
}) {
  const [productImages, setProductImages] = useState<ProductImageType[]>([]);
  const [banner, setBanner] = useState<File | string | null>(
    product?.imgUrl || null
  );

  const [bannerUrl, setBannerUrl] = useState(product?.imgUrl || "");

  useEffect(() => {
    async function setUploadedProductImages() {
      const productImageList: ProductImageType[] = [];
      if (!product?.images) return;
      for (let i = 0; i < product.images.length - 1; i++) {
        const url = product.images[i];

        const res = await fetch(url);
        const imgBlob = await res.blob();
        const imgFile = new File([imgBlob], `Img(${i}).png`, {
          type: "image/png",
        });
        productImageList.push({
          dataUrl: url,
          file: imgFile,
          id: crypto.randomUUID(),
        });
      }

      setProductImages(productImageList);
    }
    setUploadedProductImages();
  }, [product?._id]);

  function handleChangeProductThumbnail(e: React.ChangeEvent) {
    const eventTarget = e.target as HTMLInputElement;
    const fileReader = new FileReader();
    if (!eventTarget.files?.length) return;
    setBanner(eventTarget.files[0]);

    fileReader.readAsDataURL(eventTarget.files[0]);
    fileReader.onload = (ev) => {
      setBannerUrl(ev.target?.result as string);
    };
  }

  function handleAddProductImage(e: React.ChangeEvent) {
    const eventTarget = e.target as HTMLInputElement;
    const fileReader = new FileReader();
    if (!eventTarget.files?.length) return;

    fileReader.readAsDataURL(eventTarget.files[0]);
    fileReader.onload = (ev) => {
      setProductImages((curr) => [
        ...curr,
        {
          id: crypto.randomUUID(),
          dataUrl: ev.target?.result as string,
          file: (eventTarget.files as FileList)[0],
        },
      ]);
    };
  }

  const cannotSubmit = !bannerUrl;

  return (
    <form
      className={`p-4 pb-0 flex flex-col flex-1 ${
        active ? "" : "hidden"
      } overflow-y-scroll`}
      onSubmit={(e) => {
        if (loading) return;
        handleSaveProductImages(e, [
          ...productImages.map((image) => image.file),
          banner as File,
        ]);
      }}
    >
      <div className="flex-1 flex flex-col pr-2">
        <label
          htmlFor="main-image"
          className="w-full overflow-hidden relative md:text-xl font-semibold rounded-md border-dashed border-[3px] border-zinc-300 aspect-[2] sm:aspect-[3] cursor-pointer group hover:border-zinc-400 duration-300"
        >
          {bannerUrl && (
            <img
              src={bannerUrl}
              alt=""
              className="object-cover w-full h-full duration-300 group-hover:scale-105"
            />
          )}
          <div
            className={`absolute top-0 left-0 flex-col w-full h-full gap-3 duration-300 opacity-30 flex-center group-hover:opacity-100 ${
              bannerUrl ? "text-white bg-black/50" : "text-zinc-700 bg-zinc-200"
            }`}
          >
            <svg
              height={"30%"}
              width={"30%"}
              viewBox="0 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <title>image-picture</title>
                <desc>Created with Sketch Beta.</desc> <defs> </defs>
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    id="Icon-Set"
                    transform="translate(-360.000000, -99.000000)"
                    fill={bannerUrl ? "white" : "#333"}
                  >
                    <path
                      d="M368,109 C366.896,109 366,108.104 366,107 C366,105.896 366.896,105 368,105 C369.104,105 370,105.896 370,107 C370,108.104 369.104,109 368,109 L368,109 Z M368,103 C365.791,103 364,104.791 364,107 C364,109.209 365.791,111 368,111 C370.209,111 372,109.209 372,107 C372,104.791 370.209,103 368,103 L368,103 Z M390,116.128 L384,110 L374.059,120.111 L370,116 L362,123.337 L362,103 C362,101.896 362.896,101 364,101 L388,101 C389.104,101 390,101.896 390,103 L390,116.128 L390,116.128 Z M390,127 C390,128.104 389.104,129 388,129 L382.832,129 L375.464,121.535 L384,112.999 L390,118.999 L390,127 L390,127 Z M364,129 C362.896,129 362,128.104 362,127 L362,126.061 L369.945,118.945 L380.001,129 L364,129 L364,129 Z M388,99 L364,99 C361.791,99 360,100.791 360,103 L360,127 C360,129.209 361.791,131 364,131 L388,131 C390.209,131 392,129.209 392,127 L392,103 C392,100.791 390.209,99 388,99 L388,99 Z"
                      id="image-picture"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
            Click to {bannerUrl ? "Change" : "Upload"} Product Thumbnail
          </div>
        </label>
        <input
          type="file"
          name="main-image"
          id="main-image"
          onChange={handleChangeProductThumbnail}
          accept=".png, .jpg, .jpeg"
          className="hidden"
        />
        <h2 className="mt-4 mb-2 font-semibold">Uploads</h2>
        <ul className="flex flex-col gap-2 flex-1">
          {productImages.map((image) => (
            <UploadedProductImage key={image.id} image={image} />
          ))}
          <input
            type="file"
            name="new-image"
            id="new-image"
            className="hidden"
            onChange={handleAddProductImage}
          />
          <label
            htmlFor="new-image"
            className="w-full p-2 group cursor-pointer flex-center rounded-md border bg-zinc-100 duration-300 hover:bg-zinc-200 hover:border-zinc-300"
          >
            <svg
              width={20}
              height={20}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
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
                  className="fill-zinc-500 group-hover:fill-zinc-700 duration-300"
                  fillRule="evenodd"
                  d="M9 17a1 1 0 102 0v-6h6a1 1 0 100-2h-6V3a1 1 0 10-2 0v6H3a1 1 0 000 2h6v6z"
                ></path>{" "}
              </g>
            </svg>
          </label>
        </ul>
      </div>

      <div className="flex gap-2 sticky bottom-0 text-sm bg-white pb-2 sm:pb-4 mt-4">
        <button
          type="submit"
          disabled={cannotSubmit}
          className="flex-1 disabled:bg-zinc-500 flex-center sm:flex-[2] p-2 rounded-md font-semibold bg-accent-blue-100 text-white duration-300 hover:bg-accent-blue-200 active:bg-accent-blue-300 focus-visible:ring ring-blue-400"
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
