import { useNavigate } from "react-router-dom";
import useUserContext from "../hooks/useUserContext";
import { logoutUser } from "../services/authServices";

export default function SignoutModal({
  closeModal,
}: {
  closeModal: () => void;
}) {
  const { updateUser } = useUserContext();
  const navigate = useNavigate();

  async function handleSignout() {
    const data = await logoutUser();
    if (data.error) return;
    updateUser(null);
    navigate("/login");
  }
  return (
    <div className="w-full sm:mi`n-w-[500px] flex flex-col gap-4 pt-6">
      <div className="flex flex-col gap-2 px-6">
        <h3 className="text-lg font-semibold">Sign Out?</h3>
        <p>Are you sure you want to sign out?</p>
      </div>
      <div className="bg-zinc-100 p-4 flex justify-end gap-4">
        <button
          onClick={closeModal}
          className="p-2 border border-zinc-300 hover:border-zinc-400 focus-visible:ring ring-blue-400 px-4 rounded-md bg-zinc-200 hover:bg-zinc-300 active:bg-[#ccc] duration-300"
        >
          Cancel
        </button>
        <button
          onClick={handleSignout}
          className="p-2 focus-visible:ring ring-red-800 px-4 rounded-md bg-red-600 hover:bg-red-700 active:bg-red-800 text-white duration-300"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}
