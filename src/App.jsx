import React, { useState } from "react";
import Navbar from "./Components/Navbar";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      <Navbar setShowLogin={setShowLogin} />
    </>
  );
};

export default App;
