import React, { useState } from "react";
import Navbar from "./components/Navbar";

const App = () => {
  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => {
    setToggle(!toggle);
  };
  return (
    <div className="h-screen ">
      <Navbar toggleMenu={toggleMenu} toggle={toggle} />
    </div>
  );
};

export default App;
