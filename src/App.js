import React, { useState } from "react";
import Screen from "./Screen";

function App() {
  const [user] = useState({
    name: "HappyDoHa!",
  });
  return (
    <>
      <Screen user={user} />
      <h1>I`m App</h1>
    </>
  );
}

export default App;
