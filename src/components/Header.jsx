import { ReactComponent as SunSVG } from "../assets/ui-icons/icons8-sun.svg";
import { ReactComponent as MoonSVG } from "../assets/ui-icons/moon-svgrepo-com.svg";
import { ReactComponent as ArrowDownSVG } from "../assets/ui-icons/down-arrow-svgrepo-com.svg";
import { ReactComponent as XSVG } from "../assets/ui-icons/cancel-close-svgrepo-com.svg";

import { NavLink, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

import ProfileImage from "../assets/images/profile-image.jpg";

import React from "react";

function SubHeader({ tabRefs }) {
  const location = useLocation();
  const [underlineStyle, setUnderlineStyle] = useState({ opacity: 0, transform: 'translateX(0px)' });

  useEffect(() => {
    const calculatePosition = () => {
      const pathToIndex = {
        "/about": 0,
        "/articles": 1,
        "/projects": 2,
        "/speaking": 3,
        "/uses": 4,
      };

      const index = pathToIndex[location.pathname];
      
      if (index !== undefined && tabRefs[index]?.current) {
        const tabElement = tabRefs[index].current;
        const tabRect = tabElement.getBoundingClientRect();
        const parentRect = tabElement.closest('ul').getBoundingClientRect();
        
        // Calculate the center position of the tab
        const tabCenter = tabRect.left - parentRect.left + tabRect.width / 2;
        
        // The underline is 48px wide (w-12), so we need to center it
        // left-5 is 20px (1.25rem), so we adjust from that position
        const underlineLeft = 20; // left-5 = 20px
        const translateX = tabCenter - underlineLeft - 24; // 24px is half of 48px (w-12)
        
        setUnderlineStyle({
          opacity: 1,
          transform: `translateX(${translateX}px)`,
        });
      } else {
        setUnderlineStyle({ opacity: 0, transform: 'translateX(0px)' });
      }
    };

    // Calculate on mount and route change
    calculatePosition();

    // Recalculate on window resize
    window.addEventListener('resize', calculatePosition);
    
    // Recalculate when fonts are loaded (in case font loading affects layout)
    if (document.fonts) {
      document.fonts.ready.then(calculatePosition);
    }

    return () => {
      window.removeEventListener('resize', calculatePosition);
    };
  }, [location.pathname, tabRefs]);

  return (
    <span
      className="absolute transition duration-300 ease-out w-12 left-5 inset-x-1 -bottom-px h-px bg-gradient-to-r from-primary-500/0 via-primary-500/40 to-primary-500/0 dark:from-primary-400/0 dark:via-primary-400/40 dark:to-primary-400/0"
      style={{
        opacity: underlineStyle.opacity,
        transform: underlineStyle.transform,
      }}
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
  const tabRefs = [
    useRef(null), // about
    useRef(null), // articles
    useRef(null), // projects
    useRef(null), // speaking
    useRef(null), // uses
  ];

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
                src={ProfileImage}
                alt="profile"
                className="aspect-auto min-h-10"
              />
            </div>
          </div>
        ) : (
          <div className="w-10 h-10"></div>
        )}

        <ul className=" rounded-full hidden md:flex bg-white/90 px-3 py-2.5 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
          <SubHeader tabRefs={tabRefs} />

          <li ref={tabRefs[0]} className="mx-3 hover:text-primary-400 transition ease-out">
            <NavLink
              to="about"
              className={({ isActive, isPending }) =>
                isPending || isActive
                  ? "dark:text-primary-400 text-primary-500"
                  : null
              }
            >
              About
            </NavLink>
          </li>

          <li ref={tabRefs[1]} className="mx-3 hover:text-primary-400 transition ease-out">
            <NavLink
              to="articles"
              className={({ isActive, isPending }) =>
                isPending || isActive
                  ? "dark:text-primary-400 text-primary-500"
                  : null
              }
            >
              Articles
            </NavLink>
          </li>
          <li ref={tabRefs[2]} className="mx-3 hover:text-primary-400 transition ease-out">
            <NavLink
              to="projects"
              className={({ isActive, isPending }) =>
                isPending || isActive
                  ? "dark:text-primary-400 text-primary-500"
                  : null
              }
            >
              Projects
            </NavLink>
          </li>
          <li ref={tabRefs[3]} className="mx-3 hover:text-primary-400 transition ease-out">
            <NavLink
              to="speaking"
              className={({ isActive, isPending }) =>
                isPending || isActive
                  ? "dark:text-primary-400 text-primary-500"
                  : null
              }
            >
              Speaking
            </NavLink>
          </li>
          <li ref={tabRefs[4]} className="mx-3 hover:text-primary-400 transition ease-out">
            <NavLink
              to="uses"
              className={({ isActive, isPending }) =>
                isPending || isActive
                  ? "dark:text-primary-400 text-primary-500"
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
              <SunSVG className="w-6 h-6 fill-zinc-100 group-hover:fill-zinc-200  stroke-primary-500" />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
