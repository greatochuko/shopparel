import { useState } from "react";
import SectionHeader from "../components/SectionHeader";

export default function CheckoutPage() {
  const [address, setAddress] = useState("1");
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

  return (
    <main className="mt-[78px] pt-1 flex flex-col gap-4 text-zinc-700 max-w-7xl w-[90%] mx-auto mb-96">
      <h1 className="text-2xl font-semibold">Checkout</h1>
      <div className="flex flex-col lg:flex-row gap-4">
        <section className="flex flex-col gap-10 flex-1">
          <SectionHeader title="Shipping Address" />
          <div className="flex flex-col gap-2 p-4  bg-zinc-100 rounded-md">
            <div className="flex items-center gap-2 border-b pb-2 border-zinc-300">
              <input
                type="radio"
                name="shipping-address"
                value={"1"}
                id="address-1"
                checked={address === "1"}
                onChange={(e) => setAddress(e.target.value)}
              />
              <label htmlFor="address-1" className="font-semibold">
                123 Downtown Street
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                name="shipping-address"
                value={"new"}
                id="new"
                checked={address === "new"}
                onChange={(e) => setAddress(e.target.value)}
              />
              <label htmlFor="new" className="font-semibold">
                Use a different shipping address
              </label>
            </div>
          </div>
          {address === "new" ? (
            <form className="flex flex-col sm:grid sm:grid-cols-2 gap-x-4 gap-y-8">
              <div className="flex flex-col gap-2">
                <label htmlFor="first-name" className="font-semibold">
                  First Name*
                </label>
                <input
                  type="text"
                  id="first-name"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="bg-zinc-100 w-full p-3  rounded-md"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="last-name" className="font-semibold">
                  Last Name*
                </label>
                <input
                  type="text"
                  id="last-name"
                  placeholder="Last Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="bg-zinc-100 w-full p-3  rounded-md"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="country" className="font-semibold">
                  Country/Region*
                </label>
                <input
                  type="text"
                  id="country"
                  placeholder="Country/Region"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="bg-zinc-100 w-full p-3  rounded-md"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="company" className="font-semibold">
                  Company Name*
                </label>
                <input
                  type="text"
                  id="company"
                  placeholder="Company (optional)"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="bg-zinc-100 w-full p-3  rounded-md"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="street-address" className="font-semibold">
                  Street Address*
                </label>
                <input
                  type="text"
                  id="street-address"
                  placeholder="House number and street name"
                  value={streetAddress}
                  onChange={(e) => setStreetAddress(e.target.value)}
                  className="bg-zinc-100 w-full p-3  rounded-md"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="apartment" className="font-semibold">
                  Apartment, suite, unit*
                </label>
                <input
                  type="text"
                  id="apartment"
                  placeholder="Apt, suite, unit etc. (optional)"
                  value={apartment}
                  onChange={(e) => setApartment(e.target.value)}
                  className="bg-zinc-100 w-full p-3  rounded-md"
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
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="bg-zinc-100 w-full p-3  rounded-md"
                  />
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  <label htmlFor="state" className="font-semibold">
                    State*
                  </label>
                  <input
                    type="text"
                    id="state"
                    placeholder="State"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    className="bg-zinc-100 w-full p-3  rounded-md"
                  />
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  <label htmlFor="postal-code" className="font-semibold">
                    Postal Code*
                  </label>
                  <input
                    type="number"
                    id="postal-code"
                    placeholder="Postal Code"
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                    className="bg-zinc-100 w-full p-3  rounded-md"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="font-semibold">
                  Phone*
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="bg-zinc-100 w-full p-3  rounded-md"
                />
              </div>
              <div className="col-span-2">
                <input
                  type="checkbox"
                  id="save"
                  checked={saveInfo === true}
                  onChange={() => setSaveInfo((curr) => !curr)}
                />{" "}
                <label htmlFor="save">
                  Store my details for quicker checkout.
                </label>
              </div>
            </form>
          ) : null}
        </section>
        <div className="w-full lg:w-96 aspect-square border border-zinc-300 rounded-md sticky top-[700px]"></div>
      </div>
    </main>
  );
}
