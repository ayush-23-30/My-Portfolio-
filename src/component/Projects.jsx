import React from 'react';
import { FaGithub } from "react-icons/fa6";
import { ProjectData } from './project';
import { FaArrowRightToBracket } from "react-icons/fa6";



function Projects() {
  return (
    <div className="flex items-center justify-center flex-col pb-10 text-white pt-6 bg-black">
      <h1 className="text-center sm:text-[2.5rem] text-[2rem] font-semibold uppercase tracking-wider md:text-[3.5rem]">
        Projects
      </h1>
      <div className="flex items-center mt-7 flex-wrap gap-10 justify-evenly">
  {ProjectData.map((data) => (
    <div key={data.id} className="rounded-xl bg-[#151515] p-4 w-[85vw] md:w-[30vw] lg:w-[25vw] flex flex-col justify-between h-[400px]">

      <img src={data.img} className='rounded-lg h-[190px] w-full object-cover mb-4' alt={data.title} />

      <div className="flex justify-between items-center w-full">
        <h3 className='text-xl md:text-2xl font-semibold text-[#00BFFF]'>
          {data.title}
        </h3>
        <div className="flex">
          <a href={data.link} target='_blank' rel='noopener noreferrer'>
            <FaGithub className='text-xl text-[#00BFFF]' />
          </a>
          <a href={data.vercel} target='_blank'> 
            <FaArrowRightToBracket className='text-xl ml-2 text-[#00BFFF]' />
          </a>
        </div>
      </div>

      <p className='tracking-tighter text-sm md:text-base text-[#94A3B8] flex-grow'>
        {data.des}
      </p>
    </div>
  ))}
</div>

    </div>
  );
}

export default Projects;
