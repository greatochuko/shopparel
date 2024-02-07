import { useOutletContext } from "react-router-dom";
import { StoreType } from "../components/AdminPageLayout";
import React, { useEffect, useState } from "react";
import LoadingIndicator from "../components/LoadingIndicator";
import { uploadImage } from "../utils/uploadImage";
import { fetchUpdateStore } from "../services/storeServices";

export default function AdminSettingsPage() {
  const { store, setStore } = useOutletContext<{
    store: StoreType | null;
    setStore: React.Dispatch<React.SetStateAction<StoreType | null>>;
  }>();
  const [logo, setLogo] = useState(store?.logo || "");
  const [name, setName] = useState(store?.name || "");
  const [description, setDescription] = useState(store?.description || "");
  const [loading, setLoading] = useState(false);
  const [loadingLogo, setLoadingLogo] = useState(false);

  useEffect(() => {
    document.title = `Shopparel-Admin: Settings`;
    if (store?._id) {
      setName(store.name);
      setLogo(store.logo);
      setDescription(store.description);
    }
  }, [store?._id, store?.description, store?.logo, store?.name]);

  async function handleSaveChanges(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    if (!store) return;
    const data = await fetchUpdateStore(store?._id, name, logo, description);
    if (data.error) return setLoading(false);
    setStore(data);
    setLoading(false);
  }

  function handleResetChanges() {
    if (!store) return;
    setName(store.name);
    setLogo(store.logo);
    setDescription(store.description);
  }

  async function handleChangeLogo(e: React.ChangeEvent) {
    setLoadingLogo(true);
    const eventTarget = e.target as HTMLInputElement;
    const imageFile = eventTarget.files && eventTarget.files[0];
    if (imageFile) {
      const { url } = await uploadImage(imageFile);
      setLogo(url);
    }
    setLoadingLogo(false);
  }

  return (
    <div className="flex flex-col flex-1 gap-4 w-[90%] max-w-7xl mx-auto py-6 text-zinc-800 overflow-hidden">
      <h2 className="text-xl font-semibold">Settings</h2>
      {!store ? (
        <div className="flex-1 p-8 bg-white rounded-md flex-center">
          <LoadingIndicator className="fill-accent-blue-100" />
        </div>
      ) : (
        <form className="p-8 bg-white rounded-md" onSubmit={handleSaveChanges}>
          <div className="flex flex-col max-w-5xl">
            <div className="flex flex-col gap-2 py-4 border-b border-zinc-100 sm:flex-row">
              <label htmlFor="logo" className="flex-1 font-semibold">
                Logo
              </label>
              <div className="flex-[3] lg:flex-[2] flex items-center gap-4">
                <img
                  src={logo}
                  alt={store.name}
                  className="object-cover w-20 rounded-full aspect-square"
                />
                <label
                  tabIndex={0}
                  htmlFor="logo"
                  onClick={(e) => {
                    if (loadingLogo) e.preventDefault();
                  }}
                  className="p-2 w-32 flex-center font-semibold duration-300 border-[3px] rounded-md cursor-pointer focus-visible:ring ring-blue-400 hover:bg-zinc-100 active:bg-zinc-200 "
                >
                  {loadingLogo ? (
                    <LoadingIndicator className="fill-accent-blue-100" />
                  ) : (
                    "Change Logo"
                  )}
                </label>
                <input
                  type="file"
                  name="logo"
                  id="logo"
                  className="hidden"
                  accept=".jpg, .png, .jpeg"
                  onChange={handleChangeLogo}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 py-4 border-b border-zinc-100 sm:items-center sm:flex-row">
              <label htmlFor="name" className="flex-1 font-semibold">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="flex-[3] lg:flex-[2] min-w-0 p-2 border rounded-md focus-visible:shadow"
              />
            </div>
            <div className="flex flex-col items-start gap-2 py-4 border-b border-zinc-100 sm:flex-row">
              <label htmlFor="name" className="font-semibold sm:flex-1">
                Description
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                name="description"
                id="description"
                className="aspect-[2] w-full sm:flex-[3] lg:flex-[2] border rounded-md resize-none focus-visible:shadow p-2"
              ></textarea>
            </div>
            <div className="flex gap-4 my-4 ml-auto w-fit">
              <button
                type="button"
                disabled={loading}
                onClick={handleResetChanges}
                className="p-2 px-4 font-semibold duration-300 border-2 rounded-md disabled:bg-zinc-300 hover:bg-zinc-100 active:bg-zinc-200"
              >
                Reset
              </button>
              <button
                type="submit"
                disabled={
                  loading ||
                  (logo === store.logo &&
                    name === store.name &&
                    description === store.description)
                }
                className="py-2 font-semibold text-white rounded-md disabled:bg-zinc-300 w-36 flex-center bg-accent-blue-100 hover:bg-accent-blue-200 active:bg-accent-blue-300 focus-visible:ring ring-blue-400"
              >
                {loading ? <LoadingIndicator /> : "Save Changes"}
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
