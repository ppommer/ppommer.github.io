import "./App.css";
import {
  RouterProvider,
  createBrowserRouter,
  createHashRouter,
} from "react-router-dom";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Articles from "./pages/Articles";
import Projects from "./pages/Projects";
import Speaking from "./pages/Speaking";
import Uses from "./pages/Uses";
import Root from "./pages/Root";
import Error from "./pages/Error";
import { useEffect, useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  useEffect(() => {
    if (darkMode) {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
      document.documentElement.style = "color-scheme: dark;";
    } else {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
      document.documentElement.style = "color-scheme: light;";
    }
  }, [darkMode]);

  // useEffect(() => {
  //   if (darkMode) {
  //     localStorage.theme = "dark";
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     localStorage.theme = "light";
  //     document.documentElement.classList.remove("dark");
  //   }
  // }, []);

  const toggleDarkMode = () => setDarkMode((oldState) => !oldState);

  const router = createHashRouter([
    {
      path: "/",
      element: <Root darkMode={darkMode} toggleDarkMode={toggleDarkMode} />,

      children: [
        {
          path: "",
          element: <Profile />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/articles",
          element: <Articles />,
        },
        {
          path: "/projects",
          element: <Projects />,
        },
        {
          path: "/speaking",
          element: <Speaking />,
        },
        {
          path: "/uses",
          element: <Uses />,
        },
        {
          path: "*",
          element: <Error />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
