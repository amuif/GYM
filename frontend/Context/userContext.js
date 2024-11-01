"use client";

import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export const UserContext = createContext();

export function UserContextProvider({ children }) {
  const router = useRouter();
  const [user, setUser] = useState(null);
  useEffect(() => {
    if (!user) {
      axios
        .get("http://localhost:5000/api/user/profile")
        .then(({ data }) => {
          setUser(data);
        })
        .catch((error) => {
          console.error(error);
          alert("Something went wrong. Please try again.");

          router.push("/login");
        });
      axios.defaults.withCredentials = true;
    }
  }, []);
  const logout = () => {
    axios
      .post(
        "http://localhost:5000/api/user/logout",
        {},
        { withCredentials: true }
      )
      .then(() => {
        setUser(null);
        router.push("/login");
      })
      .catch((error) => console.error("Logout failed:", error));
  };

  return (
    <UserContext.Provider value={{ user, setUser,logout }}>
      {children}
    </UserContext.Provider>
  );
}
