import React, { createContext } from "react";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  return (
    <UserContext.Provider value={{ name: "HappyDoHa" }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
