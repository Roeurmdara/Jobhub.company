import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo1 from"../images/logo1.png";
function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <>
    <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200">
  <div className="max-w-[1100px] flex flex-wrap items-center justify-between mx-auto p-4">
    {/* Logo Section */}
    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img
        src={logo1}
        className="h-16 w-auto transition-transform duration-300 hover:scale-110"
        alt="Flowbite Logo"
      />
      
    </a>

    {/* Right Section */}
    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
     <button
  type="button"
  className="bg-blue-500 text-white hover:bg-blue-700 font-medium rounded-lg text-sm px-4 py-2"
>
  Get started
</button>
    </div>

    {/* Menu Links */}
    <div
      className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
      id="navbar-sticky"
    >
      <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
        <li>
          <NavLink
            to="/browse-companies"
            className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >
            Browse Companies
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/company-dashboard"
            className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >
            DashBoard
          </NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>


    </>
  );
}

export default Navbar;
