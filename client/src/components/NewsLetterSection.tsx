import React, { useState } from "react";
import NewsLetterForm from "./NewsLetterForm";
import newsletterImage from "../assets/newsletter.png";

export default function NewsLetterSection() {
  const [frequency, setFrequency] = useState<"weekly" | "monthly">("weekly");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
  }
  return (
    <div className="w-[90%] max-w-6xl gap-6 overflow-hidden text-white mx-auto from-primary to-primary/90 bg-gradient-to-b rounded-md flex">
      <div className="flex flex-col flex-1 gap-4 px-4 py-6 sm:gap-6 sm:py-8 sm:px-8">
        <p className="px-3 py-1 text-sm rounded-md bg-white/10 w-fit">
          Our newsletters
        </p>
        <h3 className="text-xl min-[400px]:text-2xl font-semibold sm:text-xl md:text-2xl lg:text-3xl">
          Subscribe to our newsletter to receive more updates
        </h3>
        <form onSubmit={handleSubmit} className="relative flex flex-col gap-6">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 w-full min-w-0 p-4 text-sm rounded-md pr-28 sm:pr-32 sm:p-5 text-zinc-800 focus-visible:ring ring-blue-500"
          />
          <button
            type="submit"
            className="absolute px-3 py-2.5 text-sm font-medium duration-200 rounded-md sm:px-5 sm:py-3 bg-primary hover:bg-primary/90 top-1.5 sm:top-2 right-1.5 sm:right-2"
          >
            Subscribe
          </button>
          <div className="flex justify-between max-w-sm gap-4 text-sm">
            <label htmlFor="weekly" className="flex gap-2 item-center">
              <input
                type="checkbox"
                value="weekly"
                checked={frequency === "weekly"}
                onChange={(e) =>
                  setFrequency(e.target.value as typeof frequency)
                }
                id="weekly"
                className="accent-white"
              />
              Weekly updates
            </label>
            <label htmlFor="monthly" className="flex gap-2 item-center">
              <input
                type="checkbox"
                value="monthly"
                checked={frequency === "monthly"}
                onChange={(e) =>
                  setFrequency(e.target.value as typeof frequency)
                }
                id="monthly"
                className="accent-white"
              />
              Monthly updates
            </label>
          </div>
        </form>
      </div>
      <div className="relative flex-1 hidden md:flex-center">
        <div className="absolute w-full bg-blue-100/50 -right-[20%] rounded-full aspect-square flex-center hidden md:flex scale-[1.5] lg:scale-100">
          <img
            src={newsletterImage}
            alt="Newsletter"
            className="object-contain w-[80%] h-[80%]"
          />
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex max-h-[450px]">
      <div className="relative flex-1">
        <img
          src="/newsletter-image-1.jpg"
          alt="Subscribe to our Newsletter"
          className="blur-[2px] w-full -z-10 h-full absolute object-cover"
        />
        <div className="flex items-center w-full h-full p-4 py-8 text-white bg-black/50 sm:p-10">
          <div className="max-w-[500px] flex flex-col gap-4">
            <h2 className="text-xl font-bold sm:text-2xl">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-sm sm:text-base">
              Stay ahead of the style curve! Subscribe to our newsletter now and
              unlock exclusive fashion updates, insider trends, and special
              offers.
            </p>
            <NewsLetterForm />
          </div>
        </div>
      </div>
      <div className="flex-1 hidden lg:block">
        <img
          src="/newsletter-image-2.jpg"
          alt="Subscribe to our Newsletter"
          className="object-cover object-top w-full h-full"
        />
      </div>
    </div>
  );
}
