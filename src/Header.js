import React, { useContext } from "react";
import { UserContext } from "./Context";

const Header = () => {
  const { name } = useContext(UserContext);

  return (
    <div>
      <h1>Hellow! {name}</h1>
    </div>
  );
};

export default Header;
