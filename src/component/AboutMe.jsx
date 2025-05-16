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
  I'm Ayush Kumar, a <span className="font-semibold text-white">Full Stack Developer</span> currently pursuing my MCA
  from Manipal University. I specialize in building scalable web
  applications using the <span className="font-semibold text-white">MERN stack</span> 
  (<span className="font-semibold text-white">MongoDB, Express.js, React, Node.js</span>) and have experience across both front-end and back-end
  development. My technical skills include 
  <span className="font-semibold text-white"> HTML, CSS, JavaScript, Tailwind CSS</span>, and strong problem-solving abilities backed by
  solving <span className="font-semibold text-white">180+ DSA problems</span>.
  <br />
  With <span className="font-semibold text-white">6 months of industry experience</span>, I’ve contributed to real-world projects, 
  led development teams, and optimized system performance. I’m currently working at 
  <span className="font-semibold text-white"> Reelax</span> as a 
  <span className="font-semibold text-white"> Junior Software Engineer</span>.
  <br />
  I’m also expanding my expertise in 
  <span className="font-semibold text-white"> Artificial Intelligence and Machine Learning (AI/ML)</span>, 
  focusing on core mathematical foundations and hands-on model development using 
  <span className="font-semibold text-white"> Python</span>. Driven by curiosity and innovation, I aim to build impactful, intelligent solutions and
  contribute to high-performing tech teams.
</p>

            <div className="my-5 gap-10 w-full flex items-center justify-center">
              <a
                href="https://github.com/ayush-23-30"
                target="_blank"
                className="text-3xl md:text-4xl text-[#00BFFF] transition-transform duration-300 transform hover:scale-110 hover:shadow-lg"
              >
                <FaGithubSquare />
              </a>
              <a
                href="https://www.instagram.com/pawar.ayush_23_30/"
                className="text-3xl md:text-4xl text-[#00BFFF] transition-transform duration-300 
   transform hover:scale-110 hover:shadow-lg"
                target="_blank"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/in/ayush-kumar-529122320/"
                className="text-3xl md:text-4xl text-[#00BFFF] transition-transform duration-300 transform hover:scale-110 hover:shadow-lg"
                target="_blank"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:pawar85060@gmail.com"
                className="text-3xl md:text-4xl text-[#00BFFF] transition-transform duration-300 transform hover:scale-110 hover:shadow-lg"
                target="_blank"
              >
                <SiGmail />
              </a>
              <a
                href="https://www.naukri.com/code360/profile/aaayuussshhh"
                className="text-3xl md:text-4xl text-[#00BFFF] transition-transform duration-300 transform hover:scale-110 hover:shadow-lg"
                target="_blank"
              >
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
