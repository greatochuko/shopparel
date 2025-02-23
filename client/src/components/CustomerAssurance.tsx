import { HeadsetIcon, ShieldCheckIcon, TruckIcon } from "lucide-react";

type AboutInfoType = {
  title: string;
  description: string;
  icon: JSX.Element;
};

const aboutInfos: AboutInfoType[] = [
  {
    title: "Free Shipping",
    description:
      "Experience Shopping Without Borders Enjoy the convenience of free shipping on all your orders.",
    icon: <TruckIcon />,
  },
  {
    title: "24/7 Customer Service",
    description:
      "Our dedicated customer service team is available around the clock to assist you with any questions.",
    icon: <HeadsetIcon />,
  },
  {
    title: "Secure Payment",
    description:
      "Shop with Confidence, Pay with Peace of Mind Your security is our top priority.",
    icon: <ShieldCheckIcon />,
  },
];

export default function CustomerAssurance() {
  return (
    <div className="text-zinwhitec-800 z-[2] mx-auto flex w-[90%] max-w-6xl flex-col items-center gap-4 gap-y-8 bg-white md:flex-row md:items-start lg:gap-8">
      {aboutInfos.map((info) => (
        <div
          key={info.title}
          className="flex flex-1 flex-col items-center gap-4 text-center md:items-start md:text-left"
        >
          <div className="rounded-full bg-zinc-100 p-4">{info.icon}</div>
          <h3 className="whitespace-nowrap font-semibold">{info.title}</h3>
          <p className="text-sm text-zinc-500">{info.description}</p>
        </div>
      ))}
    </div>
  );
}
