import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 h-24">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl h-full">
          <Link to={"/"} className="h-full">
            <img
              src={"./img/logo.png"}
              className="mr-3 sm:h-full w-auto"
              alt="Omnibox Logo"
            />
          </Link>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    isActive ? "active" : "nav-link"
                  }
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/portfolio1"}
                  className={({ isActive }) =>
                    isActive ? "active" : "nav-link"
                  }
                  aria-current="page"
                >
                  Portfolio 1
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/portfolio2"}
                  className={({ isActive }) =>
                    isActive ? "active" : "nav-link"
                  }
                  aria-current="page"
                >
                  Portfolio 2
                </NavLink>
              </li>
              <li>
                <a href="#" className="nav-link">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="nav-link">
                  Team
                </a>
              </li>
              <li>
                <a href="#" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
