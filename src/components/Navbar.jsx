import React, {useState} from "react";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import {MdFavorite, MdHelp} from "react-icons/md";
import {FaWallet, FaUserFriends} from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      <div className="flex items-center">
        <div>
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          {/* sm lg help in resizing the text acc. to the window size */}
          Best <span className="font-bold">Eats</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-black text-white rounded-full p-2">Delivery</p>
          <p className="p-2">Pickup</p>
        </div>
      </div>

      {/* Search Bar  */}
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} />
        <input
          className="bg-transparent p-2 w-full focus:outline-none"
          type="text"
          placeholder="Search foods"
        />
      </div>
      {/* Cart Button */}
      <button className="bg-black text-white hidden md:flex items-center py-2">
        <BsFillCartFill size={20} className="mr-2" />
        Cart
      </button>

      {/* Mobile Menu  */}
      {/* black/80 is the opacity  */}
      {/* Overlay  */}
      <div className="bg-black/70 fixed w-full h-screen z-10 top-0 left-0"></div>

      {/* Side drawer menu */}
      <div className="fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300">
        <AiOutlineClose
          size={20}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4">
          Best <span className="font-bold">Eats</span>{" "}
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="text-xl py-4 flex">
              <TbTruckDelivery size={25} className="mr-4" />
              Orders
            </li>
            <li className="text-xl py-4 flex">
              <MdFavorite size={25} className="mr-4" />
              Favorites
            </li>
            <li className="text-xl py-4 flex">
              <FaWallet size={25} className="mr-4" />
              Wallets
            </li>
            <li className="text-xl py-4 flex">
              <MdHelp size={25} className="mr-4" />
              Help
            </li>
            <li className="text-xl py-4 flex">
              <AiFillTag size={25} className="mr-4" />
              Promotions
            </li>
            <li className="text-xl py-4 flex">
              <BsFillSaveFill size={25} className="mr-4" />
              Best One
            </li>
            <li className="text-xl py-4 flex">
              <FaUserFriends size={25} className="mr-4" />
              Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
