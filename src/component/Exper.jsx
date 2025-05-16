import React from "react";

function Experience() {
  return (
    <div className="bg-black text-white py-12 px-4 sm:px-8">
      <h1 className="text-center text-[2rem] sm:text-[2.5rem] uppercase tracking-wider font-semibold md:text-[3.5rem] mb-12">
        Experience
      </h1>
      
      <div className="max-w-4xl mx-auto relative">
        {/* Vertical timeline track */}
        <div className="absolute left-4 md:left-1/2 h-full w-1 bg-[#00BFFF] transform -translate-x-1/2"></div>
        
        {/* Timeline items */}
        <div className="space-y-8">
          {/* Timeline Item 1 */}
          <div className="relative pl-16 md:pl-0">
            {/* Marker */}
            <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-[#00BFFF] border-4 border-black transform -translate-x-1/2 -translate-y-1/2 top-1/2 z-10"></div>
            
            {/* Content */}
            <div className="bg-[#151515] p-6 rounded-xl md:w-[calc(50%-2rem)] md:ml-auto md:mr-4">
              <div className="flex flex-col md:flex-row md:justify-between">
                <h3 className="text-xl md:text-2xl font-semibold text-[#00BFFF]">Full Stack Developer</h3>
                <span className="text-sm md:text-base text-[#94A3B8]">Oct 2024 - Present</span>
              </div>
              <p className="text-lg md:text-xl mt-1">Reelax</p>
              <ul className="mt-4 space-y-2 text-[#94A3B8]">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Developed and maintained web applications using MERN stack</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                   Developed and integrated front-end for dynamic website using React, reducing load times by 30% through code splitting.

                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                  Optimized website performance and user interface, achieving faster load times and smoother user navigation.


                  </span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Timeline Item 2 */}
          <div className="relative pl-16 md:pl-0">
            <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-[#00BFFF] border-4 border-black transform -translate-x-1/2 -translate-y-1/2 top-1/2 z-10"></div>
            <div className="bg-[#151515] p-6 rounded-xl md:w-[calc(50%-2rem)]">
              <div className="flex flex-col md:flex-row md:justify-between">
                <h3 className="text-xl md:text-2xl font-semibold text-[#00BFFF]">Frontend Developer Intern</h3>
                <span className="text-sm md:text-base text-[#94A3B8]">Aug 2024 - Sep 2024</span>
              </div>
              <p className="text-lg md:text-xl mt-1">Unified Mentors </p>
              <ul className="mt-4 space-y-2 text-[#94A3B8]">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Built responsive user interfaces with React.js</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Collaborated with design team to implement UI/UX improvements</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Built student-teacher portal with React/Node.js,JWT Token, Brcypt etc.</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Timeline Item 3 */}
          <div className="relative pl-16 md:pl-0">
            <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-[#00BFFF] border-4 border-black transform -translate-x-1/2 -translate-y-1/2 top-1/2 z-10"></div>
            <div className="bg-[#151515] p-6 rounded-xl md:w-[calc(50%-2rem)] md:ml-auto md:mr-4">
              <div className="flex flex-col md:flex-row md:justify-between">
                <h3 className="text-xl md:text-2xl font-semibold text-[#00BFFF]">MCA Student</h3>
                <span className="text-sm md:text-base text-[#94A3B8]">2021 - 2023</span>
              </div>
              <p className="text-lg md:text-xl mt-1">Manipal University</p>
              <ul className="mt-4 space-y-2 text-[#94A3B8]">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Specialized in web development and software engineering</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Solved 180+ DSA problems on coding platforms</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Led team projects and collaborated on academic research</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;