export default function SignupForm() {
  return (
    <form className=" w-[90%] max-w-xl flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold">Sign Up</h1>
        <p className="text-zinc-700">
          Sign up for free for the best experience
        </p>
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="email">Full Name</label>
        <input
          type="text"
          placeholder="John Doe"
          className="border border-zinc-300 rounded-md p-3"
        />
        <p className="text-red-500 text-sm">Error</p>
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          placeholder="youremail@example.com"
          className="border border-zinc-300 rounded-md p-3"
        />
        <p className="text-red-500 text-sm">Error</p>
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="email">Password</label>
        <input
          type="password"
          className="border border-zinc-300 rounded-md p-3"
        />
        <p className="text-red-500 text-sm">Error</p>
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="email">Password</label>
        <input
          type="password"
          className="border border-zinc-300 rounded-md p-3"
        />
        <p className="text-red-500 text-sm">Error</p>
      </div>
      <hr />
      <p className="relative -top-9 text-center bg-white w-fit mx-auto px-5">
        OR
      </p>
      <button className="border border-zinc-300  p-3 flex-center gap-1">
        <img src="/google-logo.png" alt="Google logo" width={20} height={20} />
        Signup With Google
      </button>
    </form>
  );
}
