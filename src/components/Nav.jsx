import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { IoMdMenu, IoIosClose } from "react-icons/io";

export default function Nav() {
  const [menu, setMenu] = useState(true);
  return (
    <div>
      {/* Large screen */}
      <nav className="max-w-full h-20 hidden lg:flex">
        <div className="w-[15%] h-full flex items-center">
          <img
            src="/public/logo.png"
            alt="Logo"
            className="h-full w-auto object-contain ml-5 mb-2"
          />
        </div>


        <div className="w-[40%] h-full flex items-center">
          <ul className="w-full font-medium flex justify-around text-xl">
            <li className="cursor-pointer">Category</li>
            <li className="cursor-pointer">Deal</li>
            <li className="cursor-pointer">What's New</li>
            <li className="cursor-pointer">Delivery</li>
          </ul>
        </div>
        <div className="w-[25%] h-full flex items-center">
          <div className="p-2 w-full h-[70%] flex items-center bg-gray-100 rounded-2xl">
            <FaSearch className="text-gray-500 ml-2" />
            <input
              type="search"
              placeholder="Search"
              className="w-full bg-gray-100 outline-none px-3 py-2 text-xl rounded-3xl"
            />
          </div>
        </div>
        <div className="w-[20%] h-full flex items-center justify-evenly text-center font-medium pl-10">
          <div className="w-[50%] flex items-center cursor-pointer">
            <FaRegUser />
            <span className="px-1">Account</span>
          </div>
          <div className="w-[50%] flex items-center cursor-pointer">
            <FaCartShopping />
            <span className="px-1">Cart</span>
          </div>
        </div>
      </nav>
      {/* Small screen */}
      <nav className="w-full h-[70px] shadow-md md:block lg:hidden">
        <div className="w-full h-full flex justify-between items-center px-3">
          <div className="w-[50%] h-full bg-black"></div>
          <div onClick={() => setMenu(!menu)} className="text-3xl cursor-pointer text-black">
            {menu ? <IoMdMenu /> : <IoIosClose />}
          </div>
        </div>
        {/* Slide Menu */}
        <div
          className={`fixed top-0 left-0 bg-blue-600 w-[50%] h-[100vh] transition-all duration-150 ${menu ? '-translate-x-full' : 'translate-x-0'}`}
        ></div>
        <div
          onClick={() => setMenu(!menu)}
          className={`fixed top-0 right-0 w-[50%] h-[100vh] ${menu ? '-translate-x-full' : 'translate-x-0'}`}
        ></div>
      </nav>
    </div>
  );

}
