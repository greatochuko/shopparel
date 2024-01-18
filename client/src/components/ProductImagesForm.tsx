import { useState } from "react";

export default function ProductImagesForm({
  handleSaveProductImages,
}: {
  handleSaveProductImages: (e: React.FormEvent) => void;
}) {
  const [bannerUrl, setBannerUrl] = useState("");

  function openDeleteProductImageModal() {
    return;
  }

  return (
    <form
      className="p-4 pb-0 flex flex-col flex-1"
      onSubmit={handleSaveProductImages}
    >
      <div className="flex-1 flex flex-col overflow-y-scroll pr-2">
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
          accept=".png, .jpg, .jpeg"
          className="hidden"
        />
        <h2 className="mt-4 mb-2 font-semibold">Uploads</h2>
        <ul className="flex flex-col gap-2 flex-1">
          <li className="rounded-md border p-2 flex gap-2 items-center">
            <button
              type="button"
              className="group p-2 cursor-grab active:cursor-grabbing"
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
                    d="M16 17C17.1046 17 18 17.8954 18 19C18 20.1046 17.1046 21 16 21C14.8954 21 14 20.1046 14 19C14 17.8954 14.8954 17 16 17ZM8 17C9.10457 17 10 17.8954 10 19C10 20.1046 9.10457 21 8 21C6.89543 21 6 20.1046 6 19C6 17.8954 6.89543 17 8 17ZM16 10C17.1046 10 18 10.8954 18 12C18 13.1046 17.1046 14 16 14C14.8954 14 14 13.1046 14 12C14 10.8954 14.8954 10 16 10ZM8 10C9.10457 10 10 10.8954 10 12C10 13.1046 9.10457 14 8 14C6.89543 14 6 13.1046 6 12C6 10.8954 6.89543 10 8 10ZM16 3C17.1046 3 18 3.89543 18 5C18 6.10457 17.1046 7 16 7C14.8954 7 14 6.10457 14 5C14 3.89543 14.8954 3 16 3ZM8 3C9.10457 3 10 3.89543 10 5C10 6.10457 9.10457 7 8 7C6.89543 7 6 6.10457 6 5C6 3.89543 6.89543 3 8 3Z"
                    className="fill-zinc-500 group-hover:fill-black duration-300"
                  ></path>{" "}
                </g>
              </svg>
            </button>
            <img
              src="/striped-summer-shorts.png"
              alt="striped summer shorts"
              className="w-10 h-10 bg-zinc-100 rounded-md p-1"
            />
            <div className="flex flex-1 flex-col">
              <p className="text-sm sm:text-base">striped-summer-shorts.png</p>
              <p className="text-sm sm:text-base">2.3MB</p>
            </div>
            <button
              className="p-3 duration-200 rounded-full group"
              tabIndex={1}
              onClick={openDeleteProductImageModal}
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
          </li>
        </ul>
      </div>

      <div className="flex gap-2 sticky bottom-0 text-sm bg-white pb-2 sm:pb-4 mt-4">
        <button
          type="submit"
          className="flex-1 sm:flex-[2] p-2 rounded-md font-semibold bg-accent-blue-100 text-white duration-300 hover:bg-accent-blue-200 active:bg-accent-blue-300 focus-visible:ring ring-blue-400"
        >
          Save and Next
        </button>
        <button
          type="button"
          className="flex-1 p-2 rounded-md font-semibold border hover:bg-zinc-100 hover:border-zinc-200 duration-300 active:bg-zinc-200 active:border-zinc-300 focus-visible:ring ring-blue-400"
        >
          Save as Draft
        </button>
      </div>
    </form>
  );
}
