import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Root({ darkMode, toggleDarkMode }) {
  return (
    <div className="flex justify-center bg-zinc-50 dark:bg-black relative ">
      <div className="flex flex-col w-full max-w-7xl sm:px-8">
        <div className="ring-1 element-border min-h-screen flex flex-col justify-between bg-white  dark:bg-zinc-900">
          <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <Outlet />
          <Footer />
        </div>
      </div>
    </div>
  );
}
