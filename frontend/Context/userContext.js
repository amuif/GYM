"use client";

import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export const UserContext = createContext();

export function UserContextProvider({ children }) {
  const router = useRouter()
  const [user, setUser] = useState(null);
  useEffect(() => {
    if (!user) {
      axios.defaults.withCredentials = true;
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
    }
  }, []);
  
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
