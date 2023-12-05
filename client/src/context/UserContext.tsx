import React, { createContext, useEffect, useState } from "react";
import { fetchUser } from "../services/userServices";

export type UserType = {
  fullName: string;
  email: string;
  imgUrl: string;
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

  if (!refreshed) return <h1>Shopparel</h1>;

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
