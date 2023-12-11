import NewsLetterForm from "./NewsLetterForm";

export default function NewsLetterSection() {
  return (
    <div className="flex max-h-[450px]">
      <div className="flex-1 relative">
        <img
          src="/newsletter-image-1.jpg"
          alt="Subscribe to our Newsletter"
          className="blur-[2px] w-full -z-10 h-full absolute object-cover"
        />
        <div className=" bg-black/50 flex items-center w-full h-full text-white p-4 py-8 sm:p-10">
          <div className="max-w-[500px] flex flex-col gap-4">
            <h2 className="text-xl sm:text-2xl font-bold">
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
          className="w-full h-full object-cover object-top"
        />
      </div>
    </div>
  );
}
