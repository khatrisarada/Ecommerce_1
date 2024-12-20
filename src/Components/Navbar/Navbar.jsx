import React from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCartPlus, FaCaretDown, FaShoppingBag } from "react-icons/fa";
import DarkMode from "./DarkMode";

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
  return (
    <div className="shadow-md bg-white dark:bg-gray-800 duration-200 relative z-40">
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-xl flex items-center gap-1">
              <FaShoppingBag size={30} />
              ShopMe
            </a>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-lg border border-gray-300 py-1 px-2 text-sm focus:outline-none focus:border-primary dark:border-gray-500 dark:bg-slate-800"
              />
              <IoMdSearch className="absolute top-1/2 -translate-y-1/2 right-3 text-gray-700 dark:text-gray-300" />
            </div>
            <button
              onClick={handleOrderPopup}
              className="bg-gradient-to-t from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="hidden group-hover:block transition-all duration-200">
                Order
              </span>
              <FaCartPlus className="text-xl text-white" />
            </button>
            <DarkMode />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <a href={data.link} className="px-4 hover:text-primary duration-200">
                {data.name}
              </a>
            </li>
          ))}
          <li className="relative group cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2">
              Trending Products
              <FaCaretDown className="transition-transform duration-200 group-hover:rotate-180" />
            </a>
            <div className="absolute hidden group-hover:block w-[200px] rounded-md bg-white dark:bg-gray-700 p-2 shadow-md">
              <ul>
                {Dropdownlist.map((data) => (
                  <li key={data.id}>
                    <a href={data.link} className="block rounded-md p-2 hover:bg-primary/20">
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
