import React, { createContext, useState } from "react";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "HappyDoHa!!",
    loggedIn: false,
  });
  const logUserIn = () => {
    setUser({ ...user, loggedIn: true });
  };
  return (
    <UserContext.Provider value={{ user, logUserIn }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
