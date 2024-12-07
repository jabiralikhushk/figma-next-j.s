import React from "react";

const UpperHeader = () => {
  return (
    <div className="flex items-center justify-center h-[48px] w-full bg-[#000000] pt-3 pb-3 gap-6">
      <span className="text-white">
        Summer sale for all swim suits and free express delivery off 50%!
      </span>
      <a className="mx-7 underline" href="/home">
        Shop Now
      </a>
      <select className="bg-[#000000] text-white mx-10">
        <option value="English">English</option>
      </select>
    </div>
  );
};

export default UpperHeader;























import React from "react";
import { IoSearch, IoHeartOutline, IoCartOutline } from "react-icons/io5"; // Importing icons

const Header = () => {
  return (
    <header className="text-gray-600 body-font bg-blue-600 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-xl">Exclusive</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center gap-9">
          <ul className="flex space-x-5">
            <li>
              <a href="#" className="text-white hover:text-gray-900">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-white hover:text-gray-900">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="text-white hover:text-gray-900">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="text-white hover:text-gray-900">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex items-center space-x-3">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="w-[500px] p-2 rounded"
          />
          <IoSearch className="text-black text-lg" />
          <IoHeartOutline className="text-black text-lg" />
          <IoCartOutline className="text-black text-lg" />
        </div>
      </div>
    </header>
  );
};

export default Header;
