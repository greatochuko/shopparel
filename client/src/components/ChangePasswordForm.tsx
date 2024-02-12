import { useState } from "react";
import { changePassword } from "../services/userServices";
import LoadingIndicator from "./LoadingIndicator";

export default function ChangePasswordForm({
  closeModal,
}: {
  closeModal: () => void;
}) {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleChangePassword(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const data = await changePassword(oldPassword, newPassword);

    if (data.error) return setLoading(false);
    setLoading(false);
    closeModal();
  }
  const cannotSubmit =
    confirmPassword !== newPassword || !confirmPassword || !newPassword;
  return (
    <form
      onSubmit={handleChangePassword}
      className="sm:min-w-[500px] flex flex-col gap-4 pt-6 mx-auto w-[90%] max-w-lg rounded-md bg-white overflow-hidden shadow"
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
          className="p-3 rounded-md bg-zinc-100 focus-visible:ring ring-blue-400"
        />
      </div>
      <div className="flex flex-col gap-2 px-6">
        <label htmlFor="new-password" className="w-fit">
          New Password
        </label>
        <input
          type="password"
          name="new-password"
          id="new-password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="p-3 rounded-md bg-zinc-100 focus-visible:ring ring-blue-400"
        />
      </div>
      <div className="flex flex-col gap-2 px-6">
        <label htmlFor="confirm-password" className="w-fit">
          Confirm New Password
        </label>
        <input
          type="password"
          name="confirm-password"
          id="confirm-password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
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
          disabled={loading || cannotSubmit}
          className="p-2 px-4 text-white duration-300 bg-green-600 rounded-md disabled:bg-zinc-400 focus-visible:ring ring-green-800 hover:bg-green-700 active:bg-green-800"
        >
          {loading ? <LoadingIndicator /> : "Submit"}
        </button>
      </div>
    </form>
  );
}
