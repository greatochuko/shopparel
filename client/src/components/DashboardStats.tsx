export default function DashboardStats() {
  return (
    <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
      <div className="flex flex-col md:flex-row items-center gap-4 p-4 bg-white rounded-md aspect-[4] xl:aspect-video">
        <div className="flex p-2 bg-teal-200 rounded-full shadow-md bg- whitespace-nowrap w-14 h-14">
          <div className="flex-1 bg-teal-600 rounded-full flex-center bg-">
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
                {" "}
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.5528 3.10557C11.8343 2.96481 12.1657 2.96481 12.4472 3.10557L20.4472 7.10557C20.786 7.27496 21 7.62123 21 8C21 8.37877 20.786 8.72504 20.4472 8.89443L18.3673 9.93441L20.4903 11.1286C20.8128 11.31 21.0087 11.6546 20.9997 12.0245C20.9907 12.3944 20.7782 12.7291 20.4472 12.8946L18.3674 13.9345L20.4903 15.1286C20.8128 15.31 21.0087 15.6546 20.9997 16.0245C20.9907 16.3944 20.7782 16.7291 20.4472 16.8946L12.4472 20.8946C12.1657 21.0354 11.8343 21.0354 11.5528 20.8946L3.55279 16.8946C3.22184 16.7291 3.00931 16.3944 3.0003 16.0245C2.99128 15.6546 3.18725 15.31 3.50974 15.1286L5.63258 13.9345L3.55279 12.8946C3.22184 12.7291 3.00931 12.3944 3.0003 12.0245C2.99128 11.6546 3.18725 11.31 3.50974 11.1286L5.63275 9.93441L3.55279 8.89443C3.214 8.72504 3 8.37877 3 8C3 7.62123 3.214 7.27496 3.55279 7.10557L11.5528 3.10557ZM7.7923 15.0144L6.13213 15.9482L12 18.8821L17.8679 15.9482L16.2077 15.0144L12.4472 16.8946C12.1657 17.0354 11.8343 17.0354 11.5528 16.8946L7.7923 15.0144ZM12.4472 12.8944L16.2075 11.0143L17.8679 11.9482L12 14.8821L6.13213 11.9482L7.79246 11.0143L11.5528 12.8944C11.8343 13.0352 12.1657 13.0352 12.4472 12.8944Z"
                  fill="#ffffff"
                ></path>{" "}
              </g>
            </svg>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h2 className="font-semibold text-zinc-400">Total Products</h2>
          <p className="text-lg font-semibold text-zinc-700">235</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-4 p-4 bg-white rounded-md aspect-[4] xl:aspect-video">
        <div className="flex p-2 rounded-full shadow-md bg-amber-200 whitespace-nowrap w-14 h-14">
          <div className="flex-1 rounded-full flex-center bg-amber-500">
            <svg
              height={24}
              width={24}
              viewBox="0 0 24 24"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              fill="#aaa"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <title>Shopping-cart</title>{" "}
                <g
                  id="🖥-Landing"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  R{" "}
                  <g
                    id="Artboard"
                    transform="translate(-74.000000, -239.000000)"
                  >
                    {" "}
                    <g
                      id="Shopping-cart"
                      transform="translate(74.000000, 239.000000)"
                    >
                      {" "}
                      <rect id="Rectangle" x="0" y="0" width="24" height="24">
                        {" "}
                      </rect>{" "}
                      <path
                        d="M2.5,3.5 L4.57364,3.5 C4.81929,3.5 5.02855,3.67844 5.06736,3.921 L6.73058,14.3158 C6.88582,15.286 7.72287,15.9998 8.70546,15.9998 L17.3957,15.9998 C18.3331,15.9998 19.1447,15.3487 19.3481,14.4337 L20.7296,8.21674 C20.8684,7.59222 20.3932,6.9998 19.7534,6.9998 L5.83997,6.9998"
                        id="Path"
                        stroke="#fff"
                        strokeWidth="2"
                        strokeLinecap="round"
                      >
                        {" "}
                      </path>{" "}
                      <circle
                        id="Oval"
                        stroke="#fff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        cx="9.5"
                        cy="21"
                        r="1"
                      >
                        {" "}
                      </circle>{" "}
                      <circle
                        id="Oval"
                        stroke="#fff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        cx="16.5"
                        cy="21"
                        r="1"
                      >
                        {" "}
                      </circle>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h2 className="font-semibold text-zinc-400">Total Orders</h2>
          <p className="text-lg font-semibold text-zinc-700">235</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-4 p-4 bg-white rounded-md aspect-[4] xl:aspect-video">
        <div className="flex p-2 bg-blue-200 rounded-full shadow-md whitespace-nowrap w-14 h-14">
          <div className="flex-1 bg-blue-500 rounded-full flex-center">
            <svg
              height={24}
              width={24}
              fill="#ffffff"
              viewBox="-5 0 19 19"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M8.699 11.907a3.005 3.005 0 0 1-1.503 2.578 4.903 4.903 0 0 1-1.651.663V16.3a1.03 1.03 0 1 1-2.059 0v-1.141l-.063-.011a5.199 5.199 0 0 1-1.064-.325 3.414 3.414 0 0 1-1.311-.962 1.029 1.029 0 1 1 1.556-1.347 1.39 1.39 0 0 0 .52.397l.002.001a3.367 3.367 0 0 0 .648.208h.002a4.964 4.964 0 0 0 .695.084 3.132 3.132 0 0 0 1.605-.445c.5-.325.564-.625.564-.851a1.005 1.005 0 0 0-.245-.65 2.06 2.06 0 0 0-.55-.44 2.705 2.705 0 0 0-.664-.24 3.107 3.107 0 0 0-.65-.066 6.046 6.046 0 0 1-1.008-.08 4.578 4.578 0 0 1-1.287-.415A3.708 3.708 0 0 1 1.02 9.04a3.115 3.115 0 0 1-.718-1.954 2.965 2.965 0 0 1 .321-1.333 3.407 3.407 0 0 1 1.253-1.335 4.872 4.872 0 0 1 1.611-.631V2.674a1.03 1.03 0 1 1 2.059 0v1.144l.063.014h.002a5.464 5.464 0 0 1 1.075.368 3.963 3.963 0 0 1 1.157.795A1.03 1.03 0 0 1 6.39 6.453a1.901 1.901 0 0 0-.549-.376 3.516 3.516 0 0 0-.669-.234l-.066-.014a3.183 3.183 0 0 0-.558-.093 3.062 3.062 0 0 0-1.572.422 1.102 1.102 0 0 0-.615.928 1.086 1.086 0 0 0 .256.654l.002.003a1.679 1.679 0 0 0 .537.43l.002.002a2.57 2.57 0 0 0 .703.225h.002a4.012 4.012 0 0 0 .668.053 5.165 5.165 0 0 1 1.087.112l.003.001a4.804 4.804 0 0 1 1.182.428l.004.002a4.115 4.115 0 0 1 1.138.906l.002.002a3.05 3.05 0 0 1 .753 2.003z"></path>
              </g>
            </svg>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h2 className="font-semibold text-zinc-400">Total Sales</h2>
          <p className="text-lg font-semibold text-zinc-700">235</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-4 p-4 bg-white rounded-md aspect-[4] xl:aspect-video">
        <div className="flex p-2 bg-green-200 rounded-full shadow-md whitespace-nowrap w-14 h-14">
          <div className="flex-1 bg-green-600 rounded-full flex-center">
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
                {" "}
                <g clipPath="url(#ffffffclip0_443_3628)">
                  {" "}
                  <rect
                    x="2"
                    y="6"
                    width="20"
                    height="12"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></rect>{" "}
                  <path
                    d="M22 10C21.4747 10 20.9546 9.89654 20.4693 9.69552C19.984 9.4945 19.543 9.19986 19.1716 8.82843C18.8001 8.45699 18.5055 8.01604 18.3045 7.53073C18.1035 7.04543 18 6.52529 18 6L22 6L22 10Z"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                  <path
                    d="M18 18C18 16.9391 18.4214 15.9217 19.1716 15.1716C19.9217 14.4214 20.9391 14 22 14L22 18L18 18Z"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                  <path
                    d="M2 14C3.06087 14 4.07828 14.4214 4.82843 15.1716C5.57857 15.9217 6 16.9391 6 18L2 18L2 14Z"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                  <path
                    d="M6 6C6 7.06087 5.57857 8.07828 4.82843 8.82843C4.07828 9.57857 3.06087 10 2 10L2 6H6Z"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                  <path
                    d="M14.0741 9.5H11.3333C10.597 9.5 10 10.0596 10 10.75C10 11.4404 10.597 12 11.3333 12H13.1111C13.8475 12 14.4444 12.5596 14.4444 13.25C14.4444 13.9404 13.8475 14.5 13.1111 14.5H10"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                  <path
                    d="M12 9.51733V8.5"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                  <path
                    d="M12 15.5173V14.5"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                </g>{" "}
                <defs>
                  {" "}
                  <clipPath id="clip0_443_3628">
                    {" "}
                    <rect width="24" height="24" fill="white"></rect>{" "}
                  </clipPath>{" "}
                </defs>{" "}
              </g>
            </svg>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h2 className="font-semibold text-zinc-400">Total Income</h2>
          <p className="text-lg font-semibold text-zinc-700">235</p>
        </div>
      </div>
    </div>
  );
}
