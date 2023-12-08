import { useEffect, useState } from "react";
import SectionHeader from "./SectionHeader";
import { ShippingInformationType } from "../pages/CheckoutPage";
import { Link } from "react-router-dom";

export default function ShippingInformation({
  setShippingInformation,
}: {
  setShippingInformation: React.Dispatch<
    React.SetStateAction<ShippingInformationType | null>
  >;
}) {
  const [shippingInformations, setShippingInformations] = useState<
    ShippingInformationType[] | null
  >(null);
  const [information, setInformation] = useState<string | null>(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [country, setCountry] = useState("");
  const [company, setCompany] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [apartment, setApartment] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [phone, setPhone] = useState("");
  const [saveInfo, setSaveInfo] = useState(false);

  useEffect(() => {
    async function fetchShippingInformations() {
      const res = await fetch("/data/shippingInformations.json");
      if (!res.ok) return;
      const data = await res.json();
      setShippingInformations(data);
    }
    fetchShippingInformations();
  }, [setShippingInformation]);

  function handleSetShippingInformation(e: React.FormEvent) {
    e.preventDefault();
    const newShippingInfo = {
      _id: crypto.randomUUID(),
      firstName,
      lastName,
      country,
      company,
      streetAddress,
      apartment,
      city,
      state,
      postalCode,
      phone,
    };

    setShippingInformations((curr) => [
      ...(curr as ShippingInformationType[]),
      newShippingInfo,
    ]);
    setShippingInformation(newShippingInfo);
    setInformation(newShippingInfo._id);
  }
  if (!shippingInformations)
    return <h1 className="h-screen flex-center">Loading</h1>;
  return (
    <section className="flex flex-col gap-10 flex-1">
      <SectionHeader title="Shipping Information" />
      <div className="flex flex-col gap-2 p-4  bg-zinc-100 rounded-md">
        {shippingInformations.map((shippingInformation) => (
          <div
            key={shippingInformation._id}
            className="flex items-center gap-2 border-b pb-2 border-zinc-300"
          >
            <input
              type="radio"
              tabIndex={0}
              className="focus-visible:ring focus-visible:ring-blue-400 rounded-full"
              name={shippingInformation._id}
              value={shippingInformation._id}
              id={shippingInformation._id}
              checked={information === shippingInformation._id}
              onChange={() => setInformation(shippingInformation._id)}
              onClick={() =>
                setShippingInformation(
                  shippingInformations.find(
                    (info) => info._id === shippingInformation._id
                  ) as ShippingInformationType
                )
              }
              onKeyDown={(e) => {
                if (e.code !== "Tab") e.preventDefault();
                if (e.code === "Enter") setInformation(shippingInformation._id);
              }}
            />
            <label htmlFor={shippingInformation._id} className="font-semibold">
              {shippingInformation.streetAddress}
            </label>
            <Link
              to={"/"}
              className="ml-auto text-accent-blue-100 hover:text-accent-blue-200 focus-visible:ring focus-visible:ring-blue-400 rounded-md px-1"
            >
              Edit
            </Link>
          </div>
        ))}
        <div className="flex items-center gap-2">
          <input
            type="radio"
            tabIndex={0}
            className="focus-visible:ring focus-visible:ring-blue-400 rounded-full"
            name="new-shipping-address"
            value={"new"}
            id="new"
            checked={information === "new"}
            onChange={() => setInformation("new")}
            onClick={() => setShippingInformation(null)}
            onKeyDown={(e) => {
              if (e.code !== "Tab") e.preventDefault();
              if (e.code === "Enter") setInformation("new");
            }}
          />
          <label htmlFor="new" className="font-semibold">
            {shippingInformations.length
              ? "Use a different shipping address"
              : "Enter new shipping information"}
          </label>
        </div>
      </div>
      {information === "new" ? (
        <form
          className="flex flex-col sm:grid sm:grid-cols-2 gap-x-4 gap-y-8"
          onSubmit={handleSetShippingInformation}
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="first-name" className="font-semibold">
              First Name*
            </label>
            <input
              type="text"
              id="first-name"
              required
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="bg-zinc-100 w-full p-3 scroll-mt-[80px] focus-visible:ring ring-blue-400 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="last-name" className="font-semibold">
              Last Name*
            </label>
            <input
              type="text"
              required
              id="last-name"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="bg-zinc-100 w-full p-3 sm:scroll-mt-[80px] focus-visible:ring ring-blue-400 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="country" className="font-semibold">
              Country/Region*
            </label>
            <input
              type="text"
              required
              id="country"
              placeholder="Country/Region"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="bg-zinc-100 w-full p-3 sm:scroll-mt-[80px] focus-visible:ring ring-blue-400 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="company" className="font-semibold">
              Company Name
            </label>
            <input
              type="text"
              id="company"
              placeholder="Company (optional)"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="bg-zinc-100 w-full p-3 sm:scroll-mt-[80px] focus-visible:ring ring-blue-400 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="street-address" className="font-semibold">
              Street Address*
            </label>
            <input
              type="text"
              id="street-address"
              required
              placeholder="House number and street name"
              value={streetAddress}
              onChange={(e) => setStreetAddress(e.target.value)}
              className="bg-zinc-100 w-full p-3 sm:scroll-mt-[80px] focus-visible:ring ring-blue-400 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="apartment" className="font-semibold">
              Apartment, suite, unit
            </label>
            <input
              type="text"
              id="apartment"
              placeholder="Apt, suite, unit etc. (optional)"
              value={apartment}
              onChange={(e) => setApartment(e.target.value)}
              className="bg-zinc-100 w-full p-3 sm:scroll-mt-[80px] focus-visible:ring ring-blue-400 rounded-md"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 col-span-2">
            <div className="flex flex-col gap-2 flex-1">
              <label htmlFor="city" className="font-semibold">
                City*
              </label>
              <input
                type="text"
                id="city"
                placeholder="City"
                required
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="bg-zinc-100 w-full p-3 sm:scroll-mt-[80px] focus-visible:ring ring-blue-400 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <label htmlFor="state" className="font-semibold">
                State*
              </label>
              <input
                type="text"
                id="state"
                required
                placeholder="State"
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="bg-zinc-100 w-full p-3 sm:scroll-mt-[80px] focus-visible:ring ring-blue-400 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <label htmlFor="postal-code" className="font-semibold">
                Postal Code*
              </label>
              <input
                type="number"
                id="postal-code"
                required
                placeholder="Postal Code"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                className="bg-zinc-100 w-full p-3 sm:scroll-mt-[80px] focus-visible:ring ring-blue-400 rounded-md"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="phone" className="font-semibold">
              Phone*
            </label>
            <input
              type="tel"
              required
              id="phone"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="bg-zinc-100 w-full p-3 sm:scroll-mt-[80px] focus-visible:ring ring-blue-400 rounded-md"
            />
          </div>
          <div className="col-span-2">
            <input
              type="checkbox"
              tabIndex={0}
              className="focus-visible:ring focus-visible:ring-blue-400 focus-visible:ring-offset-1"
              id="save"
              checked={saveInfo === true}
              onChange={() => setSaveInfo((curr) => !curr)}
              onKeyDown={(e) => {
                if (e.code !== "Tab") e.preventDefault();
                if (e.code === "Enter") setSaveInfo((curr) => !curr);
              }}
            />{" "}
            <label htmlFor="save">Store my details for quicker checkout.</label>
          </div>
          <button
            type="submit"
            className="p-2 bg-accent-blue-100 hover:bg-accent-blue-200 focus-visible:ring focus-visible:ring-blue-400 text-white rounded-md duration-300 w-fit whitespace-nowrap font-semibold px-4"
          >
            Continue to Payment Method
          </button>
        </form>
      ) : null}
    </section>
  );
}
