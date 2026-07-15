import { GraduationCap, BriefcaseBusiness, ArrowDown } from "lucide-react";


import {
  FaReact,
  FaPython,
  FaGithub,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiJavascript,
  SiDjango,
  SiFastapi,
} from "react-icons/si";

function About() {
  return (
    <section
      id="about"
      className="relative pt-[15vh] mx-10 lg:mx-40 max-[1200px]:mx-[5%] min-h-[fit-content]"
    >
      <p className="text-center text-gray-600">Get To Know More</p>

      <h1 className="text-5xl font-bold text-center mt-2">
        About Me
      </h1>

      <div className="flex gap-16 h-[80%] mt-12 max-[1200px]:block">
        {/* Profile Image */}
        <div className="flex m-auto max-w-[300px] max-h-[440px] w-auto h-auto">
          {/* Uncomment when you add your image */}
          {/* <img
            src={assets.aboutPic}
            alt="Profile"
            className="rounded-2xl object-cover"
          /> */}
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center flex-1">
          {/* Cards */}
          <div className="flex gap-8 mb-8 flex-wrap">
            {/* Experience Card */}
            <div className="flex-1 rounded-2xl border border-gray-300 bg-white p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="flex justify-center mb-4">
                <BriefcaseBusiness
                  size={34}
                  className="text-gray-800"
                  strokeWidth={2}
                />
              </div>

              <h3 className="text-xl font-semibold">
                Experience
              </h3>

              <p className="text-gray-600 mt-3 leading-7">
                <span className="font-semibold">1+ Year</span>
                <br />
                Full Stack Development
                <br />
                (Web & App)
              </p>
            </div>

            {/* Education Card */}
            <div className="flex-1 rounded-2xl border border-gray-300 bg-white p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="flex justify-center mb-4">
                <GraduationCap
                  size={34}
                  className="text-gray-800"
                  strokeWidth={2}
                />
              </div>

              <h3 className="text-xl font-semibold">
                Education
              </h3>

              <p className="text-gray-600 mt-3 leading-7">
                BS Software Engineering
              </p>
            </div>
          </div>

          {/* About Text */}
          <div className="max-[600px]:text-justify">
            <p className="text-gray-600 leading-8">
              I'm a passionate Full Stack Developer dedicated to building
              modern, responsive, and scalable web and mobile applications.
              I enjoy transforming ideas into high-quality digital products
              by combining intuitive user interfaces with robust backend
              systems.

              <br />
            </p>
          </div>
        </div>
      </div>
      <div className="mt-12">
  <h2 className="text-3xl font-bold text-center mb-8">
    My Expertise
  </h2>

  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
    <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
      <FaReact className="text-5xl text-sky-500 mb-3" />
      <p className="font-medium">React JS</p>
    </div>

    <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
      <SiTailwindcss className="text-5xl text-cyan-500 mb-3" />
      <p className="font-medium">Tailwind CSS</p>
    </div>

    <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
      <SiJavascript className="text-5xl text-yellow-400 mb-3" />
      <p className="font-medium">JavaScript</p>
    </div>

    <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
      <FaPython className="text-5xl text-blue-500 mb-3" />
      <p className="font-medium">Python</p>
    </div>

    <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
      <SiDjango className="text-5xl text-green-700 mb-3" />
      <p className="font-medium">Django</p>
    </div>

    <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
      <SiFastapi className="text-5xl text-emerald-500 mb-3" />
      <p className="font-medium">FastAPI</p>
    </div>

    <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
      <FaGithub className="text-5xl text-black mb-3" />
      <p className="font-medium">GitHub</p>
    </div>
  </div>
</div>

      {/* Down Arrow */}
      <div className="flex justify-center items-center mt-12 max-[1200px]:hidden">
        <ArrowDown
          size={36}
          strokeWidth={2}
          className="cursor-pointer text-gray-800 hover:text-black transition-all duration-300 animate-bounce"
          
        />
      </div>
    </section>
  );
}

export default About;