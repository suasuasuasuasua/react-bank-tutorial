import React from "react";

import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  // Define a state that tracks whether the navigation bar has been toggled
  // useStateSnippet
  const [toggle, setToggle] = useState(false);

  return (
    // The general navbar element
    <nav className="w-full flex py-6 justify-between items-center navbar">
      {/* The website logo */}
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />

      {/* The navbar link items horizontally if space permits. Otherwise, these
      navbar elements will be hidden */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {/* Map the nav links dictionary to the respective title. Note that we
        get both the navigation element itself and the index to that element in
        the map closure. We can access the properties of the navigation elements
        with the dot operator on `id` and `title` */}
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } text-white`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      {/* The navbar link items are otherwise hidden in a sandwich menu */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          // This on-click callback properly toggles the state of React state
          // element
          onClick={() => setToggle((prev) => !prev)}
        />

        {/* Toggle the menu with the state */}
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          {/* The nav bar items themselves */}
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  index === navLinks.length - 1 ? "mb-0" : "mb-4"
                } text-white`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
