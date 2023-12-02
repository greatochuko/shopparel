import { useState } from "react";

export default function NewsLetterForm() {
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setEmail("");
  }
  return (
    <form className="flex gap-2 relative" onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your Email Address..."
        className=" text-sm sm:test-base p-3 flex-1 rounded-full bg-black/50 border border-white/20 duration-300 focus:ring-2 ring-white placeholder:text-white"
      />
      <button
        type="submit"
        className=" text-white text-sm px-3 py-2.5 rounded-full font-bold absolute right-1 focus:ring-2 ring-white hover:bg-accent-blue-200 duration-300 top-[50%] -translate-y-[50%] bg-accent-blue-100"
      >
        Subscribe
      </button>
    </form>
  );
}
