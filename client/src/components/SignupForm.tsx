import { Link, Navigate, useSearchParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { loginUserWithGoogle, signupUser } from "../services/authServices";
import useUserContext from "../hooks/useUserContext";
import { GoogleLogin, CredentialResponse } from "@react-oauth/google";
import { jwtDecode, JwtPayload } from "jwt-decode";
import { GoogleUserCredentials } from "./LoginForm";
import LoadingIndicator from "./LoadingIndicator";
import { fetchSyncCart } from "../services/cartServices";
import useCartContext from "../hooks/useCartContext";
import useToastContext from "../hooks/useToastContext";

export default function SignupForm() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const canSubmit = Boolean(
    email && firstName && lastName && password && confirmPassword === password,
  );

  const { user, setUser } = useUserContext();
  const { setCartItems } = useCartContext();
  const { createToast } = useToastContext();

  const [searchParams] = useSearchParams();
  const redirectUrl = searchParams.get("redirect");

  useEffect(() => {
    document.title = "Shopparel: Signup";
  }, []);

  async function handleGoogleLogin(response: CredentialResponse) {
    const userData: JwtPayload & GoogleUserCredentials = jwtDecode(
      response.credential as string,
    );
    const googleClientId = response.clientId as string;
    const { email, name } = userData;
    const [googleFirstName, googleLastName] = name.split(" ");
    const data = await loginUserWithGoogle(
      email,
      googleFirstName,
      googleLastName,
      googleClientId,
    );
    if (data.error) return;

    localStorage.setItem("token", data.token);

    const cartInLocalStorage = localStorage.getItem("cart");
    if (cartInLocalStorage) {
      const localCart = JSON.parse(cartInLocalStorage);
      const syncCartData = await fetchSyncCart(localCart);
      if (syncCartData.error) {
        localStorage.removeItem("token");
        return;
      }
      setCartItems(syncCartData);
      localStorage.removeItem("cart");
    } else {
      setCartItems(data.user.cart);
    }

    createToast("Login Successful", "success");
    setUser(data.user);
  }

  function handleConfirmPassword(e: React.ChangeEvent<HTMLInputElement>) {
    setError("");
    setConfirmPassword(e.target.value);
    if (e.target.value !== password) setError("Passwords do not match");
  }

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    const data = await signupUser(firstName, lastName, email, password);
    if (data.error) {
      setError(data.error);
      setLoading(false);
      return;
    }

    localStorage.setItem("token", data.token);

    const cartInLocalStorage = localStorage.getItem("cart");
    if (cartInLocalStorage) {
      const localCart = JSON.parse(cartInLocalStorage);
      const syncCartData = await fetchSyncCart(localCart);

      if (syncCartData.error) {
        localStorage.removeItem("token");
        return;
      }

      setCartItems(syncCartData);

      localStorage.removeItem("cart");
    } else {
      setCartItems(data.user.cart);
    }

    createToast("Signup Successful", "success");
    setUser(data.user);
    setLoading(false);
  }

  if (user) return <Navigate to={redirectUrl || "/"} />;

  return (
    <form
      className="mx-auto flex max-w-xl flex-col gap-4 text-sm sm:w-[90%]"
      onSubmit={handleSignup}
    >
      <div>
        <h1 className="text-2xl font-semibold">Sign Up</h1>
        <p className="text-sm text-zinc-500">
          Already have an account?{" "}
          <Link
            to={"/login"}
            className="text-accent-blue-100 hover:underline focus-visible:underline"
          >
            Login
          </Link>
        </p>
      </div>
      <GoogleLogin onSuccess={handleGoogleLogin} />

      <div className="">
        <hr className="mt-4" />
        <p className="mx-auto -mt-3.5 w-fit bg-white px-5 text-center">OR</p>
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="firstName">First Name</label>
        <input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          id="firstName"
          type="text"
          placeholder="John"
          className="rounded-md border p-2 ring-offset-2 focus-visible:ring-2 focus-visible:ring-accent-blue-100"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="lastName">Last Name</label>
        <input
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          id="lastName"
          type="text"
          placeholder="Doe"
          className="rounded-md border p-2 ring-offset-2 focus-visible:ring-2 focus-visible:ring-accent-blue-100"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="email">Email Address</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          id="email"
          placeholder="youremail@example.com"
          className="rounded-md border p-2 ring-offset-2 focus-visible:ring-2 focus-visible:ring-accent-blue-100"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="password" className="flex items-center justify-between">
          Password
        </label>
        <div className="relative">
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            type={showPassword ? "text" : "password"}
            className="w-full rounded-md border p-2 pr-12 ring-offset-2 focus-visible:ring-2 focus-visible:ring-accent-blue-100"
          />
          <button
            type="button"
            onClick={() => setShowPassword((curr) => !curr)}
            className="absolute right-2 top-[50%] flex -translate-y-[50%] items-center gap-1 rounded-full bg-zinc-100 px-2 py-1 text-sm text-[#555] ring-offset-2 duration-300 hover:bg-zinc-200 hover:text-[#333] focus-visible:ring-2 focus-visible:ring-accent-blue-100 active:scale-90"
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
      </div>
      <div className="flex flex-col gap-1">
        <label
          htmlFor="confirmPassword"
          className="flex items-center justify-between"
        >
          Confirm Password
        </label>
        <div className="relative">
          <input
            value={confirmPassword}
            onChange={handleConfirmPassword}
            id="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            className="w-full rounded-md border p-2 pr-12 ring-offset-2 focus-visible:ring-2 focus-visible:ring-accent-blue-100"
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword((curr) => !curr)}
            className="absolute right-2 top-[50%] flex -translate-y-[50%] items-center gap-1 rounded-full bg-zinc-100 px-2 py-1 text-sm text-[#555] ring-offset-2 duration-300 hover:bg-zinc-200 hover:text-[#333] focus-visible:ring-2 focus-visible:ring-accent-blue-100 active:scale-90"
          >
            {showConfirmPassword ? (
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
        <p className="text-sm text-red-500">{error}</p>
      </div>

      <button
        type="submit"
        disabled={!canSubmit}
        className="flex-center h-10 rounded-md bg-accent-blue-100 px-6 font-semibold text-white duration-300 hover:bg-accent-blue-200 focus-visible:bg-accent-blue-200 active:bg-blue-700 disabled:cursor-not-allowed disabled:bg-zinc-500"
      >
        {loading ? <LoadingIndicator /> : "Sign Up"}
      </button>
    </form>
  );
}
