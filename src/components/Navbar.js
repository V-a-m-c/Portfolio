import React, { useState } from "react";
import { Link } from 'react-scroll';
export default function Navbar() {
  // State to track if the menu is open or closed
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle the menu open/close state
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
          to="home"
          smooth={true}
          offset={-100}
          duration={2000}
          className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/128/10003/10003764.png"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Vamsi
          </span>
        </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded={menuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          {/* Menu Items */}
          <div
            className={`items-center justify-between ${
              menuOpen ? "block" : "hidden"
            } w-full md:flex md:w-auto md:order-1`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to="home"
                  smooth={true}
                  offset={-100} 
                  duration={2000}
                  className="block py-2 px-3 text-white cursor-pointer bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  smooth={true}
                  offset={-100} 
                  duration={1000}
                  className="block py-2 px-3 text-gray-900 cursor-pointer rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="education"
                  smooth={true}
                  offset={-100} 
                  duration={1000}
                  className="block py-2 px-3 text-gray-900 cursor-pointer rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Education
                </Link>
              </li>
              <li>
                <Link
                  to="skills"
                  smooth={true}
                  offset={-100} 
                  duration={1000}
                  className="block py-2 px-3 text-gray-900 cursor-pointer rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  to="project"
                  smooth={true}
                  offset={-100} 
                  duration={1000}
                  className="block py-2 px-3 text-gray-900 cursor-pointer rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  smooth={true}
                  offset={-100} 
                  duration={1000}
                  className="block py-2 px-3 cursor-pointer text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </Link>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    </div>
  );
}
