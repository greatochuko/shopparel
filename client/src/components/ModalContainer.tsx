import React, { useEffect } from "react";

export default function ModalContainer({
  closeModal,
  children,
}: {
  closeModal: () => void;
  children: React.ReactNode;
}) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div
      className="top-0 left-0 z-[100] fixed flex-center bg-black/30 backdrop-blur-sm w-screen h-screen animate-fade-in"
      onClick={closeModal}
    >
      {children}
    </div>
  );
}
