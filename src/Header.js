import React, { useContext } from "react";
import { UserContext } from "./Context";

const Header = () => {
  const {
    user: { name, loggedIn },
  } = useContext(UserContext);
  return (
    <div>
      <h1>
        Hellow! {name} You are... {""}
        {loggedIn ? "logged in" : "who are u dude?"}
      </h1>
    </div>
  );
};

export default Header;
