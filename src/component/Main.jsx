import React from "react";
import { IoIosCloudDownload } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import codingWork from "../assets/codingWork.webp";
import { Carousel, CarouselContent, CarouselItem } from "../compo.ui/carousel";
import { iconSkill } from "./skillIcon";
import Autoplay from "embla-carousel-autoplay";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../compo.ui/accordion";
import { FAQ } from "./Faq";
import myResume from '../assets/my_resume.pdf'

function Main() {
  // console.log("" , iconSkill);

  return (
    <>
      <div className="bg-black min-h-screen flex flex-col gap-10 sm:gap-20   ">
        <div className="flex pl-20 md:justify-center items-center ">
          <div className="mt-10 md:mt-28 mr-7 text-white">
            <div className="">
              <h1 className="md:text-2xl font-semibold text-white">
                Full Stack developer{" "}
              </h1>

              <p className="text-4xl font-serif font-semibold md:text-7xl ">
                {" "}
                Hey, I'm
              </p>
              <p className="text-[#00BFFF]  text-6xl md:text-[8rem] font-serif font-semibold ">
                {" "}
                Ayush.
              </p>
              <p className=" mt-6  md:text-xl leading-6  md:w-[44vw]  ">
                {" "}
                Industrious Entry-Level Full Stack MERN Developer proficient in
                React, Node.js, Express, MongoDB, JavaScript, HTML, CSS,
                Tailwind, and Git, with ongoing learning in Data Structures and
                Algorithms (DSA).
              </p>

              <div className="my-5  flex items-center  gap-5">
                <div className=" group">
                  <a
                    href='https://drive.google.com/file/d/1mUEMiJ592Ob9XuW57pa2bpXi5LROCTVa/view?usp=sharing'
                    // download="my_resume.pdf"
                    className="border-[2px] flex tracking-tighter rounded-full px-3 text-[#00BFFF] border-[#00BFFF] font-semibold items-center gap-2 p-1 transition-transform duration-200 ease-in-out transform group-hover:scale-105 group-hover:text-[#00BFFF]"
                    target="_blank"
                  >
                    Open CV{" "}
                    <span>
                      <IoIosCloudDownload />
                    </span>
                  </a>
                </div>
                <div className="group">
                  <a
                    href="https://github.com/ayush-23-30"
                    className="  text-2xl md:hover:text-3xl text-[#00BFFF] transition-transform duration-200 ease-in-out transform hover:text-3xl group-hover:scale-105 group-hover:text-[#00BFFF]"
                    target="_blank"
                  >
                    {" "}
                    <FaGithub />
                  </a>
                </div>
                <div className="group">
                  <a
                    href="https://www.linkedin.com/in/ayush-kumar-529122320/"
                    target="_blank"
                    className=" text-2xl hover:text-3xl md:hover:text-3xl text-[#00BFFF] transition-transform duration-200 ease-in-out transform group-hover:scale-105 group-hover:text-[#00BFFF]"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 md:mt-14 ">
              <Carousel
                plugins={[
                  Autoplay({
                    delay: 1000,
                  }),
                ]}
                className="w-full py-10"
              >
                <CarouselContent className="flex items-center ">
                  {iconSkill.map(({ name, id, img }) => (
                    <CarouselItem key={id} className="basis-1/3 lg:basis-1/5">
                      <img
                        className="w-20 object-contain sm:h-14"
                        src={img}
                        alt={name}
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>

            <div className="">
              <img src={codingWork} alt="" />
            </div>
          </div>
        </div>

        <div className="px-4  ">
          <h2 className="text-xl text-center text-white md:text-3xl pb-10 underline font-semibold">
            {" "}
            FAQ Sectons{" "}
          </h2>

          <Accordion type="single" collapsible>
            {FAQ.map((data, index) => {
              return (
                <AccordionItem
                  value={`item${index + 1}`}
                  className=""
                  key={index}
                >
                  <AccordionTrigger
                    key={index}
                    className="text-white sm:text-lg md:text-xl "
                  >
                    {" "}
                    {data.ques}{" "}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#00BFFF] md:text-lg ">
                    {data.Answer}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </>
  );
}

export default Main;

// add logic of download CV;
