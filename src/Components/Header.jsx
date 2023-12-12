import React, { useState, useEffect } from "react";
import logo from './images/logo.png'
function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "dark") {
      document.body.setAttribute("data-theme", "dark");
      setIsDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.body.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.body.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <header className="container-fluid sticky-top bg-primary  fw-bold  d-flex p-3 justify-content-between align-items-center shadow-sm">
       <h5 className="text-light">Country</h5>
      <div className="d-flex justify-content-center text-light align-items-center gap-1">
        <i onClick={toggleDarkMode} className={`fa-regular fa-${isDarkMode ? 'sun' : 'moon'}`}></i>
         {isDarkMode ? "Light mode" : "Dark mode"}
      </div>
    </header>
  );
}

export default Header;
