import { useState } from "react";
import useUserContext from "../hooks/useUserContext";
import { updateUserFullName } from "../services/userServices";
import LoadingIndicator from "./LoadingIndicator";

export default function ChangeNameForm({
  closeModal,
}: {
  closeModal: () => void;
}) {
  const { user, setUser } = useUserContext();

  const [firstName, setFirstName] = useState(user?.firstName as string);
  const [lastName, setLastName] = useState(user?.lastName as string);
  const [loading, setLoading] = useState(false);

  async function handleChangeName(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const data = await updateUserFullName(firstName, lastName);

    if (data.error) return setLoading(false);
    setUser(data);
    setLoading(false);
    closeModal();
  }

  return (
    <form
      onSubmit={handleChangeName}
      className="bg-white overflow-hidden shadow flex flex-col gap-4 pt-6 mx-auto w-[90%] max-w-lg rounded-md"
    >
      <div className="flex flex-col gap-2 px-6">
        <label htmlFor="first-name" className="w-fit">
          First Name
        </label>
        <input
          type="text"
          name="first-name"
          id="first-name"
          autoFocus
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="p-3 rounded-md bg-zinc-100 focus-visible:ring ring-blue-400"
        />
      </div>
      <div className="flex flex-col gap-2 px-6">
        <label htmlFor="last-name" className="w-fit">
          Last Name
        </label>
        <input
          type="text"
          name="last-name"
          id="last-name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="p-3 rounded-md bg-zinc-100 focus-visible:ring ring-blue-400"
        />
      </div>
      <div className="flex justify-end gap-4 p-4 bg-zinc-100">
        <button
          type="button"
          onClick={closeModal}
          className="p-2 border border-zinc-300 hover:border-zinc-400 focus-visible:ring ring-blue-400 px-4 rounded-md bg-zinc-200 hover:bg-zinc-300 active:bg-[#ccc] duration-300"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={loading}
          className="p-2 px-4 text-white duration-300 bg-green-600 rounded-md focus-visible:ring ring-green-800 hover:bg-green-700 active:bg-green-800"
        >
          {loading ? <LoadingIndicator /> : "Submit"}
        </button>
      </div>
    </form>
  );
}
