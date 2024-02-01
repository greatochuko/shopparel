import React from "react";

export default function ModalContainer({
  closeModal,
  children,
}: {
  closeModal: () => void;
  children: React.ReactNode;
}) {
  return (
    <div
      className="fixed h-screen left-0 top-0 w-screen z-[100] flex-center backdrop-blur-sm animate-fade-in bg-black/30"
      onClick={closeModal}
    >
      {children}
    </div>
  );
}
