import React, { useState } from "react";
import Sidebar from "./component/sidebar/Sidebar";
import Pages from "./component/pages/Pages";
import './component/sass/styles.css'
import { BrowserRouter } from "react-router-dom";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  const handleMobileMenu = () => {
    setIsMobile((prev) => !prev);
  };

  return (
    <div className={` ${isMobile ? "openBars" : "App"}`}>
      <BrowserRouter>
        <Sidebar isMobile={isMobile} handleMobileMenu={handleMobileMenu} />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
