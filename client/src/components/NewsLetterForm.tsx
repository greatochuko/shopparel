export default function NewsLetterForm() {
  return (
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
  );
}
