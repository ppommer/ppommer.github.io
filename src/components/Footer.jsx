import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="border-t border-zinc-100 dark:border-zinc-700/40 flex py-10">
      <div className=" w-full px-12  flex flex-col items-center gap-y-5 text-sm md:flex-row md:justify-between md:gap-x-10 ">
        <div className="flex font-semibold text-sm gap-x-6 mb-2 md:mb-0 text-zinc-800 dark:text-zinc-200">
          <NavLink
            className="transition hover:teaxt-teal-500 dark:hover:text-teal-400"
            to="about"
          >
            About
          </NavLink>
          <NavLink
            className="transition hover:teaxt-teal-500 dark:hover:text-teal-400"
            to="articles"
          >
            Articles
          </NavLink>
          <NavLink
            className="transition hover:teaxt-teal-500 dark:hover:text-teal-400"
            to="about"
          >
            About
          </NavLink>
          <NavLink
            className="transition hover:teaxt-teal-500 dark:hover:text-teal-400"
            to="speaking"
          >
            Speaking
          </NavLink>
          <NavLink
            className="transition hover:teaxt-teal-500 dark:hover:text-teal-400"
            to="uses"
          >
            Uses
          </NavLink>
        </div>
        <p className="text-sm text-zinc-400 dark:text-zinc-500">
          © {currentYear} Spencer Sharp. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
