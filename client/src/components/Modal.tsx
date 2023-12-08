export default function Modal({ closeModal }: { closeModal: () => void }) {
  return (
    <div
      onClick={closeModal}
      className="fixed z-50 bg-black/20 top-0 left-0 w-screen h-screen flex-center animate-fade-in"
    >
      <div className="w-[90%] max-w-xl bg-white aspect-video rounded-lg animate-zoom-in"></div>
    </div>
  );
}
