import React, { useContext } from "react";
import Header from "./Header";
import { UserContext } from "./Context";

const Screen = () => {
  const { logUserIn } = useContext(UserContext);
  return (
    <div>
      <Header />
      <button onClick={logUserIn}>Login</button>
    </div>
  );
};

export default Screen;
