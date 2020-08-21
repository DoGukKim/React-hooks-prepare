import React from "react";
import Header from "./Header";
import { useFns } from "./Context";

const Screen = () => {
  const { logUserIn } = useFns();
  return (
    <div>
      <Header />
      <button onClick={logUserIn}>Login</button>
    </div>
  );
};

export default Screen;
