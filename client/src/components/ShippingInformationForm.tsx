import { useState } from "react";
import { ShippingInformationType } from "../pages/CheckoutPage";
import {
  fetchAddNewShippingInfo,
  fetchEditShippingInfo,
} from "../services/shippingInfoServices";
import useUserContext from "../hooks/useUserContext";

export default function ShippingInformationForm({
  closeModal,
  type,
  shippingInformation,
  setShippingInformations,
}: {
  closeModal: () => void;
  type?: string;
  shippingInformation?: ShippingInformationType;
  setShippingInformations?: React.Dispatch<
    React.SetStateAction<ShippingInformationType[]>
  >;
}) {
  const { user } = useUserContext();
  const [firstName, setFirstName] = useState(
    shippingInformation?.firstName || ""
  );
  const [lastName, setLastName] = useState(shippingInformation?.lastName || "");
  const [country, setCountry] = useState(shippingInformation?.country || "");
  const [company, setCompany] = useState(shippingInformation?.company || "");
  const [streetAddress, setStreetAddress] = useState(
    shippingInformation?.streetAddress || ""
  );
  const [apartment, setApartment] = useState(
    shippingInformation?.apartment || ""
  );
  const [city, setCity] = useState(shippingInformation?.city || "");
  const [state, setState] = useState(shippingInformation?.state || "");
  const [postalCode, setPostalCode] = useState(
    shippingInformation?.postalCode || ""
  );
  const [phone, setPhone] = useState(shippingInformation?.phone || "");

  async function handleAddNewShippingInfo(e: React.FormEvent) {
    e.preventDefault();
    const data = await fetchAddNewShippingInfo({
      _id: "1",
      userId: user?._id as string,
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
    });
    if (data.error) return;
    setShippingInformations &&
      setShippingInformations((curr) =>
        [...(curr as ShippingInformationType[]), data].sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        )
      );
    closeModal();
  }
  async function handleEditShippingInfo(e: React.FormEvent) {
    e.preventDefault();
    // return;
    const editedShippingInfo = {
      _id: shippingInformation?._id as string,
      userId: user?._id as string,
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
    const data = await fetchEditShippingInfo(editedShippingInfo);
    if (data.error) return;
    setShippingInformations &&
      setShippingInformations((curr) =>
        (curr as ShippingInformationType[]).map((info) =>
          info._id === shippingInformation?._id ? editedShippingInfo : info
        )
      );
    closeModal();
  }
  return (
    <form
      className="bg-white overflow-hidden shadow mx-auto w-[90%] max-w-3xl rounded-md"
      onSubmit={
        type === "edit" ? handleEditShippingInfo : handleAddNewShippingInfo
      }
    >
      <div className="flex flex-col sm:grid sm:grid-cols-2 gap-x-4 gap-y-8 p-6 max-h-[70vh] overflow-y-scroll">
        <div className="flex flex-col gap-2">
          <label htmlFor="shipping-first-name" className="font-semibold">
            First Name*
          </label>
          <input
            type="text"
            id="shipping-first-name"
            required
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="bg-zinc-100 w-full p-3 min-w-[10px] scroll-mt-[80px] focus-visible:ring ring-blue-400 rounded-md"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="shipping-last-name" className="font-semibold">
            Last Name*
          </label>
          <input
            type="text"
            required
            id="shipping-last-name"
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
        <div className="flex flex-col col-span-2 gap-4 sm:flex-row">
          <div className="flex flex-col flex-1 gap-2">
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
          <div className="flex flex-col flex-1 gap-2">
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
          <div className="flex flex-col flex-1 gap-2">
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
      </div>
      <div className="flex justify-end gap-4 p-4 bg-zinc-100">
        <button
          type="button"
          onClick={closeModal}
          className="p-2 border border-zinc-300 hover:border-zinc-400 focus-visible:ring ring-blue-400 px-4 rounded-md bg-zinc-200 hover:bg-zinc-300 active:bg-[#ccc] duration-300"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="p-2 px-4 text-white duration-300 bg-green-600 rounded-md focus-visible:ring ring-green-800 hover:bg-green-700 active:bg-green-800"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
