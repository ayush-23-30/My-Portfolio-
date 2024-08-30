import React from "react";
import mine from "../assets/mine.jpg";
import { FaGithubSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";

function AboutMe() {
  return (
    <>
      <div className="flex items-center justify-center flex-col text-white pt-6 bg-black">
        <h1 className="text-center text-[2rem] sm:text-[2.5rem] uppercase tracking-wider font-semibold md:text-[3.5rem]">
          About Me
        </h1>

        <div className="bg-[#151515] rounded-xl w-[88vw] md:w-[90vw] px-10 py-5 flex flex-col md:flex-row justify-center md:gap-10 items-center my-6">
          <div className="mb-6 md:mb-0 md:mr-6 flex-shrink-0">
            <img
              src={mine}
              className="w-60 md:w-[20rem] lg:w-[24rem] rounded-xl"
              alt="Ayush Kumar"
            />
          </div>
          <div className="flex flex-col items-center md:items-start text-center md:text-left md:flex-grow">
            <h3 className="text-3xl md:text-5xl text-[#00BFFF] font-semibold">
              Ayush Kumar
            </h3>
            <p className="text-xl md:text-2xl pt-2">Full Stack Developer</p>
            <p className="text-[#94A3B8] pt-4 md:text-lg tracking-tighter">
              I'm Ayush Kumar, a passionate Full Stack Developer currently
              pursuing my Master of Computer Applications (MCA) from Manipal
              University. With a strong foundation in the MERN stack (MongoDB,
              Express.js, React, Node.js), I specialize in building responsive,
              user-friendly web applications. My expertise extends to front-end
              technologies like HTML, CSS, JavaScript, and Tailwind CSS, and I'm
              continuously enhancing my skills in Data Structures and Algorithms
              (DSA) to solve complex problems efficiently.
              <br />I thrive on learning new technologies and applying them to
              real-world projects. My goal is to create scalable, maintainable,
              and innovative solutions that make a difference. I'm eager to
              contribute to dynamic development teams and work on challenging
              projects that push the boundaries of what's possible in software
              development.
            </p>
            <div className="my-5 gap-10 w-full flex items-center justify-center">
  <a href="https://github.com/ayush-23-30" target="_blank" className="text-3xl md:text-4xl text-[#00BFFF] transition-transform duration-300 transform hover:scale-110 hover:shadow-lg">
    <FaGithubSquare />
  </a>
  <a href="https://www.instagram.com/pawar.ayush_23_30/" className="text-3xl md:text-4xl text-[#00BFFF] transition-transform duration-300 
   transform hover:scale-110 hover:shadow-lg" target="_blank">
    <FaInstagram />
  </a>
  <a href="https://www.linkedin.com/in/ayush-kumar-529122320/" className="text-3xl md:text-4xl text-[#00BFFF] transition-transform duration-300 transform hover:scale-110 hover:shadow-lg" target="_blank">
    <FaLinkedin />
  </a>
  <a href="mailto:pawar85060@gmail.com" className="text-3xl md:text-4xl text-[#00BFFF] transition-transform duration-300 transform hover:scale-110 hover:shadow-lg" target="_blank">
    <SiGmail />
  </a>
  <a href="https://www.naukri.com/code360/profile/aaayuussshhh" className="text-3xl md:text-4xl text-[#00BFFF] transition-transform duration-300 transform hover:scale-110 hover:shadow-lg" target="_blank">
    <SiLeetcode />
  </a>
</div>

          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
