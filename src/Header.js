import React from "react";

const Header = ({ user }) => {
  return (
    <>
      <h3>Header Page</h3>
      <p>Hellow {user.name}</p>
    </>
  );
};

export default Header;
