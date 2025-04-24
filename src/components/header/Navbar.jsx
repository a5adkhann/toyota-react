import React from 'react'
import { FaBars } from "react-icons/fa6";
import { IoLogoDribbble } from "react-icons/io";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <>
      <div className='parent-navbar bg-slate-900 text-white flex justify-between items-center p-3'>
        <Link to="/">
        <motion.div
        animate={{
          translateX: [0, 20, 0],
          color: "red",
          transition: {
            duration: 2,
            repeat: Infinity
        }
        }}
        className='navbar-logo text-2xl'>
            <IoLogoDribbble />
        </motion.div>
        </Link>
        <div className='navbar-items md:visible invisible'>
          <ul className='flex gap-5'>
            <li className='hover:text-red-600 hover:font-bold hover:-translate-y-1 transition-all duration-300 ease-in-out'>
              <Link to="/">Home</Link>
              </li>
            <li className='hover:text-red-600 hover:font-bold hover:-translate-y-1 transition-all duration-300 ease-in-out'>
              <Link to="/about">About</Link>
              </li>
            <li className='hover:text-red-600 hover:font-bold hover:-translate-y-1 transition-all duration-300 ease-in-out'>
              <Link to="/services">Services</Link>
              </li>
            <li className='hover:text-red-600 hover:font-bold hover:-translate-y-1 transition-all duration-300 ease-in-out'>
              <Link to="/contact">Contact</Link>
              </li>
          </ul>
        </div>
        <div className='navbar-toggle md:invisible visible'>
          <FaBars />
        </div>
      </div>
    </>
  )
}

export default Navbar
