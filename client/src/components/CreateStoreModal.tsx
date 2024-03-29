import { useState } from "react";
import { uploadImage } from "../utils/uploadImage";
import { fetchCreateStore } from "../services/storeServices";
import LoadingIndicator from "./LoadingIndicator";
import { useNavigate } from "react-router-dom";
import useUserContext from "../hooks/useUserContext";
import { UserType } from "../context/UserContext";

export default function CreateStoreModal({
  closeModal,
}: {
  closeModal: () => void;
}) {
  const [logo, setLogo] = useState<File | null>(null);
  const [logoUrl, setLogoUrl] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { udpateUser, user } = useUserContext();

  function handleChangeLogo(e: React.ChangeEvent) {
    const eventTarget = e.target as HTMLInputElement;
    if (!eventTarget.files) return;
    const fileReader = new FileReader();
    fileReader.readAsDataURL(eventTarget.files[0]);
    fileReader.onload = (ev) => {
      setLogoUrl(ev.target?.result as string);
    };
    setLogo(eventTarget.files[0]);
  }

  async function handleCreateStore(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    // Upload logo and get url
    if (!logo) return;
    const { url } = await uploadImage(logo);
    const data = await fetchCreateStore(name, url);
    if (data.error) return setLoading(false);
    closeModal();
    udpateUser({ ...user, store: data.storeId } as UserType);
    navigate("/admin");
  }

  return (
    <div
      className="fixed z-50 w-full h-full bg-black/50 flex-center backdrop-blur-sm animate-fade-in"
      onClick={closeModal}
    >
      <form
        className="p-4 bg-white rounded-md w-[90%] max-w-3xl flex flex-col gap-2 sm:gap-4 md:gap-6 animate-zoom-in"
        onSubmit={handleCreateStore}
        onClick={(e) => e.stopPropagation()}
      >
        <label
          htmlFor="logo"
          className="w-full overflow-hidden relative md:text-xl font-semibold rounded-md border-dashed border-[3px] border-zinc-300 aspect-video cursor-pointer group hover:border-zinc-400 duration-300"
        >
          {logoUrl && (
            <img
              src={logoUrl}
              alt=""
              className="object-cover w-full h-full duration-300 group-hover:scale-105"
            />
          )}
          <div
            className={`absolute top-0 left-0 flex-col w-full h-full gap-3 duration-300 opacity-30 flex-center group-hover:opacity-100 ${
              logoUrl ? "text-white bg-black/50" : "text-zinc-700 bg-zinc-200"
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
                    fill={logoUrl ? "white" : "#333"}
                  >
                    <path
                      d="M368,109 C366.896,109 366,108.104 366,107 C366,105.896 366.896,105 368,105 C369.104,105 370,105.896 370,107 C370,108.104 369.104,109 368,109 L368,109 Z M368,103 C365.791,103 364,104.791 364,107 C364,109.209 365.791,111 368,111 C370.209,111 372,109.209 372,107 C372,104.791 370.209,103 368,103 L368,103 Z M390,116.128 L384,110 L374.059,120.111 L370,116 L362,123.337 L362,103 C362,101.896 362.896,101 364,101 L388,101 C389.104,101 390,101.896 390,103 L390,116.128 L390,116.128 Z M390,127 C390,128.104 389.104,129 388,129 L382.832,129 L375.464,121.535 L384,112.999 L390,118.999 L390,127 L390,127 Z M364,129 C362.896,129 362,128.104 362,127 L362,126.061 L369.945,118.945 L380.001,129 L364,129 L364,129 Z M388,99 L364,99 C361.791,99 360,100.791 360,103 L360,127 C360,129.209 361.791,131 364,131 L388,131 C390.209,131 392,129.209 392,127 L392,103 C392,100.791 390.209,99 388,99 L388,99 Z"
                      id="image-picture"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
            Click to {logoUrl ? "Change" : "Upload"} Store Logo
          </div>
        </label>
        <input
          type="file"
          name="logo"
          id="logo"
          className="hidden"
          accept=".png, .jpg, .jpeg"
          onChange={handleChangeLogo}
        />
        <div className="flex flex-col gap-1">
          <input
            type="text"
            name="store-name"
            id="store-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter store name"
            className="p-2 border rounded-md sm:text-lg md:text-2xl text-zinc-700"
          />
        </div>
        <button
          type="submit"
          disabled={!logo || !name}
          className="p-2 text-sm font-semibold text-white duration-300 rounded-md flex-center disabled:bg-zinc-500 md:text-base md:p-3 bg-accent-blue-100 hover:bg-accent-blue-200 active:bg-accent-blue-300 focus-visible:ring ring-blue-400"
        >
          {loading ? <LoadingIndicator /> : "Create Store"}
        </button>
      </form>
    </div>
  );
}
