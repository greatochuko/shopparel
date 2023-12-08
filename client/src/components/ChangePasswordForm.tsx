import { useState } from "react";

export default function ChangePasswordForm({
  closeModal,
}: {
  closeModal: () => void;
}) {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleChangePassword(e: React.FormEvent) {
    e.preventDefault();
  }

  return (
    <form
      onSubmit={handleChangePassword}
      className="w-full sm:min-w-[500px] flex flex-col gap-4 pt-6"
    >
      <div className="flex flex-col gap-2 px-6">
        <label htmlFor="password" className="w-fit">
          Old Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          autoFocus
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
          className="p-3 bg-zinc-100 rounded-md focus-visible:ring ring-blue-400"
        />
      </div>
      <div className="flex flex-col gap-2 px-6">
        <label htmlFor="new-password" className="w-fit">
          New Password
        </label>
        <input
          type="new-password"
          name="new-password"
          id="new-password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="p-3 bg-zinc-100 rounded-md focus-visible:ring ring-blue-400"
        />
      </div>
      <div className="flex flex-col gap-2 px-6">
        <label htmlFor="confirm-password" className="w-fit">
          Confirm New Password
        </label>
        <input
          type="confirm-password"
          name="confirm-password"
          id="confirm-password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
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
