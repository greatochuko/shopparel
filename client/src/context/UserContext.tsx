import React, { createContext, useEffect, useState } from "react";
import { fetchUser } from "../services/userServices";
import FullScreenLoader from "../components/FullScreenLoader";

export type UserType = {
  firstName: string;
  lastName: string;
  email: string;
  imgUrl: string;
  _id: string;
};

export type UserProviderValue = {
  user: UserType | null;
  setUser: React.Dispatch<UserType | null>;
};

export const UserContext = createContext<UserProviderValue | null>(null);

export default function UserProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<UserType | null>(null);
  const [refreshed, setRefreshed] = useState(false);

  useEffect(() => {
    async function refreshUser() {
      const data = await fetchUser();

      if (data.error) {
        return setRefreshed(true);
      }
      setUser(data);
      setRefreshed(true);
    }
    refreshUser();
  }, []);

  if (!refreshed) return <FullScreenLoader />;

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
