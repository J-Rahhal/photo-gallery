import React from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import MobileNav from "./MobileNav";
import { motion } from "framer-motion";

const Navbar = ({ toggleMenu, toggle }) => {
  return (
    <>
      <div className="xs:hidden md:flex md:justify-between md:items-center md:m-5 lg:text-2xl">
        <ul className="flex items-center justify-start gap-10">
          <li>About</li>
          <li>Exhibitions</li>
          <li>Artist</li>
        </ul>
        <p className="font-bold">AEONS</p>
        <ul className="flex items-center justify-end gap-10">
          <li>Collections</li>
          <li>Events</li>
          <li>Contact</li>
        </ul>
      </div>

      <div className="md:hidden">
        {toggle ? (
          <div className="relative w-full">
            <MobileNav />
            <IoMdClose
              className="text-white absolute top-5 right-5 cursor-pointer"
              onClick={toggleMenu}
              size={25}
            />
          </div>
        ) : (
          <div className="flex justify-between items-center m-5">
            <p>AEONS</p>
            <CiMenuBurger
              onClick={toggleMenu}
              size={20}
              className="cursor-pointer"
            />{" "}
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
