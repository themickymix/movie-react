import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import MovieSec from "../pages/Movie_section";
import TV from "../pages/TV_section";
import Trending from "../pages/Trending";

function NavBar() {
  return (
    <Router>
      <nav className="bg-white shadow-lg">
        <div className="flex flex-col md:flex-row items-center justify-between mx-auto md:p-4">
          <div className="flex items-center justify-between w-full md:w-auto order-1 md:order-2 p-2 md:p-0">
            <div className="relative w-full md:max-w-max">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
              />
            </div>
          </div>
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

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Trending />} />
          <Route path="/movie" element={<MovieSec />} />
          <Route path="/tvseries" element={<TV />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default NavBar;
