import React, { useState } from "react";
import { skill_data } from "./skillData.js";

function Skills() {
  const [currentSkill, setCurrentSkill] = useState({
    title: "HTML",
    description:
      "HTML is the foundational markup language used to create the structure of web pages. It allows developers to define elements such as headings, paragraphs, links, and images, forming the backbone of web content.",
  });

  return (
    <>
      <div className="hreen text-white pt-8 bg-black ">
        <h1 className="text-center sm:text-[2.5rem] tracking-wider text-[2rem] font-semibold md:text-[3.5rem]">
          SKILLS
        </h1>

        <div className="  py-10 flex-row flex gap-[50px] max-md:flex-wrap  max-md:justify-center   ">

          <div className=" pl-10 md:pl-24 md:w-[40vw] h-[35vh] sm:h[30vh] w-[65vw] ">

            <h2 className="text-[2.5rem] font-[500] mb-[10px] text-[#00BFFF] max-md:text-[1.6rem]">
              {currentSkill.title}
            </h2>
            <p className="text-[1.2rem] mb-[15px] text-slate-400 max-md:text-[1rem]">
              {currentSkill.description}
            </p>
          </div>
          

          <div className=" md:mx-12  relative md:left-28 md:w-[32vw] w-72  grid grid-cols-4 gap-[15px] items-center  cursor-pointer">
            {skill_data.map((skill, index) => (
              <div
                className=""
                key={index}
                onMouseEnter={() =>
                  setCurrentSkill({
                    title: skill.title,
                    description: skill.description,
                  })
                }
              >
                <img src={skill.image} className="border p-1 object-cover  bg-[#111111]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
