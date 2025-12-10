import { ReactComponent as SunSVG } from "../assets/ui-icons/icons8-sun.svg";
import { ReactComponent as MoonSVG } from "../assets/ui-icons/moon-svgrepo-com.svg";
import { ReactComponent as ArrowDownSVG } from "../assets/ui-icons/down-arrow-svgrepo-com.svg";
import { ReactComponent as XSVG } from "../assets/ui-icons/cancel-close-svgrepo-com.svg";

import { NavLink, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

import React from "react";

const profileImageUrl =
  "https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.51a13c67.jpg&w=128&q=75";

function SubHeader() {
  const location = useLocation();

  let customClass;
  switch (location.pathname) {
    case "/about":
      customClass = "translate-x-0";
      break;
    case "/articles":
      customClass = "translate-x-[65px]";
      break;
    case "/projects":
      customClass = "translate-x-[140px]";
      break;
    case "/speaking":
      customClass = "translate-x-[215px]";
      break;
    case "/uses":
      customClass = "translate-x-[287px]";
      break;
    default:
      customClass = "opacity-0";
  }
  return (
    <span
      className={`absolute transition	duration-300 ease-out w-12 left-5 ${customClass} inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0`}
    ></span>
  );
}

function Header({ darkMode, toggleDarkMode }) {
  const location = useLocation();
  const [controller, setController] = useState({
    isMenuEnabled: false,
    showMenu: false,
  });

  const header = useRef();
  const prevScrollHeight = useRef(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let scrollHeight = window.scrollY;
      let top = parseInt(header.current.style.top);

      if (scrollHeight === prevScrollHeight.current) return;
      if (scrollHeight > prevScrollHeight.current) {
        if (!(top <= -100)) {
          top = top - 3;
        }
      } else {
        if (!(top >= 0)) {
          top = top + 3;
        }
      }

      header.current.style.top = `${top}px`;
      prevScrollHeight.current = scrollHeight;
    });
  }, []);

  useEffect(() => {
    if (controller.isMenuEnabled === true) {
      setController((controller) => {
        let newController = { ...controller };
        newController.showMenu = true;
        return newController;
      });
    } else {
      setTimeout(() => {
        setController((controller) => {
          let newController = { ...controller };
          newController.showMenu = false;
          return newController;
        });
      }, 300);
    }
  }, [controller.isMenuEnabled]);

  const toggleMenu = () => {
    setController((controller) => {
      let newController = { ...controller };
      newController.isMenuEnabled = !controller.isMenuEnabled;
      return newController;
    });
  };

  const closeMenu = () => {
    setController((controller) => {
      let newController = { ...controller };
      newController.isMenuEnabled = false;
      return newController;
    });
  };

  const showPicture = !(location.pathname === "/");

  const navigate = useNavigate();

  const onImagePress = () => navigate("/");

  return (
    <>
      <div
        onClick={closeMenu}
        className={`bg-black/60 backdrop-blur-sm -z-10 fixed top-0 bottom-0 left-0 right-0 transition-opacity md:hidden duration-300 ${
          controller.isMenuEnabled ? "opacity-100" : "opacity-0"
        }
        ${controller.showMenu ? "z-40" : ""}
        `}
      ></div>
      <div
        className={`shadow-lg shadow-zinc-800/5  rounded-3xl ring-1 ring-zinc-600/20 dark:ring-zinc-400/20 -z-10 fixed p-8 top-10 mx-4 left-0 right-0 transition bg-zinc-50 dark:bg-zinc-900 md:hidden duration-300 ${
          controller.isMenuEnabled ? "opacity-100" : "opacity-0"
        }
        ${controller.showMenu ? "z-40" : ""}
        
        `}
      >
        <div className="flex justify-between my-2">
          <h3 className="text-gray-600 dark:text-gray-400 text-sm font-semibold">
            Navigation
          </h3>

          <XSVG
            className=" cursor-pointer w-3 h-3 fill-gray-600 fill:text-gray-400"
            onClick={closeMenu}
          />
        </div>
        <ul className="-my-2 mt-4 text-zinc-800 dark:text-zinc-300 divide-y divide-zinc-900/5 dark:divide-zinc-200/5 text-base">
          <li className="py-3">
            <NavLink to="about" onClick={closeMenu}>
              About
            </NavLink>
          </li>
          <li className="py-3" onClick={closeMenu}>
            <NavLink to="articles" onClick={closeMenu}>
              Articles
            </NavLink>
          </li>
          <li className="py-3">
            <NavLink to="projects" onClick={closeMenu}>
              Projects
            </NavLink>
          </li>
          <li className="py-3">
            <NavLink to="speaking" onClick={closeMenu}>
              Speaking
            </NavLink>
          </li>
          <li className="py-3">
            <NavLink to="uses" onClick={closeMenu}>
              Uses
            </NavLink>
          </li>
        </ul>
      </div>
      <div
        ref={header}
        className="pt-6 w-full min-w-max items-center flex justify-between sticky mb-20 px-4 z-30 md:px-16 "
        style={{ top: -100 }}
      >
        {showPicture ? (
          <div
            className="cursor-pointer h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10"
            onClick={onImagePress}
          >
            <div className="rounded-full overflow-hidden">
              <img
                src={profileImageUrl}
                alt="profile"
                className="aspect-auto min-h-10"
              />
            </div>
          </div>
        ) : (
          <div className="w-10 h-10"></div>
        )}

        <ul className=" rounded-full hidden md:flex bg-white/90 px-3 py-2.5 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
          <SubHeader />

          <li className="mx-3 hover:text-teal-400 transition ease-out">
            <NavLink
              to="about"
              className={({ isActive, isPending }) =>
                isPending || isActive
                  ? "dark:text-teal-400 text-teal-500"
                  : null
              }
            >
              About
            </NavLink>
          </li>

          <li className="mx-3 hover:text-teal-400 transition ease-out">
            <NavLink
              to="articles"
              className={({ isActive, isPending }) =>
                isPending || isActive
                  ? "dark:text-teal-400 text-teal-500"
                  : null
              }
            >
              Articles
            </NavLink>
          </li>
          <li className="mx-3 hover:text-teal-400 transition ease-out">
            <NavLink
              to="projects"
              className={({ isActive, isPending }) =>
                isPending || isActive
                  ? "dark:text-teal-400 text-teal-500"
                  : null
              }
            >
              Projects
            </NavLink>
          </li>
          <li className="mx-3 hover:text-teal-400 transition ease-out">
            <NavLink
              to="speaking"
              className={({ isActive, isPending }) =>
                isPending || isActive
                  ? "dark:text-teal-400 text-teal-500"
                  : null
              }
            >
              Speaking
            </NavLink>
          </li>
          <li className="mx-3 hover:text-teal-400 transition ease-out">
            <NavLink
              to="uses"
              className={({ isActive, isPending }) =>
                isPending || isActive
                  ? "dark:text-teal-400 text-teal-500"
                  : null
              }
            >
              Uses
            </NavLink>
          </li>
        </ul>
        <div className="flex gap-x-4">
          <button
            onClick={toggleMenu}
            className="md:hidden gap-x-2 group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20"
          >
            <p>Menu</p>

            <ArrowDownSVG className="w-2 h-2 relative top-[1px] dark:fill-zinc-100 fill-zinc-800" />
          </button>
          <div
            className="group rounded-full bg-white/90 px-3 py-2 ring-1 ring-zinc-900/5  transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20 cursor-pointer"
            onClick={toggleDarkMode}
          >
            {darkMode ? (
              <MoonSVG className="w-6 h-6" />
            ) : (
              <SunSVG className="w-6 h-6 fill-zinc-100 group-hover:fill-zinc-200  stroke-teal-500" />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
