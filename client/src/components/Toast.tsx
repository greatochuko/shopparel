import { useEffect, useState } from "react";

type yPos = "top" | "bottom";
type xPos = "right" | "left" | "center";

type toastProps = {
  removeToast: () => void;
  position?: `${yPos}-${xPos}`;
  type?: "error" | "success" | "warning";
  message: string;
};

export default function Toast({
  removeToast,
  position,
  type,
  message,
}: toastProps) {
  const [width, setWidth] = useState("100%");
  const [top, setTop] = useState(position?.includes("top") ? -100 : undefined);
  const [bottom, setBottom] = useState(
    position?.includes("bottom") ? -100 : undefined
  );

  useEffect(() => {
    position?.includes("top") ? setTop(10) : setBottom(10);
    setWidth("0");
    const timeout = setTimeout(() => {
      position?.includes("top") ? setTop(-100) : setBottom(-100);
      setTimeout(removeToast, 300);
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, [removeToast, position]);

  let left;
  let right;

  if (position?.includes("left")) {
    left = "10px";
  } else if (position?.includes("right")) {
    right = "10px";
  } else {
    left = "50%";
  }

  let color = "green";

  if (type === "error") {
    color = "red";
  } else if (type === "warning") {
    color = "#e9ca00";
  } else {
    color = "green";
  }

  return (
    <div
      style={{ boxShadow: `0 0 5px 0px ${color}`, top, left, right, bottom }}
      className={`fixed w-60 overflow-hidden duration-300 bg-white ${
        position?.includes("center") && " -translate-x-[50%]"
      } p-4 px-6 rounded-md flex flex-col gap-2`}
    >
      <h2 style={{ color: color }} className="font-semibold text-green-600">
        Success
      </h2>
      <p className="text-sm text-zinc-700">{message}</p>
      <div
        style={{ width, backgroundColor: color }}
        className="h-1 absolute bottom-0 w-full left-0 duration-[5000ms] ease-linear"
      ></div>
      <button onClick={removeToast} className="absolute top-0 p-1 right-3">
        x
      </button>
    </div>
  );
}
