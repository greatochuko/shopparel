import { useContext } from "react";
import { UserContext, UserProviderValue } from "../context/UserContext";

export default function useUserContext() {
  const { user, setUser, udpateUser } = useContext(
    UserContext
  ) as UserProviderValue;
  return { user, setUser, udpateUser };
}
