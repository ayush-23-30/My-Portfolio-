import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="border-gray-600 border-t-[2px] pt-8 bg-black pb-4">
      

      <div className="text-white md:mx-32 md:text-[15px] mx-8 pb-4">
        
        {/* Heading for navigation sections */}
        <h3 className="text-center font-semibold text-lg md:text-2xl mb-6">
          Explore More
        </h3>

        {/* Navigation Links with brief descriptions */}
        <div className="flex flex-wrap justify-center md:justify-around gap-10">
          <div className="group text-center">
            <Link
              to="/about"
              className="block text-lg md:text-2xl font-semibold mb-2 transition-transform duration-200 ease-in-out transform group-hover:scale-105 group-hover:text-[#00BFFF]"
            >
              About
            </Link>
            <p className="text-sm md:text-base text-gray-400">
              Learn more about my journey and background.
            </p>
          </div>
          <div className="group text-center">
            <Link
              to="/skills"
              className="block text-lg md:text-2xl font-semibold mb-2 transition-transform duration-200 ease-in-out transform group-hover:scale-105 group-hover:text-[#00BFFF]"
            >
              Skills
            </Link>
            <p className="text-sm md:text-base text-gray-400">
              Discover the skills and technologies I work with.
            </p>
          </div>
          <div className="group text-center">
            <Link
              to="/exp"
              className="block text-lg md:text-2xl font-semibold mb-2 transition-transform duration-200 ease-in-out transform group-hover:scale-105 group-hover:text-[#00BFFF]"
            >
              Experience
            </Link>
            <p className="text-sm md:text-base text-gray-400">
              View the projects I’ve been working on.
            </p>
          </div>
          <div className="group text-center">
            <Link
              to="/projects"
              className="block text-lg md:text-2xl font-semibold mb-2 transition-transform duration-200 ease-in-out transform group-hover:scale-105 group-hover:text-[#00BFFF]"
            >
              Projects
            </Link>
            <p className="text-sm md:text-base text-gray-400">
              View the projects I’ve been working on.
            </p>
          </div>
          <div className="group text-center">
            <Link
              to="/contact"
              className="block text-lg md:text-2xl font-semibold mb-2 transition-transform duration-200 ease-in-out transform group-hover:scale-105 group-hover:text-[#00BFFF]"
            >
              Contact
            </Link>
            <p className="text-sm md:text-base text-gray-400">
              Get in touch with me for any inquiries.
            </p>
          </div>
        </div>
      </div>

      <div className="text-white text-[12px]   mx-8 md:mx-32 font-medium border-[#00BFFF] md:text-[15px] border-t-[2px]">
        <p className="pt-3 text-center">
          Thank you for visiting my website! I hope you enjoyed exploring my
          projects and learning about my journey as a developer.
        </p>
        <div className="flex gap-5 flex-wrap items-center justify-center mt-4 md:gap-14 underline text-center">
          <p> &copy; 2024 Ayush. All rights reserved.</p>
         
        
          <Link to="/contact" className="hover:text-[#00BFFF]">Connect with Me</Link>
        </div>

      </div>
    </div>
  );
}

export default Footer;

