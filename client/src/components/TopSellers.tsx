import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { StoreType } from "./AdminPageLayout";
import { fetchStores } from "../services/storeServices";

export default function TopSellers() {
  const [stores, setStores] = useState<StoreType[]>([]);

  useEffect(() => {
    async function getStores() {
      const data = await fetchStores();
      if (data.error) return;
      setStores(data);
    }
    getStores();
  }, []);

  return (
    <div className="w-[90%] max-w-6xl rounded-md mx-auto flex flex-col gap-4 lg:gap-6">
      <h2 className="text-lg font-bold text-center md:text-xl lg:text-2xl xl:text-3xl">
        Top Sellers
      </h2>
      <p className="text-center ">
        Up to <span className="text-yellow-300 ">60%</span> off on brands
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        {stores.map((store) => (
          <Link
            to={`/store/${store.name.split(" ").join("-").toLowerCase()}/${
              store._id
            }`}
            key={store._id}
            className="w-[45%] sm:w-[150px] hover:scale-105 duration-300 lg:w-[160px] max-w-[180px] xl:flex-1 rounded-md aspect-[2.2] bg-white p-2 "
          >
            <img
              src={store.logo}
              alt=""
              className="object-cover w-full h-full rounded-md"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
