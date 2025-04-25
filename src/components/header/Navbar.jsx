import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { IoLogoDribbble } from "react-icons/io";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GoHome } from "react-icons/go";
import { RiCustomerService2Line } from "react-icons/ri";
import { MdOutlineDesignServices } from "react-icons/md";
import { CiMobile4 } from "react-icons/ci";

const Navbar = () => {

  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
    console.log(open);
  }
  
  return (
    <>
      <div className="parent-navbar-desktop bg-slate-900 text-white flex justify-between items-center p-3">
        <Link to="/">
          <motion.div
            animate={{
              translateX: [0, 20, 0],
              color: "red",
              transition: {
                duration: 2,
                repeat: Infinity,
              },
            }}
            className="navbar-logo text-2xl"
          >
            <IoLogoDribbble />
          </motion.div>
        </Link>
        <div className="navbar-items md:visible invisible">
          <ul className="flex gap-5">
            <li className="hover:text-red-600 hover:font-bold hover:-translate-y-1 transition-all duration-300 ease-in-out">
              <Link className="flex items-center gap-1 group" to="/">
                <GoHome className="group-hover:text-white text-red-600" /> Home
              </Link>
            </li>
            <li className="hover:text-red-600 hover:font-bold hover:-translate-y-1 transition-all duration-300 ease-in-out">
              <Link className="flex items-center gap-1 group" to="/about">
                <RiCustomerService2Line className="group-hover:text-white text-red-600" />
                About
              </Link>
            </li>
            <li className="hover:text-red-600 hover:font-bold hover:-translate-y-1 transition-all duration-300 ease-in-out">
              <Link className="flex items-center gap-1 group" to="/services">
                <MdOutlineDesignServices className="group-hover:text-white text-red-600" />
                Services
              </Link>
            </li>
            <li className="hover:text-red-600 hover:font-bold hover:-translate-y-1 transition-all duration-300 ease-in-out">
              <Link className="flex items-center gap-1 group" to="/contact">
                <CiMobile4 className="group-hover:text-white text-red-600" />
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-toggle md:invisible visible" onClick={handleToggle}>
          <FaBars />
        </div>
      </div>

      <div className={`transition-all duration-300 z-100 ease-in-out md:hidden parent-navbar-mobile bg-slate-900 text-white ${open ? 'max-h-96 -translate-y-0' : 'max-h-0 -translate-y-full'}`}>
        <p className="flex items-center gap-1 justify-center mb-2"><GoHome className="text-red-600" />Home</p>
        <p className="flex items-center gap-1 justify-center mb-2"><RiCustomerService2Line className="text-red-600" /> About</p>
        <p className="flex items-center gap-1 justify-center mb-2"><MdOutlineDesignServices className="text-red-600" /> Services</p>
        <p className="flex items-center gap-1 justify-center"><CiMobile4 className="text-red-600" /> Contact</p>
      </div>
    </>
  );
};

export default Navbar;
