import { useState } from "react";
import useUserContext from "../hooks/useUserContext";

export default function ChangeEmailForm({
  closeModal,
}: {
  closeModal: () => void;
}) {
  const { user } = useUserContext();
  const [email, setEmail] = useState(user?.email);

  function handleChangeEmail(e: React.FormEvent) {
    e.preventDefault();
  }
  return (
    <form
      onSubmit={handleChangeEmail}
      className="w-full sm:min-w-[500px] flex flex-col gap-4 pt-6"
    >
      <div className="flex flex-col gap-2 px-6">
        <label htmlFor="email" className="w-fit">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          autoFocus
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-3 bg-zinc-100 rounded-md focus-visible:ring ring-blue-400"
        />
      </div>
      <div className="bg-zinc-100 p-4 flex justify-end gap-4">
        <button
          type="button"
          onClick={closeModal}
          className="p-2 border border-zinc-300 hover:border-zinc-400 focus-visible:ring ring-blue-400 px-4 rounded-md bg-zinc-200 hover:bg-zinc-300 active:bg-[#ccc] duration-300"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="p-2 focus-visible:ring ring-green-800 px-4 rounded-md bg-green-600 hover:bg-green-700 active:bg-green-800 text-white duration-300"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
