export default function About() {
  return (
    <div className="flex gap-2 lg:gap-4 w-full px-4 md:p-4 text-center md:-mt-16 md:w-fit bg-white text-zinc-800 flex-col md:flex-row z-[2] mx-auto">
      <div className="p-4 bg-zinc-100 flex-1">
        <h3 className="uppercase font-semibold text-[max(1.8vw,14px)] lg:text-lg whitespace-nowrap">
          Free Shipping Worldwide
        </h3>
        <p className="text-[max(1.5vw,12px)] lg:text-base">
          Fast & secure delivery in 3 days
        </p>
      </div>
      <div className="p-4 bg-zinc-100 flex-1">
        <h3 className="uppercase font-semibold text-[max(1.8vw,14px)] lg:text-lg whitespace-nowrap">
          24/7 Customer Service
        </h3>
        <p className="text-[max(1.5vw,12px)] lg:text-base">
          We offer 24/7 online support
        </p>
      </div>
      <div className="p-4 bg-zinc-100 flex-1">
        <h3 className="uppercase font-semibold text-[max(1.8vw,14px)] lg:text-lg whitespace-nowrap">
          Money Back Guarantee
        </h3>
        <p className="text-[max(1.5vw,12px)] lg:text-base">
          Easy 30 day return policy
        </p>
      </div>
    </div>
  );
}
