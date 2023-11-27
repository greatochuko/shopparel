import { Link, Navigate } from "react-router-dom";
import React, { useState } from "react";
import { loginUser, loginUserWithGoogle } from "../services/authServices";
import useUserContext from "../hooks/useUserContext";
import { GoogleLogin, CredentialResponse } from "@react-oauth/google";
import { jwtDecode, JwtPayload } from "jwt-decode";

export type GoogleUserCredentials = { email: string; name: string };

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const canSubmit = Boolean(email && password);

  const { user } = useUserContext();

  const { setUser } = useUserContext();

  async function handleGoogleLogin(response: CredentialResponse) {
    const userData: JwtPayload & GoogleUserCredentials = jwtDecode(
      response.credential as string
    );
    const googleClientId = response.clientId as string;
    const { email, name } = userData;
    const data = await loginUserWithGoogle(email, name, googleClientId);
    if (data.error) return;
    setUser(data);
  }

  function handleGoogleError() {
    console.log("Login Failed");
  }

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const data = await loginUser(email, password);
    if (data.error) {
      setError(data.error);
      setLoading(false);
      return;
    }
    setUser(data);
    setLoading(false);
  }

  if (user) return <Navigate to={"/"} />;

  return (
    <form
      className=" sm:w-[90%] max-w-xl flex flex-col items-stretch gap-6 mx-auto"
      onSubmit={handleSignup}
    >
      <div>
        <h1 className="text-2xl font-semibold">Login</h1>
        <p className="text-sm">
          Don't have an account?{" "}
          <Link
            to={"/signup"}
            className="text-accent-blue-100 hover:underline focus:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
      <GoogleLogin onSuccess={handleGoogleLogin} onError={handleGoogleError} />
      <div>
        <hr className="mt-4" />
        <p className="px-5 mx-auto -mt-3.5 text-center bg-white w-fit">OR</p>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email">Email Address</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          id="email"
          placeholder="youremail@example.com"
          className="p-3 border rounded-md focus:border-accent-blue-100 border-zinc-300"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="password" className="flex items-center justify-between">
          Password
        </label>
        <div className="relative">
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            type={showPassword ? "text" : "password"}
            className="w-full p-3 pr-12 border rounded-md focus:border-accent-blue-100 border-zinc-300"
          />
          <button
            onClick={() => setShowPassword((curr) => !curr)}
            className="hover:bg-zinc-200 focus:bg-zinc-200 bg-zinc-100 active:scale-90 absolute right-2 duration-300 top-[50%] -translate-y-[50%] rounded-full flex items-center gap-1 px-2 py-1 text-sm text-[#555] hover:text-[#333]"
          >
            {showPassword ? (
              <svg
                viewBox="0 0 24 24"
                height={18}
                width={18}
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
                    d="M2.99902 3L20.999 21M9.8433 9.91364C9.32066 10.4536 8.99902 11.1892 8.99902 12C8.99902 13.6569 10.3422 15 11.999 15C12.8215 15 13.5667 14.669 14.1086 14.133M6.49902 6.64715C4.59972 7.90034 3.15305 9.78394 2.45703 12C3.73128 16.0571 7.52159 19 11.9992 19C13.9881 19 15.8414 18.4194 17.3988 17.4184M10.999 5.04939C11.328 5.01673 11.6617 5 11.9992 5C16.4769 5 20.2672 7.94291 21.5414 12C21.2607 12.894 20.8577 13.7338 20.3522 14.5"
                    stroke="#333"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </g>
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                width={18}
                height={18}
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
                    d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z"
                    stroke="#333"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z"
                    stroke="#333"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </g>
              </svg>
            )}
          </button>
        </div>
        <p className="text-sm text-red-500 ">{error}</p>
      </div>

      <button
        type="submit"
        disabled={!canSubmit}
        className="px-6 py-3 font-semibold text-white duration-300 rounded-md disabled:bg-zinc-500 disabled:cursor-not-allowed active:bg-blue-700 bg-accent-blue-100 hover:bg-accent-blue-200 focus:bg-accent-blue-200"
      >
        {loading ? "Loading..." : "Login"}
      </button>
    </form>
  );
}