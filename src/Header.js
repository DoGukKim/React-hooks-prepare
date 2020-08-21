import React from "react";
import { useUser } from "./Context";

const Header = () => {
  const { name, loggedIn } = useUser();
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
