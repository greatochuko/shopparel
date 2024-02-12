import { useNavigate } from "react-router-dom";
import useUserContext from "../hooks/useUserContext";

export default function SignoutModal({
  closeModal,
}: {
  closeModal: () => void;
}) {
  const { setUser } = useUserContext();
  const navigate = useNavigate();

  async function handleSignout() {
    setUser(null);
    localStorage.removeItem("token");
    navigate("/login");
  }

  return (
    <div className="flex flex-col gap-4 pt-6 mx-auto w-[90%] max-w-md rounded-md overflow-hidden shadow bg-white">
      <div className="flex flex-col gap-2 px-6">
        <h3 className="text-lg font-semibold">Sign Out?</h3>
        <p>Are you sure you want to sign out?</p>
      </div>
      <div className="flex justify-end gap-4 p-4 bg-zinc-100">
        <button
          onClick={closeModal}
          className="p-2 border border-zinc-300 hover:border-zinc-400 focus-visible:ring ring-blue-400 px-4 rounded-md bg-zinc-200 hover:bg-zinc-300 active:bg-[#ccc] duration-300"
        >
          Cancel
        </button>
        <button
          onClick={handleSignout}
          className="p-2 px-4 text-white duration-300 bg-red-600 rounded-md focus-visible:ring ring-red-800 hover:bg-red-700 active:bg-red-800"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}
