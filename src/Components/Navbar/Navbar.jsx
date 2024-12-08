import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCartPlus, FaCaretDown, FaShoppingBag } from "react-icons/fa";

const Menu = [
  { id: 1, name: "Home", link: "/#" },
  { id: 2, name: "Top Rated", link: "/#services" },
  { id: 3, name: "Kids", link: "/#" },
  { id: 4, name: "Mens Wear", link: "/#" },
  { id: 5, name: "Electronics", link: "/#" },
];

const Dropdownlist = [
  { id: 1, name: "Trending Products", link: "/#" },
  { id: 2, name: "Best Selling", link: "/#" },
];

const Navbar = ({ handleOrderPopup }) => {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div
      className={`sticky top-0 z-50 shadow-lg ${
        darkMode
          ? "bg-gray-800 text-white"
          : "bg-gradient-to-r from-purple-600 to-blue-500 text-white"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-3 px-5">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center text-2xl font-bold tracking-wide gap-2"
        >
          <FaShoppingBag size={30} />
          ShopMe
        </a>

        {/* Search Bar */}
        <div className="hidden sm:flex items-center relative">
          <input
            type="text"
            placeholder="Search..."
            className={`w-64 pl-4 pr-10 py-2 rounded-full ${
              darkMode
                ? "bg-gray-700 text-white focus:ring-gray-600"
                : "text-gray-700 focus:ring-blue-300"
            } focus:outline-none focus:ring-2 transition`}
          />
          <IoMdSearch
            className={`absolute right-3 cursor-pointer ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          />
        </div>

        {/* Order Button */}
        <button
          onClick={handleOrderPopup}
          className={`hidden sm:flex items-center gap-2 py-2 px-4 rounded-full ${
            darkMode
              ? "bg-gray-700 hover:bg-gray-600"
              : "bg-blue-500 hover:bg-blue-700"
          } transition`}
        >
          <span>Order</span>
          <FaCartPlus size={20} />
        </button>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className={`ml-4 p-2 rounded-full ${
            darkMode ? "bg-yellow-400" : "bg-gray-300"
          }`}
        >
          {darkMode ? "🌞" : "🌙"}
        </button>
      </div>

      {/* Navigation Links */}
      <div className={darkMode ? "bg-gray-700" : "bg-purple-700"}>
        <ul className="flex justify-center items-center gap-6 py-2">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className={`${
                  darkMode ? "hover:text-yellow-300" : "hover:text-yellow-400"
                } transition duration-200`}
              >
                {data.name}
              </a>
            </li>
          ))}

          {/* Dropdown */}
          <li className="relative group">
            <a
              href="#"
              className={`flex items-center gap-1 ${
                darkMode ? "hover:text-yellow-300" : "hover:text-yellow-400"
              } transition`}
            >
              Trending Products
              <FaCaretDown />
            </a>
            <div
              className={`absolute hidden group-hover:block ${
                darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
              } rounded shadow-lg mt-2 w-48`}
            >
              <ul className="py-2">
                {Dropdownlist.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
