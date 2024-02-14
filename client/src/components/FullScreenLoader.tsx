import { useState } from "react";

export default function FullScreenLoader() {
  const [showBlur, setShowBlur] = useState(true);

  console.log(showBlur);

  return (
    <div className="">
      <img
        src="/full-screen-bg-blur.jpg"
        alt="clothes store"
        className={`fixed object-cover w-screen h-screen -z-10 duration-300 `}
      />
      <img
        onLoad={() => {
          setShowBlur(false);
        }}
        src="/full-screen-bg.jpg"
        alt="clothes store"
        className={`fixed object-cover w-screen h-screen -z-10 duration-[10000] animate-fade-in-duration-1000 ${
          showBlur ? "hidden" : "block"
        }`}
      />
      <div className="flex-col w-screen h-screen gap-4 bg-black/50 flex-center">
        <img src="/favicon.png" alt="" width={50} height={50} />
        <h1 className="text-3xl font-bold text-white">Shopparel</h1>
        <div className="relative w-32 h-1 overflow-hidden rounded-full bg-black/50">
          <div className="absolute w-full h-full bg-white animate-loader"></div>
        </div>
      </div>
    </div>
  );
}
