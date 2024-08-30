import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdMenuOpen, MdClose } from "react-icons/md";
import logo from '../assets/logo2.png'


function Header() {
  const [open, setOpen] = useState(false); // State for toggling the side navbar

  const toggleNavbar = () => {
    setOpen(!open); // Toggle the open state
  };

  // Function to handle link clicks and optionally close the sidebar
  const handleLinkClick = () => {
    if (open) {
      setOpen(false); // Close the sidebar on link click
    }
  };

  return (
    <>
      <div className="bg-black h-16 flex justify-between items-center pl-5 border-b-[2px] border-gray-600">
        <div className="">
          <Link to="/">
          <img src= {logo} alt="logo" className="w-24 md:w-40  mt-2 "   />
          </Link>
        </div>

        {/* Menu Icon for mobile view */}
        <div className="md:hidden text-3xl text-[#00BFFF] pr-3 cursor-pointer" onClick={toggleNavbar}>
          {open ? <MdClose /> : <MdMenuOpen />}
        </div>

        {/* Side Navbar for mobile view */}
        <div className={`fixed top-0 left-0 h-full w-40 bg-[#00BFFF] text-white transform ${open ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
          <div className="flex flex-col p-5 space-y-4">
            <div className="group">
              <Link to="/" className="cursor-pointer z-10  font-semibold transition-transform duration-200 ease-in-out transform group-hover:scale-105 group-hover:text-[#FDFEFE]" onClick={handleLinkClick}>
                Home
              </Link>
            </div>
            <div className="group">
              <Link to="/about" className="cursor-pointer font-semibold transition-transform duration-200 ease-in-out transform group-hover:scale-105 group-hover:text-[#FDFEFE]" onClick={handleLinkClick}>
                About
              </Link>
            </div>
            <div className="group">
              <Link to="/skills" className="cursor-pointer font-semibold transition-transform duration-200 ease-in-out transform group-hover:scale-105 group-hover:text-[#FDFEFE]" onClick={handleLinkClick}>
                Skills
              </Link>
            </div>
            <div className="group">
              <Link to="/projects" className="cursor-pointer font-semibold transition-transform duration-200 ease-in-out transform group-hover:scale-105 group-hover:text-[#FDFEFE]" onClick={handleLinkClick}>
                Projects
              </Link>
            </div>
            <div className="group">
              <Link to="/contact" className="cursor-pointer font-semibold transition-transform duration-200 ease-in-out transform group-hover:scale-105 group-hover:text-[#FDFEFE]" onClick={handleLinkClick}>
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="text-gray-400 hidden md:flex gap-5 md:mr-12 mr-3 md:gap-16 md:text-xl">
          <div className="group">
            <Link to="/about" className="cursor-pointer font-semibold transition-transform duration-200 ease-in-out transform group-hover:scale-105 group-hover:text-[#FDFEFE]">
              About
            </Link>
          </div>
          <div className="group">
            <Link to="/skills" className="cursor-pointer font-semibold transition-transform duration-200 ease-in-out transform group-hover:scale-105 group-hover:text-[#FDFEFE]">
              Skills
            </Link>
          </div>
          <div className="group">
            <Link to="/projects" className="cursor-pointer font-semibold transition-transform duration-200 ease-in-out transform group-hover:scale-105 group-hover:text-[#FDFEFE]">
              Projects
            </Link>
          </div>
          <div className="group">
            <Link to="/contact" className="cursor-pointer font-semibold transition-transform duration-200 ease-in-out transform group-hover:scale-105 group-hover:text-[#FDFEFE]">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
