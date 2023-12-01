export default function NewsLetterSection() {
  return (
    <div className="flex max-w-6xl w-[90%] mx-auto aspect-[1.5] md:aspect-[3]">
      <div className="flex-1 relative">
        <img
          src="/newsletter-image-1.jpg"
          alt="Subscribe to our Newsletter"
          className="blur-[2px] w-full h-full object-cover"
        />
        <div className=" bg-black/50 flex items-center absolute w-full h-full top-0 text-white p-4 sm:p-10">
          <div className="max-w-[500px] flex flex-col gap-4">
            <h2 className="text-xl sm:text-2xl font-bold">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-sm sm:text-base">
              Stay ahead of the style curve! Subscribe to our newsletter now and
              unlock exclusive fashion updates, insider trends, and special
              offers.
            </p>
            <form className="flex gap-2 relative">
              <input
                type="email"
                placeholder="Your Email Address..."
                className=" text-sm sm:test-base p-3 flex-1 rounded-full bg-black/50 border border-white/20 duration-300 focus:border-white/50 placeholder:text-white"
              />
              <button
                type="submit"
                className=" text-white text-sm px-3 py-2 rounded-full font-bold absolute right-1 focus:border-white border-accent-blue-100 border focus:border hover:bg-accent-blue-200 duration-300 top-[50%] -translate-y-[50%] bg-accent-blue-100"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="flex-1 hidden lg:block">
        <img
          src="/newsletter-image-2.jpg"
          alt="Subscribe to our Newsletter"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
