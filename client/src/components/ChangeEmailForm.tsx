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
      className="sm:min-w-[500px] flex flex-col gap-4 pt-6 bg-white overflow-hidden shadow mx-auto w-[90%] max-w-lg rounded-md"
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
          className="p-2 px-4 text-white duration-300 bg-green-600 rounded-md focus-visible:ring ring-green-800 hover:bg-green-700 active:bg-green-800"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
