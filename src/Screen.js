import React from "react";
import Header from "./Header";

const Screen = ({ user }) => {
  return (
    <>
      <h3>Screen Page</h3>
      <Header user={user} />
    </>
  );
};

export default Screen;
