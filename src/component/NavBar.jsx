import React from "react";
import { NavLink } from "react-router-dom";
import Search from "./Search"; // Assuming you want to keep Search in the Navbar

function NavBar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="flex flex-col md:flex-row items-center justify-between mx-auto md:p-4">
        <Search />
        <div
          className="items-center justify-between w-full flex md:w-auto md:order-1 order-2 pt-2 pb-5 px-2 md:p-0"
          id="navbar-search">
          <ul className="flex flex-row font-medium w-full gap-2.5">
            <li>
              <NavLink
                className={({ isActive }) =>
                  `py-2 px-3 rounded ${
                    isActive
                      ? "text-white bg-blue-700"
                      : "text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  } `
                }
                to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `py-2 px-3 rounded ${
                    isActive
                      ? "text-white bg-blue-700"
                      : "text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  } `
                }
                to="/movie">
                Movie
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `py-2 px-3 rounded ${
                    isActive
                      ? "text-white bg-blue-700"
                      : "text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  } `
                }
                to="/tvseries">
                TV Series
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
