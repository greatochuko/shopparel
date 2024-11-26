const aboutInfos = [
  {
    title: "Free Shipping",
    description:
      "Experience Shopping Without Borders Enjoy the convenience of free shipping on all your orders.",
    svg: (
      <svg
        width={24}
        height={24}
        fill="#000000"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#000000"
        className="fill-gray-600"
        strokeWidth="0.00024000000000000003"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path d="M22.929,6.628l-2-5A1,1,0,0,0,20,1H4a1,1,0,0,0-.929.628l-2,5A1.012,1.012,0,0,0,1,7V22a1,1,0,0,0,1,1H22a1,1,0,0,0,1-1V7A1.012,1.012,0,0,0,22.929,6.628ZM4.677,3H19.323l1.2,3H3.477ZM3,21V8H21V21Zm12.707-7.707a1,1,0,1,1-1.414,1.414L13,13.414V18a1,1,0,0,1-2,0V13.414L9.707,14.707a1,1,0,0,1-1.414-1.414l3-3a1,1,0,0,1,1.414,0Z"></path>
        </g>
      </svg>
    ),
  },
  {
    title: "24/7 Customer Service",
    description:
      "Our dedicated customer service team is available around the clock to assist you with any questions.",
    svg: (
      <svg
        height={24}
        width={24}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill="#000000"
        className="fill-gray-600"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <g>
            {" "}
            <path fill="none" d="M0 0h24v24H0z"></path>{" "}
            <path d="M22 17.002a6.002 6.002 0 0 1-4.713 5.86l-.638-1.914A4.003 4.003 0 0 0 19.465 19H17a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.938a8.001 8.001 0 0 0-15.876 0H7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5C2 6.477 6.477 2 12 2s10 4.477 10 10V17.002z"></path>{" "}
          </g>{" "}
        </g>
      </svg>
    ),
  },
  {
    title: "Secure Payment",
    description:
      "Shop with Confidence, Pay with Peace of Mind Your security is our top priority.",
    svg: (
      <svg
        height={24}
        width={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.4472 1.10557C12.1657 0.964809 11.8343 0.964809 11.5528 1.10557L3.55279 5.10557C3.214 5.27496 3 5.62123 3 6V12C3 14.6622 3.86054 16.8913 5.40294 18.7161C6.92926 20.5218 9.08471 21.8878 11.6214 22.9255C11.864 23.0248 12.136 23.0248 12.3786 22.9255C14.9153 21.8878 17.0707 20.5218 18.5971 18.7161C20.1395 16.8913 21 14.6622 21 12V6C21 5.62123 20.786 5.27496 20.4472 5.10557L12.4472 1.10557ZM5 12V6.61803L12 3.11803L19 6.61803V12C19 14.1925 18.305 15.9635 17.0696 17.425C15.8861 18.8252 14.1721 19.9803 12 20.9156C9.82786 19.9803 8.11391 18.8252 6.93039 17.425C5.69502 15.9635 5 14.1925 5 12ZM16.7572 9.65323C17.1179 9.23507 17.0714 8.60361 16.6532 8.24284C16.2351 7.88207 15.6036 7.9286 15.2428 8.34677L10.7627 13.5396L8.70022 11.5168C8.30592 11.1301 7.67279 11.1362 7.28607 11.5305C6.89935 11.9248 6.90549 12.5579 7.29978 12.9446L10.1233 15.7139C10.3206 15.9074 10.5891 16.0106 10.8651 15.9991C11.1412 15.9876 11.4002 15.8624 11.5807 15.6532L16.7572 9.65323Z"
            fill="#000000"
            className="fill-gray-600"
          ></path>
        </g>
      </svg>
    ),
  },
];

export default function CustomerAssurance() {
  return (
    <div className="flex gap-4 lg:gap-8 w-full items-center md:items-start max-w-6xl px-4 md:p-4 md:w-fit bg-white text-zinc-800 flex-col md:flex-row z-[2] mx-auto">
      {aboutInfos.map((info) => (
        <div
          key={info.title}
          className="flex flex-col items-center flex-1 gap-4 p-4 text-center md:items-start md:text-left"
        >
          <div className="p-4 rounded-full bg-zinc-100">{info.svg}</div>
          <h3 className="font-semibold whitespace-nowrap">{info.title}</h3>
          <p className="text-sm text-zinc-600">{info.description}</p>
        </div>
      ))}
    </div>
  );
}
