import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMoonOutline, IoMoon } from "react-icons/io5";

const NavBar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return JSON.parse(localStorage.getItem("dark-mode")) || false;
  });

  if (darkMode) {
    document.body.classList.remove("light-mode");
  } else {
    document.body.classList.add("light-mode");
  }

  const moon = darkMode ? (
    <IoMoon className="w-3 sm:w-4" />
  ) : (
    <IoMoonOutline className="w-3 sm:w-4" />
  );

  return (
    <div className="flex justify-between items-center sm:py-8 sm:px-20 px-4 py-6 shadow-md bg-elements custom-text-color">
      <div
        onClick={() => {
          navigate("/", { replace: true });
          window.location.reload();
        }}
        className="decoration-none font-semibold sm:text-[22px] text-[14px cursor-pointer]"
      >
        Where in the world?
      </div>

      <div
        onClick={() => {
          document.body.classList.toggle("light-mode");
          setDarkMode(!darkMode);

          if (document.body.classList.contains("light-mode")) {
            localStorage.setItem("dark-mode", JSON.stringify(false));
          } else {
            localStorage.setItem("dark-mode", JSON.stringify(true));
          }
        }}
        className="flex items-center gap-2 cursor-pointer"
      >
        {moon}
        <p className="sm:text-[16px] text-[12px] font-semibold">
          {darkMode ? "Light Mode" : "Dark Mode"}
        </p>
      </div>
    </div>
  );
};

export default NavBar;
